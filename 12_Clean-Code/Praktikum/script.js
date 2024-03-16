// Mendapatkan referensi elemen-elemen HTML yang diperlukan
const form = document.getElementById('form');
const productNameInput = document.getElementById('productName');
const productNameDanger = document.getElementById('productNameDanger');
const productNameWarning = document.getElementById( 'productNameWarning');
const productCategoryInput = document.getElementById('productCategory');
const productImageInput = document.getElementById('productImage');
const productFreshnessRadios = document.querySelectorAll('input[name="productFreshness"]');
const productDescInput = document.getElementById('productDesc');
const productPriceInput = document.getElementById('productPrice');
const alerts = document.querySelectorAll('.alert');

// Fungsi untuk validasi panjang nama produk
function validateProductName() {
  if (productNameInput.value.length > 10) {
    productNameWarning.textContent = 'Product name must not exceed 25 characters.';
    productNameWarning.classList.remove('d-none');
  } else {
    productNameDanger.textContent = '';
    productNameDanger.classList.add('d-none');
  }
}

// Fungsi untuk validasi simbol dalam nama produk
function validateProductNameSymbols() {
  const symbolPattern = /[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/;
  if (symbolPattern.test(productNameInput.value)) {
    productNameDanger.textContent = 'Name must not contain symbols.';
    productNameDanger.classList.remove('d-none');
  } else {
    productNameDanger.textContent = '';
    productNameDanger.classList.add('d-none');
  }
}

// Event listener untuk memanggil fungsi validasi nama produk saat input berubah
productNameInput.addEventListener('input', function() {
  validateProductName();
  validateProductNameSymbols();
});

// Fungsi untuk menampilkan alert
function showValidationAlert(alert, message) {
  alert.textContent = message;
  alert.classList.remove('d-none');
}

// Fungsi untuk menyembunykan alert
function hideAllAlerts() {
  alerts.forEach(alert => {
    alert.textContent = '';
    alert.classList.add('d-none');
  });
}

// Event listener untuk menangani pengiriman formulir
form.addEventListener('submit', function(event) {
  event.preventDefault();
  hideAllAlerts();
  
  let isValid = true;

  // Validasi nama produk
  if (productNameInput.value.trim() === '') {
    showValidationAlert(productNameDanger, 'Please enter a valid product name.');
    isValid = false;
  } else {
    validateProductName();
    validateProductNameSymbols();
  }

  // Validasi kategori produk
  if (productCategoryInput.value === '') {
    showValidationAlert(alerts[2], 'Please select a product category.');
    isValid = false;
  }

  // Validasi gambar produk
  if (productImageInput.files.length === 0) {
    showValidationAlert(alerts[3], 'Please select an image for the product.');
    isValid = false;
  }

  // Validasi kebaruan produk
  const selectedFreshnessOption = [...productFreshnessRadios].find(radio => radio.checked);
  if (!selectedFreshnessOption) {
    showValidationAlert(alerts[4], 'Please select a product freshness option.');
    isValid = false;
  }

  // Validasi deskripsi produk
  if (productDescInput.value.trim() === '') {
    showValidationAlert(alerts[5], 'Please enter an additional description.');
    isValid = false;
  }

  // Validasi harga produk
  if (productPriceInput.value.trim() === '') {
    showValidationAlert(alerts[6], 'Please enter a valid product price.');
    isValid = false;
  }

  // Jika semua input formulir valid, tambahkan produk ke dalam tabel
  if (isValid) {
    const data = {
      productName: productNameInput.value.trim(),
      productCategory: productCategoryInput.value,
      productImage: productImageInput.value,
      productFreshness: selectedFreshnessOption.labels[0].textContent,
      productDesc: productDescInput.value.trim(),
      productPrice: `$ ${productPriceInput.value.trim()}`
    };
    addToTable(data);
    form.reset();    // Reset formulir setelah berhasil ditambahkan ke dalam tabel
  }
});

let rowNum = 1;

// Fungsi untuk menambahkan data produk ke dalam tabel
function addToTable(data) {
  const tableBody = document.querySelector('tbody');
  const row = document.createElement('tr');
  const numberCell = document.createElement('td');
  
  numberCell.textContent = rowNum++;
  row.appendChild(numberCell);

  for (const key in data) {
    const cell = document.createElement('td');
    cell.textContent = data[key];
    row.appendChild(cell);
  }

  tableBody.appendChild(row);
}
