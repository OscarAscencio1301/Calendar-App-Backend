"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    start: {
        type: Date,
        required: [true, 'The start date is required']
    },
    end: {
        type: Date,
        required: [true, 'The end date is required']
    },
    title: {
        type: String,
        required: [true, 'The title is required']
    },
    desc: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    status: {
        type: Boolean,
        default: true
    }
});
eventSchema.methods.toJSON = function () {
    const _a = this.toObject(), { _id, __v } = _a, rest = __rest(_a, ["_id", "__v"]);
    rest.id = _id;
    return rest;
};
exports.default = (0, mongoose_1.model)('event', eventSchema);
//# sourceMappingURL=Events.js.map