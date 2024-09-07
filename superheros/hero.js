// This function will be called once the data is fetched and parsed.
const loadData = (heroes) => {
    // Here you can process the data to display in the table.
    console.log(heroes);
  
    // Example: Dynamically create a table from the fetched data.
    const tableBody = document.querySelector("#heroesTable tbody");
  
    // Clear any existing rows
    tableBody.innerHTML = "";
  
    // Loop through the heroes and create table rows
    heroes.forEach(hero => {
      const row = document.createElement("tr");
  
      // Create and append the icon cell
      const iconCell = document.createElement("td");
      const img = document.createElement("img");
      img.src = hero.images.xs;
      iconCell.appendChild(img);
      row.appendChild(iconCell);
  
      // Create and append the name cell
      const nameCell = document.createElement("td");
      nameCell.textContent = hero.name;
      row.appendChild(nameCell);
  
      // Add other cells for Full Name, Powerstats, Race, Gender, etc.
      const fullNameCell = document.createElement("td");
      fullNameCell.textContent = hero.biography.fullName;
      row.appendChild(fullNameCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
};
  
  
  // Fetch the superhero data from the API.
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json())
    .then(loadData);
  
//pagination
let heroesData = [];
let currentPage = 1;
let pageSize = 20;

// Update the table based on current page and page size
const displayHeroes = () => {
  const tableBody = document.querySelector('#heroesTable tbody');
  tableBody.innerHTML = ''; // Clear current data

  const start = (currentPage - 1) * pageSize;
  const end = pageSize === 'all' ? heroesData.length : start + pageSize;
  const paginatedData = heroesData.slice(start, end);

  paginatedData.forEach(hero => {
    const row = `<tr>
      <td><img src="${hero.images.xs}" alt="${hero.name}" /></td>
      <td>${hero.name}</td>
      <td>${hero.biography.fullName || 'N/A'}</td>
      <td>${Object.entries(hero.powerstats).map(([stat, value]) => `${stat}: ${value}`).join(', ')}</td>
      <td>${hero.appearance.race || 'N/A'}</td>
      <td>${hero.appearance.gender || 'N/A'}</td>
      <td>${hero.appearance.height.join(' / ')}</td>
      <td>${hero.appearance.weight.join(' / ')}</td>
      <td>${hero.biography.placeOfBirth || 'N/A'}</td>
      <td>${hero.biography.alignment || 'N/A'}</td>
    </tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
};

// search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    heroesData = originalData.filter(hero => hero.name.toLowerCase().includes(searchTerm));
    displayHeroes();
  });
  
//sortings functionality
let currentSortColumn = 'name';
let sortAscending = true;

const sortHeroes = (column) => {
  sortAscending = currentSortColumn === column ? !sortAscending : true;
  currentSortColumn = column;

  heroesData.sort((a, b) => {
    const valueA = a[column] || '';
    const valueB = b[column] || '';
    if (typeof valueA === 'string') {
      return sortAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    return sortAscending ? valueA - valueB : valueB - valueA;
  });

  displayHeroes();
};

document.querySelectorAll('#heroesTable th').forEach((header, index) => {
  header.addEventListener('click', () => {
    const column = header.textContent.trim().toLowerCase().replace(' ', '');
    sortHeroes(column);
  });
});

//pagesize control
document.getElementById('pageSize').addEventListener('change', (e) => {
    pageSize = e.target.value === 'all' ? heroesData.length : parseInt(e.target.value, 10);
    currentPage = 1; // Reset to first page
    displayHeroes();
});
  