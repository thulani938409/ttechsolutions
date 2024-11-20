let shoppingCart = []
let total = 0;

function addItem(product, price){
    shoppingCart.push({product, price});
    total += price;
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById('cart_list');
    cartList.innerHTML = '';
    shoppingCart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.product} - ${item.price}`;
        cartList.appendChild(listItem);
    });
    document.getElementById('total').textContent = total;
}
