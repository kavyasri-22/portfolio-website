// Fetch projects from backend API
fetch('http://localhost:3000/projects')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear "Loading..."
    
    data.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" target="_blank">View Project</a>
        <hr>
      `;
      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('projects-container').innerHTML = 
      '<p style="color: red;">Failed to load projects. Make sure your backend server is running.</p>';
  });