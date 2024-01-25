// Get the elements we need
const products = document.querySelectorAll(".products li");
const cart = document.querySelector(".cart ul");
const checkoutButton = document.getElementById("checkout-button");

// Add event listeners to the products
products.forEach((product) => {
  product.addEventListener("click", (e) => {
    // Add the product to the cart
    const productName = e.target.innerText;
    const newListItem = document.createElement("li");
    newListItem.innerText = productName;
    cart.appendChild(newListItem);
  });
});

// Add event listener to the checkout button
checkoutButton.addEventListener("click", () => {
  // Redirect the user to the checkout page
  window.location.href = "checkout.html";
});
