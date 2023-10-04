function calcCartPriceAndDelivery(){
    const cartItems = document.querySelectorAll('.cart-item');
    const end_price = document.querySelector('.total-price');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    const deliveryCost = document.querySelector('.delivery-cost');
    let totalPrice = 0;
    cartItems.forEach((item)=>{
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const current = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += current;
    });
    end_price.innerText = totalPrice;

    if(totalPrice > 0){
        cartDelivery.classList.remove('none');
    }else{
        cartDelivery.classList.add('none');
    }

    if(totalPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    }else{
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
};