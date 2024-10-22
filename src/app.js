import "dotenv/config.js";
import ResultsPage from './components/results-page';
import aa from 'search-insights';
import { v4 as uuidv4 } from 'uuid';

// Initialize the Insights client
aa('init', {
  appId: process.env.ALGOLIA_APP_ID,
  apiKey: process.env.ALGOLIA_API_KEY,
  userToken: `anonymous_${uuidv4()}`
});

//set index in a single place. Easier to change in the future
const index = process.env.ALGOLIA_INDEX;

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
  }

  _initSearch() {
    this.resultPage = new ResultsPage();
    this._attachEventListeners();
  }

  _attachEventListeners() {
    //clicked event
    document.addEventListener('click', event => {
      if (event.target.classList.contains('result-hit__view')) {
        const objectID = event.target.getAttribute('data-object-id');
        const position = parseInt(event.target.getAttribute('data-position'));
        aa('clickedObjectIDsAfterSearch', {
          index,
          eventName: 'Product Viewed',
          queryID: event.target.getAttribute('data-query-id'),
          objectIDs: [objectID],
          positions: [position],
        });
      }
      //conversion event
      if(event.target.classList.contains('result-hit__cart')) {
        const objectID = event.target.getAttribute('data-object-id');
        aa('convertedObjectIDsAfterSearch', {
          index,
          eventName: 'Product Added to Cart',
          queryID: event.target.getAttribute('data-query-id'),
          objectIDs: [objectID]
        });
      }
    });
  }
}

const app = new SpencerAndWilliamsSearch();