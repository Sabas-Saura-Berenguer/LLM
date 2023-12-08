// const desplegable = document.querySelectorAll("#S1, #S2, #S3, #S4, #S5");
// const S1 = document.getElementById("S1");
// const S2 = document.getElementById("S2");
// const S3 = document.getElementById("S3");
// const S4 = document.getElementById("S4");
// const S5 = document.getElementById("S5");


// function menu() {
//     desplegable.forEach(item => item.style.visibility = "hidden");
//     S1.style.visibility = "visible";
// }
// // https://stackoverflow.com/questions/26543645/how-to-move-div-to-left-on-every-click-just-javascript-no-jquery

function Menu() {
  let lis = document.querySelectorAll('nav ul li:not(#TituloNav)');
  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.toggle('hidden');
    lis[i].classList.toggle('move-right' + lis[i].id);
    if (!lis[i].classList.contains('hidden')) {
      lis[i].style.transform = 'translateX(0)';
    } else {
      lis[i].style.transform = 'translateX(-100%)';
    }    
  }
}
  function BarMenu(x) {
    x.classList.toggle("change");
    let nav = document.querySelector('.navLinks');
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }