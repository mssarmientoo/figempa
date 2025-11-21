const body = document.querySelector("body");
const homeLink = document.querySelector("#home-link");
const aboutProyectLink = document.querySelector("#about-proyect-link");
const descriptiveStatisticsLink = document.querySelector("#descriptive-statistics-link");
const underConstructionLinks = document.querySelectorAll(".under-construction");
const mainElement = document.querySelector("main");
const header = document.querySelector(".header");
const menuBtn = document.querySelector("#menu-btn");
const topBar = document.querySelector("#top-bar");
const middleBar = document.querySelector("#middle-bar");
const bottomBar = document.querySelector("#bottom-bar");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navlink");
const navLinksDeploy = document.querySelectorAll(".navlink-deploy");
const navlProjectLinks = document.querySelectorAll(".navl-project");
const navlDSLinks = document.querySelectorAll(".navl-ds");
const heroVideoWrap = document.querySelector(".hero-video-wrap");

const windowWidth = window.innerWidth;


// Hamburguer menu code
const toggleHamburguerMenuClases = () => {
  topBar.classList.toggle("convert-x-1");
  topBar.classList.toggle("convert-bars");
  middleBar.classList.toggle("hidden");
  middleBar.classList.toggle("visible");
  bottomBar.classList.toggle("convert-x-2");
  bottomBar.classList.toggle("convert-bars");
  navbar.classList.toggle("show-menu");
  body.classList.toggle("block-overflow");
};

menuBtn.addEventListener("click", () => {
  toggleHamburguerMenuClases();
});

const resetStyles = (element) => {
  element.setAttribute("style", "");
}

navLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    
    if (windowWidth < 1024) {
      const idLink = e.target.id;
      if (idLink === "descriptive-statistics-link"
          || idLink === "about-proyect-link") {
        return
      }
    }

    const targetLink = [...e.target.classList];
    if (targetLink.includes('navlink-inside')) {
      const paintedElement = e.target.parentElement.parentElement.previousElementSibling;
      const arrowImage = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
      const nestedElement = e.target.parentElement.parentElement;

      resetStyles(paintedElement);
      resetStyles(arrowImage);
      resetStyles(nestedElement);
    }
    
    toggleHamburguerMenuClases();
  })
));

heroVideoWrap.setAttribute("style", `margin-top:${header.offsetHeight}px`);

// Adding new text to main content
const homeCode = `
  <section id="inicio" class="hero-video-wrap section-anchor" role="region" aria-label="Portada con video">
    <video autoplay muted loop id="heroVideo" class="hero-video">
      <source src="assets/videos/uce.mp4" type="video/mp4">
      Tu navegador no soporta el tag de video.
    </video>

    <div class="video-overlay"></div>

    <div class="hero-inner-centered">
      <h1 data-i18n="hero_title_centered" class="hero-h1">ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL</h1>
      <p class="lead" data-i18n="hero_lead_centered">Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio</p>
    </div>
  </section>

  <section class="important section-box">
    <h2 class="title-2">¡IMPORTANTE!</h2>
    <p>Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.</p>
  </section>

  <section class="mision-vision section-box">
    <h2 class="title-2">MISIÓN - VISIÓN</h2>
    <div class="mision-vision-container">
        <div class="mision">
            <h3 class="title-3">Misión</h3>
            <p>Aplicar métodos estadísticos para identificar y cuantificar los factores que determinan la eficiencia real de las plantas solares a nivel mundial.</p>
        </div>
        <div class="vision">
            <h3 class="title-3">Visión</h3>
            <p>Convertirnos en un análisis estadístico clave que revele las verdaderas tendencias y el potencial global de la energía solar.</p>
        </div>
    </div>
  </section>

  <section id="motivation" class="motivation section-box">
    <div class="card-box">
      <div class="motivation-text-container">
        <h2 class="title-2">MOTIVACIONES DEL PROYECTO</h2>
        <p data-i18n="motivaciones_text">Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos. Nuestro objetivo es no solo interpretar la información, sino también destacar la relevancia de la estadística en la toma de decisiones informadas dentro del ámbito profesional relacionado con nuestra carrera.</p>
        <a href="https://www.uce.edu.ec/web/figempa" target="_blank" style="font-weight:700" class="uce-figempa-link">UNIVERSIDAD CENTRAL DEL ECUADOR</a>
      </div>
      <img src="assets/images/facultad.jpg" alt="Edificio de la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental." class="motivation-img"/>
    </div>
  </section>
`;

const aboutProyectCode = `
  <section class="objectives section-box" id="objectives">
    <h2 class="title-2">OBJETIVOS</h2>
    <h3 class="title-3">Objetivo General:</h3> 
    <p class="general-objective">Aplicar la estadística y Machine learning para examinar las plantas solares a nivel mundial, mediante el uso de herramientas computacionales. </p>
    <h3 class="title-3">Objetivos especificos:</h3>
    <ol class="objectives-list">
        <li class="objectives-items">Conocer la situación actual de las plantas solares a nivel mundial a través de sus características más importantes y medidas estadísticas.</li>
        <li class="objectives-items">Emplear un modelo de probabilidad para establecer conclusiones sobre las plantas solares en el mundo a partir de los resultados de muestra.</li>
        <li class="objectives-items">Deducir relaciones entre variables de las plantas solares a nivel mundial con el fin de realizar estimaciones.</li>
    </ol>
  </section>

  <section class="problem section-box" id="problem">
    <h2 class="title-2">PLANTEAMIENTO DEL PROBLEMA</h2>
    <p class="problem-desc">El análisis estadístico de las plantas solares a nivel mundial es clave para medir su eficiencia real. Este proyecto utilizará una base de datos propia para transformar la información bruta de las plantas (como su capacidad y ubicación) en insumos relevantes. El objetivo es aplicar la estadística para entender qué factores determinan de verdad el rendimiento energético a escala global.</p>
    <p class="problem-desc">La información utilizada para este estudio fue obtenida desde la plataforma Kaggle, NASA Power Data y Global Solar Atlas, cumpliendo con los criterios establecidos para el proyecto.</p>
  </section>

  <div class="map-container section-box">
    <img src="assets/images/map.jpg" alt="mapamundi" class="map-img">
  </div>
`;

const descriptiveStatisticsCode = `
  <section class="section-box" id="descriptive-statistics">
    <h2 class="title-2">Estadistica descriptiva</h2>
    <p>Aquí se mostrará el análisis exploratorio: conteos, distribuciones, histogramas, y tablas resumen por región y tipo de planta.</p>
  </section>

  <section class="section-box ds-methodology-section" id="ds-methodology">
    <h2 class="title-2">Metodología</h2>
    <div class="met-container">
      <article class="population">
        <h3 class="title-3">Población</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Todas la plantas solares a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>U = { x | x ∈ Plantas Solares ∧ Ubicación(x) ∈ "Mundo" }</p>
      </article>
      <article class="bloke">
        <h3 class="title-3">Individuo</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Cada planta solar a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +&#8734;</p>
      </article>
      <article class="sample">
        <h3 class="title-3">Muestra</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Un subconjunto representativo de plantas solares actualmente en operación a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>M={ x | x ∈ Plantas solares ∧ Ubicación(x) ∈ "Mundo" ∧ Estado(x)="Operación" }</p>
      </article>
      <article class="study-case">
        <h3 class="title-3">Caso de estudio</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Cada planta solar que se encuentra actualmente en operación a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 57936</p>
      </article>
    </div>
    <div>
      <h2 class="title-2">Tabla de variables</h2>

      <iframe class="varibles-table" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPdYlLX7_NKZ1VafXC-7KRWtlHjp6stlj6ywUzQzt_25XI3jXD4hpEY8u2JejFng/pubhtml?gid=436771283&&single=true&chrome=false&widget=false&headers=true"></iframe>

      <a href="https://docs.google.com/spreadsheets/d/1OxlxfP1gWkoZjoOgeI-uo8XXsAFGeRp0/edit?gid=436771283#gid=436771283"
       target="_blank"
       class="boton-abrir-externo">
        Abrir Documento Completo
      </a>
    </div>
  </section>
`;

const underConstructionCode = `
  <h1 class="title-1">En construcción</h1>
  <img src="assets/images/under-construction.png" alt="Escena de construcción" class="under-construction-img">
`;

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = "";
  mainElement.innerHTML = homeCode;
});

navlProjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = aboutProyectCode;
    // console.log(e.y - (header.offsetHeight + 10));
    // console.log(e);
  })
});

navLinksDeploy.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (windowWidth < 1024) {
      const linkElement = e.target;
      const nestedList = e.target.nextElementSibling;
      const arrowImg = e.target.firstElementChild;

      linkElement.setAttribute("style", "padding: 0.2rem; background-color: #9fb9c6; color: #0f2340;");
      nestedList.setAttribute("style", "position: relative; clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);");
      arrowImg.setAttribute("style", "transform: rotate(0deg);");
      
      return;
    }
    
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    console.log(e.target.id);
    if (e.target.id === "about-proyect-link") {
      mainElement.innerHTML = aboutProyectCode;
    } else if (e.target.id === "descriptive-statistics-link") {
      mainElement.innerHTML = descriptiveStatisticsCode;
    }
  });
});

navlDSLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = descriptiveStatisticsCode;
  })
});

underConstructionLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = underConstructionCode;
  })
));



/* --------------------------------
 LÓGICA DEL CHATBOT (CORREGIDA)
 -------------------------------- */
(function () {
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbotBtn = document.getElementById('closeChatbot');
    const chatbox = document.getElementById('chatbox');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');

    chatbotBtn.addEventListener('click', function () {
        chatbotModal.style.display = (chatbotModal.style.display === 'none' || chatbotModal.style.display === '') ? 'block' : 'none';
    });

    closeChatbotBtn.addEventListener('click', function () {
        chatbotModal.style.display = 'none';
    });

    // --- INICIO DE CORRECCIÓN ---
    // Función para normalizar texto (quitar acentos y minúsculas)
    function normalizeText(text) {
        return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Muestra el mensaje del usuario
            chatbox.innerHTML += `<p class="user-message">Tú: ${message}</p>`;
            const normalizedMessage = normalizeText(message); // Normaliza el mensaje
            chatInput.value = ''; // Limpia el input

            // Simula una respuesta del bot
            setTimeout(() => {
                let botResponse = "Lo siento, no entiendo tu pregunta en este momento. Intenta preguntarme sobre 'variables', 'metodologia' o 'equipo'.";

                // Compara el mensaje normalizado
                if (normalizedMessage.includes("variable")) {
                    botResponse = "Las variables principales incluyen potencia instalada (MW), factor de planta (%), irradiancia y tipo de panel.";
                } else if (normalizedMessage.includes("metodologia")) {
                    botResponse = "La metodología implica recolección de datos de fuentes oficiales, depuración con Python/Pandas y estandarización.";
                } else if (normalizedMessage.includes("regresion")) {
                    botResponse = "Utilizamos modelos lineales y no lineales para estimar la producción y técnicas como cross-validation para validación.";
                } else if (normalizedMessage.includes("equipo") || normalizedMessage.includes("nombres")) {
                    botResponse = "El equipo está conformado por Sarmiento Martín, Miles Juleidy, Neira Fernando, Ramírez Carlos y Masías Elías.";
                }

                chatbox.innerHTML += `<p class="bot-message">Asistente Solar: ${botResponse}</p>`;
                chatbox.scrollTop = chatbox.scrollHeight; // Scroll al final
            }, 1000); // Retraso de 1 segundo para la respuesta
        }
    }
    // --- FIN DE CORRECCIÓN ---

    sendChatBtn.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
})();