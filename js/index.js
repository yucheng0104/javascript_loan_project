const amountEl = document.querySelector("#amount");
const yeasrEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const payment1El = document.querySelector("#payment1");
const payment2El = document.querySelector("#payment2");
const feeEl = document.querySelector("#fee");

const calcEl = document.querySelector("#calc")

// console.log(amountEl, yeasrEl, rateEl, payment1El, payment2El, feeEl, calcEl)

calcEl.addEventListener("click", calcLoan);

function calcLoan() {
    let amount = amountEl.value * 10000;
    let yeasr = yeasrEl.value;
    let rate = rateEl.value / 100;
    fee = feeEl.checked ? 5000 : 0;
    // let fee = 0;
    // if (feeEl.checked) {
    //     fee = 5000;
    // }

    // 取得不同計算方法
    let rule = payment1El.checked ? 1 : 2;
    // 利息
    let totalInterest = amount * rate * yeasr;
    // 總金額
    let totalAmount = amount + totalInterest + fee;

    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "（含手續費）");
    document.querySelector(".toatlInterset").innerText = totalInterest + "元";
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "block";
    }, 200)




    console.log(amount, yeasr, rate, fee, rule, totalAmount, totalInterest);

}
// resetEl.addEventListener("click", reset);

// function reset(){

// }