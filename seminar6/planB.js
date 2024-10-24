// Создать функцию `placeABomb` которая должна взорваться
// через 2 секунды с текстом "BANG!"
// Взрыв должен быть в `reject`
// Метод `catch` должен переписать глобальную переменную
// `window.plans.planB=true;`

function placeABomb (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("BANG!")
    }, time);
  })
}

placeABomb(7000)
  .catch((e) => {
    console.log(e);
    window.plans.planB=true;
  })
