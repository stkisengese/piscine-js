import { places } from './where-do-we-go.data.js';

function getDegree(coordinates) {
  const north = coordinates.includes('N');
  const degree = parseFloat(coordinates.split("'")[0].replace('°', '.'));
  return north ? degree : -degree;
}

function createSection(place) {
  const section = document.createElement('section');
  const imageName = place.name.split(',')[0].toLowerCase().replace(/ /g, '-');
  section.style.background = `url('./where-do-we-go_images/${imageName}.jpg')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  return section;
}

function updateLocationIndicator(place) {
  const location = document.querySelector('.location');
  location.textContent = `${place.name}\n${place.coordinates}`;
  location.style.color = place.color;
  const coords = place.coordinates.replace(/[°'"]/g, '').replace(/ /g, '%20');
  location.href = `https://www.google.com/maps/search/?api=1&query=${coords}`;
  location.target = '_blank';
}

function createCompass() {
  const compass = document.createElement('div');
  compass.className = 'direction';
  return compass;
}

export function explore() {
  const sortedPlaces = places.sort((a, b) => getDegree(b.coordinates) - getDegree(a.coordinates));

  const container = document.body;

  sortedPlaces.forEach(place => {
    const section = createSection(place);
    container.appendChild(section);
  });

  const locationIndicator = document.createElement('a');
  locationIndicator.className = 'location';
  container.appendChild(locationIndicator);

  const compass = createCompass();
  container.appendChild(compass);

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentIndex = Math.floor(scrollPosition / window.innerHeight);
    
    if (currentIndex >= 0 && currentIndex < sortedPlaces.length) {
      updateLocationIndicator(sortedPlaces[currentIndex]);
    }

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      compass.textContent = 'S';
    } else if (currentScrollY < lastScrollY) {
      compass.textContent = 'N';
    }
    lastScrollY = currentScrollY;
  });

  updateLocationIndicator(sortedPlaces[0]);
  compass.textContent = 'N';
}