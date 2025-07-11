// Delay to show spinner
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class ProjectDetails extends HTMLElement {
  async connectedCallback() {

    // Show animated spinner while loading
    this.innerHTML = `
      <div class="loading-spinner" id="project-spinner">
        <div class="spinner"></div>
      </div>
    `;

    // Simulate a network delay of 2 seconds
    await delay(2000);

    function getProjectIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    }

    function showError(message) {
      this.innerHTML = `<p style="color:#b33a3a;">${message}</p>`;
    }

    const projectId = getProjectIdFromUrl();

    try {
      const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
      const res = await fetch(apiUrl).catch(err => {
        throw new Error("Could not fetch project list.");
      });
      if (!res.ok) throw new Error('Network response was not ok');
      const projects = await res.json();

      const project = projects.find(p => String(p.uuid) === String(projectId));

      if (!project) {
        showError.call(this, "Sorry, we couldn't find that project.");
        return;
      }
      this.innerHTML = `
        <h1 class="title">${project.name}</h1>
        <div class="subtitle">
          <span class="UI-design-title">${project.description || "No description available"}</span>
          <span class="completed-title">Completed on
            <span class="completed-title-data">${project.completed_on || 'N/A'}</span>
          </span>
        </div>
        <div class="project-image-section">
          <img class="project-image" src="https://github.com/ironhack-jc/mid-term-api/blob/main/${project.uuid}.jpg?raw=true"
            alt="${project.name} image">
        </div>
        <article class="full-description project-description">
          ${project.content || "No content available"}
        </article>

        <section id="projects" class="recent-projects">
          <h2 class="section-title capitalize">Other projects</h2>
          <random-projects exclude=${project.uuid}></random-projects>
        </section>

      `;
    } catch (err) {
      showError.call(this, "Oops! Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      console.log('[ProjectDetails] Async fetch finished');
    }
  }
}

customElements.define('project-details', ProjectDetails);