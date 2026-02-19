const body = document.querySelector("body");
const homeLink = document.querySelector("#home-link");
const interactiveMapLink = document.querySelector("#interactive-map-link");
const aboutProyectLink = document.querySelector("#about-proyect-link");
const descriptiveStatisticsLink = document.querySelector("#descriptive-statistics-link");
const inferentialStatisticsLink = document.querySelector("#inferential-statistics-link")
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
      <a href="#" class="cv-link" >
        Gualan Shelby
      </a>
      <a href="https://drive.google.com/file/d/11WPCxRfqv5hjF0s9hDhdZ_GaTpqCX-b5/view" class="cv-link" target="_blank">
        Juleydi Miles
      </a>
      <a href="https://drive.google.com/file/d/1aJVdtwGPSzCrZ5pc1UhYQBmNGCTNFphF/view" class="cv-link" target="_blank">
        Fernando Neira
      </a>
      <a href="https://drive.google.com/file/d/1tNijknCiQ28rFS-BwimOE6KYhisE6F6m/view" class="cv-link" target="_blank">
        Carlos Ramírez
      </a>
      <a href="https://drive.google.com/file/d/1xlbUEJBGBklpkwEaIfvgxBt-8x-isuBu/view" class="cv-link" target="_blank">
        Martín Sarmiento
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

    <a href="https://rpubs.com/mssarmiento/1377293" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption>País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377294" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption>Tipo de Curvatura</figcaption>
      </figure>
    </a>

  </div>

  <h4 class="title-4">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1377282" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption>Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377288" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption>Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377290" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption>Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1387716" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption>Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1387714" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption>Tamaño</figcaption>
      </figure>
    </a>
    
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption>Dirección del viento predominante</figcaption>
      </figure>
    </span>

  </div>
</article>
`;

const dSVariablesCuantitatives = `
<article class="ds-vcuanti-images">
  <h3 class="title-3">Variables Cuantitativas</h3>

  <h4 class="title-4">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="https://rpubs.com/mssarmiento/1387717" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4">Continuas</h4>
  <div class="ds-vcuanti-continuos">
  
    <a href="https://rpubs.com/mssarmiento/1377295" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption>Latitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377296" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption>Longitud</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377298" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption>Elevación</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377299" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption>Área</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377300" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption>Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377301" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption>Curvatura</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377302" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption>Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377303" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption>GHI</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377304" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377305" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption>Humedad</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377306" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption>Velocidad del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377307" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption>Dirección del Viento</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1387719" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption>Temperatura Ambiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377309" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption>Inclinación Óptima</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377310" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption>Potencial Fotovoltaico</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1377312" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption>Capacidad</figcaption>
      </figure>
    </a>
    
    <a href="#" target="_blanket">
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

    <a href="https://rpubs.com/mssarmiento/1386648" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption>País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1386649" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption>Tipo de Curvatura</figcaption>
      </figure>
    </a>

  </div>

  <h4 class="title-4">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1386983" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption>Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption>Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1387461" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption>Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1387731" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption>Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption>Tamaño</figcaption>
      </figure>
    </a>
    
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption>Dirección del viento predominante</figcaption>
      </figure>
    </span>

  </div>
</article>
`;

const iSCuantitativesVariables = `
<article class="ds-vcuanti-images">
  <h3 class="title-3">Variables Cuantitativas</h3>

  <h4 class="title-4">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4">Continuas</h4>
  <div class="ds-vcuanti-continuos">
  
    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption>Latitud</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption>Longitud</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption>Elevación</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption>Área</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption>Pendiente</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption>Curvatura</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption>Aspecto</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption>GHI</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption>Aptitud Solar</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption>Humedad</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption>Velocidad del Viento</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption>Dirección del Viento</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption>Temperatura Ambiente</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption>Inclinación Óptima</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption>Potencial Fotovoltaico</figcaption>
      </figure>
    </a>

    <a href="#" target="_blanket">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption>Capacidad</figcaption>
      </figure>
    </a>
    
    <a href="#" target="_blanket">
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