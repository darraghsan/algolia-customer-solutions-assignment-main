import "dotenv/config.js";
import algoliasearch from "algoliasearch";
import products from './products.json' assert { type: 'json' };

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_WRITE_API_KEY;
const indexName = process.env.ALGOLIA_INDEX;

const client = algoliasearch(appID, apiKey);
const index = client.initIndex(indexName);

const saleUpdate = products.map(product => {
  if (product.categories.includes('Cameras & Camcorders')) {
    return {
      ...product,
      price: Math.floor(product.price * 0.8)
    };
  }
  return product;
});

const { taskID } = await index.saveObjects(saleUpdate);
console.log(taskID); 