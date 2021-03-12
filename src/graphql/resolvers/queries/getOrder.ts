import database from '../../../database'

// Provide resolver functions for your schema fields

async function getOrder(_, { id }) {
   try {
      console.log(database.orders)
      const order = await database.orders.get(id)
      console.log(order)
      console.log('id', id)
      if (!order) return null

      return {
         ...order,
         product: () => database.products.get(order.productId),
      }
   } catch (e) {
      console.error('a error occurres=d')
      throw new Error()
   }
}

export default getOrder
