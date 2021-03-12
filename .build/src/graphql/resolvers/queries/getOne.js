"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../database"));
// Provide resolver functions for your schema fields
async function getOne() {
    const order = await database_1.default.order;
    return {
        order,
    };
}
exports.default = getOne;
//# sourceMappingURL=getOne.js.map