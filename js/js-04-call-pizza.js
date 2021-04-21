// Задание Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате
//  'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.'
//  Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// -Не объявляй дополнительные параметры функции composeMessage(position).
// -Используй call для вызова функции в контексте одного объекта-заказа.
// -Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// -Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i += 1) {
  const massage = composeMessage.call(orders[i], i + 1);
  messages.push(massage);
}
console.log(messages);
