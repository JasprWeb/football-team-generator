// Function to fetch teams from JSON file
async function fetchTeams() {
    try {
        const response = await fetch('teams.json'); // Path to your JSON file
        const data = await response.json();
        return data.teams;
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

// get random tream
async function generateRandomTeam() {
    const teamsData = await fetchTeams();

    
    const randomIndex = Math.floor(Math.random() * teamsData.length);
    const randomTeam = teamsData[randomIndex];

    // display information
    const teamInfoSection = document.getElementById('teamInfo');
    teamInfoSection.innerHTML = `
        <div class="col-6">
            <div class="teamCard">
                <img class="teamLogo" src="${randomTeam.logoUrl}" alt="${randomTeam.name} Logo">
                <h3>${randomTeam.name}</h3>
                <p class="abbreviation">${randomTeam.abbreviation}</p>
                <p>${randomTeam.league}</p>
            </div>
        </div>
    `;
}


document.getElementById('generateTeam').addEventListener('click', generateRandomTeam);