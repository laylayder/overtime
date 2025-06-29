let button=document.getElementById('button');
button.addEventListener('click',()=>{
    const salary = parseInt(document.getElementById('salary').value);
    const overtime1 = parseInt(document.getElementById('overtime1').value);
    const overtime2 = parseInt(document.getElementById('overtime2').value);
    const overtime3 = parseInt(document.getElementById('overtime3').value);
    const result = document.getElementById('output');

    let valid = true;

    if (isNaN(salary) || salary <= 0) {
        document.getElementById('salaryError').innerText = '請輸入有效薪資';
        valid = false;
    } else {
        document.getElementById('salaryError').innerText = '';
    }

    if (
        isNaN(overtime1) || overtime1 < 0 ||
        isNaN(overtime2) || overtime2 < 0 ||
        isNaN(overtime3) || overtime3 < 0
    ) {
        document.getElementById('overtimeError').innerText = '請輸入有效加班時數';
        valid = false;
    } else {
        document.getElementById('overtimeError').innerText = '';
    }

    if (!valid) return;

    const hourSalary = salary / 30 / 8;
    const secondHr = 240 / 180;
    const thirdHr = 240 / 144;
    const eighthHr = 240 / 90;

    const pay1 = Math.round(hourSalary * overtime1 * secondHr);
    const pay2 = Math.round(hourSalary * overtime2 * thirdHr);
    const pay3 = Math.round(hourSalary * overtime3 * eighthHr);
    const totalPay = pay1 + pay2 + pay3;

    document.getElementById('pay1Result').innerText = `→ ${pay1} 元`;
    document.getElementById('pay2Result').innerText = `→ ${pay2} 元`;
    document.getElementById('pay3Result').innerText = `→ ${pay3} 元`;

    // 顯示總加班費
    result.innerHTML = `
     <hr>
    <p><strong>🧾 總加班費：${totalPay} 元</strong></p>
    `;

});
