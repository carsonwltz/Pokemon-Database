function renderEverything() {
	let allPokemonContainer = document.querySelector("#main-pokemon");
	allPokemonContainer.innerText = "";
	fetchPokemon();
}

function fetchPokemon() {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
		.then((response) => response.json())
		.then(function (allpokemon) {
			allpokemon.results.forEach(function (pokemon) {
				fetchPokemonData(pokemon);
			});
		});
}

function fetchPokemonData(pokemon) {
	let url = pokemon.url; // <--- this is saving the pokemon url to a variable to use in the fetch.
	//Example: https://pokeapi.co/api/v2/pokemon/1/"
	fetch(url)
		.then((response) => response.json())
		.then(function (pokeData) {
			renderPokemon(pokeData);
		});
}

function renderPokemon(pokeData) {
	let allPokemonContainer = document.getElementById("main-pokemon");
	let pokeContainer = document.createElement("article"); //div will be used to hold the data/details for indiviual pokemon.{}
	createPokeImage(pokeData.id, pokeContainer);
	let pokeName = document.createElement("h4");
	pokeName.innerText = pokeData.name;
	let pokeNumber = document.createElement("p");
	pokeNumber.innerText = `#${pokeData.id}`;
	let pokeTypes = document.createElement("ul"); //ul list will hold the pokemon types
	createTypes(pokeData.types, pokeTypes); // helper function to go through the types array and create li tags for each one

	pokeContainer.append(pokeName, pokeNumber, pokeTypes); //appending all details to the pokeContainer div
	allPokemonContainer.appendChild(pokeContainer); //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}
function createTypes(types, ul) {
	types.forEach(function (type) {
		let typeLi = document.createElement("li");
		typeLi.innerText = type["type"]["name"];
		ul.append(typeLi);
	});
}

function createPokeImage(pokeID, containerDiv) {
	let pokeImgContainer = document.createElement("div");
	pokeImgContainer.classList.add("image");

	let pokeImage = document.createElement("img");
	pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;

	pokeImgContainer.append(pokeImage);
	containerDiv.append(pokeImgContainer);
}
renderEverything();
