"use script";
// Задача 5. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, 
// поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

if (confirm('Почати тестування?')) {
  const bill = parseFloat(prompt('Введіть загальну вартість', 0));
  if(isFinite(bill) && bill > 0) {
    let sum = 0;
    let userPayment, res;
    while(sum < bill) {
      userPayment = parseFloat(prompt('Введіть суму, яку вносить користувач', 0));
      if(isFinite(userPayment)) {
        sum += userPayment;
        if(sum === bill) res = `Ви повністю розрахувались`
        else if(sum > bill) res = `Ви внесли забагато. Ваша решта: ${sum - bill}$`
        else res = `Залишилось внести ${bill - sum}$ для повного розрахунку`
        alert(res);
      } else {
        alert(`Помилка! Введіть дійсне число`);
      }
    }

  } else {
    alert(`Помилка! Введіть дійсне число більше 0`);
  }
}