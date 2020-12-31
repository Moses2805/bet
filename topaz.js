// daxiletmə

var form = document.getElementById("form");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var bet = document.getElementById("bet");
var amount = document.getElementById("amount");
var yourbudget = document.getElementById("yourbudget");

// ________________________________________________________________________________________________________

// əmalların təyini

var worth = 2;
var equal = 5;
var large = 1.3;
var small = 3.5;

// ________________________________________________________________________________________________________


// hesablama əməliyyatı

form.addEventListener('submit', function (e) {
    e.preventDefault();
    number1.value = Math.floor(Math.random() * 6);
    number2.value = Math.floor(Math.random() * 6);

    if (bet.value == 1) {
        if (parseFloat(yourbudget.value) > 0) {
            if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                if ((number1.value > number2.value)) {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    yourbudget.value = parseFloat(yourbudget.value) + parseFloat(amount.value * worth);
                } else {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                }
            } else {
                error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
            }
        } else {
            error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
        }

    }

    if (bet.value == 2) {
        if (parseFloat(yourbudget.value) > 0) {
            if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                if (number2.value > number1.value) {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    yourbudget.value = parseFloat(yourbudget.value) + parseFloat(amount.value * worth);
                } else {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                }
            } else {
                error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
            }
        } else {
            error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
        }
    }

    if (bet.value == "x") {
        if (parseFloat(yourbudget.value) > 0) {
            if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {

                if (number1.value == number2.value) {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    yourbudget.value = parseFloat(yourbudget.value) + parseFloat(amount.value * equal);
                } else {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                }
            } else {
                error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
            }
        } else {
            error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
        }
    }


    if (bet.value == "ust") {
        if (parseFloat(yourbudget.value) > 0) {
            if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                if (parseFloat(number1.value) + parseFloat(number2.value) > 3) {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    yourbudget.value = parseFloat(yourbudget.value) + parseInt(amount.value * large);
                } else{
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                }
            } else {
                error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
            }
        } else {
            error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
        }
    }

    if (bet.value == "alt") {
        if (parseFloat(yourbudget.value) > 0) {
            if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                if (parseFloat(number1.value) + parseFloat(number2.value) < 4) {
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    yourbudget.value = parseFloat(yourbudget.value) + parseInt(amount.value * small);
                } else{
                    yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                }
            } else {
                error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
            }
        } else {
            error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
        }
    }

// ________________________________________________________________________________________________________


// hansı hallarda xəta verməsi

    if (!(bet.value == 1 || bet.value == 2 || bet.value == "x" || bet.value === "" || bet.value == "ust" || bet.value == "alt")) {
        error(bet, 'Doğru rəqəm daxil edin!');
    } else if (bet.value === "") {
        error(bet, "Bir seçim daxil edin!");
    }
    if (amount.value === "") {
        error(amount, "Məbləğ daxil edin!");
    }else if(amount.value <= 0){
        error(amount, "0-dan kiçik ədəd daxil etmək olmaz!");
    }
    if (yourbudget.value === "") {
        error(yourbudget, "Məbləğ daxil edin!");
    }
})

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}

// ________________________________________________________________________________________________________
