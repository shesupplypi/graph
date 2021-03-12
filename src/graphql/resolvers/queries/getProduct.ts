import database from '../../../database'

async function getProduct({ id }) {
   return database.products.get(id)
}

export default getProduct
