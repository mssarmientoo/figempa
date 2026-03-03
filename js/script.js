/* -------------------------------------------------------------------------- */
/* LÓGICA DE TRADUCCIÓN                             */
/* -------------------------------------------------------------------------- */
const translations = {
  es: {
    "nav_map": "Mapa Interactivo",
    "nav_home": "Inicio",
    "nav_intro": "Introducción",
    "nav_problem": "Planteamiento del Problema",
    "nav_geo": "Mapa de Ubicación Geográfica",
    "nav_obj": "Objetivos",
    "nav_desc_stats": "Estadística Descriptiva",
    "nav_methodology": "Metodología",
    "nav_vars_table": "Tablas de Variables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Estadística Inferencial",
    "nav_reg_models": "Modelos de Regresión",
    "nav_ml": "Machine Learning",
    "nav_more": "Más",
    "nav_tools": "Herramientas",
    "nav_about": "Sobre Nosotros",
    "hero_title_centered": "ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL",
    "hero_lead_centered": "Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio",
    "motivaciones_text": "Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos. Nuestro objetivo es no solo interpretar la información, sino también destacar la relevancia de la estadística en la toma de decisiones informadas dentro del ámbito profesional relacionado con nuestra carrera.",
    "footer_copy": "COPYRIGHT © 2026, GRUPO 1 - ESTADÍSTICA Y PROBABILIDAD.",
    "footer_rights": "TODOS LOS DERECHOS RESERVADOS.",
    "chat_title": "Asistente Solar 🤖",
    "chat_send": "Enviar",
    "important_title": "¡IMPORTANTE!",
    "important_text": "Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.",
    "mision_vision_title": "MISIÓN - VISIÓN",
    "mision_title": "Misión",
    "mision_text": "Aplicar métodos estadísticos para identificar y cuantificar los factores que determinan la eficiencia real de las plantas solares a nivel mundial.",
    "vision_title": "Visión",
    "vision_text": "Convertirnos en un análisis estadístico clave que revele las verdaderas tendencias y el potencial global de la energía solar.",
    "motivaciones_title": "MOTIVACIONES DEL PROYECTO",
    "map_title": "MAPA INTERACTIVO",
    "about_intro_title": "INTRODUCCIÓN",
    "about_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "about_problem_p1": "El análisis de las plantas solares a nivel mundial es importante porque permite medir su eficiencia real y entender qué factores afectan su producción de energía. Al estudiar estos datos, se pueden identificar las mejores condiciones para aprovechar el sol y reducir los fallos en la generación eléctrica.",
    "about_problem_p2": "El dataset utilizado para este proyecto se puede obtener desde el <a href='https://github.com/cimejia/solarPV/' target='_blank' class='bold-text'>repositorio del proyecto</a>. Este dataset es el resultado de la colaboración entre nuestro equipo de trabajo y el Departamento de Tecnología de Computación de la Universidad de Alicante, España, a partir de la información obtenida de las plataformas Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas y Copernicus cumpliendo con los criterios establecidos para el proyecto.",
    "about_map_title": "MAPA DE UBICACIÓN GEOGRÁFICA",
    "about_obj_title": "OBJETIVOS",
    "about_obj_gen_header": "Objetivo General:",
    "about_obj_gen_text": "Aplicar la estadística y Machine learning para examinar las plantas solares a nivel mundial, mediante el uso de herramientas computacionales.",
    "about_obj_spec_header": "Objetivos Específicos:",
    "about_obj_spec_1": "Conocer la situación actual de las plantas solares a nivel mundial a través de sus características más importantes y medidas estadísticas.",
    "about_obj_spec_2": "Emplear un modelo de probabilidad para establecer conclusiones sobre las plantas solares en el mundo a partir de los resultados de muestra.",
    "about_obj_spec_3": "Deducir relaciones entre variables de las plantas solares a nivel mundial con el fin de realizar estimaciones.",
    "met_title": "METODOLOGÍA",
    "pop_title": "POBLACIÓN",
    "textual": "Textual:",
    "pop_text": "Todas la plantas solares a nivel mundial.",
    "symbolic": "Simbólico:",
    "ind_title": "INDIVIDUO",
    "ind_text": "Cada planta solar a nivel mundial.",
    "samp_title": "MUESTRA",
    "samp_text": "Un subconjunto representativo de plantas solares a nivel mundial que abarca las plantas solares registradas en la base de datos de Global Energy Monitor.",
    "case_title": "CASO DE ESTUDIO",
    "case_text": "Cada planta solar registrada, independientemente de su estado operativo actual.",
    "qualitative_vars": "Variables Cualitativas",
    "nominals": "Nominales",
    "ordinals": "Ordinales",
    "cap_plant_name": "Nombre de la Planta",
    "cap_country": "País",
    "cap_curvature": "Tipo de Curvatura",
    "cap_op_status": "Estado Operacional",
    "cap_slope": "Tipo de Pendiente",
    "cap_aspect": "Tipo de Aspecto",
    "cap_aptitude": "Tipo de Aptitud Solar",
    "cap_size": "Tamaño",
    "cap_wind_dir": "Dirección del viento predominante",
    "quant_vars": "Variables Cuantitativas",
    "discretes": "Discretas",
    "continuous": "Continuas",
    "cap_aptitude_rounded": "Aptitud Solar Redondeada",
    "cap_lat": "Latitud",
    "cap_long": "Longitud",
    "cap_elev": "Elevación",
    "cap_area": "Área",
    "cap_slope": "Pendiente",
    "cap_curvature": "Curvatura",
    "cap_aspect": "Aspecto",
    "cap_ghi": "GHI",
    "cap_aptitude": "Aptitud Solar",
    "cap_humidity": "Humedad",
    "cap_wind_speed": "Velocidad del Viento",
    "cap_wind_dir": "Dirección del Viento",
    "cap_temp": "Temperatura Ambiente",
    "cap_tilt": "Inclinación Óptima",
    "cap_power": "Potencial Fotovoltaico",
    "cap_capacity": "Capacidad",
    "cap_dist_road": "Distancia a la Vía",
    "table_vars_title": "TABLA DE VARIABLES",
    "open_doc": "Abrir Documento Completo",
    "table_indicators_title": "TABLA DE INDICADORES",
    "vars_title": "VARIABLES",
    "ds_title": "ESTADÍSTICA DESCRIPTIVA",
    "is_qual_vars": "Variables Cualitativas",
    "is_title": "ESTADÍSTICA INFERENCIAL",
    "reg_models_title": "MODELOS DE REGRESIÓN",
    "simple_reg_title": "REGRESIÓN SIMPLE",
    "reg_linear": "Regresión Lineal",
    "reg_potential": "Regresión Potencial",
    "reg_exponential": "Regresión Exponencial",
    "reg_logarithmic": "Regresión Logarítmica",
    "reg_polynomial": "Regresión Polinómica",
    "multiple_reg_title": "REGRESIÓN MÚLTIPLE",
    "reg_multiple_3d": "Regresión Múltiple 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Uso de Machine Learning para la Predicción de Potencial Fotovoltaico (MWh/año) y Clasificación de Aptitud Solar Global",
    "ml_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "ml_problem_text": "A nivel mundial, la expansión solar es clave para la transición energética; sin embargo, la variabilidad geográfica dificulta evaluar la viabilidad de nuevos proyectos. Ante este panorama, el análisis estadístico y el Machine Learning permiten procesar datos históricos geoespaciales para predecir variables críticas como la aptitud solar y el potencial fotovoltaico (MWh/año). El uso de estos modelos busca optimizar la planificación técnica, aplicando este análisis global en un caso de estudio local centrado en las facultades de FIGEMPA y Ciencias Químicas.",
    "ml_obj_title": "OBJETIVO",
    "ml_obj_text": "Desarrollar un modelo de Machine Learning basado en redes neuronales que permita clasificar el nivel de aptitud y predecir la generación energética a partir de datos climáticos y operativos, con el fin de proporcionar una herramienta de alta precisión para la toma de decisiones en proyectos renovables.",
    "ml_method_title": "METODOLOGÍA",
    "ml_model_title": "MODELO",
    "ml_colab_header": "Explora en Google Colab",
    "ml_colab_desc": "Haz clic en los siguientes botones para acceder a los cuadernos interactivos.",
    "ml_notebook_reg": "Notebook de Regresión",
    "ml_notebook_class": "Notebook de Clasificación",
    "ml_conclusion_title": "CONCLUSIÓN",
    "ml_conclusion_text": "Se ha logrado implementar un modelo de Machine Learning capaz de clasificar el nivel de aptitud y predecir el potencial fotovoltaico (MWh/año) a partir de variables geoespaciales y climáticas globales. Este enfoque no solo optimiza la precisión en la evaluación de recursos renovables para el caso de estudio de la FIGEMPA y la Facultad de Ciencias Químicas, sino que también posee una alta capacidad de escalabilidad para analizar la viabilidad energética en cualquier región del mundo mediante el ajuste del conjunto de datos de entrada.",
    "about_us_title": "Sobre Nosotros",
    "about_p1": "Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.",
    "about_p2": "Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energías sostenibles.",
    "about_p3": "Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.",
    "team_title": "Nuestro Equipo",
    "team_intro": "A continuación tienes disponible los curriculum vitae de cada uno de los integrantes que conforman este grupo de trabajo.",
    "uc_title": "En construcción",
    "tools_title": "HERRAMIENTAS",
    "tools_list_title": "HERRAMIENTAS UTILIZADAS",
    "bot_default": "No estoy seguro de cómo responder eso. Puedes escribirme: 'proyecto', 'variables', 'metodología', 'regresión', 'machine learning', 'herramientas' o 'contacto'.",
    "bot_welcome": "Hola! Soy el Asistente Solar 🤖. ¿Qué deseas consultar hoy?",
    "bot_resp_var": "Las variables incluyen <b>cualitativas</b> y <b>cuantitativas</b>. Puedes verlas en detalle aquí: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Tabla de Variables</b></a>",
    "bot_resp_met": "La metodología se basa en la <b>recolección de datos</b>. Detalles completos en la sección: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Metodología</b></a>",
    "bot_resp_reg": "Aplicamos regresiones <b>simples</b> y <b>múltiple 3D</b>. Accede a los resultados aquí: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>Ver Modelos</b></a>",
    "bot_resp_team": "El equipo es: <b>Gualan, Miles, Neira, Ramírez y Sarmiento</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>Sobre Nosotros</b></a>",
    "bot_resp_tools": "Usamos un ecosistema de <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>Ver herramientas</b></a>",
    "bot_resp_ml": "Hacemos <b>predicción de potencial fotovoltaico</b> y <b>clasificación de aptitud solar</b>.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Ir al apartado de Machine Learning</b></a><br><br>O visita nuestros Notebooks:<br><a href='https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing' target='_blank'><b>📓 Cuaderno de Regresión</b></a><br><a href='https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing' target='_blank'><b>📓 Cuaderno de Clasificación</b></a>",
    "bot_resp_map": "Puedes ver el mapa interactivo aquí: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Ir al Mapa</b></a>",
    "bot_resp_intro": "Este proyecto analiza <b>plantas solares a nivel mundial</b>. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>Ver Introducción</b></a>",
    "bot_contact": "¡Claro! Puedes escribirnos directamente a nuestro WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Hablar con el equipo</b></a>",
    "btn_intro": "Sobre el Proyecto",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_contact": "Hablar con el equipo",
    "tools_description": "Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes clave como HTML5, CSS y JavaScript. Complementamos este flujo de trabajo accediendo a datos científicos de Kaggle, NASA, Copernicus, OpenTopography y el servicio de cambio climático de ECMWF, mientras que para el análisis geoespacial y la identificación de derrames utilizamos QGIS, ArcGIS y Google Earth. Finalmente, aseguramos la productividad y difusión de resultados mediante herramientas colaborativas como GitHub, Google Drive, RPubs, Microsoft Teams y la suite de Office, impulsando así un enfoque moderno, eficiente y de alta precisión.",
    "pop_symbolic": "U = { x | x ∈ Plantas Solares ∧ Ubicación(x) ∈ \"Mundo\" }",
    "ind_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M={ x | x ∈ Plantas solares ∧ Ubicación(x) ∈ \"Mundo\" ∧ Entidad(x) ∈ \"Global Energy Monitor\" }",
    "case_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 58978",
    "map_eyebrow": "Visualización Global",
    "map_sub": "Explora la distribución mundial de plantas solares fotovoltaicas, filtra por estado operativo e inspecciona datos individuales de cada instalación.",
    "map_stat_plants": "plantas registradas",
    "map_stat_coverage": "Cobertura <strong>mundial</strong>",
    "map_stat_filters": "Filtros por <strong>estado operativo</strong>",
    "map_source": "Datos obtenidos de Global Energy Monitor · Procesados con QGIS",
    "about_intro_sub": "Contexto del proyecto, planteamiento del problema, mapa geográfico y objetivos del análisis estadístico.",
    "ds_sub": "Metodología, tabla de variables, indicadores y distribución de cada variable cualitativa y cuantitativa del dataset.",
    "is_sub": "Pruebas de hipótesis y análisis inferencial aplicado a las variables cualitativas y cuantitativas de las plantas solares.",
    "reg_sub": "Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset.",
    "tools_sub": "Ecosistema tecnológico de análisis, visualización y desarrollo utilizado a lo largo del proyecto.",
    "about_us_sub": "Estudiantes de Ingeniería en Petróleos de la FIGEMPA – Universidad Central del Ecuador.",
    "chip_reg": "Regresión"
  },

  en: {
    "nav_map": "Interactive Map",
    "nav_home": "Home",
    "nav_intro": "Introduction",
    "nav_problem": "Problem Statement",
    "nav_geo": "Geographical Location Map",
    "nav_obj": "Objectives",
    "nav_desc_stats": "Descriptive Statistics",
    "nav_methodology": "Methodology",
    "nav_vars_table": "Variable Tables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Inferential Statistics",
    "nav_reg_models": "Regression Models",
    "nav_ml": "Machine Learning",
    "nav_more": "More",
    "nav_tools": "Tools",
    "nav_about": "About Us",
    "hero_title_centered": "STATISTICAL ANALYSIS OF SOLAR PLANTS WORLDWIDE",
    "hero_lead_centered": "Statistical data analysis, applying descriptive and inferential methods using R language in RStudio",
    "motivaciones_text": "As students of the Central University of Ecuador, we developed this project to apply statistics as a fundamental tool in data analysis. Our goal is not only to interpret information but also to highlight the relevance of statistics in informed decision-making within the professional field related to our career.",
    "footer_copy": "COPYRIGHT © 2026, GROUP 1 - STATISTICS AND PROBABILITY.",
    "footer_rights": "ALL RIGHTS RESERVED.",
    "chat_title": "Solar Assistant 🤖",
    "chat_send": "Send",
    "important_title": "IMPORTANT!",
    "important_text": "This project is exclusively academic and is under continuous development. The data and analysis presented are used solely for educational purposes.",
    "mision_vision_title": "MISSION - VISION",
    "mision_title": "Mission",
    "mision_text": "Apply statistical methods to identify and quantify the factors that determine the real efficiency of solar plants worldwide.",
    "vision_title": "Vision",
    "vision_text": "To become a key statistical analysis revealing true trends and the global potential of solar energy.",
    "motivaciones_title": "PROJECT MOTIVATIONS",
    "map_title": "INTERACTIVE MAP",
    "about_intro_title": "INTRODUCTION",
    "about_problem_title": "PROBLEM STATEMENT",
    "about_problem_p1": "Analyzing solar power plants worldwide is important because it allows us to measure their actual efficiency and understand which factors affect their energy production. By studying this data, we can identify the best conditions for harnessing solar energy and reducing failures in electricity generation.",
    "about_problem_p2": "The dataset used for this project can be obtained from the <a href='https://github.com/cimejia/solarPV/' target='_blank' class='bold-text'>project repository</a>. This dataset is the result of collaboration between our team and the Department of Computer Technology at the University of Alicante, Spain, using information obtained from the Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas, and Copernicus platforms, meeting the established criteria for the project.",
    "about_map_title": "GEOGRAPHIC LOCATION MAP",
    "about_obj_title": "OBJECTIVES",
    "about_obj_gen_header": "General Objective:",
    "about_obj_gen_text": "To apply statistics and machine learning to examine solar power plants worldwide, using computational tools.",
    "about_obj_spec_header": "Specific Objectives:",
    "about_obj_spec_1": "To understand the current state of solar power plants worldwide through their most important characteristics and statistical measures.",
    "about_obj_spec_2": "To use a probability model to draw conclusions about solar power plants worldwide based on sample results.",
    "about_obj_spec_3": "To deduce relationships between variables of solar power plants worldwide in order to make estimations.",
    "met_title": "METHODOLOGY",
    "pop_title": "POPULATION",
    "textual": "Textual:",
    "pop_text": "All solar plants worldwide.",
    "symbolic": "Symbolic:",
    "ind_title": "INDIVIDUAL",
    "ind_text": "Each solar plant worldwide.",
    "samp_title": "SAMPLE",
    "samp_text": "A representative subset of solar plants worldwide that includes the solar plants registered in the Global Energy Monitor database.",
    "case_title": "CASE STUDY",
    "case_text": "Each registered solar plant, regardless of its current operational status.",
    "qualitative_vars": "Qualitative Variables",
    "nominals": "Nominals",
    "ordinals": "Ordinals",
    "cap_plant_name": "Plant Name",
    "cap_country": "Country",
    "cap_curvature": "Curvature Type",
    "cap_op_status": "Operational Status",
    "cap_slope": "Slope Type",
    "cap_aspect": "Aspect Type",
    "cap_aptitude": "Solar Aptitude Type",
    "cap_size": "Size",
    "cap_wind_dir": "Predominant Wind Direction",
    "quant_vars": "Quantitative Variables",
    "discretes": "Discrete",
    "continuous": "Continuous",
    "cap_aptitude_rounded": "Rounded Solar Aptitude",
    "cap_lat": "Latitude",
    "cap_long": "Longitude",
    "cap_elev": "Elevation",
    "cap_area": "Area",
    "cap_slope": "Slope",
    "cap_curvature": "Curvature",
    "cap_aspect": "Aspect",
    "cap_ghi": "GHI",
    "cap_aptitude": "Solar Aptitude",
    "cap_humidity": "Humidity",
    "cap_wind_speed": "Wind Speed",
    "cap_wind_dir": "Wind Direction",
    "cap_temp": "Ambient Temperature",
    "cap_tilt": "Optimal Tilt",
    "cap_power": "Photovoltaic Potential",
    "cap_capacity": "Capacity",
    "cap_dist_road": "Distance to Road",
    "table_vars_title": "VARIABLES TABLE",
    "open_doc": "Open Full Document",
    "table_indicators_title": "INDICATORS TABLE",
    "vars_title": "VARIABLES",
    "ds_title": "DESCRIPTIVE STATISTICS",
    "is_qual_vars": "Qualitative Variables",
    "is_title": "INFERENTIAL STATISTICS",
    "reg_models_title": "REGRESSION MODELS",
    "simple_reg_title": "SIMPLE REGRESSION",
    "reg_linear": "Linear Regression",
    "reg_potential": "Potential Regression",
    "reg_exponential": "Exponential Regression",
    "reg_logarithmic": "Logarithmic Regression",
    "reg_polynomial": "Polynomial Regression",
    "multiple_reg_title": "MULTIPLE REGRESSION",
    "reg_multiple_3d": "Multiple Regression 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Use of Machine Learning for Photovoltaic Potential (MWh/year) Prediction and Global Solar Aptitude Classification",
    "ml_problem_title": "PROBLEM STATEMENT",
    "ml_problem_text": "Globally, solar expansion is key to the energy transition; however, geographical variability makes it difficult to assess the viability of new projects. Against this backdrop, statistical analysis and Machine Learning allow processing historical geospatial data to predict critical variables such as solar aptitude and photovoltaic potential (MWh/year). The use of these models seeks to optimize technical planning, applying this global analysis in a local case study focused on the FIGEMPA and Chemical Sciences faculties.",
    "ml_obj_title": "OBJECTIVE",
    "ml_obj_text": "Develop a Machine Learning model based on neural networks that allows for classifying the level of aptitude and predicting energy generation based on climatic and operational data, in order to provide a high-precision tool for decision-making in renewable projects.",
    "ml_method_title": "METHODOLOGY",
    "ml_model_title": "MODEL",
    "ml_colab_header": "Explore in Google Colab",
    "ml_colab_desc": "Click the following buttons to access the interactive notebooks.",
    "ml_notebook_reg": "Regression Notebook",
    "ml_notebook_class": "Classification Notebook",
    "ml_conclusion_title": "CONCLUSION",
    "ml_conclusion_text": "A Machine Learning model capable of classifying the level of aptitude and predicting photovoltaic potential (MWh/year) from global geospatial and climatic variables has been successfully implemented. This approach not only optimizes the precision in evaluating renewable resources for the FIGEMPA and Chemical Sciences faculty case study, but also possesses high scalability to analyze energy viability in any region of the world by adjusting the input dataset.",
    "about_us_title": "About Us",
    "about_p1": "We are second-semester students at the Central University of Ecuador, belonging to the Faculty of Engineering in Geology, Mines, Petroleum, and Environmental (FIGEMPA), in the Petroleum Engineering program. Within the framework of the Statistics course, we present this project with the goal of offering clear, pertinent, and accessible information for those interested in this area of knowledge.",
    "about_p2": "As future professionals, we aspire to be trained as committed, prepared, and passionate engineers, capable of contributing to the development of an industry that advances constantly thanks to technological innovation and the scientific study of sustainable energies.",
    "about_p3": "We trust in the value of joint learning and the importance of sharing knowledge. Therefore, this work not only constitutes a component of our academic training but also a contribution to fostering a more solid understanding of a field as dynamic and relevant in the current context.",
    "team_title": "Our Team",
    "team_intro": "Below you have available the resumes of each of the members who make up this working group.",
    "uc_title": "Under Construction",
    "tools_title": "TOOLS",
    "tools_list_title": "TOOLS USED",
    "bot_default": "I'm not sure how to answer that. You can write: 'project', 'variables', 'methodology', 'regression', 'machine learning', 'tools', or 'contact'.",
    "bot_welcome": "Hello! I am the Solar Assistant 🤖. What would you like to consult today?",
    "bot_resp_var": "Variables include <b>qualitative</b> and <b>quantitative</b> types. You can see them in detail here: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Variable Table</b></a>",
    "bot_resp_met": "The methodology is based on <b>data collection</b>. Full details in the section: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Methodology</b></a>",
    "bot_resp_reg": "We apply <b>simple</b> and <b>multiple 3D</b> regressions. Access the results here: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>View Models</b></a>",
    "bot_resp_team": "The team is: <b>Gualan, Miles, Neira, Ramírez, and Sarmiento</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>About Us</b></a>",
    "bot_resp_tools": "We use an ecosystem of <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>View tools</b></a>",
    "bot_resp_ml": "We perform <b>photovoltaic potential prediction</b> and <b>solar aptitude classification</b>.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Go to Machine Learning section</b></a><br><br>Or visit our Notebooks:<br><a href='https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing' target='_blank'><b>📓 Regression Notebook</b></a><br><a href='https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing' target='_blank'><b>📓 Classification Notebook</b></a>",
    "bot_resp_map": "You can view the interactive map here: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Go to Map</b></a>",
    "bot_resp_intro": "This project analyzes <b>solar plants worldwide</b>. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>View Introduction</b></a>",
    "bot_contact": "Sure! You can write to us directly on our WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Talk to the team</b></a>",
    "btn_intro": "About the Project",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_contact": "Talk to the team",
    "tools_description": "For the development of our project, we employed an advanced technological ecosystem that integrates analysis and development platforms such as Posit Cloud, RStudio, Google Colab, VS Code, and LaTeX, along with key languages ​​like HTML5, CSS, and JavaScript. We complemented this workflow by accessing scientific data from Kaggle, NASA, Copernicus, OpenTopography, and the ECMWF Climate Change Service, while for geospatial analysis and spill identification, we used QGIS, ArcGIS, and Google Earth. Finally, we ensured productivity and dissemination of results through collaborative tools such as GitHub, Google Drive, RPubs, Microsoft Teams, and the Office suite, thus fostering a modern, efficient, and highly accurate approach.",
    "pop_symbolic": "U = { x | x ∈ Solar Plants ∧ Location(x) ∈ \"World\" }",
    "ind_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M={ x | x ∈ Solar plants ∧ Location(x) ∈ \"World\" ∧ Entity(x) ∈ \"Global Energy Monitor\" }",
    "case_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., 58978",
    "map_eyebrow": "Global Visualization",
    "map_sub": "Explore the worldwide distribution of solar photovoltaic plants, filter by operational status, and inspect individual data for each installation.",
    "map_stat_plants": "registered plants",
    "map_stat_coverage": "<strong>Worldwide</strong> coverage",
    "map_stat_filters": "Filters by <strong>operational status</strong>",
    "map_source": "Data from Global Energy Monitor · Processed with QGIS",
    "about_intro_sub": "Project context, problem statement, geographic map, and objectives of the statistical analysis.",
    "ds_sub": "Methodology, variable tables, indicators, and distribution of each qualitative and quantitative variable in the dataset.",
    "is_sub": "Hypothesis testing and inferential analysis applied to the qualitative and quantitative variables of solar plants.",
    "reg_sub": "Simple regressions (linear, potential, exponential, logarithmic, and polynomial) and 3D multiple regression between dataset variables.",
    "tools_sub": "Technological ecosystem for analysis, visualization, and development used throughout the project.",
    "about_us_sub": "Petroleum Engineering students from FIGEMPA – Central University of Ecuador.",
    "chip_reg": "Regression"
  },
};

let currentLang = 'es';
localStorage.setItem('lang', currentLang);

const htmlKeys = ['bot_resp_var', 'bot_resp_met', 'bot_resp_reg', 'bot_resp_team', 'bot_resp_tools', 'bot_resp_ml', 'bot_resp_map', 'bot_resp_intro', 'bot_contact', 'about_problem_p2', 'ind_symbolic', 'case_symbolic', 'map_stat_coverage', 'map_stat_filters']; // Agrega todas las que tengan enlaces o etiquetas

function translateUI() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[currentLang] && translations[currentLang][key];
    if (text) {
      if (htmlKeys.includes(key)) {
        el.innerHTML = text;
      } else {
        let textNodeFound = false;
        for (let i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim() !== '') {
            el.childNodes[i].nodeValue = text;
            textNodeFound = true;
            break;
          }
        }
        if (!textNodeFound) {
          el.textContent = text;
        }
      }
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'langToggle') {
    currentLang = (currentLang === 'es') ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    translateUI();

    const chatbotModal = document.getElementById('chatbotModal');
    const chatbox = document.getElementById('chatbox');
    if (chatbotModal && chatbotModal.style.display === 'block' && chatbox) {
      chatbox.innerHTML = '';
      if (window.showOptions) {
        window.showOptions();
      }
    }
  }
});

/* -------------------------------------------------------------------------- */
/* TU CÓDIGO ORIGINAL                                */
/* -------------------------------------------------------------------------- */
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
        || idLink === "more-link"
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

    const pcLinkElement = e.target.closest('.navlink-deploy');
    if (pcLinkElement) {
      if (pcLinkElement.id === "about-proyect-link") {
        mainElement.innerHTML = aboutProyectCode;
      } else if (pcLinkElement.id === "descriptive-statistics-link") {
        mainElement.innerHTML = descriptiveStatisticsCode;
      } else if (pcLinkElement.id === "more-link") {
        mainElement.innerHTML = toolsCode + aboutUsHTML;
      }
    }
    translateUI();
  });
});




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
      <style>
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: .7rem;
          font-weight: 600;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #fbbf24;
          background: rgba(251,191,36,.12);
          border: 1px solid rgba(251,191,36,.3);
          border-radius: 999px;
          padding: 5px 16px;
          margin-bottom: 22px;
          animation: fadeSlideDown .7s ease both;
        }
        .hero-eyebrow i { font-size: .75rem; }

        .hero-title-main {
          font-size: clamp(1.7rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: .02em;
          background: linear-gradient(135deg, #fff 0%, #fbbf24 45%, #10b981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 20px;
          animation: fadeSlideDown .8s ease .1s both;
          text-shadow: none;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeSlideDown .8s ease .2s both;
        }
        .hero-divider::before,
        .hero-divider::after {
          content: '';
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(251,191,36,.5));
        }
        .hero-divider::after {
          background: linear-gradient(90deg, rgba(251,191,36,.5), transparent);
        }
        .hero-divider-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #fbbf24;
          box-shadow: 0 0 8px rgba(251,191,36,.8);
        }

        .hero-lead-main {
          font-size: clamp(.9rem, 2vw, 1.1rem);
          color: rgba(255,255,255,.75);
          max-width: 600px;
          margin: 0 auto 28px;
          line-height: 1.7;
          font-weight: 300;
          animation: fadeSlideDown .8s ease .3s both;
        }

        .hero-chips {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          animation: fadeSlideDown .8s ease .4s both;
        }
        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: .75rem;
          font-weight: 500;
          color: rgba(255,255,255,.8);
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 999px;
          padding: 6px 14px;
          backdrop-filter: blur(6px);
        }
        .hero-chip i { color: #fbbf24; font-size: .78rem; }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      </style>

      <div class="hero-eyebrow">
        <i class="fas fa-sun"></i>
        <span>FIGEMPA · Universidad Central del Ecuador · 2026</span>
      </div>

      <h1 class="hero-title-main" data-i18n="hero_title_centered">
        ANÁLISIS ESTADÍSTICO DE PLANTAS SOLARES A NIVEL MUNDIAL
      </h1>

      <div class="hero-divider"><span class="hero-divider-dot"></span></div>

      <p class="hero-lead-main" data-i18n="hero_lead_centered">
        Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio
      </p>

      <div class="hero-chips">
        <span class="hero-chip"><i class="fas fa-chart-line"></i> <span data-i18n="nav_desc_stats">Estadística Descriptiva</span></span>
        <span class="hero-chip"><i class="fas fa-flask"></i> <span data-i18n="nav_inf_stats">Estadística Inferencial</span></span>
        <span class="hero-chip"><i class="fas fa-project-diagram"></i> <span data-i18n="chip_reg">Regresión</span></span>
        <span class="hero-chip"><i class="fas fa-robot"></i> <span data-i18n="nav_ml">Machine Learning</span></span>
        <span class="hero-chip"><i class="fab fa-r-project"></i> RStudio</span>
      </div>
    </div>
  </section>

  <section class="important section-box">
    <h2 class="title-2" data-i18n="important_title">¡IMPORTANTE!</h2>
    <p data-i18n="important_text">Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.</p>
  </section>

  <section class="mision-vision section-box">
    <h2 class="title-2" data-i18n="mision_vision_title">MISIÓN - VISIÓN</h2>
    <div class="mision-vision-container">
        <div class="mision">
            <h3 class="title-3" data-i18n="mision_title">Misión</h3>
            <p data-i18n="mision_text">Aplicar métodos estadísticos para identificar y cuantificar los factores que determinan la eficiencia real de las plantas solares a nivel mundial.</p>
        </div>
        <div class="vision">
            <h3 class="title-3" data-i18n="vision_title">Visión</h3>
            <p data-i18n="vision_text">Convertirnos en un análisis estadístico clave que revele las verdaderas tendencias y el potencial global de la energía solar.</p>
        </div>
    </div>
  </section>

  <section id="motivation" class="motivation section-box">
    <div class="card-box">
      <div class="motivation-text-container">
        <h2 class="title-2" data-i18n="motivaciones_title">MOTIVACIONES DEL PROYECTO</h2>
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

  const videoWrapper = document.querySelector(".hero-video-wrap");
  if (videoWrapper) {
    videoWrapper.setAttribute("style", `margin-top:${header.offsetHeight}px`);
  }

  translateUI();
});




/* ----------------------------
    INTERACTIVE MAP
---------------------------- */
const interactiveMapCode = `
  <style>
    .map-section-wrap {
      width: 100%;
      background: #0b0f1a;
      padding-bottom: 48px;
      margin-top: ${header.offsetHeight}px;
    }

    /* ── Hero banner ── */
    .map-hero {
      position: relative;
      width: 100%;
      padding: 52px 32px 44px;
      text-align: center;
      overflow: hidden;
      background: linear-gradient(135deg, #0b0f1a 0%, #111827 50%, #0b0f1a 100%);
    }
    .map-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 70% 60% at 20% 50%, rgba(251,191,36,.07) 0%, transparent 70%),
        radial-gradient(ellipse 60% 50% at 80% 50%, rgba(16,185,129,.06) 0%, transparent 70%);
      pointer-events: none;
    }
    .map-hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: .72rem;
      font-weight: 600;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: #fbbf24;
      background: rgba(251,191,36,.1);
      border: 1px solid rgba(251,191,36,.25);
      border-radius: 999px;
      padding: 5px 14px;
      margin-bottom: 18px;
    }
    .map-hero-eyebrow i { font-size: .8rem; }
    .map-hero h1 {
      font-size: clamp(1.9rem, 4vw, 3rem);
      font-weight: 700;
      letter-spacing: .04em;
      background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 40%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin: 0 0 12px;
      line-height: 1.15;
    }
    .map-hero-sub {
      font-size: .95rem;
      color: rgba(255,255,255,.55);
      max-width: 560px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* ── Stats row ── */
    .map-stats-row {
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 28px;
    }
    .map-stat-chip {
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,.05);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 12px;
      padding: 10px 18px;
      font-size: .85rem;
      color: rgba(255,255,255,.8);
    }
    .map-stat-chip i {
      color: #fbbf24;
      font-size: .9rem;
    }
    .map-stat-chip strong {
      color: #fff;
      font-weight: 600;
    }

    /* ── Map frame ── */
    .map-frame-outer {
      position: relative;
      width: calc(100% - 64px);
      max-width: 1400px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:
        0 0 0 1px rgba(251,191,36,.18),
        0 8px 40px rgba(0,0,0,.7),
        0 0 80px rgba(251,191,36,.06);
      animation: mapFadeIn .5s ease both;
    }
    @keyframes mapFadeIn {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .map-frame-bar {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 10px 18px;
      background: #161d2f;
      border-bottom: 1px solid rgba(255,255,255,.07);
    }
    .map-frame-dot {
      width: 11px; height: 11px;
      border-radius: 50%;
    }
    .map-frame-dot:nth-child(1) { background: #ff5f57; }
    .map-frame-dot:nth-child(2) { background: #febc2e; }
    .map-frame-dot:nth-child(3) { background: #28c840; }
    .map-frame-url {
      flex: 1;
      margin: 0 12px;
      padding: 4px 12px;
      border-radius: 6px;
      background: rgba(255,255,255,.06);
      font-size: .72rem;
      color: rgba(255,255,255,.4);
      text-align: center;
      letter-spacing: .02em;
      border: 1px solid rgba(255,255,255,.08);
    }
    .map-frame-outer iframe {
      display: block;
      width: 100%;
      height: max(720px, 80vh);
      border: none;
    }

    /* ── Bottom accent ── */
    .map-bottom-accent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
      font-size: .78rem;
      color: rgba(255,255,255,.3);
      letter-spacing: .06em;
    }
    .map-bottom-accent::before,
    .map-bottom-accent::after {
      content: '';
      flex: 1;
      max-width: 120px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
    }
  </style>

  <div class="map-section-wrap">

    <!-- Hero banner -->
    <div class="map-hero">
      <div class="map-hero-eyebrow">
        <i class="fas fa-globe"></i> <span data-i18n="map_eyebrow">Visualización Global</span>
      </div>
      <h1 data-i18n="map_title">MAPA INTERACTIVO</h1>
      <p class="map-hero-sub" data-i18n="map_sub">
        Explora la distribución mundial de plantas solares fotovoltaicas, filtra por estado operativo e inspecciona datos individuales de cada instalación.
      </p>
      <div class="map-stats-row">
        <div class="map-stat-chip"><i class="fas fa-solar-panel"></i> <strong>58,978</strong> <span data-i18n="map_stat_plants">plantas registradas</span></div>
        <div class="map-stat-chip"><i class="fas fa-globe-americas"></i> <span data-i18n="map_stat_coverage">Cobertura <strong>mundial</strong></span></div>
        <div class="map-stat-chip"><i class="fas fa-filter"></i> <span data-i18n="map_stat_filters">Filtros por <strong>estado operativo</strong></span></div>
      </div>
    </div>

    <!-- Map container -->
    <div class="map-frame-outer">
      <div class="map-frame-bar">
        <span class="map-frame-dot"></span>
        <span class="map-frame-dot"></span>
        <span class="map-frame-dot"></span>
        <span class="map-frame-url">🌍 Global Solar Plants — Interactive Map</span>
      </div>
      <iframe
        src="map/map.html"
        title="Mapa Interactivo Solar"
        allowfullscreen>
      </iframe>
    </div>

    <p class="map-bottom-accent" data-i18n="map_source">
      Datos obtenidos de Global Energy Monitor · Procesados con QGIS
    </p>

  </div>
`;

interactiveMapLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.innerHTML = interactiveMapCode;
  translateUI();
});



/* ----------------------------
   ABOUT PROJECT
---------------------------- */
// About project
const aboutProyectCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-book-open"></i> <span data-i18n="nav_intro">Introducción</span></div>
    <h1 data-i18n="about_intro_title">INTRODUCCIÓN</h1>
    <p class="section-hero-sub" data-i18n="about_intro_sub">Contexto del proyecto, planteamiento del problema, mapa geográfico y objetivos del análisis estadístico.</p>
  </div>

  <section class="problem section-box" id="problem">
    <h2 class="title-2" data-i18n="about_problem_title">PLANTEAMIENTO DEL PROBLEMA</h2>
    <p class="problem-desc" data-i18n="about_problem_p1">El análisis de las plantas solares a nivel mundial es importante porque permite medir su eficiencia real y entender qué factores afectan su producción de energía. Al estudiar estos datos, se pueden identificar las mejores condiciones para aprovechar el sol y reducir los fallos en la generación eléctrica.</p>
    <p class="problem-desc" data-i18n="about_problem_p2">El dataset utilizado para este proyecto se puede obtener desde el <a href="https://github.com/cimejia/solarPV/" target="_blank" class="bold-text">repositorio del proyecto</a>. Este dataset es el resultado de la colaboración entre nuestro equipo de trabajo y el Departamento de Tecnología de Computación de la Universidad de Alicante, España, a partir de la información obtenida de las plataformas Kaggle, NASA Power Data, Global Solar Atlas, Global Wind Atlas y Copernicus cumpliendo con los criterios establecidos para el proyecto.</p>
  </section>

  <section class="map-container section-box" id="map">
    <h2 class="title-2" data-i18n="about_map_title">MAPA DE UBICACIÓN GEOGRÁFICA</h2>
    <iframe 
      src="https://drive.google.com/file/d/1GBVQRhBoctEpF-59a6TJw813tEui_zHr/preview" 
      class="map-iframe"
    ></iframe>
  </section>

  <section class="objectives section-box" id="objectives">
    <h2 class="title-2" data-i18n="about_obj_title">OBJETIVOS</h2>
    <h3 class="title-3" data-i18n="about_obj_gen_header">Objetivo General:</h3> 
    <p class="general-objective" data-i18n="about_obj_gen_text">Aplicar la estadística y Machine learning para examinar las plantas solares a nivel mundial, mediante el uso de herramientas computacionales.</p>
    <h3 class="title-3" data-i18n="about_obj_spec_header">Objetivos Específicos:</h3>
    <ol class="objectives-list">
        <li class="objectives-items" data-i18n="about_obj_spec_1">Conocer la situación actual de las plantas solares a nivel mundial a través de sus características más importantes y medidas estadísticas.</li>
        <li class="objectives-items" data-i18n="about_obj_spec_2">Emplear un modelo de probabilidad para establecer conclusiones sobre las plantas solares en el mundo a partir de los resultados de muestra.</li>
        <li class="objectives-items" data-i18n="about_obj_spec_3">Deducir relaciones entre variables de las plantas solares a nivel mundial con el fin de realizar estimaciones.</li>
    </ol>
  </section>
`;

navlProjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = aboutProyectCode;
    translateUI();
  })
});




/* ----------------------------
DESCRIPTIVE STATISTICS
---------------------------- */
// Descriptive Statistics parts
const dSMethodology = `
  <section class="section-box ds-methodology-section" id="ds-methodology">
    <h2 class="title-2" data-i18n="met_title">METODOLOGÍA</h2>
    <div class="met-container">
      <article class="population">
        <h3 class="title-3" data-i18n="pop_title">POBLACIÓN</h3>
        <h4 class="title-4" data-i18n="textual">Textual:</h4>
        <p data-i18n="pop_text">Todas la plantas solares a nivel mundial.</p>
        <h4 class="title-4" data-i18n="symbolic">Simbólico:</h4>
        <p data-i18n="pop_symbolic">U = { x | x ∈ Plantas Solares ∧ Ubicación(x) ∈ "Mundo" }</p>
      </article>
      <article class="bloke">
        <h3 class="title-3" data-i18n="ind_title">INDIVIDUO</h3>
        <h4 class="title-4" data-i18n="textual">Textual:</h4>
        <p data-i18n="ind_text">Cada planta solar a nivel mundial.</p>
        <h4 class="title-4" data-i18n="symbolic">Simbólico:</h4>
        <p data-i18n="ind_symbolic">X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +&#8734;</p>
      </article>
      <article class="sample">
        <h3 class="title-3" data-i18n="samp_title">MUESTRA</h3>
        <h4 class="title-4" data-i18n="textual">Textual:</h4>
        <p data-i18n="samp_text">Un subconjunto representativo de plantas solares a nivel mundial que abarca las plantas solares registradas en la base de datos de Global Energy Monitor.</p>
        <h4 class="title-4" data-i18n="symbolic">Simbólico:</h4>
        <p data-i18n="samp_symbolic">M={ x | x ∈ Plantas solares ∧ Ubicación(x) ∈ "Mundo" ∧ Entidad(x) ∈ "Global Energy Monitor" }</p>
      </article>
      <article class="study-case">
        <h3 class="title-3" data-i18n="case_title">CASO DE ESTUDIO</h3>
        <h4 class="title-4" data-i18n="textual">Textual:</h4>
        <p data-i18n="case_text">Cada planta solar registrada, independientemente de su estado operativo actual.</p>
        <h4 class="title-4" data-i18n="symbolic">Simbólico:</h4>
        <p data-i18n="case_symbolic">X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 58978</p>
      </article>
    </div>
  </section>
`;

const dSVariablesCualitatives = `
<article class="ds-vcualit-images">
  <h3 class="title-3" data-i18n="qualitative_vars">Variables Cualitativas</h3>

  <h4 class="title-4" data-i18n="nominals">Nominales</h4>
  <div class="ds-vcualit-nominals">
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/plant-name.webp" alt="Imagen representativa de la variable Nombre de planta" class="ds-vcualit-img">
        <figcaption data-i18n="cap_plant_name">Nombre de la Planta</figcaption>
      </figure>
    </span>

    <a href="https://rpubs.com/mssarmiento/1400052" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption data-i18n="cap_country">País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400054" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption data-i18n="cap_curvature">Tipo de Curvatura</figcaption>
      </figure>
    </a>
  </div>

  <h4 class="title-4" data-i18n="ordinals">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1400058" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption data-i18n="cap_op_status">Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400060" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption data-i18n="cap_slope">Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400061" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption data-i18n="cap_aspect">Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/mssarmiento/1400062" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption data-i18n="cap_aptitude">Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1400064" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption data-i18n="cap_size">Tamaño</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/mssarmiento/1400066" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption data-i18n="cap_wind_dir">Dirección del viento predominante</figcaption>
      </figure>
    </a>
  </div>
</article>
`;

const dSVariablesCuantitatives = `
<article class="ds-vcuanti-images">
  <h3 class="title-3" data-i18n="quant_vars">Variables Cuantitativas</h3>

  <h4 class="title-4" data-i18n="discretes">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="https://rpubs.com/mssarmiento/1400067" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aptitude_rounded">Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4" data-i18n="continuous">Continuas</h4>
  <div class="ds-vcuanti-continuos">
    <a href="https://rpubs.com/mssarmiento/1400070" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_lat">Latitud</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400071" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_long">Longitud</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400948" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_elev">Elevación</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400950" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_area">Área</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400963" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_slope">Pendiente</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400966" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_curvature">Curvatura</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400092" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aspect">Aspecto</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400090" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_ghi">GHI</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400105" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aptitude">Aptitud Solar</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400107" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_humidity">Humedad</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400109" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_wind_speed">Velocidad del Viento</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400110" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_wind_dir">Dirección del Viento</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400112" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_temp">Temperatura Ambiente</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400114" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_tilt">Inclinación Óptima</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1400119" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_power">Potencial Fotovoltaico</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1401015" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_capacity">Capacidad</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/mssarmiento/1401019" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Imagen representativa de la variable Distancia a la vía" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_dist_road">Distancia a la Vía</figcaption>
      </figure>
    </a>
  </div>
</article>
`;

const dSVariables = `
<section class="section-box ds-variable-tables" id="ds-variables-tables">
  
  <h2 class="title-2" data-i18n="table_vars_title">TABLA DE VARIABLES</h2>
  <div>
    <iframe class="varibles-table" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPdYlLX7_NKZ1VafXC-7KRWtlHjp6stlj6ywUzQzt_25XI3jXD4hpEY8u2JejFng/pubhtml?gid=436771283&&single=true&chrome=false&widget=false&headers=true"></iframe>
    
    <a href="https://docs.google.com/spreadsheets/d/1OxlxfP1gWkoZjoOgeI-uo8XXsAFGeRp0/edit?gid=436771283#gid=436771283"
      target="_blank"
      class="open-external-file"
      data-i18n="open_doc">
      Abrir Documento Completo
    </a>
  </div>

  <h2 class="title-2" data-i18n="table_indicators_title">TABLA DE INDICADORES</h2>
  <div>
    <iframe class="varibles-table" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSfSg1xyD8fXx6zGWAkHF_6MhmX-V1F1CcKGPEYPm2SEagGscrKvoFu7IeLm8onaw/pubhtml?gid=2064573701&amp;single=true&amp;chrome=false&amp;widget=false&amp;headers=true"></iframe>

    <a href="https://docs.google.com/spreadsheets/d/1J1y-nt62qz_h4md9Z-qXavRisDjFXZPO/edit?gid=2064573701#gid=2064573701"
      target="_blank"
      class="open-external-file last-open-external-file"
      data-i18n="open_doc">
      Abrir Documento Completo
    </a>
  </div>
</section>
<section class="section-box ds-variables-section" id="ds-variables">
  <h2 class="title-2" data-i18n="vars_title">VARIABLES</h2>
  ${dSVariablesCualitatives}
  ${dSVariablesCuantitatives}
</section>
`;

// Descriptive Statistics (DS) section
const descriptiveStatisticsCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-chart-bar"></i> <span data-i18n="nav_desc_stats">Estadística Descriptiva</span></div>
    <h1 data-i18n="ds_title">ESTADÍSTICA DESCRIPTIVA</h1>
    <p class="section-hero-sub" data-i18n="ds_sub">Metodología, tabla de variables, indicadores y distribución de cada variable cualitativa y cuantitativa del dataset.</p>
  </div>

  ${dSMethodology}
  ${dSVariables}
`;

navlDSLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = descriptiveStatisticsCode;
    translateUI();
  })
});




/* ----------------------------
   INFERENTIAL STATISTICS
---------------------------- */
// Inferential Statistics parts
const iSCualitativesVariables = `
<article class="ds-vcualit-images">
  <h3 class="title-3" data-i18n="is_qual_vars">Variables Cualitativas</h3>

  <h4 class="title-4" data-i18n="nominals">Nominales</h4>
  <div class="ds-vcualit-nominals">
    <span>
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/plant-name.webp" alt="Imagen representativa de la variable Nombre de planta" class="ds-vcualit-img">
        <figcaption data-i18n="cap_plant_name">Nombre de la Planta</figcaption>
      </figure>
    </span>

    <a href="https://rpubs.com/Caliche/1401348" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/country.webp" alt="Imagen representativa de la variable País." class="ds-vcualit-img"/>
        <figcaption data-i18n="cap_country">País</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Caliche/1401346" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/curvature-type.webp" alt="Imagen representativa de la variable Tipo de curvatura" class="ds-vcualit-img">
        <figcaption data-i18n="cap_curvature">Tipo de Curvatura</figcaption>
      </figure>
    </a>
  </div>

  <h4 class="title-4" data-i18n="ordinals">Ordinales</h4>
  <div class="ds-vcualit-ordinals">
    <a href="https://rpubs.com/mssarmiento/1401060" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/operational-status.webp" alt="Imagen representativa de la variable Estado operacional" class="ds-vcualit-img">
        <figcaption data-i18n="cap_op_status">Estado Operacional</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400190" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/slope-type.webp" alt="Imagen representativa de la variable Tipo de pendiente" class="ds-vcualit-img">
        <figcaption data-i18n="cap_slope">Tipo de Pendiente</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400195" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/aspect-type.webp" alt="Imagen representativa de la variable Tipo de aspecto" class="ds-vcualit-img">
        <figcaption data-i18n="cap_aspect">Tipo de Aspecto</figcaption>
      </figure>
    </a>

    <a href="https://rpubs.com/Fernando_Neira/1400192" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/solar-aptitude-type.webp" alt="Imagen representativa de la varible Aptitud solar" class="ds-vcualit-img">
        <figcaption data-i18n="cap_aptitude">Tipo de Aptitud Solar</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/Fernando_Neira/1400193" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/size.webp" alt="Imagen representativa de la varible Tamaño" class="ds-vcualit-img">
        <figcaption data-i18n="cap_size">Tamaño</figcaption>
      </figure>
    </a>
    
    <a href="https://rpubs.com/JULEY/1402624" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcualit/predominant-wind-direction.webp" alt="Imagen representativa de la varible Dirección del viento predominante" class="ds-vcualit-img">
        <figcaption data-i18n="cap_wind_dir">Dirección del viento predominante</figcaption>
      </figure>
    </a>
  </div>
</article>
`;

const iSCuantitativesVariables = `
<article class="ds-vcuanti-images">
  <h3 class="title-3" data-i18n="quant_vars">Variables Cuantitativas</h3>

  <h4 class="title-4" data-i18n="discretes">Discretas</h4>
  <div class="ds-vcuanti-discretes">
    <a href="https://rpubs.com/Fernando_Neira/1400189" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/sistema-solar-de-pv.webp" alt="Imagen representativa de la variable Aptitud Solar Redondeada" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aptitude_rounded">Aptitud Solar Redondeada</figcaption>
      </figure>
    </a>
  </div>
  
  <h4 class="title-4" data-i18n="continuous">Continuas</h4>
  <div class="ds-vcuanti-continuos">
    <a href="https://rpubs.com/JULEY/1404470" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/latitud.webp" alt="Imagen representativa de la variable Latitud" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_lat">Latitud</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1404468" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/longitud.webp" alt="Imagen representativa de la variable Longitud" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_long">Longitud</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1402616" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/elevation.webp" alt="Imagen representativa de la variable Elevación" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_elev">Elevación</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Caliche/1400351" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/area.webp" alt="Imagen representativa de la variable Área" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_area">Área</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Fernando_Neira/1400046" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/slope.webp" alt="Imagen representativa de la variable Pendiente" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_slope">Pendiente</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Fernando_Neira/1400019" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/curvature.webp" alt="Imagen representativa de la variable Curvatura" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_curvature">Curvatura</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Caliche/1401435" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/aspect.webp" alt="Imagen representativa de la variable Aspecto" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aspect">Aspecto</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Caliche/1401446" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/ghi.webp" alt="Imagen representativa de la variable GHI" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_ghi">GHI</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1402665" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/solar-aptitude.webp" alt="Imagen representativa de la variable Aptitud Solar" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_aptitude">Aptitud Solar</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1402606" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/humidity.webp" alt="Imagen representativa de la variable Humedad" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_humidity">Humedad</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Juleydi/1401405" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-speed.webp" alt="Imagen representativa de la variable Velocidad del Viento" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_wind_speed">Velocidad del Viento</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Fernando_Neira/1399887" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/wind-direction.webp" alt="Imagen representativa de la variable Dirección del Viento" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_wind_dir">Dirección del Viento</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Caliche/1401449" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/temperatura.webp" alt="Imagen representativa de la variable Temperatura Ambiente" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_temp">Temperatura Ambiente</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1402668" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/optimal-tilt.webp" alt="Imagen representativa de la variable Inclinación Óptima" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_tilt">Inclinación Óptima</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/JULEY/1402614" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/max-power-hour.webp" alt="Imagen representativa de la variable Potencial Fotovoltaico" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_power">Potencial Fotovoltaico</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Juleydi/1401407" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/total-power.webp" alt="Imagen representativa de la variable Capacidad" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_capacity">Capacidad</figcaption>
      </figure>
    </a>
    <a href="https://rpubs.com/Caliche/1400364" target="_blank">
      <figure>
        <img src="https://mssarmientoo.github.io/figempa/assets/images/vcuanti/dist-to-road.webp" alt="Imagen representativa de la variable Distancia a la vía" class="ds-vcuanti-img"/>
        <figcaption data-i18n="cap_dist_road">Distancia a la Vía</figcaption>
      </figure>
    </a>
  </div>
</article>
`;

// Inferencial Statistics (IS) section
const inferencialStatisticsCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-flask"></i> <span data-i18n="nav_inf_stats">Estadística Inferencial</span></div>
    <h1 data-i18n="is_title">ESTADÍSTICA INFERENCIAL</h1>
    <p class="section-hero-sub" data-i18n="is_sub">Pruebas de hipótesis y análisis inferencial aplicado a las variables cualitativas y cuantitativas de las plantas solares.</p>
  </div>

  <section class="section-box">
    <h2 class="title-2" data-i18n="vars_title">VARIABLES</h2>
    ${iSCualitativesVariables}
    ${iSCuantitativesVariables}
  </section>
`;

inferentialStatisticsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = inferencialStatisticsCode;
  translateUI();
});




/* ----------------------------
   REGRESSION MODELS
---------------------------- */
const regressionModelsCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-project-diagram"></i> <span data-i18n="nav_reg_models">Modelos de Regresión</span></div>
    <h1 data-i18n="reg_models_title">MODELOS DE REGRESIÓN</h1>
    <p class="section-hero-sub" data-i18n="reg_sub">Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset.</p>
  </div>

  <section class="section-box">
    <h2 class="title-2" data-i18n="simple_reg_title">REGRESIÓN SIMPLE</h2>

    <div class="regression-rs-links-container">
      <a href="https://rpubs.com/mssarmiento/1400243" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_linear">Regresión Lineal</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400304" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_potential">Regresión Potencial</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400516" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_exponential">Regresión Exponencial</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400389" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_logarithmic">Regresión Logarítmica</span>
      </a>
      <a href="https://rpubs.com/mssarmiento/1400511" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_polynomial">Regresión Polinómica</span>
      </a>
    </div>
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="multiple_reg_title">REGRESIÓN MÚLTIPLE</h2>
    <div class="regression-rs-links-container">
      <a href="https://rpubs.com/mssarmiento/1400942" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_multiple_3d">Regresión Múltiple 3D</span>
      </a>
    </div>
  </section>
`;

regressionModelsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = regressionModelsCode;
  translateUI();
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const machineLearningCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-robot"></i> <span data-i18n="nav_ml">Machine Learning</span></div>
    <h1 data-i18n="ml_title">MACHINE LEARNING</h1>
    <p class="section-hero-sub" data-i18n="ml_intro">Uso de Machine Learning para la Predicción de Potencial Fotovoltaico (MWh/año) y Clasificación de Aptitud Solar Global</p>
  </div>


  <section class="section-box">
    <h2 class="title-2" data-i18n="ml_problem_title">PLANTEAMIENTO DEL PROBLEMA</h2>
    <p data-i18n="ml_problem_text">
      A nivel mundial, la expansión solar es clave para la transición energética; sin embargo, la variabilidad geográfica dificulta evaluar la viabilidad de nuevos proyectos. Ante este panorama, el análisis estadístico y el Machine Learning permiten procesar datos históricos geoespaciales para predecir variables críticas como la aptitud solar y el potencial fotovoltaico (MWh/año). El uso de estos modelos busca optimizar la planificación técnica, aplicando este análisis global en un caso de estudio local centrado en las facultades de FIGEMPA y Ciencias Químicas.
    </p>
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="ml_obj_title">OBJETIVO</h2>
    <p data-i18n="ml_obj_text">
      Desarrollar un modelo de Machine Learning basado en redes neuronales que permita clasificar el nivel de aptitud y predecir la generación energética a partir de datos climáticos y operativos, con el fin de proporcionar una herramienta de alta precisión para la toma de decisiones en proyectos renovables.
    </p>
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="ml_method_title">METODOLOGÍA</h2>
    <img 
      src="https://mssarmientoo.github.io/figempa/assets/images/ml-methodology.jpeg"
      alt="Diagrama de la metodología de Machine Learning"
      class="ml-methodology-img"
    />
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="ml_model_title">MODELO</h2>
    <h3 class="title-3 ml-title-3" data-i18n="ml_colab_header">Explora en Google Colab</h3>
    <p class="ml-instructions" data-i18n="ml_colab_desc">
      Haz clic en los siguientes botones para acceder a los cuadernos interactivos.
    </p>
    <div class="ml-models-links-container">
      <a href="https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="ml_notebook_reg">Notebook de Regresión</span>
      </a>
      <a href="https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing" target="_blank" class="regression-rs-link">
        <span class="regression-link-title" data-i18n="ml_notebook_class">Notebook de Clasificación</span>
      </a>
    </div>
  </section>

  <section class="section-box">
    <h2 class="title-2" data-i18n="ml_conclusion_title">CONCLUSIÓN</h2>
    <p data-i18n="ml_conclusion_text">
      Se ha logrado implementar un modelo de Machine Learning capaz de clasificar el nivel de aptitud y predecir el potencial fotovoltaico (MWh/año) a partir de variables geoespaciales y climáticas globales. Este enfoque no solo optimiza la precisión en la evaluación de recursos renovables para el caso de estudio de la FIGEMPA y la Facultad de Ciencias Químicas, sino que también posee una alta capacidad de escalabilidad para analizar la viabilidad energética en cualquier región del mundo mediante el ajuste del conjunto de datos de entrada.
    </p>
  </section>
`;

machineLearningLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = machineLearningCode;
  translateUI();
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const toolsCode = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-tools"></i> <span data-i18n="nav_tools">Herramientas</span></div>
    <h1 data-i18n="tools_title">HERRAMIENTAS</h1>
    <p class="section-hero-sub" data-i18n="tools_sub">Ecosistema tecnológico de análisis, visualización y desarrollo utilizado a lo largo del proyecto.</p>
  </div>
  <section class="section-box">
    <h2 class="title-2" data-i18n="tools_list_title">HERRAMIENTAS UTILIZADAS</h2>
    <p class="tools-description" data-i18n="tools_description">
      Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes clave como HTML5, CSS y JavaScript. Complementamos este flujo de trabajo accediendo a datos científicos de Kaggle, NASA, Copernicus, OpenTopography y el servicio de cambio climático de ECMWF, mientras que para el análisis geoespacial y la identificación de derrames utilizamos QGIS, ArcGIS y Google Earth. Finalmente, aseguramos la productividad y difusión de resultados mediante herramientas colaborativas como GitHub, Google Drive, RPubs, Microsoft Teams y la suite de Office, impulsando así un enfoque moderno, eficiente y de alta precisión.
    </p>
  </section>

  <section class="section-box">
    <div class="tools-logo-container">
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/ArcGIS_globe.png" alt="ArcGIS Globe Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/climate change service.png" alt="Climate Change Service Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/copernicus.png" alt="Copernicus Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/ecmwf.png" alt="ECMWF Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/GitHub.png" alt="GitHub Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/HTML5.png" alt="HTML5 Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/CSS.png" alt="CSS Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/JavaScript-logo.png" alt="JavaScript Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Colaboratory.png" alt="Google Colab Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Drive.png" alt="Google Drive Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Google_Earth_Icon.png" alt="Google Earth Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Kaggle.png" alt="Kaggle Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/LaTeX.png" alt="LaTeX Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Microsoft_Office_Logo_(2019).png" alt="Microsoft Office Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Microsoft_Office_Teams.png" alt="Microsoft Office Teams Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/nasa-logo.png" alt="NASA Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/opentopo_logo_text_transparent.png" alt="OpenTopo Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/POSIT2.png" alt="POSIT2 Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Qgis.png" alt="QGIS Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/rpubs.png" alt="RPubs Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/Rstudio.png" alt="RStudio Logo" class="tool-logo-img" /></div>
      <div class="tool-logo-bg"><img src="https://mssarmientoo.github.io/figempa/assets/images/tools/VS CODE.png" alt="VS Code Logo" class="tool-logo-img" /></div>
    </div>
  </section>
`;

toolsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = toolsCode;
  translateUI();
})




/* ----------------------------
   ABOUT US
---------------------------- */
// About Us section
const aboutUsHTML = `
  <div class="section-hero">
    <div class="section-hero-eyebrow"><i class="fas fa-users"></i> <span data-i18n="nav_about">Sobre Nosotros</span></div>
    <h1 data-i18n="about_us_title">Sobre Nosotros</h1>
    <p class="section-hero-sub" data-i18n="about_us_sub">Estudiantes de Ingeniería en Petróleos de la FIGEMPA – Universidad Central del Ecuador.</p>
  </div>
<div class="section-box">
  <p class="about-us-description" data-i18n="about_p1">Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.</p>
  <p class="about-us-description" data-i18n="about_p2">Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energías sostenibles.</p>
  <p class="about-us-description" data-i18n="about_p3">Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.</p>
</div>
<section class="section-box">
  <h2 class="title-2" data-i18n="team_title">Nuestro Equipo</h2>
  <p data-i18n="team_intro">A continuación tienes disponible los curriculum vitae de cada uno de los integrantes que conforman este grupo de trabajo.</p>
  <div class="cvs-container">
    <a href="https://drive.google.com/file/d/1R3lUrsZgvpMBEEy31lrqK0p4FxZZNQTE/view" class="regression-rs-link" target="_blank">
      <span class="regression-link-title">Gualan Shelby</span>
    </a>
    <a href="https://drive.google.com/file/d/1zgpJ5q-Zihij5XHkioqKrdmJH0a-KWYK/view" class="regression-rs-link" target="_blank">
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

aboutUsLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
  mainElement.innerHTML = aboutUsHTML;
  translateUI();
});




/* ----------------------------
   UNDER CONSTRUCTION
---------------------------- */
// Under Construction image to show for building pages
const underConstructionCode = `
  <h1 class="title-1" data-i18n="uc_title">En construcción</h1>
  <img src="assets/images/under-construction.png" alt="Escena de construcción" class="under-construction-img">
`;

underConstructionLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = underConstructionCode;
    translateUI();
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

  chatbotBtn.addEventListener('click', function () {
    chatbotModal.style.display = (chatbotModal.style.display === 'none' || chatbotModal.style.display === '') ? 'block' : 'none';
    if (chatbotModal.style.display === 'block' && chatbox.children.length === 0) {
      showOptions();
    }
  });

  closeChatbotBtn.addEventListener('click', function () {
    chatbotModal.style.display = 'none';
  });

  chatbox.addEventListener('click', function (e) {
    const btn = e.target.closest('.chat-option-btn');
    if (btn) {
      const respKey = btn.getAttribute('data-cmd');
      const userText = btn.textContent.trim();
      if (respKey) {
        handleBotOption(respKey, userText);
      }
    }
  });

  function handleBotOption(respKey, userText) {
    const youLabel = (currentLang === 'es') ? 'Tú: ' : 'You: ';
    const botLabel = (currentLang === 'es') ? 'Asistente Solar: ' : 'Solar Assistant: ';

    const oldOptions = chatbox.querySelectorAll('.bot-options');
    oldOptions.forEach(opt => opt.remove());

    chatbox.innerHTML += `<p class="user-message">${youLabel}${userText}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
      const botResponse = translations[currentLang][respKey] || translations[currentLang]["bot_default"];
      chatbox.innerHTML += `<p class="bot-message">${botLabel}${botResponse}</p>`;

      setTimeout(() => {
        showOptions(false);
      }, 800);

    }, 500);
  }

  function showOptions(showWelcome = true) {
    const options = [
      { text: translations[currentLang]["btn_intro"], cmd: "bot_resp_intro" },
      { text: translations[currentLang]["btn_vars"], cmd: "bot_resp_var" },
      { text: translations[currentLang]["nav_map"], cmd: "bot_resp_map" },
      { text: translations[currentLang]["btn_ml"], cmd: "bot_resp_ml" },
      { text: translations[currentLang]["btn_contact"], cmd: "bot_contact" }
    ];

    let buttonsHTML = '<div class="bot-options" style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">';
    options.forEach(opt => {
      buttonsHTML += `<button class="chat-option-btn regression-rs-link" data-cmd="${opt.cmd}" style="padding: 10px; min-height: auto; text-align: center; justify-content: center; width: 100%; border: none;">
                        <span class="regression-link-title" style="pointer-events: none; font-size: 0.9rem;">${opt.text}</span>
                      </button>`;
    });
    buttonsHTML += '</div>';

    if (showWelcome) {
      chatbox.innerHTML += `<p class="bot-message">${translations[currentLang].bot_welcome}</p>`;
    }
    chatbox.innerHTML += buttonsHTML;
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  window.showOptions = showOptions;
})();

document.addEventListener("DOMContentLoaded", () => {
  translateUI();
  if (homeLink) {
    homeLink.click();
  }
});

