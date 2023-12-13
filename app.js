const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = Array.from(document.querySelectorAll(".product"));
  
    products.forEach(product => {
      const productName = product.querySelector("h2").textContent.toUpperCase();
      product.style.display = productName.includes(searchbox) ? "" : "none";
    });
  };    