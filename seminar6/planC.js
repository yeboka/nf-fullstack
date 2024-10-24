// Создать функцию `leaveFast`, которая
// после двух секунд должна вернуть в resolve "leave the bank in 2 seconds"
// и после 4 секунд должна вернуть в resolve "close the road in 4 seconds"
// Если два условия выполнены вывести в консоль "we almost did it!" и
// переписать глобальную переменную `window.plans.planC=true;`

//Promise.all([])

function leaveFast () {
  const leave = new Promise((res, rej) => {
    setTimeout(() => res("leave the bank in 2 seconds"), 2000)
  })
  const close = new Promise((res, rej) => {
    setTimeout(() => res("close the road in 4 seconds"), 4000)
  })

  return [leave, close]
}

console.log(new Date());

Promise.all(leaveFast())
  .then((res) => {
    console.log("Ответ",res);
    res.forEach((item) => console.log(item))
    console.log("we almost did it!");
    window.plans.planC=true 
  })
  


