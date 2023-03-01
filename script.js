// const accordeonList = document.querySelectorAll('.accordeon__item'),
//    accordeonText = document.querySelectorAll('.accordeon__item_title_text');


// console.log(accordeonList);

// accordeonList.forEach((item, i) => {
//    item.addEventListener('click', (event) => {
//       accordeonText[i].classList.toggle('show');
//    });
// });
const accordeonList = document.querySelectorAll('.accordeon__item'),
   accordeonText = document.querySelectorAll('.accordeon__item_title_text'),
   arrow = document.querySelectorAll('.arrow');


console.log(accordeonList);

accordeonList.forEach((item, i) => {
   item.addEventListener('click', (event) => {
      accordeonText[i].classList.toggle('show');
      arrow[i].classList.toggle('rotate');
   });
});
