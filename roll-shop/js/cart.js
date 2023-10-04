const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click',(event) => {
    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');
        const productInf = {
            id: card.dataset.id,
            imgSRC: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemInBox: card.querySelector('[data-items-in-box]').innerText,
            wight: card.querySelector('.price__weight').innerText,
            currency: card.querySelector('.price__currency').innerText,
            count: card.querySelector('[data-counter]').innerText,
        };

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInf.id}"]`);
        if (itemInCart){
            const countElem = itemInCart.querySelector('[data-counter]');
            countElem.innerText = parseInt(countElem.innerText) + parseInt(productInf.count);
        }else{


        const cartHTML = `
    <div class="cart-item" data-id="${productInf.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInf.imgSRC}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInf.title}</div>
                <div class="cart-item__weight">${productInf.itemInBox} / ${productInf.wight}.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInf.count}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInf.currency}</div>
                    </div>

                </div>

            </div>
        </div>
    </div>`
        cartWrapper.insertAdjacentHTML('beforeend', cartHTML);
        }
        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
});