

// それぞれのHTMLの要素を取得
let tarea = document.querySelector('textarea');
console.log( tarea );

let findipt = document.querySelector('#findtxt');
console.log( findipt );

let repipt = document.querySelector('#reptxt');
console.log( repipt );

let btn = document.querySelector('button');
console.log( btn );

let elem = document.querySelector('p');
console.log( elem );


btn.addEventListener('click', () => {
  
  let findtxt = findipt.value;
  let reptxt = repipt.value;
  let tagtxt = tarea.value;

  findtxt = new RegExp( findtxt, 'g' );
  tagtxt = tagtxt.replace(findtxt, reptxt);

  elem.innerText = tagtxt;

});
