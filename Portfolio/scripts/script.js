function moveDiagonal(value) {
  let diagonal = document.querySelector('.contenedorGirado');

  diagonal.classList.add('move-left'); // Agrega la animación a la diagonal
}

// Funciones específicas para mover cada botón a una cantidad diferente de vw
function moveButton(buttonNumber) {
  for (let i = 1; i <= 5; i++) {
    let button = document.getElementById('S' + i);
    if (i === buttonNumber && button.classList.contains('move-left-buttons' + i + 'S')) {
      // Si el botón ya está en el estado 'S', recargamos la página
      location.reload();
      return;
    } else if (i === buttonNumber) {
      button.classList.add('botonS');
      button.classList.add('move-left-buttons' + i + 'S');
      button.classList.remove('move-left-buttons' + i);

      if (buttonNumber === 1){
        setTimeout(addNewContent1, 800);
      }
      if (buttonNumber === 2){
        setTimeout(addNewContent2, 800);
      }
      if (buttonNumber === 3){
        setTimeout(addNewContent3, 800);
      }

    } else {
      button.classList.add('move-left-buttons' + i);
      button.classList.remove('move-left-buttons' + i + 'S');
      button.classList.remove('botonS');
    }
  }
  moveDiagonal();
}
function addNewContent1() {
  const container = document.querySelector(".añadirDOM");
  container.innerHTML = `
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
  container.classList.add('novedades');
  container.classList.remove('proyectos');
  container.classList.remove('contacto');
}

function addNewContent2() {
  const container = document.querySelector(".añadirDOM");
  container.innerHTML = `
        <section class="proyecto1">
            <a href="https://dreamy-monstera-5ac937.netlify.app"><img class="imgP1" src="img/3dJuegos.png" alt=""></a>
            
        </section>
        <section class="proyecto2">
            <a href="https://resonant-haupia-4868f5.netlify.app/#carousel__slide1"><img class="imgP2" src="img/DescubreIbiza.png" alt=""></a>
            
        </section>
        <section class="proyecto3">
            <a href="https://earnest-cat-cb3569.netlify.app"><img class="imgP3" src="img/DiceGameWeb.png" alt=""></a>
        </section>
  `;
  container.classList.remove('novedades');
  container.classList.add('proyectos');
  container.classList.remove('contacto');
}

function addNewContent3() {
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
    
            <input type="submit" value="Enviar">
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
