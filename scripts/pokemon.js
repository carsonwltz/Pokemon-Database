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
	let typesUrl1 = pokeData.types[0].type.url;
	let typesUrl2 = pokeData.types[1]?.type?.url;
	let pokeName = document.createElement("span");
	pokeName.className = "pokeName";
	pokeName.innerText = pokeData.name;
	let pokeNumber = document.createElement("span");
	pokeNumber.className = "pokeNumber";
	pokeNumber.innerText = `#${pokeData.id}`;
	createPokeImage(pokeData.id, pokeContainer);
	pokeContainer.append(pokeName, pokeNumber);
	fetchWeakTypes(typesUrl1, typesUrl2, pokeContainer);
	createTypes(pokeData.types, pokeContainer);
	allPokemonContainer.appendChild(pokeContainer);
}
function fetchWeakTypes(url, url2, containerDiv) {
	fetch(url)
		.then((response) => response.json())
		.then(function (typesData) {
			createWeakTypes(typesData, containerDiv);
		});
	if (url2 !== undefined) {
		fetch(url2)
			.then((response) => response.json())
			.then(function (typesData) {
				createWeakTypes(typesData, containerDiv);
			});
	} else {
	}
}
function createWeakTypes(typesData, containerDiv) {
	let weakTypesDiv = document.createElement("div");
	let weakTypes = typesData.damage_relations.double_damage_from;
	weakTypesDiv.className = "weakTypes";
	weakTypes.forEach(function (double_damage_from) {
		let weakTypesContent = document.createElement("span");
		weakTypesContent.innerText = double_damage_from.name;
		weakTypesDiv.append(weakTypesContent);
		containerDiv.append(weakTypesDiv);
	});
}
function createTypes(types, containerDiv) {
	let typesDiv = document.createElement("div");
	typesDiv.className = "types";
	types.forEach(function (type) {
		let typesContent = document.createElement("span");
		typesContent.innerText = type["type"]["name"];
		typesDiv.append(typesContent);
		containerDiv.append(typesDiv);
	});
}

function createPokeImage(pokeID, containerDiv) {
	let imgContainer = document.createElement("div");
	let img = document.createElement("img");
	imgContainer.className = "img";
	img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`;
	imgContainer.append(img);
	containerDiv.append(imgContainer);
}
renderEverything();
