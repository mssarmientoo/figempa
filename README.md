# FIGEMPA — Análisis Estadístico de Plantas Solares

Proyecto web estático de carácter académico que presenta un análisis estadístico y geoespacial de plantas solares a nivel mundial.

**Descripción:**
- Sitio estático con visualización cartográfica (Leaflet) y páginas con resultados de análisis estadístico (R / RStudio).
- Exportado parcialmente desde QGIS (carpeta `map/` y archivos `qgis2web`), con datos en `data/`.

**Características principales:**
- Mapa interactivo con capas y clusters (Leaflet + plugins).
- Contenido estático con secciones de metodología, estadísticas descriptivas e inferenciales.
- Material multimedia y recursos en `assets/` (imágenes, íconos, videos).

**Estructura del repositorio (resumen):**
- `index.html` — página principal.
- `css/` — estilos (`styles-dist.css`, `styles.css`, `normalize.css`).
- `js/` — scripts de la interfaz, incluyendo `script.js`.
- `map/` — export generado por QGIS / qgis2web (mapas y recursos asociados).
- `data/` — datasets JavaScript (ej. `PlantasSolaresaNivelMundial_2.js`).
- `assets/` — imágenes, íconos y videos usados en la web.
- `prepros.config` — configuración para Prepros (si se usa para preprocesamiento).

**Tecnologías y librerías usadas:**
- Leaflet y varios plugins (MarkerCluster, VectorGrid, Heat, etc.).
- qgis2web (export para web de mapas QGIS).
- Font Awesome, Google Fonts.
- Estilos CSS y scripts JavaScript front-end.

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
