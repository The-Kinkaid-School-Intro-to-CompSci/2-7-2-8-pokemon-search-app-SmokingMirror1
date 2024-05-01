let HTMLElements = {
    button: null,
    text: null,
    name: null,
    id: null,
    weight: null,
    height: null,
    sprite: null,
    types: null,
}

function clearTypes(){
    while(HTMLElements.types.firstChild){
        HTMLElements.types.removeChild(HTMLElements.types.firstChild)
    }
}

function getHTMLElements(){
    HTMLElements.button = document.querySelector("#search-button")
    HTMLElements.text = document.querySelector("#search-input")
    HTMLElements.name = document.querySelector("#pokemon-name")
    HTMLElements.id = document.querySelector("#pokemon-id")
    HTMLElements.weight = document.querySelector("#weight")
    HTMLElements.height = document.querySelector("#height")
    HTMLElements.sprite = document.querySelector("#sprite")
    HTMLElements.types = document.querySelector("#types")
}

function unpackPokemonData(pokemon){
    console.log(pokemon)
    clearTypes()
    let pokemonName = pokemon.name
    let pokemonId = pokemon.id
    let pokemonHeight = pokemon.height
    let pokemonWeight = pokemon.weight
    let pokemonSprite = pokemon.sprites.front_default

    HTMLElements.name.textContent = pokemonName
    HTMLElements.id.textContent = `#${pokemonId}`
    HTMLElements.weight.textContent = `Weight: ${pokemonWeight}`
    HTMLElements.height.textContent = `Height: ${pokemonHeight}`

    HTMLElements.sprite.setAttribute('src', pokemonSprite)
    HTMLElements.sprite.setAttribute('alt', pokemon)

    for(let currentType of pokemon.types){
        let typeName = currentType.type.name
        typeObject = document.createElement('span')
        typeObject.textContent = typeName
        typeObject.classList.add(typeName)
        typeObject.classList.add("type")
        HTMLElements.types.appendChild(typeObject)
    }

    console.log('These are my stats:')
    for(let currentStat of pokemon.stats){
        let statName = currentStat.stat.name;
        let statText = document.querySelector(`#${statName}`)
        statText.textContent = currentStat.base_stat
    } 
}

async function getUserInput(){
    let userPoke = HTMLElements.text.value
    getPokemon(userPoke)
}

async function getPokemon(pokemon){
    console.log(pokemon)
    let pokemonData = null;
    const pokeBaseURL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/`;
    const pokeLongURL = `${pokeBaseURL}${pokemon}`
    try{
        const response = await fetch(pokeLongURL);
        pokemonData = await response.json();
    }
    catch(error){
        alert("Pokemon does not exist! Please try again.")
        console.log('There has been an error. Check the URL for an error')
        console.log(error)
    }
    console.log(pokemonData)
    unpackPokemonData(pokemonData)
}

function runProgram(){
    getHTMLElements()
    getPokemon("bulbasaur")
    // HTMLElements.button.addEventListener("click",getPokemon.bind(this, 'bulbasaur'));
    HTMLElements.button.addEventListener("click",getUserInput);
    console.log('runProgram');
}
document.addEventListener('DOMContentLoaded', runProgram);