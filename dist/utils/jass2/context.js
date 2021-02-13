"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
// @ts-ignore
const fengaricore_1 = require("fengari/src/fengaricore");
// @ts-ignore
const lua_1 = require("fengari/src/lua");
// @ts-ignore
const lauxlib_1 = require("fengari/src/lauxlib");
//import { luaL_openlibs } from 'fengari/src/lualib';
const jass2lua_1 = require("./jass2lua");
const natives_1 = require("./natives");
const player_1 = require("./types/player");
const constanthandles_1 = require("./constanthandles");
const thread_1 = require("./thread");
/**
 * A Jass2 context.
 */
class Context extends events_1.EventEmitter {
    constructor() {
        super();
        this.map = null;
        this.handle = 0;
        this.freeHandles = [];
        this.handles = [];
        this.name = '';
        this.description = '';
        this.players = [];
        this.actualPlayers = 0;
        this.startLocations = [];
        this.constantHandles = constanthandles_1.default();
        this.timers = new Set();
        this.triggers = new Set();
        this.threads = new Set();
        this.currentThread = null;
        this.enumUnit = null;
        this.filterUnit = null;
        this.enumPlayer = null;
        this.t = 0;
        this.L = lauxlib_1.luaL_newstate();
        //luaL_openlibs(this.L);
        natives_1.default(this);
        lua_1.lua_atnativeerror(this.L, (L) => {
            let e = lua_1.lua_touserdata(L, -1);
            lua_1.lua_pushstring(L, e.stack);
            return 1;
        });
        for (let i = 0; i < 28; i++) {
            this.players[i] = this.addHandle(new player_1.default(i, 28));
        }
        // this.mappedData = new MappedData();
        // this.mapName = '';
        // this.mapDescription = '';
        // this.gamePlacement = null;
        // this.gameSpeed = null;
        // this.gameDifficulty = null;
        // this.playerCount = 0;
        // this.teamCount = 0;
        // this.startLocations = [];
        // this.players = [];
        // this.teams = [];
        // this.stringTable = map.readStringTable();
    }
    start() {
        this.t = performance.now();
    }
    step() {
        let t = performance.now();
        let dt = (t - this.t) * 0.001;
        let timers = this.timers;
        let threads = this.threads;
        for (let timer of timers) {
            timer.elapsed += dt;
            if (timer.elapsed >= timer.timeout) {
                let thread = new thread_1.default(this.L, { expiredTimer: timer });
                let L = thread.L;
                // Push the entry point onto the thread's stack, so when the thread is resumed it will immediately be called.
                lua_1.lua_rawgeti(L, lua_1.LUA_REGISTRYINDEX, timer.handlerFunc);
                this.threads.add(thread);
                if (timer.periodic) {
                    timer.elapsed = 0;
                }
                else {
                    timers.delete(timer);
                    /// TODO: better way to clean references.
                    // If the timer isn't periodic, the callback reference can be collected.
                    ///luaL_unref(timer.handlerFunc);
                }
            }
        }
        for (let thread of threads) {
            thread.sleep -= dt;
            if (thread.sleep <= 0) {
                this.currentThread = thread;
                let L = thread.L;
                let status = lua_1.lua_resume(L, this.L, 0);
                if (status === lua_1.LUA_OK) {
                    threads.delete(thread);
                }
                else if (status === lua_1.LUA_YIELD) {
                    thread.sleep = lauxlib_1.luaL_checknumber(L, 1);
                }
                else {
                    console.log('[JS] Something went wrong during execution');
                    console.log(fengaricore_1.to_jsstring(lauxlib_1.luaL_tolstring(L, -1)));
                    lua_1.lua_pop(L, 2);
                }
            }
        }
        this.t = t;
    }
    addHandle(handle) {
        if (handle.handleId === -1) {
            let handleId;
            if (this.freeHandles.length) {
                handleId = this.freeHandles.pop();
            }
            else {
                handleId = this.handle++;
            }
            this.handles[handleId] = handle;
            handle.handleId = handleId;
        }
        return handle;
    }
    freeHandle(handle) {
        if (handle.handleId !== -1) {
            this.freeHandles.push(handle.handleId);
            this.handles[handle.handleId] = null;
            handle.handleId = -1;
        }
    }
    call(name) {
        let L = this.L;
        if (typeof name === 'string') {
            lua_1.lua_getglobal(L, name);
        }
        else if (typeof name === 'number') {
            lua_1.lua_rawgeti(L, lua_1.LUA_REGISTRYINDEX, name);
        }
        if (lua_1.lua_pcall(L, 0, 0, 0)) {
            console.log('Something went wrong during execution');
            console.log(fengaricore_1.to_jsstring(lauxlib_1.luaL_tolstring(L, -1)));
            lua_1.lua_pop(L, 2);
        }
    }
    run(code, isJass) {
        let L = this.L;
        if (isJass) {
            code = jass2lua_1.default(code);
        }
        if (lauxlib_1.luaL_loadstring(L, fengaricore_1.to_luastring(code))) {
            console.log('Something went wrong during execution');
            console.log(fengaricore_1.to_jsstring(lauxlib_1.luaL_tolstring(L, -1)));
            lua_1.lua_pop(L, 2);
        }
        if (lua_1.lua_pcall(L, 0, 0, 0)) {
            console.log('Something went wrong during execution');
            console.log(fengaricore_1.to_jsstring(lauxlib_1.luaL_tolstring(L, -1)));
            lua_1.lua_pop(L, 2);
        }
    }
    open(map) {
        this.map = map;
        let file = map.getScriptFile();
        if (file) {
            let buffer = file.text();
            if (buffer) {
                let isJass = file.name.endsWith('.j');
                this.run(buffer, isJass);
            }
        }
    }
}
exports.default = Context;
