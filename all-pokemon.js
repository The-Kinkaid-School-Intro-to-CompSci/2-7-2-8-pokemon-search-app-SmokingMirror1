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
}
function addPokemon(data){
    let container = document.querySelector(".pokemonCardContainer")
    
    let bigDiv = document.createElement("div")
    bigDiv.classList.add("top-container")
    
    let nameAndIdDiv = document.createElement("div")
    nameAndIdDiv.classList.add("name-and-id")
    let name 

}


function runProgram(){
    for(i=1; i<11; i++){
        getPokemon(i)
    }
    console.log('runProgram All pokemon');
}
document.addEventListener('DOMContentLoaded', runProgram);