import database from '../../../database'

// Provide resolver functions for your schema fields

async function getOne() {
   const order = await database.order
   return {
      order,
   }
}

export default getOne
