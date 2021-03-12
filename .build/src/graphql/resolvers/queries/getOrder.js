"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../database"));
// Provide resolver functions for your schema fields
async function getOrder(_, { id }) {
    console.log(database_1.default.orders);
    const order = await database_1.default.orders.get(id);
    console.log(order);
    console.log('id', id);
    if (!order)
        return null;
    return {
        ...order,
        product: () => database_1.default.products.get(order.productId),
    };
}
exports.default = getOrder;
//# sourceMappingURL=getOrder.js.map