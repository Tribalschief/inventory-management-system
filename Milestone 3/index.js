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
// Call the function to display products
displayProducts(products);
