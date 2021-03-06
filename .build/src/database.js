"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    products: {
        get: async (id) => {
            switch (id) {
                case '123':
                    return {
                        id,
                        name: 'Widget',
                        price: '$10.00',
                    };
                case '234':
                    return {
                        id,
                        name: 'Gadget',
                        price: '$8.50',
                    };
            }
        },
    },
    orders: {
        get: async (id) => {
            switch (id) {
                case '445566':
                    return {
                        id,
                        customerName: 'John Q. Public',
                        deliveryAddress: '1234 Elm St.',
                        quantity: 5,
                        productId: '123',
                    };
                case '778899':
                    return {
                        id,
                        customerName: 'Stacey L. Civic',
                        deliveryAddress: '4321 Oak St.',
                        quantity: 32,
                        productId: '234',
                    };
            }
        },
    },
    order: [
        {
            id: '4748',
            customerName: 'annalise',
            deliveryAddress: '4321 Oak St.',
            quantity: 32,
            productId: '234',
        },
        {
            id: '4321',
            customerName: 'pom',
            deliveryAddress: '555 one st',
            quantity: 3552,
            productId: 't43421',
        },
    ],
};
exports.default = data;
//# sourceMappingURL=database.js.map