const projects = [
  {
    title: "Plataforma Web - Agencia de Viajes",
    description:
      "Plataforma web Full Stack para la gestión de reservas turísticas, con panel administrativo, usuarios autenticados, roles y chat en tiempo real.",
    image: "img/agency-travel.jpg",
    alt: "Agencia de viajes marítimos",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "JavaScript"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/kleyderBackend/AgencyTourLosThermanosK-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/kleyderBackend/hermanosk_agency-backend",
      },
    ],
  },
  {
    title: "Sistema ERP - Constructora Civil",
    description:
      "Sistema tipo ERP para gestión de proyectos, clientes y empleados, con área privada, métricas de avance y autenticación segura.",
    image: "img/constructora.jpg",
    alt: "Sistema ERP para constructora civil",
    technologies: ["React", "TypeScript", "Node.js", "MySQL"],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/kleyderBackend/CCA-Constructora-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/kleyderBackend/CCA-Constructora-backend",
      },
    ],
  },
  {
    title: "Portafolio Web Interactivo",
    description:
      "Sitio personal desarrollado con HTML5, CSS3 y JavaScript vanilla para presentar perfil profesional, proyectos, enlaces de contacto y diseño responsivo.",
    image: "img/foto..png",
    alt: "Portafolio web personal de Kleyder Dev",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: [
      {
        label: "Código",
        url: "https://github.com/kleyderBackend/Portafolio-Web",
      },
    ],
  },
];

const technologyIcons = {
  React: "devicon-react-original colored",
  TypeScript: "devicon-typescript-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  MySQL: "devicon-mysql-plain-wordmark colored",
  JavaScript: "devicon-javascript-plain colored",
  HTML5: "devicon-html5-plain colored",
  CSS3: "devicon-css3-plain colored",
};

function renderProjects() {
  const container = document.querySelector("#projects-grid");

  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="card">
          <img src="${project.image}" alt="${project.alt}" />
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="project-stack" aria-label="Tecnologías usadas">
            ${project.technologies
              .map(
                (technology) =>
                  `<i class="${technologyIcons[technology]}" title="${technology}" aria-label="${technology}"></i>`
              )
              .join("")}
          </div>
          <div class="project-links">
            ${project.links
              .map(
                (link) =>
                  `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-code">${link.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
