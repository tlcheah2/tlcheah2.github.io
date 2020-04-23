// Button Monthly 
var btnMonthly = document.getElementsByClassName
('btn-monthly')[0];
// Button Yearly 
var btnYearly = document.getElementsByClassName('btn-yearly')[0];
var btnSelectedClass = 'btn-subscription-type-selected';

// Plan Starter Element
var planStarterPrice = document.getElementById('plan-starter-price');
var planStarterBillType = document.getElementById('plan-starter-bill-type');

// Plan Professional Element
var planProPrice = document.getElementById('plan-pro-price');
var planProBillType = document.getElementById('plan-pro-bill-type');


btnMonthly.addEventListener('click', function () {
    btnYearly.classList.remove(btnSelectedClass);
    btnMonthly.classList.add(btnSelectedClass);
    planStarterPrice.innerHTML = '8.99 / month';
    planProPrice.innerHTML = '21.99 / month';
    planStarterBillType.innerHTML = 'Billed monthly';
    planProBillType.innerHTML = 'Billed monthly';
});

btnYearly.addEventListener('click', function () {
    btnMonthly.classList.remove(btnSelectedClass);
    btnYearly.classList.add(btnSelectedClass);
    planStarterPrice.innerHTML = '99.99 / year';
    planProPrice.innerHTML = '249.99 / year';
    planStarterBillType.innerHTML = 'Billed yearly';
    planProBillType.innerHTML = 'Billed yearly';
});

