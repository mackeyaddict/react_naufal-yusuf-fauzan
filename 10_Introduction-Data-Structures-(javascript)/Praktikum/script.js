const form = document.getElementById('form');
const productName = document.getElementById('productName');
const productNameDanger = document.getElementById('productNameDanger');
const productNameWarning = document.getElementById('productNameWarning');
const productCategory = document.getElementById('productCategory');
const productCategoryDanger = document.getElementById('productCategoryDanger');
const productImage = document.getElementById('productImage');
const productImageDanger = document.getElementById('productImageDanger');
const brandNew = document.getElementById('brandNew');
const secondHand = document.getElementById('secondHand');
const refurbished = document.getElementById('refurbished');
const productFreshnessDanger = document.getElementById('productFreshnessDanger');
const productDesc = document.getElementById('productDesc');
const productDescDanger = document.getElementById('productDescDanger');
const productPrice = document.getElementById('productPrice');
const productPriceDanger = document.getElementById('productPriceDanger');
const tableBody = document.querySelector('tbody');

function validateProductName() {
  if (productName.value.length > 10) {
    productNameWarning.textContent = 'Product name must not exceed 25 characters.';
    productNameWarning.classList.remove('d-none');
  } else {
    productNameWarning.textContent = '';
    productNameWarning.classList.add('d-none');
  }
}

function validateProductNameSymbols() {
  const symbolPattern = /[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/;
  if (symbolPattern.test(productName.value)) {
    productNameDanger.textContent = 'Name must not contain symbols.';
    productNameDanger.classList.remove('d-none');
  } else {
    productNameDanger.textContent = '';
    productNameDanger.classList.add('d-none');
  }
}

productName.addEventListener('input', function() {
  validateProductName();
  validateProductNameSymbols();
});

let rowNum = 1;

function addToTable(data) {
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

form.addEventListener('submit', function(event) {
  event.preventDefault();

  productNameDanger.classList.add('d-none');
  productNameWarning.classList.add('d-none');
  productPriceDanger.classList.add('d-none');
  productCategoryDanger.classList.add('d-none');
  productImageDanger.classList.add('d-none');
  productFreshnessDanger.classList.add('d-none');
  productDescDanger.classList.add('d-none');

  let isValid = true;

  if (productName.value.trim() === '') {
    productNameDanger.textContent = 'Please enter a valid product name.';
    productNameDanger.classList.remove('d-none');
    isValid = false;
  } else {
    validateProductName();
  }

  if (productCategory.value === '') {
    productCategoryDanger.textContent = 'Please select a product category.';
    productCategoryDanger.classList.remove('d-none');
    isValid = false;
  }

  if (productImage.files.length === 0) {
    productImageDanger.textContent = 'Please select an image for the product.';
    productImageDanger.classList.remove('d-none');
    isValid = false;
  }

  const selectedFreshnessOption = document.querySelector('input[name="productFreshness"]:checked');
  if (!selectedFreshnessOption) {
    productFreshnessDanger.textContent = 'Please select a product freshness option.';
    productFreshnessDanger.classList.remove('d-none');
    isValid = false;
  }

  if (productDesc.value.trim() === '') {
    productDescDanger.textContent = 'Please enter an additional description.';
    productDescDanger.classList.remove('d-none');
    isValid = false;
  }

  if (productPrice.value.trim() === '') {
    productPriceDanger.textContent = 'Please enter a valid product price.';
    productPriceDanger.classList.remove('d-none');
    isValid = false;
  }

  if (isValid) {
    const data = {
      productName: productName.value.trim(),
      productCategory: productCategory.value,
      productImage: productImage.value,
      productFreshness: selectedFreshnessOption.labels[0].textContent,
      productDesc: productDesc.value.trim(),
      productPrice: `$ ${productPrice.value.trim()}`
    };

    addToTable(data);

    form.reset();
  }
});