// // Define the Product interface
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

// Function to add a new product to the products array and update the table
function addProduct() {
  const productNameInput = document.getElementById('productName') as HTMLInputElement;
  const quantityInput = document.getElementById('quantity') as HTMLInputElement;
  const priceInput = document.getElementById('price') as HTMLInputElement;

  const productName = productNameInput.value.trim();
  const quantity = parseInt(quantityInput.value, 10);
  const price = parseFloat(priceInput.value);

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

  const newProduct: Product = {
      productName,
      quantity,
      price
  };

  products.push(newProduct);
  displayProducts(products);

  // Clear input fields after adding the product
  productNameInput.value = '';
  quantityInput.value = '';
  priceInput.value = '';
}

// Event listener for the "Add Product" button
const addButton = document.getElementById('addProductButton') as HTMLButtonElement;
addButton.addEventListener('click', addProduct);

// Initial display of products
displayProducts(products);