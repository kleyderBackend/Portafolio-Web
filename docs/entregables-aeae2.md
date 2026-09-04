# Entregables AEAE2 - Mi Portafolio Web Interactivo

## Requerimientos funcionales

1. El sitio debe mostrar una presentación personal con nombre, perfil y descripción profesional.
2. El sitio debe permitir navegar entre Inicio, Sobre mí, Proyectos y Contacto.
3. El sitio debe listar mínimo tres proyectos con descripción, tecnologías e imagen.
4. El sitio debe incluir un formulario de contacto con nombre, correo electrónico y mensaje.
5. El formulario debe validar campos obligatorios, formato de correo y longitud del mensaje.
6. En móvil, el menú debe funcionar como menú hamburguesa.
7. Los proyectos deben cargarse dinámicamente desde JavaScript.

## Requerimientos no funcionales

1. El sitio debe ser responsivo para móvil, tablet y escritorio.
2. El HTML debe usar etiquetas semánticas como `header`, `nav`, `main`, `section`, `article` y `footer`.
3. El código CSS debe estar organizado por responsabilidad y usar variables para colores, fuentes y espaciado.
4. El sitio debe tener accesibilidad básica con textos alternativos, etiquetas `label` y atributos ARIA donde corresponda.
5. El código JavaScript debe estar separado por funcionalidad.
6. El repositorio debe mantener historial de commits descriptivos.
7. El proyecto debe estar documentado con un README.

## Wireframe de baja fidelidad

```text
Desktop
┌─────────────────────────────────────────────────────────────┐
│ Kleyder Dev        Inicio | Sobre mí | Proyectos | Contacto │
├─────────────────────────────────────────────────────────────┤
│ Presentación personal                                      │
│ Nombre, perfil, descripción, botones y redes sociales       │
├─────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└─────────────────────────────────────────────────────────────┘

Proyectos
┌─────────────────────────────────────────────────────────────┐
│ Header + navegación                                         │
├─────────────────────────────────────────────────────────────┤
│ Título: Proyectos destacados                                │
│ [Proyecto 1]        [Proyecto 2]        [Proyecto 3]        │
├─────────────────────────────────────────────────────────────┤
│ Footer                                                      │
└─────────────────────────────────────────────────────────────┘

Móvil
┌─────────────────────┐
│ Kleyder Dev   ☰     │
│ Menú desplegable    │
├─────────────────────┤
│ Contenido en una    │
│ sola columna        │
└─────────────────────┘
```

Puntos de interacción JavaScript:

- Botón hamburguesa: abre y cierra la navegación móvil.
- Página de proyectos: crea tarjetas de proyecto desde un array de objetos.
- Formulario: valida datos en tiempo real y muestra mensajes de estado.

## Arquitectura y separación de responsabilidades

El proyecto separa HTML, CSS y JavaScript para mantener responsabilidades claras. Los archivos HTML definen la estructura y contenido semántico. La carpeta `css/` contiene estilos por página y un archivo `variables.css` con tokens reutilizables de color, tipografía, espaciado y radios. La carpeta `js/` separa la navegación general (`app.js`), el renderizado de proyectos (`projects.js`) y el formulario de contacto (`contacts.js`).

Separar CSS en múltiples archivos facilita mantener cada vista sin afectar innecesariamente las demás. Modularizar JavaScript permite que cada comportamiento tenga un archivo específico y sea más fácil corregir errores.

## Guía de estilos

Colores principales:

- Fondo principal: `--color-bg: #0a0f24`
- Superficie: `--color-surface: #0d1128`
- Azul de acción: `--color-primary: #4da6ff`
- Texto principal: `--color-text: #ffffff`

Tipografías:

- Principal: `Poppins`, con respaldo Arial.
- Alternativa: `Segoe UI`.

Componentes reutilizables:

- Botones con radio de 8px, transición de color y estados `hover`.
- Tarjetas de proyecto con sombra, imagen, descripción, tecnologías y enlaces.
- Inputs y textarea con estados de foco y mensajes de error.
- Menú hamburguesa con estado `aria-expanded`.

## Autoevaluación y reflexión

1. Lo más difícil fue coordinar la parte responsiva con la interactividad del menú y el formulario, porque el sitio debe funcionar correctamente tanto en escritorio como en móvil.
2. La arquitectura del proyecto se relaciona con programación estructurada porque divide el problema en partes pequeñas: estructura HTML, presentación CSS y comportamiento JavaScript. Cada archivo cumple una función concreta.
3. Si tuviera más tiempo, mejoraría la integración visual de las capturas de pantalla de proyectos, agregaría demos públicas y ampliaría las pruebas de accesibilidad.
