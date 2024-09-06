// Define the Product interface
interface Product {
    productName: string;
    quantity: number;
    price: number;
}

// Create an array of products
const products: Product[] = [
    { productName: "Laptop", quantity: 10, price: 999.99 },
    { productName: "Smartphone", quantity: 25, price: 499.99 },
    { productName: "Tablet", quantity: 15, price: 299.99 }
];

// Function to display products in the HTML table
function displayProducts(products: Product[]) {
    const tableBody = document.getElementById('productTableBody') as HTMLTableSectionElement;
    tableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        const row = document.createElement('tr');

        const productNameCell = document.createElement('td');
        productNameCell.textContent = product.productName;
        row.appendChild(productNameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price.toFixed(2);
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}

// Call the function to display products
displayProducts(products);  