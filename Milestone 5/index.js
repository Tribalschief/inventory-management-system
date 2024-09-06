// Create an array of products
var products = [
    { productName: "Laptop", quantity: 10, price: 999.99 },
    { productName: "Smartphone", quantity: 25, price: 499.99 },
    { productName: "Tablet", quantity: 15, price: 299.99 }
];
// Function to display products in the HTML table
function displayProducts(products) {
    var tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    products.forEach(function (product) {
        var row = document.createElement('tr');
        var productNameCell = document.createElement('td');
        productNameCell.textContent = product.productName;
        row.appendChild(productNameCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement('td');
        priceCell.textContent = product.price.toFixed(2);
        row.appendChild(priceCell);
        tableBody.appendChild(row);
    });
}
// Function to add a new product to the products array and update the table
function addProduct() {
    var productNameInput = document.getElementById('productName');
    var quantityInput = document.getElementById('quantity');
    var priceInput = document.getElementById('price');
    var productName = productNameInput.value.trim();
    var quantity = parseInt(quantityInput.value, 10);
    var price = parseFloat(priceInput.value);
    // Basic validation
    if (!productName) {
        alert("Product name cannot be empty.");
        return;
    }
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantity must be a positive number.");
        return;
    }
    if (isNaN(price) || price <= 0) {
        alert("Price must be a valid number.");
        return;
    }
    var newProduct = {
        productName: productName,
        quantity: quantity,
        price: price
    };
    products.push(newProduct);
    displayProducts(products);
    // Clear input fields after adding the product
    productNameInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';
}
// Event listener for the "Add Product" button
var addButton = document.getElementById('addProductButton');
addButton.addEventListener('click', addProduct);
// Initial display of products
displayProducts(products);
