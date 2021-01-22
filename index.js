// daxiletmə

var form = document.getElementById("form");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var bet = document.getElementById("bet");
var amount = document.getElementById("amount");
var yourbudget = document.getElementById("yourbudget");
var lastbets = document.getElementById("lastbets");
var table = document.querySelector(".nonactive");
var exit = document.getElementById("exit");
var rowss = document.getElementById("rowss");






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

    // console.log(bet.childNodes);

    if (confirm("Press a button!")) {
        if (bet.value == 1) {
            if (parseFloat(yourbudget.value) > 0) {
                if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                    if ((number1.value > number2.value)) {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                        yourbudget.value = parseFloat(yourbudget.value) + parseFloat(amount.value * worth);
                    } else {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    }
                }
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
                }
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
                }
            }
        }


        if (bet.value == "ust") {
            if (parseFloat(yourbudget.value) > 0) {
                if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                    if (parseFloat(number1.value) + parseFloat(number2.value) > 3) {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                        yourbudget.value = parseFloat(yourbudget.value) + parseInt(amount.value * large);
                    } else {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    }
                }
            }
        }

        if (bet.value == "alt") {
            if (parseFloat(yourbudget.value) > 0) {
                if (parseFloat(amount.value) <= parseFloat(yourbudget.value)) {
                    if (parseFloat(number1.value) + parseFloat(number2.value) < 4) {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                        yourbudget.value = parseFloat(yourbudget.value) + parseInt(amount.value * small);
                    } else {
                        yourbudget.value = parseFloat(yourbudget.value) - parseFloat(amount.value);
                    }
                }
            }
        }
    }

    localStorage.setItem("amount", amount.value);
    localStorage.setItem("value", bet.value);
    localStorage.setItem("budget", yourbudget.value);

    if (!((parseFloat(amount.value) > parseFloat(yourbudget.value)) || parseFloat(yourbudget.value) < 0 || yourbudget.value === "" || bet.value == "dontselected" || amount.value === "")) {

        var ct = document.getElementById("ct");
        var row = ct.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        cell1.innerHTML += a;
        a++;
        cell2.innerHTML = localStorage.getItem("amount", amount.value);
        cell3.innerHTML = localStorage.getItem("value", bet.value);
        cell4.innerHTML = localStorage.getItem("budget", yourbudget.value);

        localStorage.getItem("amount", JSON.stringify(amount.value));
        localStorage.getItem("value", JSON.stringify(bet.value));
        localStorage.getItem("budget", JSON.stringify(yourbudget.value));
    }

    // ________________________________________________________________________________________________________


    // hansı hallarda xəta verməsi

    if (bet.value == "dontselected") {
        error(bet, 'Doğru rəqəm daxil edin!');
    } else if (bet.value === "") {
        error(bet, "Bir seçim daxil edin!");
    } else {
        success(bet);
    }
    if (amount.value === "") {
        error(amount, "Məbləğ daxil edin!");
    } else if (amount.value <= 0) {
        error(amount, "0-dan kiçik ədəd daxil etmək olmaz!");
    } else {
        success(amount);
    }
    if (yourbudget.value === "") {
        error(yourbudget, "Məbləğ daxil edin!");
    } else if (parseFloat(yourbudget.value) < 0) {
        error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
    } else if (parseFloat(amount.value) > parseFloat(yourbudget.value)) {
        error(yourbudget, "Büdcənizdə kifayət qədər məbləğ yoxdur!")
    } else {
        success(yourbudget);
    }
})

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
}


function success(input) {
    input.className = 'form-control';

}

// ________________________________________________________________________________________________________




var a = 1;
var i;

lastbets.addEventListener('click', function (e) {
    e.preventDefault();


    if (!(yourbudget.value[i] == yourbudget.value[i - 1])) {
        if (!((parseFloat(amount.value) > parseFloat(yourbudget.value)) || parseFloat(yourbudget.value) < 0 || yourbudget.value === "" || bet.value == "dontselected" || amount.value === "")) {
            var ct = document.getElementById("ct");
            var row = ct.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            var cell4 = row.insertCell();
            cell1.innerHTML += a;
            a++;
            cell2.innerHTML = localStorage.getItem("amount", amount.value);
            cell3.innerHTML = localStorage.getItem("value", bet.value);
            cell4.innerHTML = localStorage.getItem("budget", yourbudget.value);
        }
    }



    if (!(table.classList.toggle("active")) || (parseFloat(amount.value) > parseFloat(yourbudget.value)) || yourbudget.value === "" || parseFloat(yourbudget.value) < 0 || bet.value == "dontselected" || amount.value === "") {
        table.classList.toggle("active");
    }


})

exit.addEventListener('click', function (e) {
    e.preventDefault();
    table.classList.remove("active");
})

