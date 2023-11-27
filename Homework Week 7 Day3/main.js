async function searchPokemon() {
  const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
    const data = await response.json();
    
    
    document.getElementById('pokemonName').innerText = data.name;
    document.getElementById('pokemonImage').src = data.sprites.front_default;
    
    const abilitiesList = document.getElementById('abilitiesList');
    abilitiesList.innerHTML = ''; 
    
    data.abilities.forEach((ability) => {
      const abilityItem = document.createElement('li');
      abilityItem.textContent = ability.ability.name;
      abilitiesList.appendChild(abilityItem);
    });
    
  } catch (error) {
    console.log('Pokemon not found', error);
    alert('Pokemon not found. Please try another name.');
  }
}