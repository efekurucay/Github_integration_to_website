async function loadGitHubProjects() {
    const username = 'efekurucay'; // GitHub kullanıcı adınızı buraya yazın
    const container = document.getElementById('github-projects');
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        const projects = await response.json();
        
        if (projects.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="error-message">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>No projects found.</p>
                    </div>
                </div>`;
            return;
        }

        container.innerHTML = projects.map(project => `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-description">${project.description || 'No description available.'}</p>
                    
                    <div class="tech-stack">
                        ${(project.topics || []).map(tech => `
                            <span class="tech-badge">
                                <i class="fas fa-code"></i> ${tech}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="project-links">
                        <a href="${project.html_url}" target="_blank">
                            <i class="fab fa-github"></i> Source
                        </a>
                        ${project.homepage ? `
                            <a href="${project.homepage}" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        container.innerHTML = `
            <div class="col-12">
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Error loading projects. Please try again later.</p>
                    <button class="retry-button" onclick="loadGitHubProjects()">
                        <i class="fas fa-redo"></i> Retry
                    </button>
                </div>
            </div>`;
    }
}

// Sayfa yüklendiğinde projeleri yükle
document.addEventListener('DOMContentLoaded', loadGitHubProjects);
