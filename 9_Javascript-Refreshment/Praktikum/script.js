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

form.addEventListener('submit', function(event) {
  event.preventDefault();

  productNameDanger.classList.add('d-none');
  productNameWarning.classList.add('d-none');
  productPriceDanger.classList.add('d-none');
  productCategoryDanger.classList.add('d-none');
  productImageDanger.classList.add('d-none');
  productFreshnessDanger.classList.add('d-none');
  productDescDanger.classList.add('d-none');

  if (productName.value.trim() === '') {
    productNameDanger.textContent = 'Please enter a valid product name.';
    productNameDanger.classList.remove('d-none');
  } else {
    validateProductName();
  }

  if (productCategory.value === '') {
    productCategoryDanger.textContent = 'Please select a product category.';
    productCategoryDanger.classList.remove('d-none');
  }

  if (productImage.files.length === 0) {
    productImageDanger.textContent = 'Please select an image for the product.';
    productImageDanger.classList.remove('d-none');
  }

  if (!brandNew.checked && !secondHand.checked && !refurbished.checked) {
    productFreshnessDanger.textContent = 'Please select a product freshness option.';
    productFreshnessDanger.classList.remove('d-none');
    isValid = false;
  }

  if (productDesc.value.trim() === '') {
    productDescDanger.textContent = 'Please enter an additional description.';
    productDescDanger.classList.remove('d-none');
  }

  if (productPrice.value.trim() === '') {
    productPriceDanger.textContent = 'Please enter a valid product price.';
    productPriceDanger.classList.remove('d-none');
  }
});