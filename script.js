let Tbalance = 1000;
let user = 0;

user = prompt(
  `Enter 1 = check balance | 2 = withdraw | 3 = Deposit | 0 = exit`
);

while (user != 0) {
  if (user == 1) {
    balance();
    break;
  } else if (user == 2) {
    withdraw();
    break;
  } else if (user == 3) {
    deposite();
    break;
  }
}

function balance() {
  console.log(`your total balance is ${Tbalance} enter 0 to exit`);
}

function withdraw() {
  num = prompt("enter the amount enter");
  Tbalance = Tbalance - num;
  console.log(`your total balance is ${Tbalance} enter 0 to exit`);
}

deposite = () => {
  amount = prompt("Enter the deposite amount");
  Tbalance = Tbalance + Number(amount);
  console.log(`your total balance is ${Tbalance} enter 0 to exit`);
};
