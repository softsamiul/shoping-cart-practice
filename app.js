function updaateProduct(inpCount, isIncrease, priceId, singlePrice) {
    const productCountInp = document.getElementById(inpCount);
    const productCount = productCountInp.value;
    if (isIncrease == true) {
        productCountInp.value = parseInt(productCountInp.value) + 1;
    } else if (productCount > 0) {
        productCountInp.value = parseInt(productCountInp.value) - 1;
    }
    const productCountAftr = productCountInp.value;
    // update price
    const productTotalPriceInp = document.getElementById(priceId);
    const productTotalPrice = productCountAftr * singlePrice;
    productTotalPriceInp.innerText = productTotalPrice;

    // cart update
    calculateCartTotal();
}

function getProductCountInp(count) {
    const productCountInp = document.getElementById(count).value;
    return productCountInp;
}

function calculateCartTotal() {
    const phnTotal = getProductCountInp('phn-count') * 1219;
    const caseTotal = getProductCountInp('case-count') * 59;
    const subTotal = phnTotal + caseTotal;
    const taxTotal = subTotal / 10;
    const cartTotal = subTotal + taxTotal;

    const subTotalId = document.getElementById('cart-sub-total');
    subTotalId.innerText = subTotal;
    const taxTotalId = document.getElementById('tax-total');
    taxTotalId.innerText = taxTotal;
    const cartTotalId = document.getElementById('cart-total');
    cartTotalId.innerText = cartTotal;

}

// phn
document.getElementById('phn-plus').addEventListener('click', function() {

    updaateProduct('phn-count', true, 'phn-price', 1219);

});
document.getElementById('phn-minus').addEventListener('click', function() {

    updaateProduct('phn-count', false, 'phn-price', 1219)

});

// case

document.getElementById('case-plus').addEventListener('click', function() {

    updaateProduct('case-count', true, 'case-price', 59);

});
document.getElementById('case-minus').addEventListener('click', function() {

    updaateProduct('case-count', false, 'case-price', 59)

});