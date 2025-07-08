// script.js
function toggleDescription(button) {
  const projectCard = button.closest('.project-card');
  const descriptionDiv = projectCard.querySelector('.description-content');

  if (descriptionDiv) {
    descriptionDiv.classList.toggle('expanded');
    if (descriptionDiv.classList.contains('expanded')) {
      button.textContent = 'Hide Description';
      // Scroll to the description
      descriptionDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      button.textContent = 'See Description';
    }
  }
}

// Function to load HTML content into a div
async function loadProjectContent(containerId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
  } catch (error) {
    console.error(`Failed to load content for ${filePath}:`, error);
    document.getElementById(containerId).innerHTML = `<p style="color: red;">Failed to load project: ${filePath.split('/').pop().replace('.html', '').replace(/-/g, ' ')}</p>`;
  }
}

// Load all project contents when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadProjectContent('handwritten-alphabet-recognition-container', 'projects/alpha_rec.html');
  loadProjectContent('movie-recommender-container', 'projects/movie_recc.html');
  loadProjectContent('location-sharing-container', 'projects/location_sharing.html');
  loadProjectContent('live-blur-container','projects/live_blurr.html');
  loadProjectContent('auth-check-container','projects/stakeholder.html');
  loadProjectContent('face-swap-container','projects/face_swap.html');
  loadProjectContent('tictactoe-container','projects/tictactoe.html');
});