// Get the products container
const productsContainer = document.getElementById("products");

// Fetch products from API
axios
  .get("https://fakestoreapi.com/products")
  .then(function (response) {
    // Loop through products
    response.data.forEach((product) => {
      // Create a product card element
      const productCard = document.createElement("div");
      productCard.classList.add("col", "mb-3");

      // Add product name and image
      productCard.innerHTML = `
        <div class="card h-100 product-card">
          <img src="${product.image}" class="card-img-top" alt="${
        product.title
      }">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
          </div>
        </div>
      `;

      // Add product card to container
      productsContainer.appendChild(productCard);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
