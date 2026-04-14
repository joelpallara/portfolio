document.addEventListener("DOMContentLoaded", () => {
  // Ces éléments n'existent peut-être que sur index.html
  const name = document.getElementById('name');
  if (name) {
    name.textContent = "Joel PALLARA";
    document.getElementById('job').textContent = "BTS SIO OPTION SISR";
    document.getElementById('email').textContent = "joelpallara13@gmail.com";
    document.getElementById('linkedin').href = "https://www.linkedin.com/in/joel-pallara";
    document.getElementById('linkedin').textContent = "linkedin.com/in/joel-pallara";
    document.getElementById('github').href = "https://github.com/joelpallara";
    document.getElementById('github').textContent = "github.com/joelpallara";
    document.getElementById('bio').textContent =
      "Actuellement en BTS SIO option SISR, je suis passionné par l'informatique matériel et réseau. " +
      "Grâce à mes études et expériences personnelles, j’ai acquis des compétences solides en installation, entretien et dépannage de systèmes informatiques. " +
      "Je suis motivé à approfondir mes connaissances et devenir un professionnel qualifié dans le domaine du support technique.";
  }

  // Projets (probablement sur index.html uniquement)
  const projects = [
    {
      title: "Compétences",
      description: "Installation PC/réseau\nDépannage PC/réseau\nEntretien PC/réseau\nMaîtrise de CiscoPacketTracer\nTravail en équipe\nProgrammation (HTML/CSS/SQL/Python)"
    },
    {
      title: "Parcours",
      items: [
        {
          school: "Lycée Théodore Aubanel, Avignon (2024 - 2026)",
          details: ["BTS SIO option SISR en initial"]
        },
        {
          school: "Lycée Jean D’Ormesson, Châteaurenard (2021 – 2024)",
          details: [
            "Seconde GT",
            "Première GT : NSI, MATH, PHYSIQUE/CHIMIE",
            "Terminale GT : NSI, MATH"
          ]
        }
      ]
    }
  ];

  const projectList = document.getElementById('project-list');
  if (projectList) {
    function convertTextToList(text) {
      const lines = text.split('\n');
      return "<ul>" + lines.map(line => `<li>${line}</li>`).join('') + "</ul>";
    }

    projects.forEach(proj => {
      const div = document.createElement('div');
      div.className = 'project';

      if (proj.title === "Parcours") {
        div.innerHTML = `<h3>${proj.title}</h3>`;
        proj.items.forEach(school => {
          div.innerHTML += `<strong>${school.school}</strong>` +
            "<ul>" + school.details.map(line => `<li>${line}</li>`).join('') + "</ul>";
        });
      } else {
        div.innerHTML = `<h3>${proj.title}</h3>${convertTextToList(proj.description)}`;
      }

      projectList.appendChild(div);
    });
  }

  // ✅ Fonctionne même sur cv.html
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


