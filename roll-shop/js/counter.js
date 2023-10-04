////Counter for one item
// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const count = document.querySelector('[data-counter]');

// btnMinus.addEventListener('click', () => {
    // if(parseInt(count.innerText) > 1){
    //     count.innerText = --count.innerText;   
    // }
// });

// btnPlus.addEventListener('click', () =>  {
//     count.innerText = ++count.innerText;
// });



//Counter for all items
window.addEventListener('click', (event) => {
    let count;
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        const counterWrapper = event.target.closest('.counter-wrapper');
        count = counterWrapper.querySelector('[data-counter]');
    }
    if(event.target.dataset.action === 'minus'){
        if(parseInt(count.innerText) > 1){
            count.innerText = --count.innerText;   
        }else if (event.target.closest('.cart-wrapper') && parseInt(count.innerText) === 1){
            event.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }
    if(event.target.dataset.action === 'plus'){
        count.innerText = ++count.innerText;
    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery();
    }
});