class RandomProjects extends HTMLElement {
  async connectedCallback() {
    const excludeId = this.getAttribute('exclude');
    const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
    this.innerHTML = `<div class="projects-container"></div>`;

    try {
      const res = await fetch(apiUrl);
      const projects = await res.json();
      let filtered = projects;
      if (excludeId) filtered = filtered.filter(p => String(p.uuid) !== String(excludeId));
      const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 3);
      this.querySelector('.projects-container').innerHTML = shuffled.map(p => `
        <article class="project-card">
          <a class="project-wrapper" href="./pages/projects.html?id=${p.uuid}">
            <img class="img-project" src="https://github.com/ironhack-jc/mid-term-api/blob/main/${p.uuid}.jpg?raw=true" alt="${p.name}">
            <div class="project-inner-card">
              <h4 class="project-title">${p.name}</h4>
              <p class="project-description capitalize">${p.description}</p>
              <a class="learn-more" href="/projects/1.html?id=${p.uuid}">Learn more</a>
            </div>
          </a>
        </article>
      `).join('');
    } catch {
      this.innerHTML = `<p>Could not load projects.</p>`;
    }
  }
}
customElements.define('random-projects', RandomProjects);
