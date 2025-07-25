// script.js

// This function remains the same
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

// Function to load HTML content into a div (remains the same)
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
  // Call your loadProjectContent functions
  loadProjectContent('handwritten-alphabet-recognition-container', 'projects/alpha_rec.html');
  loadProjectContent('movie-recommender-container', 'projects/movie_recc.html');
  loadProjectContent('face-swap-container', 'projects/face_swap.html');
  loadProjectContent('location-sharing-container', 'projects/location_sharing.html');
  loadProjectContent('live-blur-container','projects/live_blurr.html')
  loadProjectContent('auth-check-container','projects/stakeholder.html')
  loadProjectContent('tictactoe-container', 'projects/tictactoe.html');
  loadProjectContent('turingtest-container','projects/turingtestgame.html');

  // --- NEW CODE FOR EVENT DELEGATION ---
  // Attach a single click listener to the 'main' element or even the 'document.body'
  // It's better to pick the closest static parent to the dynamic elements.
  // In your case, the <main> tag is a good candidate.
  const mainElement = document.querySelector('main'); // Or document.body if you prefer

  mainElement.addEventListener('click', function(event) {
    // Check if the clicked element (or any of its parents) has the class 'toggle-description-btn'
    const clickedButton = event.target.closest('.toggle-description-btn');

    if (clickedButton) {
      // If it's one of your buttons, call the toggleDescription function
      toggleDescription(clickedButton);
    }
  });
  // --- END NEW CODE ---
});