import { places } from './where-do-we-go.data.js';

function parseLatitude(lat) {
  const [degrees, minutes, seconds, direction] = lat.split(/°|'|"/).map(val => parseFloat(val) || val);
  const decimal = degrees + minutes / 60 + seconds / 3600;
  return direction === 'S' ? -decimal : decimal;
}

function createSection(place) {
  const section = document.createElement('section');
  section.style.backgroundImage = `url('./where-do-we-go_images/${place.name.split(',')[0].toLowerCase().replace(/ /g, '-')}.jpg')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  return section;
}

function updateLocationIndicator(place) {
  const location = document.querySelector('.location');
  location.textContent = `${place.name}\n${place.coordinates}`;
  location.style.color = place.color;
  location.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.coordinates)}`;
  location.target = '_blank';
}

function updateCompassDirection(direction) {
  const compass = document.querySelector('.direction');
  compass.textContent = direction;
}

function createCompassPointer() {
  const compass = document.createElement('div');
  compass.className = 'direction';
  return compass;
}

export function explore() {
  // Sort places from north to south
  places.sort((a, b) => parseLatitude(b.coordinates.split(' ')[0]) - parseLatitude(a.coordinates.split(' ')[0]));

  const container = document.body;
  let sections = [];
  let lastScrollTop = 0;

  // Create and append sections
  places.forEach(place => {
    const section = createSection(place);
    sections.push(section);
    container.appendChild(section);
  });

  // Create and append location indicator
  const locationIndicator = document.createElement('a');
  locationIndicator.className = 'location';
  container.appendChild(locationIndicator);

  // Create and append compass
  const compass = createCompassPointer();
  container.appendChild(compass);

  // Update location indicator and compass on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentIndex = 0;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionBottom = window.scrollY + rect.bottom;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        currentIndex = i;
        break;
      }
    }

    updateLocationIndicator(places[currentIndex]);

    // Determine scroll direction
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
      updateCompassDirection('S');
    } else if (currentScrollTop < lastScrollTop) {
      updateCompassDirection('N');
    }
    lastScrollTop = currentScrollTop;
  });

  // Initial update
  updateLocationIndicator(places[0]);
  updateCompassDirection('N');
}