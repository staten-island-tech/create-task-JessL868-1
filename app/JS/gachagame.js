import '../CSS/style.css'
import {pokemonArray} from '/JS/pokemon.js'

function home() {
  document.querySelector('#home').addEventListener('click', function() {
    location.reload();
  })
};

const container = document.querySelector('.container');
const pokemon = document.querySelector('.pokemon');
const heading = document.querySelector('.heading');
const inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function gotPokemon(randomPokemon) {
  container.innerHTML = '';
  pokemon.insertAdjacentHTML('beforeend', 
  `<h1>Congrats! You got a ${randomPokemon.name}!</h1>
  <div class="container">        
    <div class="card">
      <img class="img" src="https://th.bing.com/th/id/R.09a6ae937a6d9ef5cd10d132b59d6f5d?rik=8Wf%2bQNejqAkwIQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fPokemon-Pokeball-PNG-File.png&ehk=V%2f9byi3M%2bsgwt9knLB1GOoHBn8LkyKl6pt%2b4RSsHy%2bw%3d&risl=&pid=ImgRaw&r=0" alt="">
      <br>
      Name: ${randomPokemon.name}
      <br>
      Types: ${randomPokemon.types}
      <br>
      Abilities: ${randomPokemon.abilities}
      <br>
      Weaknesses: ${randomPokemon.weaknesses}
    </div>
  </div>
  <button id="home">Home</button>`)
inventory.push([randomPokemon.name, randomPokemon.types, randomPokemon.abilities, randomPokemon.weaknesses]);
localStorage.setItem('inventory', JSON.stringify(inventory));  
home()
};

document.querySelector('#gacha1').addEventListener('click', function() {
  const gacha1 = pokemonArray.filter((pokemon) => (
    pokemon.types.includes('Electric') ||
    pokemon.types.includes('Fire') ||
    pokemon.types.includes('Dragon') || 
    pokemon.types.includes('Steel') || 
    pokemon.types.includes('Flying') ||
    pokemon.types.includes('Water')
  ));
  const random = Math.floor(Math.random() * gacha1.length);
  const randomPokemon = gacha1[random]
  gotPokemon(randomPokemon)
});

document.querySelector('#gacha2').addEventListener('click', function() {
  const gacha2 = pokemonArray.filter((pokemon) => (
    pokemon.types.includes('Fighting') ||
    pokemon.types.includes('Fairy') ||
    pokemon.types.includes('Ground') || 
    pokemon.types.includes('Rock') || 
    pokemon.types.includes('Grass') ||
    pokemon.types.includes('Normal')
  ));
  const random = Math.floor(Math.random() * gacha2.length);
  const randomPokemon = gacha2[random]
  gotPokemon(randomPokemon)
});

document.querySelector('#gacha3').addEventListener('click', function() {
  const gacha3 = pokemonArray.filter((pokemon) => (
    pokemon.types.includes('Bug') ||
    pokemon.types.includes('Ghost') ||
    pokemon.types.includes('Dark') || 
    pokemon.types.includes('Poison') || 
    pokemon.types.includes('Psychic') ||
    pokemon.types.includes('Ice')
  ));
  const random = Math.floor(Math.random() * gacha3.length);
  const randomPokemon = gacha3[random]
  gotPokemon(randomPokemon)
});

document.querySelector('.inventory').addEventListener('click', function() {
  container.innerHTML = '';
  pokemon.innerHTML = '';
  heading.innerHTML = '';
  checkInventory(inventory);
  home();
})

function checkInventory(inventory) {
  if (inventory.length === 0){
    pokemon.insertAdjacentHTML('beforeend', `
      <h1>Inventory</h1>
      <br>
      <h2>You have no pokemon currently. Roll some gachas to get more!</h2>
      <button id="home">Home</button>`)
  }
  else {
    pokemon.insertAdjacentHTML('afterbegin', `
      <h1>Inventory</h1>
      <br>
      <button id="home">Home</button`)
    inventory.forEach(pokemon => 
      container.insertAdjacentHTML('beforeend', `
          <div class="inventory-card">
            <img class="img" src="https://th.bing.com/th/id/R.09a6ae937a6d9ef5cd10d132b59d6f5d?rik=8Wf%2bQNejqAkwIQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fPokemon-Pokeball-PNG-File.png&ehk=V%2f9byi3M%2bsgwt9knLB1GOoHBn8LkyKl6pt%2b4RSsHy%2bw%3d&risl=&pid=ImgRaw&r=0" alt="">
            <br>
            Name: ${pokemon[0]}
            <br>
            Types: ${pokemon[1]}
            <br>
            Abilities: ${pokemon[2]}
            <br>
            Weaknesses: ${pokemon[3]}
          </div>`))
    home()
  }
};