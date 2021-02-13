"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const lua_1 = require("fengari/src/lua");
/**
 * A thread.
 */
class Thread {
    constructor(L, data) {
        this.sleep = 0;
        this.L = lua_1.lua_newthread(L);
        this.expiredTimer = data.expiredTimer || null;
        this.triggerUnit = data.triggerUnit || null;
        this.triggeringTrigger = data.triggeringTrigger || null;
    }
}
exports.default = Thread;
