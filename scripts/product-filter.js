const products = [
  //   Fungicides
  {
    name: "S-Code 250EC",
    type: "Fungicide",
    price: "₱550.00",
    img: "../img/s-Code250EC.webp",
  },
  {
    name: "Shaw 720SC",
    type: "Fungicide",
    price: "₱400.00",
    img: "../img/shaw720SC.webp",
  },
  {
    name: "Zencor Mancozeb 80WP",
    type: "Fungicide",
    price: "₱455.00",
    img: "../img/mancozeb80WP.webp",
  },
  //   Insecticides
  {
    name: "Lanex 40SP",
    type: "Insecticide",
    price: "₱550.00",
    img: "../img/lanex40SP.webp",
  },
  {
    name: "Era 2.5EC",
    type: "Insecticide",
    price: "₱345.00",
    img: "../img/era2.5EC.webp",
  },
  {
    name: "Armethrin 5EC",
    type: "Insecticide",
    price: "₱350.00",
    img: "../img/armethrin5EC.webp",
  },
  {
    name: "Mandal 100SC",
    type: "Insecticide",
    price: "₱750.00",
    img: "../img/mandal100SC.webp",
  },
  {
    name: "Gusto 500EC",
    type: "Insecticide",
    price: "₱520.00",
    img: "../img/gusto500EC.webp",
  },
  {
    name: "Malathion 57EC",
    type: "Insecticide",
    price: "₱250.00",
    img: "img/malathion57EC.webp",
  },
  //   Herbicides
  {
    name: "Maradi 200OD",
    type: "Herbicide",
    price: "₱750.00",
    img: "../img/maradi200OD.webp",
  },
  {
    name: "Across 8.5EC",
    type: "Herbicide",
    price: "₱735.00",
    img: "../img/across8.5EC.webp",
  },
  {
    name: "Ez-Out 480SL",
    type: "Herbicide",
    price: "₱400.00",
    img: "../img/ez-Out480SL.webp",
  },
  //   Molluscicides
  {
    name: "Toss-Up (Metaldehyde) 6% Pellet",
    type: "Molluscicide",
    price: "₱280.00",
    img: "../img/toss-up.webp",
  },
  {
    name: "Zencocide 70WP",
    type: "Molluscicide",
    price: "₱750.00",
    img: "img/zencocide70WP.webp",
  },
  //   Fertilizers & Sprayers
  {
    name: "Zencor Plus Highgrade",
    type: "Fertilizers & Sprayers",
    price: "₱870.00",
    img: "../img/foliarfertilizer.webp",
  },
  {
    name: "Knapsack Sprayer",
    type: "Fertilizers & Sprayers",
    price: "₱1,500.00",
    img: "../img/knapsackSprayer.webp",
  },
];

function displayProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = ""; // Clear current grid

  const filtered =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  // Check if there are no products in the filtered list
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-products-message">
        <i class="fas fa-seedling"></i>
        <h3>No products found</h3>
        <p>We're currently updating our stock for the <strong>${filter}</strong> category. Please check back soon!</p>
      </div>
    `;
    return; // Exit the function early
  }

  filtered.forEach((product) => {
    const card = `
      <div class="product-card reveal">
        <div class="product-image">
          <img src="${product.img}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-type">${product.type}</div>
          <div class="product-price">${product.price}</div>
        </div>
      </div>
    `;
    grid.innerHTML += card;
  });
}

// Filter Button Logic
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // UI Update
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    // Logic Update
    displayProducts(btn.getAttribute("data-filter"));
  });
});

// Initial Load
displayProducts();
