// const alt = [
//     {text:"", images:"Assets/cat-rizz.jpg"},
//     {text:"Mau yaa, masa engga 😋", images:"Assets/cat-fight2.gif"},
//     {text:"Aku marah nihh 😡", images:"Assets/cat-fight.gif"},
//     {text:"Please yaa Mey 😔", images:"Assets/cat-hug.gif"},
//     {text:"Aku tau kita belum siap, tapi...", images:"Assets/cat-please.gif"},
//     {text:"Eh, error ternyata, coba di refresh dulu atau klik tombol dibawah", images:"Assets/cat-dead.gif"}
// ]
// const yes = {text:"Yeeyyy, diterima. Sekarang kita dah gak HTS yaa 😊", images:""};
// const text = document.querySelector('.txt');
// const cat = document.querySelector('.cat');
// const buttons = document.querySelectorAll('.button');
// const errorBtn = document.querySelector('.error');

// let count = 0;

// let updateDisplay = (item) => {
//     cat.src = item.images;
//     text.innerHTML = item.text;
// }

// errorBtn.addEventListener('click', ()=>{
//     count = 0;
//     updateDisplay(alt[count]);
//     buttons.forEach(btn => btn.style.display = 'inline-block');
//     errorBtn.style.display = 'none';
// })

// buttons.forEach(button => {
//     if(button.textContent == 'YESSSSS'){
//         updateDisplay(yes);
//         buttons.forEach(btn => btn.style.display = 'none');
//     }
//     if(button.textContent == 'NOOOOOO'){
//         count++;
//         if(count < alt.length){
//             updateDisplay(alt[count]);
//         }
//         else{
//             buttons.forEach(btn => btn.style.display = 'none');
//             errorBtn.style.display = 'inline-block'
//         }
//     }
// })

const alternatives = [
    {text:"", images:"Assets/cat-rizz.jpg"},
    {text:"Mau yaa, masa engga 😋", images:"Assets/cat-fight2.gif"},
    {text:"Aku marah nihh 😡", images:"Assets/cat-fight.gif"},
    {text:"Please yaa Mey 😔", images:"Assets/cat-please.gif"},
    {text:"Jawab IYAAA donk 🙂", images:"Assets/cat-dead.gif"},
  ]
  const ohyes = {text:"Yeeyyy, diterima. Sekarang kita dah gak HTS yaa 😊", images:"Assets/cat-hug.gif"}
  const cat = document.querySelector('.cat')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  
  let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "IYAAA"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'GAAAA'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })