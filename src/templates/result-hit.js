const resultHit = hit => `
  <a class="result-hit">
    <div class="result-hit__image-container">
      <img class="result-hit__image" src="${hit.image}" />
    </div>
    <div class="result-hit__details">
      <h3 class="result-hit__name">${hit._highlightResult.name.value}</h3>
      <p class="result-hit__price">$${hit.price}</p>
    </div>
    <div class="result-hit__controls">
      <button class="result-hit__view" 
              data-object-id="${hit.objectID}" 
              data-position="${hit.__position}" 
              data-query-id="${hit.__queryID}">
        View
      </button>
      <button class="result-hit__cart" 
              data-object-id="${hit.objectID}"  
              data-query-id="${hit.__queryID}">
        Add To Cart
      </button>
    </div>
  </a>
`;

export default resultHit;