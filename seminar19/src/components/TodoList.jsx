import React, { useReducer, useState } from 'react';

// const initialState = {
//   todos: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//   }
// }

/*

Создайте компонент TodoList для управления списком дел, применяя хук useReducer для обработки добавления новых задач, переключения статуса выполнения и очистки выполненных задач.

Основные шаги:

1) Инициализируйте начальное состояние `initialState` со списком задач `todos`.
2) Реализуйте функцию `reducer` для обработки действий 'add_todo', 'toggle_todo' и 'clear_completed' с соответствующими изменениями состояния.
3) Используйте `useReducer` для управления состоянием списка задач в компоненте TodoList.
4) Разработайте логику для добавления новой задачи в список. При добавлении задачи обнуляйте поле ввода.
5) Отобразите список задач, где каждая задача может быть отмечена как выполненная по клику на неё, что должно переключать её статус 'completed'.
6) Реализуйте кнопку 'Clear Completed', которая удаляет все выполненные задачи из списка.

Цель задания: Научиться использовать хук useReducer для управления сложными состояниями в React-приложениях, а также практиковать обработку пользовательских взаимодействий и динамическое изменение списка данных.

*/

function TodoList() {
  return (
    <>
      Count: {state.count}
      <button onClick={() => {}}>-</button>
      <button onClick={() => {}}>+</button>
    </>
  );
}

export default TodoList;
