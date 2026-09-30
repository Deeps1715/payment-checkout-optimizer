const paymentMethods =
    document.querySelectorAll(".payment-method");

const payButton =
    document.getElementById("payButton");

const upiSection =
    document.getElementById("upiSection");

const cardSection =
    document.getElementById("cardSection");

const walletSection =
    document.getElementById("walletSection");

const timer =
    document.getElementById("timer");

let selectedMethod = "UPI";


/* =========================
   PAYMENT METHOD
========================= */

paymentMethods.forEach(function (button) {

    button.addEventListener("click", function () {

        paymentMethods.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedMethod =
            button.dataset.method;

        upiSection.classList.add("hidden");
        cardSection.classList.add("hidden");
        walletSection.classList.add("hidden");


        if (selectedMethod === "UPI") {
            upiSection.classList.remove("hidden");
        }

        if (selectedMethod === "Card") {
            cardSection.classList.remove("hidden");
        }

        if (selectedMethod === "Wallet") {
            walletSection.classList.remove("hidden");
        }

    });

});


/* =========================
   PAY
========================= */

payButton.addEventListener("click", function () {

    payButton.disabled = true;

    payButton.textContent =
        "Processing payment...";

    timer.textContent =
        "Processing";


    /*
        Save selected payment method.
    */

    localStorage.setItem(
        "paymentMethod",
        selectedMethod
    );


    /*
        Get selected demo outcome.
    */

    const selectedOutcome =
        document.querySelector(
            'input[name="paymentOutcome"]:checked'
        ).value;


    /*
        Save demo outcome.
    */

    localStorage.setItem(
        "paymentOutcome",
        selectedOutcome
    );


    /*
        Move to the correct result page.
    */

    setTimeout(function () {

        if (selectedOutcome === "success") {

            window.location.href =
                "confirmation.html";

        }


        if (selectedOutcome === "processing") {

            window.location.href =
                "processing.html";

        }


        if (selectedOutcome === "failed") {

            window.location.href =
                "failed.html";

        }

    }, 1000);

});

/* =========================
   INITIAL STATE
========================= */

upiSection.classList.remove("hidden");

cardSection.classList.add("hidden");

walletSection.classList.add("hidden");