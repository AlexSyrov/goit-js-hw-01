let balance = 10000;
const payment = 2000;
const messagePr = `Общая стоимость зака ${payment} кредитов. Проверяем кол-во доступных средств на счету`;
let message;

console.log(messagePr);

if (balance > payment) {
  balance - payment;
  message = `На счету осталось ${balance - payment} кредитов.`;
} else {
  message = `На счету не достаточно средств`;
}
console.log(message);
