/* --------------------------------
         COMPORTAMIENTO DEL MENU Y SCROLL (MODIFICADO)
         -------------------------------- */
(function () {
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Contenido de la Homepage (fuera de <main>)
    const homeContent = document.querySelectorAll('.important-box, .content-placeholder, #motivaciones');
    // Contenido de Análisis (dentro de <main>)
    const mainContent = document.querySelector('main');

    function closeMobile() { if (mobileMenu) mobileMenu.style.display = 'none'; }

    // Smooth scroll y Lógica de Show/Hide
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.length > 1) {
                e.preventDefault();
                const el = document.querySelector(href);

                if (href === '#inicio') {
                    // MOSTRAR homepage, OCULTAR main
                    mainContent.style.display = 'none';
                    homeContent.forEach(item => item.style.display = 'block');
                    // Scroll al inicio
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                } else if (el) {
                    // OCULTAR homepage, MOSTRAR main
                    mainContent.style.display = 'flex'; // Usamos flex por el 'gap' definido en CSS
                    homeContent.forEach(item => item.style.display = 'none');

                    // Scroll al elemento
                    const top = el.getBoundingClientRect().top + window.scrollY - (72 + 10);
                    window.scrollTo({ top, behavior: 'smooth' });
                }

                closeMobile();
            }
        });
    });

    // Mobile menu toggle
    mobileBtn.addEventListener('click', function () {
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });

    // Close mobile when clicking a mobile link
    document.querySelectorAll('.mobile-link').forEach(el => {
        el.addEventListener('click', () => closeMobile());
    });
})();

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


/* --------------------------------
 TOGGLE IDIOMA (ES / EN) - (ACTUALIZADO)
 -------------------------------- */
(function () {
    const texts = {
        es: {
            project_title_nav: '', /* Vacio para ocultar */
            project_faculty: '', /* Vacio para ocultar */
            nav_inicio: 'Home',
            nav_introduccion: 'Introducción',
            nav_desc: 'Estadística descriptiva ▾',
            nav_resumen: 'Resumen y Gráficos',
            nav_variables: 'Variables',
            nav_inferencial: 'Estadística inferencial',
            nav_regresion: 'Modelos de regresión',
            nav_mas: 'Más ▾',
            nav_ml: 'Machine Learning',
            nav_tools: 'Herramientas utilizadas',
            nav_conclusion: 'Conclusión',
            nav_info: 'Información',
            // Textos del Hero Simplificado
            hero_title_centered: 'ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL',
            hero_lead_centered: 'Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio',
            // Contenido
            intro_title: 'Introducción',
            intro_text: 'El presente proyecto busca compilar, describir y modelar datos de plantas solares alrededor del mundo para estudiar su rendimiento, factores influyentes y proyecciones. Este primer avance contiene la estructura de la página, menú y secciones principales donde se cargarán los resultados.',
            data_source_title: 'Metodología y Obtención de Datos',
            desc_title: 'Estadística descriptiva',
            desc_text: 'Aquí se mostrará el análisis exploratorio: conteos, distribuciones, histogramas, y tablas resumen por región y tipo de planta.',
            vars_title: 'Variables',
            vars_text: 'Ejemplos de variables que contemplamos: potencia instalada (MW), capacidad efectiva, factor de planta, irradiancia promedio, coordenadas (lat/lon), año de instalación y tipo de panel.',
            data_preview: 'Vista previa de datos',
            data_preview_text: 'En la próxima versión integraré la carga de CSV y la tabla interactiva con filtros.',
            inf_title: 'Estadística inferencial',
            inf_text: 'Se aplicarán pruebas de hipótesis, comparación de medias y análisis de correlación para identificar relaciones significativas entre variables (ej.: irradiancia vs factor de planta).',
            reg_title: 'Modelos de regresión',
            reg_text: 'Modelos lineales y no lineales para estimar producción, incluyendo regresión múltiple y pruebas de validación (cross-validation).',
            ml_title: 'Machine Learning',
            ml_text: 'En etapas avanzadas se integrarán técnicas de ML para predicción de rendimiento: árboles, random forests, boosting y redes neuronales. Se documentarán pipelines y métricas (RMSE, MAE).',
            tools_title: 'Herramientas utilizadas',
            concl_title: 'Conclusión',
            concl_text: 'Este avance establece la base para integrar datos reales y visualizaciones dinámicas. Próximos pasos: importar datasets consolidados, crear gráficas comparativas y entrenar modelos predictivos.',
            info_title: 'Información',
            info_text: 'Equipo: Sarmiento Martín, Miles Juleidy, Neira Fernando, Ramírez Carlos y Masías Elías. Profesor guía: [Nombre]. Fuente de datos: open datasets, operadores y repositorios internacionales. Fecha: 2025.',
            motivaciones_text: 'Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos. Nuestro objetivo es no solo interpretar la información, sino también destacar la relevancia de la estadística en la toma de decisiones informadas dentro del ámbito profesional relacionado con nuestra carrera.'
        },
        en: {
            project_title_nav: '', /* Vacio para ocultar */
            project_faculty: '', /* Vacio para ocultar */
            nav_inicio: 'Home',
            nav_introduccion: 'Introduction',
            nav_desc: 'Descriptive statistics ▾',
            nav_resumen: 'Summary and Charts',
            nav_variables: 'Variables',
            nav_inferencial: 'Inferential statistics',
            nav_regresion: 'Regression models',
            nav_mas: 'More ▾',
            nav_ml: 'Machine Learning',
            nav_tools: 'Tools used',
            nav_conclusion: 'Conclusion',
            nav_info: 'Information',
            // Textos del Hero Simplificado
            hero_title_centered: 'STATISTICAL ANALYSIS OF SOLAR PLANTS WORLDWIDE',
            hero_lead_centered: 'Statistical data analysis, applying descriptive and inferential methods using the R language in RStudio',
            // Contenido
            intro_title: 'Introduction',
            intro_text: 'This project aims to compile, describe and model data from solar plants around the world to study their performance, influential factors and projections. This first progress contains the page structure, menu and main sections where results will be uploaded.',
            data_source_title: 'Methodology and Data Collection',
            desc_title: 'Descriptive statistics',
            desc_text: 'Exploratory analysis will be shown here: counts, distributions, histograms, and summary tables by region and plant type.',
            vars_title: 'Variables',
            vars_text: 'Examples of variables: installed capacity (MW), effective capacity, capacity factor, average irradiance, coordinates (lat/lon), installation year and panel type.',
            data_preview: 'Data preview',
            data_preview_text: 'In the next version I will integrate CSV upload and interactive table with filters.',
            inf_title: 'Inferential statistics',
            inf_text: 'Hypothesis testing, comparison of means and correlation analysis will be applied to identify significant relationships between variables (e.g. irradiance vs capacity factor).',
            reg_title: 'Regression models',
            reg_text: 'Linear and non-linear models to estimate production, including multiple regression and validation tests (cross-validation).',
            ml_title: 'Machine Learning',
            ml_text: 'Advanced stages will include ML techniques for performance prediction: trees, random forests, boosting and neural networks. Pipelines and metrics (RMSE, MAE) will be documented.',
            tools_title: 'Tools used',
            concl_title: 'Conclusion',
            concl_text: 'This progress sets the base to integrate real data and dynamic visualizations. Next steps: import consolidated datasets, create comparative charts and train predictive models.',
            info_title: 'Information',
            info_text: 'Team: Sarmiento Martín, Miles Juleidy, Neira Fernando, Ramírez Carlos y Masías Elías. Advisor: [Name]. Data source: open datasets, operators and international repositories. Date: 2025.',
            motivaciones_text: 'As students of the Central University of Ecuador, we carry out this project with the purpose of applying statistics as a key tool in data analysis. We seek not only to interpret information but also to highlight the importance of statistics in making informed decisions within the professional scope of our career.'
        }
    };

    // function to update all elements with data-i18n attr
    function setLang(lang) {
        Object.keys(texts[lang]).forEach(key => {
            document.querySelectorAll('[data-i18n="' + key + '"]').forEach(el => {
                const newText = texts[lang][key];

                // Special handling for menu items with the dropdown arrow (▾)
                if (el.tagName === 'A' && el.parentElement.querySelector('.dropdown')) {
                    el.innerHTML = newText.replace(' ▾', '') + (newText.includes('▾') ? ' ▾' : '');
                } else {
                    el.textContent = newText;
                }
            });
        });
        // update active class
        document.getElementById('btnES').classList.toggle('active', lang === 'es');
        document.getElementById('btnEN').classList.toggle('active', lang === 'en');
        document.getElementById('mES')?.classList.toggle('active', lang === 'es');
        document.getElementById('mEN')?.classList.toggle('active', lang === 'en');
        // store selection (optional)
        localStorage.setItem('site_lang', lang);
    }

    // bind buttons
    document.getElementById('btnES').addEventListener('click', () => setLang('es'));
    document.getElementById('btnEN').addEventListener('click', () => setLang('en'));
    document.getElementById('mES')?.addEventListener('click', () => setLang('es'));
    document.getElementById('mEN')?.addEventListener('click', () => setLang('en'));

    // init from localStorage or default 'es'
    const saved = localStorage.getItem('site_lang') || 'es';
    setLang(saved);
})();