console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  // Створюємо функцію promise1, яка створює і повертає новий проміс
  function promise1() {
    return new Promise((res,rej) =>{
      setTimeout(() => {
       res('Проміс 1 виконано:')
      },1000);
    })
  } 
  // Метод new Promise приймає в якості параметра функцію (executor), яка має два параметри: resolve і reject.
  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 1 секунду
  // Викликаємо resolve з рядком 'Проміс 1 виконано', що означає успішне вирішення проміса

  // Створюємо функцію promise2, яка створює і повертає новий проміс, який відхиляється
  // Використовуємо setTimeout для імітації асинхронної операції, яка не вдається і відхиляє проміс через 2 секунди
  // Викликаємо reject з рядком 'Проміс 2 відхилено', що означає відхилення проміса
  function promise2() {
    return new Promise((res,rej) =>{
      setTimeout(() => {
        rej('Проміс 2 відхилено:')
       },2000);
    })
  } 
  // Використовуємо Promise.allSettled який приймає масив промісів і повертає новий проміс, який вирішується, коли всі проміси вирішено або відхилено\
  Promise.allSettled([promise1(),promise2()])
     .then((results) =>{
        results.forEach((result) => {
          if(result.status === "fulfilled") {
            console.log(`${result.value} ${result.status}`);
          }else{
            console.log(`${result.reason} ${result.status}`);
          }
        })
     })
     .catch((error)=> {
       console.log("Виникла помилка",error)
     })
     .finally(() =>{
      console.log("Завдання 3 завершено")
     })
  // Він повертає масив об'єктів, кожний з яких відображає стан кожного проміса
  // Функція then викликається, коли проміс вирішено
  // Вона приймає результати промісів і обробляє їх
  // Для кожного результату виводимо статус проміса
  // Функція finally викликається після того, як проміс вирішено або відхилено
  // Вона використовується для виконання дій, які повинні виконуватися незалежно від того, чи було проміс вирішено чи відхилено
  // В нашому випадку ми просто виводимо повідомлення, "Завдання 3 завершено"
}

// Викликаємо функцію task3
task3();
