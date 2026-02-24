const body = document.querySelector("body");
const homeLink = document.querySelector("#home-link");
const interactiveMapLink = document.querySelector("#interactive-map-link");
const aboutProyectLink = document.querySelector("#about-proyect-link");
const descriptiveStatisticsLink = document.querySelector("#descriptive-statistics-link");
const inferentialStatisticsLink = document.querySelector("#inferential-statistics-link");
const regressionModelsLink = document.querySelector('#regression-models-link');
const machineLearningLink = document.querySelector('#machine-learning-link');
const toolsLink = document.querySelector('#tools-link');
const aboutUsLink = document.querySelector("#about-us-link");
const underConstructionLinks = document.querySelectorAll(".under-construction");
const mainElement = document.querySelector("main");
const header = document.querySelector(".header");
const menuBtn = document.querySelector("#menu-btn");
const topBar = document.querySelector("#top-bar");
const middleBar = document.querySelector("#middle-bar");
const bottomBar = document.querySelector("#bottom-bar");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navlink");
const navLinksDropDown = document.querySelectorAll(".navlink-deploy");
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
};

const resetDropDownMenu = () => {
  navLinksDropDown.forEach(link => {
    const paintedElement = link;
    const nestedList = link.nextElementSibling;
    const arrowImg = link.firstElementChild;

    paintedElement.classList.remove("selected-menu-option");
    nestedList.classList.remove("show-nested-menu");
    arrowImg.classList.remove("rotate-arrow");
  });
}

menuBtn.addEventListener("click", () => {
  resetDropDownMenu();
  toggleHamburguerMenuClases();
});

navLinks.forEach(link => (
  link.addEventListener("click", (e) => {

    if (windowWidth < 1024) {
      const idLink = e.target.id;
      const classElements = [...e.target.classList];
      if (idLink === "descriptive-statistics-link"
        || idLink === "about-proyect-link"
        || classElements.includes('navitem-arrow')) {
        return
      }
    }

    const targetLink = [...e.target.classList];
    if (targetLink.includes('navlink-inside')) {
      resetDropDownMenu();
    }

    resetDropDownMenu();
    toggleHamburguerMenuClases();
  })
));

navLinksDropDown.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (windowWidth < 1024) {

      const classElements = [...e.target.classList];
      let linkElement = null;
      let nestedList = null;
      let arrowImg = null;

      if (classElements.includes('navitem-arrow')) {
        linkElement = e.target.parentElement;
        nestedList = linkElement.nextElementSibling;
        arrowImg = linkElement.firstElementChild;
      } else {
        linkElement = e.target;
        nestedList = e.target.nextElementSibling;
        arrowImg = e.target.firstElementChild;
      }

      linkElement.classList.toggle("selected-menu-option");
      nestedList.classList.toggle("show-nested-menu");
      arrowImg.classList.toggle("rotate-arrow");
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


// Setting margin top to hero video wrap
heroVideoWrap.setAttribute("style", `margin-top:${header.offsetHeight}px`);




/* ----------------------------
   HOME
---------------------------- */
// Adding new text to main content dynamicaly
const homeCode = `
  <section id="inicio" class="hero-video-wrap section-anchor" role="region" aria-label="Portada con video">
    <video autoplay muted loop id="heroVideo" class="hero-video">
      <source src="assets/videos/uce.mp4" type="video/mp4">
      Tu navegador no soporta el tag de video.
    </video>

    <div class="video-overlay"></div>

    <div class="hero-inner-centered">
      <h1 data-i18n="hero_title_centered" class="title-1">ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL</h1>
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

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = "";
  mainElement.innerHTML = homeCode;
});




/* ----------------------------
    INTERACTIVE MAP
---------------------------- */
const interactiveMapCode = `
  <h1 class="title-1" style='margin-top:${header.offsetHeight}px' >MAPA INTERACTIVO</h1>

  <div style="width: 100%; height: 500px;">
    <iframe 
      src="https://mssarmientoo.github.io/figempa/map/index.html" 
      width="100%" 
      height="100%" 
      style="border:none;" 
      title="Mapa Interactivo Solar">
    </iframe>
  </div>
`;

interactiveMapLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = "";
  mainElement.innerHTML = interactiveMapCode;
});



/* ----------------------------
   ABOUT PROJECT
---------------------------- */
// About project
const aboutProyectCode = `
  <h1 class="title-1">INTRODUCCIÓN</h1>

  <section class="problem section-box" id="problem">
    <h2 class="title-2">PLANTEAMIENTO DEL PROBLEMA</h2>
    <p class="problem-desc">El análisis de las plantas solares a nivel mundial es importante porque permite medir su eficiencia real y entender qué factores afectan su producción de energía. Al estudiar estos datos, se pueden identificar las mejores condiciones para aprovechar el sol y reducir los fallos en la generación eléctrica.</p>
    <p class="problem-desc">El dataset utilizado para este proyecto se puede obtener desde el <a href="https://github.com/cimejia/solarPV/" target="_blank" class="bold-text" >repositorio del proyecto</a>. Este dataset es el resultado de la colaboración entre nuestro equipo de trabajo y el Departamento de Tecnología de Computación de la Universidad de Alicante, España, a partir de la información obtenida de las plataformas Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas y Copernicus cumpliendo con los criterios establecidos para el proyecto.</p>
  </section>

  <section class="map-container section-box" id="map">
    <h2 class="title-2">MAPA DE UBICACIÓN GEOGRÁFICA</h2>
    <iframe src="https://drive.google.com/file/d/1GBVQRhBoctEpF-59a6TJw813tEui_zHr/preview" class="map-iframe" width="640"></iframe>
  </section>

  <section class="objectives section-box" id="objectives">
    <h2 class="title-2">OBJETIVOS</h2>
    <h3 class="title-3">Objetivo General:</h3> 
    <p class="general-objective">Aplicar la estadística y Machine learning para examinar las plantas solares a nivel mundial, mediante el uso de herramientas computacionales. </p>
    <h3 class="title-3">Objetivos Especificos:</h3>
    <ol class="objectives-list">
        <li class="objectives-items">Conocer la situación actual de las plantas solares a nivel mundial a través de sus características más importantes y medidas estadísticas.</li>
        <li class="objectives-items">Emplear un modelo de probabilidad para establecer conclusiones sobre las plantas solares en el mundo a partir de los resultados de muestra.</li>
        <li class="objectives-items">Deducir relaciones entre variables de las plantas solares a nivel mundial con el fin de realizar estimaciones.</li>
    </ol>
  </section>

  <section class="section-box" id="about-us">
    <h2 class="title-2">SOBRE NOSOTROS</h2>
    <p class="about-us-description">Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.</p>
    <p class="about-us-description">Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energias sostenibles.</p>
    <p class="about-us-description">Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.</p>
    <h3 class="title-3 about-us-title-3">Nuestro Grupo de Trabajo</h3>
    <div class="cvs-container">
      <a href="https://drive.google.com/file/d/1R3lUrsZgvpMBEEy31lrqK0p4FxZZNQTE/view" class="regression-rs-link" target="_blank">
        <span class="regression-link-title">Gualan Shelby</span>
      </a>
      <a href="https://drive.google.com/file/d/1eyJ8lzU8gzxTOuF8DdlKOnAWnbi5nUDv/view" class="regression-rs-link" target="_blank">
        <span class="regression-link-title">Juleydi Miles</span>
      </a>
      <a href="https://drive.google.com/file/d/1jwGEu2l3I8LQNb7KCrAycLZLvr2zNent/view" class="regression-rs-link" target="_blank">
        <span class="regression-link-title">Fernando Neira</span>
      </a>
      <a href="https://drive.google.com/file/d/10gKZVoes30IPzWsDmMNpamIt_0wHh6xv/view" class="regression-rs-link" target="_blank">
        <span class="regression-link-title">Carlos Ramírez</span>
      </a>
      <a href="https://drive.google.com/file/d/1n2qUJGUfGpwbh1u6eyi27vV_v3Af84yh/view" class="regression-rs-link" target="_blank">
        <span class="regression-link-title">Martín Sarmiento</span>
      </a>
    </div>
  </section>
`;

navlProjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = aboutProyectCode;
  })
});




/* ----------------------------
DESCRIPTIVE STATISTICS
---------------------------- */
// Descriptive Statistics parts
const dSMethodology = `
  <section class="section-box ds-methodology-section" id="ds-methodology">
    <h2 class="title-2">METODOLOGÍA</h2>
    <div class="met-container">
      <article class="population">
        <h3 class="title-3">POBLACIÓN</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Todas la plantas solares a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>U = { x | x ∈ Plantas Solares ∧ Ubicación(x) ∈ "Mundo" }</p>
      </article>
      <article class="bloke">
        <h3 class="title-3">INDIVIDUO</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Cada planta solar a nivel mundial.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +&#8734;</p>
      </article>
      <article class="sample">
        <h3 class="title-3">MUESTRA</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Un subconjunto representativo de plantas solares a nivel mundial que abarca las plantas solares registradas en la base de datos de Global Energy Monitor.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>M={ x | x ∈ Plantas solares ∧ Ubicación(x) ∈ "Mundo" ∧ Entidad(x) ∈ "Global Energy Monitor" }</p>
      </article>
      <article class="study-case">
        <h3 class="title-3">CASO DE ESTUDIO</h3>
        <h4 class="title-4">Textual:</h4>
        <p>Cada planta solar registrada, independientemente de su estado operativo actual.</p>
        <h4 class="title-4">Simbólico:</h4>
        <p>X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 58978</p>
      </article>
    </div>
  </section>
`;

const dSVariablesCualitatives = `
<article class="ds-vcualit-images">
  <h3 class="title-3">Variables Cualitativas</h3>

  <h4 class="title-4">Nominales</h4>
  <div class="ds-vcualit-nominals">
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/plant-name.webp" alt="Imagen representativa de la variable Nombre de planta" class="ds-vcualit-img">
        <figcaption>Nombre de la Planta</figcaption>
      </figure>
    </span>

    <a href="https://rpubs.com/mssarmiento/1400052" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption>País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400054" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption>Tipo de Curvatura</figcaption>
      </figure>
    </a>

  </div>

  <h4 class="title-4">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1400058" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption>Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400060" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption>Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400061" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption>Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400062" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption>Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1400064" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption>Tamaño</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1400066" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption>Dirección del viento predominante</figcaption>
      </figure>
    </a>

  </div>
</article>
`;

const dSVariablesCuantitatives = `
<article class="ds-vcuanti-images">
  <h3 class="title-3">Variables Cuantitativas</h3>

  <h4 class="title-4">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="https://rpubs.com/mssarmiento/1400067" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4">Continuas</h4>
  <div class="ds-vcuanti-continuos">
  
    <a href="https://rpubs.com/mssarmiento/1400070" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption>Latitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400071" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption>Longitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400948" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption>Elevación</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400950" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption>Área</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400963" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption>Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400966" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption>Curvatura</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400092" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption>Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400090" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption>GHI</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400105" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400107" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption>Humedad</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400109" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption>Velocidad del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400110" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption>Dirección del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400112" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption>Temperatura Ambiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400114" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption>Inclinación Óptima</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400119" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption>Potencial Fotovoltaico</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1401015" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption>Capacidad</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1401019" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Imagen representativa de la variable Distancia a la vía" class="ds-vcuanti-img"/>
        <figcaption>Distancia a la vía</figcaption>
      </figure>
    </a>
  
  </div>

</article>
`;

const dSVariables = `
<section class="section-box ds-variable-tables" id="ds-variables-tables">
  
  <h2 class="title-2">TABLA DE VARIABLES</h2>
  <div>
    <iframe class="varibles-table" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPdYlLX7_NKZ1VafXC-7KRWtlHjp6stlj6ywUzQzt_25XI3jXD4hpEY8u2JejFng/pubhtml?gid=436771283&&single=true&chrome=false&widget=false&headers=true"></iframe>
    
    <a href="https://docs.google.com/spreadsheets/d/1OxlxfP1gWkoZjoOgeI-uo8XXsAFGeRp0/edit?gid=436771283#gid=436771283"
      target="_blank"
      class="open-external-file">
      Abrir Documento Completo
    </a>
  </div>

  <h2 class="title-2">TABLA DE INDICADORES</h2>
  <div>
    <iframe class="varibles-table" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSfSg1xyD8fXx6zGWAkHF_6MhmX-V1F1CcKGPEYPm2SEagGscrKvoFu7IeLm8onaw/pubhtml?gid=2064573701&amp;single=true&amp;chrome=false&amp;widget=false&amp;headers=true"></iframe>

    <a href="https://docs.google.com/spreadsheets/d/1J1y-nt62qz_h4md9Z-qXavRisDjFXZPO/edit?gid=2064573701#gid=2064573701"
      target="_blank"
      class="open-external-file last-open-external-file">
      Abrir Documento Completo
    </a>
  </div>
</section>
<section class="section-box ds-variables-section" id="ds-variables">
  <h2 class="title-2">VARIABLES</h2>
  ${dSVariablesCualitatives}
  ${dSVariablesCuantitatives}
</section>
`;

// Descriptive Statistics (DS) section
const descriptiveStatisticsCode = `
  <h1 class="title-1">ESTADÍSTICA DESCRIPTIVA</h1>

  ${dSMethodology}
  ${dSVariables}
`;

navlDSLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = descriptiveStatisticsCode;
  })
});




/* ----------------------------
   INFERENTIAL STATISTICS
---------------------------- */
// Inferential Statistics parts
const iSCualitativesVariables = `
<article class="ds-vcualit-images">
  <h3 class="title-3">Variables Cualitativas</h3>

  <h4 class="title-4">Nominales</h4>
  <div class="ds-vcualit-nominals">
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/plant-name.webp" alt="Imagen representativa de la variable Nombre de planta" class="ds-vcualit-img">
        <figcaption>Nombre de la Planta</figcaption>
      </figure>
    </span>

    <a href="https://rpubs.com/Caliche/1401348" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption>País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1401346" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption>Tipo de Curvatura</figcaption>
      </figure>
    </a>

  </div>

  <h4 class="title-4">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1401060" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption>Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400190" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption>Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400195" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption>Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400192" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption>Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/Fernando_Neira/1400193" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption>Tamaño</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/Caliche/1401458" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption>Dirección del viento predominante</figcaption>
      </figure>
    </a>

  </div>
</article>
`;

const iSCuantitativesVariables = `
<article class="ds-vcuanti-images">
  <h3 class="title-3">Variables Cuantitativas</h3>

  <h4 class="title-4">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="https://rpubs.com/Fernando_Neira/1400189" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4">Continuas</h4>
  <div class="ds-vcuanti-continuos">
  
    <a href="https://rpubs.com/mssarmiento/1401151" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption>Latitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1401164" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption>Longitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1400348" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption>Elevación</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1400351" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption>Área</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400046" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption>Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400019" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption>Curvatura</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1401435" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption>Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1401446" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption>GHI</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1399723" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1399977" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption>Humedad</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Juleydi/1401405" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption>Velocidad del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1399887" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption>Dirección del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1401449" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption>Temperatura Ambiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Juleydi/1401404" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption>Inclinación Óptima</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Juleydi/1401403" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption>Potencial Fotovoltaico</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Juleydi/1401407" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption>Capacidad</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/Caliche/1400364" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Imagen representativa de la variable Distancia a la vía" class="ds-vcuanti-img"/>
        <figcaption>Distancia a la vía</figcaption>
      </figure>
    </a>
  
  </div>

</article>
`;

// Inferencial Statistics (IS) section
const inferencialStatisticsCode = `
  <h1 class="title-1">ESTADÍSTICA INFERENCIAL</h1>

  <section class="section-box">
    <h2 class="title-2">VARIABLES</h2>
    ${iSCualitativesVariables}
    ${iSCuantitativesVariables}
  </section>
`;

inferentialStatisticsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = "";
  mainElement.innerHTML = inferencialStatisticsCode;
});




/* ----------------------------
   REGRESSION MODELS
---------------------------- */
const regressionModelsCode = `
  <h1 class="title-1">MODELOS DE REGRESIÓN</h1>

  <section class="section-box">
    <h2 class="title-2">REGRESIÓN SIMPLE</h2>

    <div class="regression-rs-links-container">
      <a
        href="https://rpubs.com/mssarmiento/1400243"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Lineal</span>
      </a>
      <a
        href="https://rpubs.com/mssarmiento/1400304"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Potencial</span>
      </a>
      <a
        href="https://rpubs.com/mssarmiento/1400516"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Exponencial</span>
      </a>
      <a
        href="https://rpubs.com/mssarmiento/1400389"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Logarítmica</span>
      </a>
      <a
        href="https://rpubs.com/mssarmiento/1400511"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Polinómica</span>
      </a>
    </div>
  </section>
  
  <section class="section-box">
    <h2 class="title-2">REGRESIÓN MÚLTIPLE</h2>
    <div class="regression-rs-links-container">
      <a
        href="https://rpubs.com/mssarmiento/1400942"
        target="_blank"
        class="regression-rs-link"
      >
        <span class="regression-link-title">Regresión Múltiple 3D</span>
      </a>
    </div>
  </section>
`;

regressionModelsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = "";
  mainElement.innerHTML = regressionModelsCode;
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const machineLearningCode = `
  <h1 class="title-1">MACHINE LEARNING</h1>
  
  <p class="ml-introduction-text">
    Uso de Machine Learning para la Predicción de Potencial Fotovoltaico (MWh/año) y Clasificación de Aptitud Solar Global
  </p>

  <section class="section-box">
    <h2 class="title-2">PLANTEAMIENTO DEL PROBLEMA</h2>
    <p>
      A nivel mundial, la expansión solar es clave para la transición energética; sin embargo, la variabilidad geográfica dificulta evaluar la viabilidad de nuevos proyectos. Ante este panorama, el análisis estadístico y el Machine Learning permiten procesar datos históricos geoespaciales para predecir variables críticas como la aptitud solar y el potencial fotovoltaico (MWh/año). El uso de estos modelos busca optimizar la planificación técnica, aplicando este análisis global en un caso de estudio local centrado en las facultades de FIGEMPA y Ciencias Químicas.
    </p>
  </section>
  
  <section class="section-box">
    <h2 class="title-2">OBJETIVO</h2>
    <p>
      Desarrollar un modelo de Machine Learning basado en redes neuronales que permita clasificar el nivel de aptitud y predecir la generación energética a partir de datos climáticos y operativos, con el fin de proporcionar una herramienta de alta precisión para la toma de decisiones en proyectos renovables.
    </p>
  </section>
  
  <section class="section-box">
    <h2 class="title-2">METODOLOGÍA</h2>
    <img 
      src="https://mssarmientoo.github.io/figempa/assets/images/ml-methodology.jpeg"
      alt="Diagrama de la metodología de Machine Learning"
      class="ml-methodology-img"
    />
  </section>
  
  <section class="section-box">
    <h2 class="title-2">MODELO</h2>
    <h3 class="title-3 ml-title-3">Explora en Google Colab</h3>
    <p class="ml-instructions">
      Haz clic en los siguientes bótones para acceder a los cuadernos interactivos.
    </p>
    <div class="ml-models-links-container">
      <a
      href="https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing"
      target="_blank"
      class="regression-rs-link"
      >
        <span class="regression-link-title">Notebook de Regresión</span>
      </a>
      <a
      href="https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing"
      target="_blank"
      class="regression-rs-link"
      >
        <span class="regression-link-title">Notebook de Clasificación</span>
      </a>
    </div>
  </section>

  <section class="section-box">
    <h2 class="title-2">CONCLUSIÓN</h2>
    <p>
      Se ha logrado implementar un modelo de Machine Learning capaz de clasificar el nivel de aptitud y predecir el potencial fotovoltaico (MWh/año) a partir de variables geoespaciales y climáticas globales. Este enfoque no solo optimiza la precisión en la evaluación de recursos renovables para el caso de estudio de la FIGEMPA y la Facultad de Ciencias Químicas, sino que también posee una alta capacidad de escalabilidad para analizar la viabilidad energética en cualquier región del mundo mediante el ajuste del conjunto de datos de entrada.
    </p>
  </section>
`;

machineLearningLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = "";
  mainElement.innerHTML = machineLearningCode;
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const toolsCode = `
  <h1 class="title-1">HERRAMIENTAS</h1>
  <section class="section-box">
    <h2 class="title-2">HERRAMIENTAS UTILIZADAS</h2>
    <p class="tools-description">
      Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes clave como HTML5, CSS y JavaScript. Complementamos este flujo de trabajo accediendo a datos científicos de Kaggle, NASA, Copernicus, OpenTopography y el servicio de cambio climático de ECMWF, mientras que para el análisis geoespacial y la identificación de derrames utilizamos QGIS, ArcGIS y Google Earth. Finalmente, aseguramos la productividad y difusión de resultados mediante herramientas colaborativas como GitHub, Google Drive, RPubs, Microsoft Teams y la suite de Office, impulsando así un enfoque moderno, eficiente y de alta precisión.
    </p>
  </section>

  <section class="section-box">
    <div class="tools-logo-container">
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/ArcGIS_globe.png"
          alt="ArcGIS Globe Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/climate change service.png"
          alt="Climate Change Service Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/copernicus.png"
          alt="Copernicus Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/ecmwf.png"
          alt="ECMWF Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/GitHub.png"
          alt="GitHub Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/HTML5.png"
          alt="HTML5 Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/CSS.png"
          alt="CSS Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/JavaScript-logo.png"
          alt="JavaScript Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Colaboratory.png"
          alt="Google Colab Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Drive.png"
          alt="Google Drive Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Earth_Icon.png"
          alt="Google Earth Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Kaggle.png"
          alt="Kaggle Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/LaTeX.png"
          alt="LaTeX Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Microsoft_Office_Logo_(2019).png"
          alt="Microsoft Office Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Microsoft_Office_Teams.png"
          alt="Microsoft Office Teams Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/nasa-logo.png"
          alt="NASA Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/opentopo_logo_text_transparent.png"
          alt="OpenTopo Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/POSIT2.png"
          alt="POSIT2 Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Qgis.png"
          alt="QGIS Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/rpubs.png"
          alt="RPubs Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/Rstudio.png"
          alt="RStudio Logo"
          class="tool-logo-img"
        />
      </div>
      <div class="tool-logo-bg">
        <img
          src="https://mssarmientoo.github.io/figempa/assets/images/tools/VS CODE.png"
          alt="VS Code Logo"
          class="tool-logo-img"
        />
      </div>
    </div>
  </section>
`;

toolsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = "";
  mainElement.innerHTML = toolsCode;
})




/* ----------------------------
   UNDER CONSTRUCTION
---------------------------- */
// Under Construction image to show for building pages
const underConstructionCode = `
  <h1 class="title-1">En construcción</h1>
  <img src="assets/images/under-construction.png" alt="Escena de construcción" class="under-construction-img">
`;

underConstructionLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = "";
    mainElement.innerHTML = underConstructionCode;
  })
));




/* --------------------------------
   LÓGICA DEL CHATBOT
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