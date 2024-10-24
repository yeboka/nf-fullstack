// Создать функцию 'createPlan' которая после 5 секунд будет возвращать
// промис с двумя методами `.then`
// Первый метод должен вернуть в консоль текст: "План придуман, полетели!"
// Второй метод должен переписать глобальную переменную `window.plans.planA=true;`

function createPlan (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("План придуман, полетели!")
    }, time)
  })
}

createPlan(5000)
  .then((res) => console.log(res))
  .then(() => window.plans.planA=true)
