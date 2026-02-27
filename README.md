# FIGEMPA — Análisis Estadístico de Plantas Solares

Proyecto web estático de carácter académico que presenta un análisis estadístico y geoespacial de plantas solares a nivel mundial, integrando visualización cartográfica interactiva y resultados de análisis realizados en R.

**Descripción:**
Este proyecto combina herramientas de Sistemas de Información Geográfica (SIG) y análisis estadístico para estudiar la distribución global de plantas solares.

El sitio incluye:

- Visualización cartográfica interactiva desarrollada con `Leaflet`.

- Resultados de análisis estadísticos (descriptivos e inferenciales) realizados en `R / RStudio`.

- Exportación parcial de mapas desde `QGIS` mediante el complemento `qgis2web`.

Integración de recursos multimedia y datos estructurados.

**Características principales:**
- 🌍 Mapa interactivo global con:

     - Capas temáticas

     - Agrupamiento de marcadores (clusters)

     - Visualización dinámica de datos

- 📊 Secciones de análisis estadístico:

     - Estadística descriptiva

     - Estadística inferencial

     - Metodología aplicada

- 🎨 Interfaz responsiva con recursos multimedia

- 📁 Organización modular del proyecto

**Estructura del repositorio (resumen):**
- `index.html` — página principal.
- `css/` — estilos (`styles-dist.css`, `styles.css`, `normalize.css`).
- `js/` — scripts de la interfaz, incluyendo `script.js`.
- `map/` — export generado por QGIS / qgis2web (mapas y recursos asociados).
- `data/` — datasets JavaScript (ej. `PlantasSolaresaNivelMundial_2.js`).
- `assets/` — imágenes, íconos y videos usados en la web.
- `prepros.config` — configuración para Prepros (si se usa para preprocesamiento).

**Tecnologías y librerías usadas:**
- Leaflet (visualización cartográfica)

- Plugins de Leaflet:

   - MarkerCluster
   
   - VectorGrid
 
   - Heat

- QGIS + qgis2web (exportación web del mapa)

- R / RStudio (análisis estadístico)

- Font Awesome

- Google Fonts

- HTML5, CSS3 y JavaScript

Cómo ejecutar localmente
- Opción rápida: abrir `index.html` en un navegador.
- Recomendado (servidor local para evitar restricciones de CORS/archivos):

```bash
# Python 3 (desde la carpeta del proyecto)
python -m http.server 8000
# luego abrir http://localhost:8000
```

```powershell
# PowerShell (Windows) — alternativa equivalente
python -m http.server 8000
```

Desarrollo
- Si usas Prepros, la configuración está en `prepros.config` (compilación/optimización de assets).
- Para actualizar el mapa desde QGIS, reexporta con `qgis2web` y sustituye la carpeta `map/` y los archivos en `data/` según corresponda.

Notas sobre los datos
- El dataset principal visible en el sitio se encuentra en `data/PlantasSolaresaNivelMundial_2.js`.
- Asegúrate de validar y versionar cambios en los datos antes de publicar.
