document.getElementById('year').textContent = new Date().getFullYear();

  const products = [
    {
      name: "NMR Solvent",
      image: "images/NMR Solvent.jpg",
    },
    {
      name: "Ethyl Ether AR",
      image: "images/Ethyl Ether Ajpg",
    },
    {
      name: "Glassware Set",
      image: "images/Glassware Set.png",
    },
  ];

  const productContainer = document.getElementById("product-list");

  // products.forEach((product) => {
  //   const card = document.createElement("div");
  //   card.classList.add("col-md-4");
  //   card.innerHTML = `
  //     <div class="card h-100 shadow-sm">
  //       <img src="${product.image}" class="card-img-top" alt="${product.name}">
  //       <div class="card-body">
  //         <h5 class="card-title">${product.name}</h5>
  //       </div>
  //     </div>
  //   `;
  //   productContainer.appendChild(card);
  // });

  document.addEventListener("DOMContentLoaded", function () {
  const currentURL = window.location.href;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.classList.remove("active");

    // Match direct link or hash
    if (currentURL.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }

    // Highlight parent dropdown if one of its items is active
    const parentDropdown = link.closest(".dropdown");
    if (parentDropdown) {
      const dropdownItems = parentDropdown.querySelectorAll(".dropdown-item");
      dropdownItems.forEach(item => {
        if (currentURL.includes(item.getAttribute("href"))) {
          parentDropdown.querySelector(".nav-link").classList.add("active");
        }
      });
    }

    // Allow click-based manual highlight
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("globalSearchForm");
  const input = document.getElementById("globalSearchInput");

  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    localStorage.setItem("productSearchQuery", query);
    // ensure navigation to products page
    window.location.href = "iphaseProducts.html";
  });
});


function handleSearch() {
  console.log("index handleSearch");
    const query = document.getElementById("navbarSearchInput").value.trim();
    if (query) {
      // Store the query and go to products page
      localStorage.setItem("productSearchQuery", query);
      window.location.href = "iphaseProducts.html";
    }
  }
