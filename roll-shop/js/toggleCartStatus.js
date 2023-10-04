function toggleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const empty = document.querySelector('[data-cart-empty]');
    const order = document.querySelector('#order-form');
    if(cartWrapper.children.length > 0){
        empty.classList.add('none');
        order.classList.remove('none')
    }else{
        empty.classList.remove('none');
        order.classList.add('none');
    }
}