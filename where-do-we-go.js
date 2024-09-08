import { places } from './where-do-we-go.data.js';

// Helper function to convert latitude and longitude to decimal format
function parseLatitude(lat) {
    const [degrees, minutes, seconds, direction] = lat.split(/°|'|"/).map(Number);
    const decimal = degrees + minutes / 60 + seconds / 3600;
    return direction === 'S' ? -decimal : decimal;
}

// Function to create a section for each place
function createSection(place) {
    const section = document.createElement('section');
    section.style.backgroundImage = `url('./where-do-we-go_images/${place.name.split(',')[0].toLowerCase().replace(/ /g, '-')}.jpg')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
    return section;
}

// Function to update location indicator
function updateLocationIndicator(index) {
    const place = places[index];
    const location = document.querySelector('.location');
    location.textContent = `${place.name}\n${place.coordinates}`;
    location.style.color = place.color;
    const [lat, long] = parseCoordinates(place.coordinates);
    location.href = `https://www.google.com/maps/place/${lat},${long}`;
    location.target = '_blank';  // Open in a new tab
}

// Function to parse coordinates into decimal degrees
function parseCoordinates(coordString) {
    const regex = /(\d+)°(\d+)'([\d.]+)"([NS])\s*(\d+)°(\d+)'([\d.]+)"([EW])/;
    const match = coordString.match(regex);
    
    if (match) {
        const [_, latDeg, latMin, latSec, latDir, longDeg, longMin, longSec, longDir] = match;
        let latitude = parseInt(latDeg) + parseInt(latMin) / 60 + parseFloat(latSec) / 3600;
        let longitude = parseInt(longDeg) + parseInt(longMin) / 60 + parseFloat(longSec) / 3600;
        
        if (latDir === 'S') latitude = -latitude;
        if (longDir === 'W') longitude = -longitude;
        
        return [latitude, longitude];
    }
    
    return [0, 0]; // Default to 0,0 if parsing fails
}

// Function to update compass direction
function updateCompassDirection(direction) {
    const compass = document.querySelector('.direction');
    compass.textContent = direction;
    compass.style.transform = `rotate(${direction === 'S' ? 180 : 0}deg)`;
}

// Function to create compass pointer
function createCompassPointer() {
    const compass = document.createElement('div');
    compass.className = 'direction';
    compass.innerHTML = `
        <div class="compass-pointer" style="
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 20px solid white;
            position: relative;
            top: -10px;
        "></div>
    `;
    return compass;
}

// Main function
export function explore() {
    const container = document.body;
    let sections = [];
    let lastScrollTop = window.scrollY;
    let currentPlaceIndex = 0;

    // Sort places from north to south
    const sortedPlaces = places.sort((a, b) => {
        const latA = parseLatitude(a.coordinates.split(' ')[0]);
        const latB = parseLatitude(b.coordinates.split(' ')[0]);
        return latB - latA;
    });

    // Create and append sections
    sortedPlaces.forEach(place => {
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
        let newIndex = 0;

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = window.scrollY + rect.bottom;
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                newIndex = i;
                break;
            }
        }

        if (newIndex !== currentPlaceIndex) {
            currentPlaceIndex = newIndex;
            updateLocationIndicator(currentPlaceIndex);
        }

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
    updateLocationIndicator(currentPlaceIndex);
}
