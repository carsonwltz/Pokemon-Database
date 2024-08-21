function renderEverything() {
	let allPokemonContainer = document.querySelector("#main-pokemon");
	allPokemonContainer.innerText = "";
	fetchPokemon();
}

function fetchPokemon() {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
		.then((response) => response.json())
		.then(function (allpokemon) {
			allpokemon.results.forEach(function (pokemon) {
				fetchPokemonData(pokemon);
			});
		});
}

function fetchPokemonData(pokemon) {
	let url = pokemon.url;
	fetch(url)
		.then((response) => response.json())
		.then(function (pokeData) {
			renderPokemon(pokeData);
		});
}

function renderPokemon(pokeData) {
	let allPokemonContainer = document.getElementById("main-pokemon");
	let pokeContainer = document.createElement("article");
	fetchTypes(pokeData.types[0].type.url, pokeContainer);
	createPokeImage(pokeData.id, pokeContainer);
	let pokeName = document.createElement("h2");
	pokeName.innerText = pokeData.name;
	let pokeNumber = document.createElement("span");
	pokeNumber.innerText = `#${pokeData.id}`;
	let pokeTypes = document.createElement("ul");
	createTypes(pokeData.types, pokeTypes);
	pokeContainer.append(pokeName, pokeNumber, pokeTypes);
	allPokemonContainer.appendChild(pokeContainer);
}
function fetchTypes(url, containerDiv) {
	fetch(url)
		.then((response) => response.json())
		.then(function (typesData) {
			renderTypes(typesData, containerDiv);
		});
}
function renderTypes(typesData, containerDiv) {
	let typeWeakUl = document.createElement("ul");
	let typeWeak = typesData.damage_relations.double_damage_from;
	typeWeak.forEach(function (double_damage_from) {
		let typeWeakLi = document.createElement("li");
		typeWeakLi.innerText = double_damage_from.name;
		typeWeakUl.append(typeWeakLi);
		containerDiv.append(typeWeakUl);
	});
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
	pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`;
	pokeImgContainer.append(pokeImage);
	containerDiv.append(pokeImgContainer);
}
renderEverything();
