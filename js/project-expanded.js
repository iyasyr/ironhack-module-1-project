class ProjectDetails extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `<div class="loading">Loading...</div>`;

    function getProjectIdFromUrl() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    }

    const projectId = getProjectIdFromUrl();

    function showError(message) {
      this.innerHTML = `<p style="color:#b33a3a;">${message}</p>`;
    }

    try {
      const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
      const res = await fetch(apiUrl);
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
        <span class="UI-design-title">${project.description}</span>
        <span class="completed-title">Completed on
          <span class="completed-title-data">${project.completed_on || 'N/A'}</span>
        </span>
      </div>
      <div class="project-image-section">
        <img class="project-image" src="https://github.com/ironhack-jc/mid-term-api/blob/main/${project.uuid}.jpg?raw=true"
          alt="${project.name} image">
      </div>
      <article class="full-description project-description">
        ${project.content}
      </article>
    ;`
      } catch (err) {
      showError.call(this, "Oops! Something went wrong. Please try again later.");
      console.error(err);
    }
  }
}

customElements.define('project-details', ProjectDetails);