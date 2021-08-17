const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = prompt( "How many money do you have?" );
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed( 2 );
}

amount = amount + PHONE_PRICE;

if (amount < bank_balance) {

    while (amount < bank_balance) {
        amount = amount + amount
    }
    amount = amount + calculateTax( amount );
    console.log( "Ваша покупка: " + formatAmount( amount ) );
}

else {
    console.log( "Вы не можете позволить себе эту покупку. :(" );
}