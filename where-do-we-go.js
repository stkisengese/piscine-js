import { places } from './where-do-we-go.data.js';

function parseCoordinates(coordString) {
  const [lat, lon] = coordString.split(' ');
  const latValue = lat.split('°')[0];
  const lonValue = lon.split('°')[0];
  return [parseFloat(latValue), parseFloat(lonValue)];
}

function createSection(place) {
  const section = document.createElement('section');
  const imageName = place.name.toLowerCase().replace(/, /g, '-').replace(/ /g, '-');
  section.style.backgroundImage = `url('./where-do-we-go_images/${imageName}.jpg')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  return section;
}

function updateLocationIndicator(place) {
  const location = document.querySelector('.location');
  location.textContent = `${place.name}\n${place.coordinates}`;
  location.style.color = place.color;
  const [lat, lon] = parseCoordinates(place.coordinates);
  location.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  location.target = '_blank';
}

function updateCompassDirection(direction) {
  const compass = document.querySelector('.direction');
  compass.textContent = direction;
}

export function explore() {
  // Sort places from north to south
  const sortedPlaces = places.sort((a, b) => {
    const [latA] = parseCoordinates(a.coordinates);
    const [latB] = parseCoordinates(b.coordinates);
    return latB - latA;
  });

  const container = document.body;

  // Create and append sections
  sortedPlaces.forEach(place => {
    const section = createSection(place);
    container.appendChild(section);
  });

  // Create and append location indicator
  const locationIndicator = document.createElement('a');
  locationIndicator.className = 'location';
  container.appendChild(locationIndicator);

  // Create and append compass
  const compass = document.createElement('div');
  compass.className = 'direction';
  container.appendChild(compass);

  let lastScrollY = window.scrollY;

  // Update location indicator and compass on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentIndex = Math.floor(scrollPosition / window.innerHeight);
    
    if (currentIndex >= 0 && currentIndex < sortedPlaces.length) {
      updateLocationIndicator(sortedPlaces[currentIndex]);
    }

    // Determine scroll direction
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      updateCompassDirection('S');
    } else if (currentScrollY < lastScrollY) {
      updateCompassDirection('N');
    }
    lastScrollY = currentScrollY;
  });

  // Initial update
  updateLocationIndicator(sortedPlaces[0]);
  updateCompassDirection('N');
}