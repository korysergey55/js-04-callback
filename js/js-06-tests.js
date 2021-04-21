//Задание-2-Дополни функцию makeMessage так,
//чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов.
//Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

// const deliverPizza = function(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// const makePizza = function(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// const makeMessage = function(pizzaName, callback) {
//   console.log(callback(pizzaName));
//   return callback(pizzaName);
// }
// makeMessage("Роял гранд", makePizza); //возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// makeMessage("Ультрасыр", deliverPizza); //возвращает строку 'Доставляем пиццу Ультрасыр.'.

//Задание-4 Функция может принимать произвольное количество колбэков.
const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],

  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    console.log(onSuccess(pizzaName));
    console.log(onError(pizzaName));
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}
// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}
// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);


// Задача 6. Аккаунт пользователя 
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
