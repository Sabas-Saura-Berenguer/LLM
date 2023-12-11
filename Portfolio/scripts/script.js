function moverDiagonal() {
  let diagonal = document.querySelector('.contenedorGirado');
  diagonal.classList.add('move-left'); // Animacion que quita la diagonal
}

// Funcion para mover cada botón
function moverBtn(num) {
  for (let i = 1; i <= 5; i++) {
    let btn = document.getElementById('S' + i);
    if (i === num && btn.classList.contains('move-left-buttons' + i + 'S')) {
      // Si el botón ya está en el estado 'S', recargam la página
      location.reload();
      return;
    } else if (i === num) {
      btn.classList.add('botonS');
      btn.classList.add('move-left-buttons' + i + 'S');
      btn.classList.remove('move-left-buttons' + i);

      if (num === 1){
        setTimeout(añadirCont1, 800);
      }
      if (num === 2){
        setTimeout(añadirCont2, 800);
      }
      if (num === 3){
        setTimeout(añadirCont3, 800);
      }

    } else {
      btn.classList.add('move-left-buttons' + i);
      btn.classList.remove('move-left-buttons' + i + 'S');
      btn.classList.remove('botonS');
    }
  }
  moverDiagonal();
}
function añadirCont1() {
  const cont1 = document.querySelector(".añadirDOM");
  cont1.innerHTML = `
      <section>
        <h1>Dice Mini Game </h1>
        <p>Minijuego que baja la vida del slime segun el número del dado</p>
        <a href=""><img class="imgN" src="img/DiceGameWeb.png" alt="Imagen con enlace a la página de la novedad"></a>
      </section>
      <section>
        <h1>¿Quieres recibir el Newsletter mensual?</h1>
        <form action="#">
            <input type="email" placeholder="Email: " name="email" id="inputEmail">
            <input type="submit" value="Enviar">
        </form>
      </section>
  `;
  cont1.classList.add('novedades');
  cont1.classList.remove('proyectos');
  cont1.classList.remove('contacto');
}

function añadirCont2() {
  const container = document.querySelector(".añadirDOM");
  container.innerHTML = `
        <section class="proyecto1">
            <br><br>
            <a href="https://dreamy-monstera-5ac937.netlify.app"><img class="imgP1" src="img/3dJuegos.png" alt=""></a>
        </section>
        <section class="proyecto2">
            <a href="https://resonant-haupia-4868f5.netlify.app/#carousel__slide1"><img class="imgP2" src="img/DescubreIbiza.png" alt=""></a>
        </section>
        <section class="proyecto3">
            <a href="https://earnest-cat-cb3569.netlify.app"><img class="imgP3" src="img/DiceGameWeb.png" alt=""></a>
            <br><br><br><br><br><br>
        </section>
  `;
  container.classList.remove('novedades');
  container.classList.add('proyectos');
  container.classList.remove('contacto');
}

function añadirCont3() {
  const container = document.querySelector(".añadirDOM");
  container.innerHTML = `
    <form id="contacto" action="">
        <section class="contactoForm">
            <h1>Contacto</h1>

            <label for="nombre">Nombre</label> <br>
            <input id="nombre" class="inputTexto" type="text" name="nombre"> <br><br>

            <label for="email">Email</label> <br>
            <input id="email" class="inputTexto" type="email" name="email"> <br><br>
            
            <label for="texto">Mensaje</label> <br>
            <input id="texto" class="inputTexto" type="text" name="texto"> <br><br>
    
            <input class="button-49 btn4" type="submit" value="Enviar">
        </section>
        <section class="contactoLinks">
            <section>
                <a href=""><img class="imgIcon" src="img/twittericon.svg" alt=""></a>
                <a href=""><img class="imgIcon" src="img/linkedinicon.svg" alt=""></a>
                <a href=""><img class="imgIcon" src="img/githubicon.svg" alt=""></a>
                <a href=""><img class="imgIcon" src="img/mail.svg" alt=""></a>
            </section>
        </section>
    </form>
  `;
  container.classList.remove('novedades');
  container.classList.remove('proyectos');
  container.classList.add('contacto');
}
