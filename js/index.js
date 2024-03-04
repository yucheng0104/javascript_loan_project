const amountEl = document.querySelector("#amount");
const yeasrEl = document.querySelector("#years");
const rateEl = document.querySelector("#rate");
const payment1El = document.querySelector("#payment1");
const payment2El = document.querySelector("#payment2");
const feeEl = document.querySelector("#fee");

const calcEl = document.querySelector("#calc")
const resetEl = document.querySelector("#reset")
const tableEl = document.querySelector("#table")
console.log(amountEl, yeasrEl, rateEl, payment1El, payment2El, feeEl, calcEl, tableEl)

calcEl.addEventListener("click", calcLoan);
resetEl.addEventListener("click", reset);

function reset() {
    amountEl.value = ''
    rateEl.value = ''
    // document.querySelector(".totalAmount").innerText = ""
    // document.querySelector(".toatlInterset").innerText = "";
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";

}

function calcLoan() {
    let amount = amountEl.value * 10000;
    let yeasr = yeasrEl.value;
    let rate = rateEl.value;
    let fee = feeEl.checked ? 5000 : 0;
    // let fee = 0;
    // if (feeEl.checked) {
    //     fee = 5000;
    // }

    // 取得不同計算方法
    let rule = payment1El.checked ? 1 : 2;

    let result;
    if (rule == 1) {
        result = rule1(amount, yeasr, rate);
        console.log(result)
    } else {
        console.log(result)
        alert('功能製作....')
        return
    }

    // 總金額
    let totalInterset = result[1]
    let totalAmount = amount + totalInterset + fee;
    console.log(amount, yeasr, rate, fee, rule, totalAmount, totalInterset)
    document.querySelector(".totalAmount").innerText = totalAmount + (fee == 0 ? "" : "（含手續費）");
    document.querySelector(".toatlInterset").innerText = totalInterset + "元";
    const resultEl = document.querySelector("#result");
    resultEl.style.display = "none";
    setTimeout(function () {
        resultEl.style.display = "block";
    }, 200)


    console.log(amount, yeasr, rate, fee, rule, totalAmount, totalInterset);
    drawTable(result[0])

}
// resetEl.addEventListener("click", reset);

function drawTable(datas) {
    let tableStr = "<ul>"
    for (let i = 0; i < datas.length; i++) {
        console.log(datas[i].join(","));
        tableStr += `<li>${datas[i].join(",")}</li>`
    }
    tableStr += "</ul>"
    tableEl.innerHTML = tableStr
}

function rule1(total_amount, years, rate) {
    let amount = total_amount;
    let period = years * 12;
    let month_rate = rate / 100 / 12;
    let month_pay = parseInt(amount / period);

    let datas = [];
    let totalInteret = 0;

    for (let i = 0; i < period; i++) {
        interest = Math.round(amount * month_rate);
        amount -= month_pay;
        //最後一期
        if (i == period - 1) {
            datas.push([i + 1, month_pay + amount, interest, month_pay + interest + amount, 0])
        } else {
            datas.push([i + 1, month_pay, interest, month_pay + interest, amount]);
        };

        totalInteret += interest
    };
    // console.log(datas);
    return [datas, totalInteret];
}
