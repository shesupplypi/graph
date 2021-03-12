"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const order = async ({ id }) => {
    const order = await database_1.default.orders.get(id);
    if (!order)
        return null;
    return {
        ...order,
        product: () => database_1.default.products.get(order.productId),
    };
};
exports.default = order;
//# sourceMappingURL=queries.js.map