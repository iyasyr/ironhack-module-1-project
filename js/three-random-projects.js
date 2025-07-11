class RandomProjects extends HTMLElement {
  async connectedCallback() {
    const excludeId = this.getAttribute('exclude');
    const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
    this.innerHTML = `<div class="projects-container"></div>`;

    try {
      const res = await fetch(apiUrl);
      const projects = await res.json();
      const hasExclude = excludeId !== null && excludeId !== undefined && excludeId !== "";
      const shuffled = projects
        .filter(p => !hasExclude || String(p.uuid) !== String(excludeId))
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      if (!shuffled.length) {
        this.querySelector('.projects-container').innerHTML = `<p>No projects found.</p>`;
        return;
      }
      this.querySelector('.projects-container').innerHTML = shuffled.map(p => `
        <article class="project-card">
          <a class="project-wrapper" href="/projects/1.html?id=${p.uuid}">
            <img class="img-project" src="https://github.com/ironhack-jc/mid-term-api/blob/main/${p.uuid}.jpg?raw=true" alt="${p.name}">
            <div class="project-inner-card">
              <h4 class="project-title">${p.name}</h4>
              <p class="project-description capitalize">${p.description || "No description available"}</p>
              <a class="learn-more" href="/projects/1.html?id=${p.uuid}">Learn more</a>
            </div>
          </a>
        </article>
      `).join('');
    } catch (err) {
      this.innerHTML = `<p style="color:#b33a3a;">Could not load projects. ${err.message ? `<br>${err.message}` : ""}</p>`;
    } finally {
      console.log('[RandomProjects] Async fetch finished');
    }
  }
}
customElements.define('random-projects', RandomProjects);
