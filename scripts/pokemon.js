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
	let weakTypesIndicator = document.createElement("span");
	weakTypesIndicator.className = "weakTypesIndicator";
	weakTypesIndicator.innerText = "Weak Against:";
	createPokeImage(pokeData.id, pokeContainer);
	pokeContainer.append(pokeName, pokeNumber);
	fetchWeakTypes(typesUrl1, typesUrl2, pokeContainer);
	createTypes(pokeData.types, pokeContainer);
	pokeContainer.append(weakTypesIndicator);
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
		if (weakTypesContent.innerText === "fire") {
			weakTypesContent.style.color = "red";
		} else {
		}
		if (weakTypesContent.innerText === "water") {
			weakTypesContent.style.color = "cornflowerblue";
		} else {
		}
		if (weakTypesContent.innerText === "grass") {
			weakTypesContent.style.color = "green";
		} else {
		}
		if (weakTypesContent.innerText === "electric") {
			weakTypesContent.style.color = "yellow";
		} else {
		}
		if (weakTypesContent.innerText === "ice") {
			weakTypesContent.style.color = "aqua";
		} else {
		}
		if (weakTypesContent.innerText === "fighting") {
			weakTypesContent.style.color = "orange";
		} else {
		}
		if (weakTypesContent.innerText === "poison") {
			weakTypesContent.style.color = "purple";
		} else {
		}
		if (weakTypesContent.innerText === "ground") {
			weakTypesContent.style.color = "brown";
		} else {
		}
		if (weakTypesContent.innerText === "flying") {
			weakTypesContent.style.color = "darkcyan";
		} else {
		}
		if (weakTypesContent.innerText === "psychic") {
			weakTypesContent.style.color = "indianred";
		} else {
		}
		if (weakTypesContent.innerText === "bug") {
			weakTypesContent.style.color = "lightgreen";
		} else {
		}
		if (weakTypesContent.innerText === "rock") {
			weakTypesContent.style.color = "darksalmon";
		} else {
		}
		if (weakTypesContent.innerText === "ghost") {
			weakTypesContent.style.color = "indigo";
		} else {
		}
		if (weakTypesContent.innerText === "dark") {
			weakTypesContent.style.color = "gray";
		} else {
		}
		if (weakTypesContent.innerText === "dragon") {
			weakTypesContent.style.color = "blue";
		} else {
		}
		if (weakTypesContent.innerText === "steel") {
			weakTypesContent.style.color = "cadetblue";
		} else {
		}
		if (weakTypesContent.innerText === "fairy") {
			weakTypesContent.style.color = "hotpink";
		} else {
		}
		if (weakTypesContent.innerText === "normal") {
		} else {
		}
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
		if (typesContent.innerText === "fire") {
			typesContent.style.color = "red";
		} else {
		}
		if (typesContent.innerText === "water") {
			typesContent.style.color = "cornflowerblue";
		} else {
		}
		if (typesContent.innerText === "grass") {
			typesContent.style.color = "green";
		} else {
		}
		if (typesContent.innerText === "electric") {
			typesContent.style.color = "yellow";
		} else {
		}
		if (typesContent.innerText === "ice") {
			typesContent.style.color = "aqua";
		} else {
		}
		if (typesContent.innerText === "fighting") {
			typesContent.style.color = "orange";
		} else {
		}
		if (typesContent.innerText === "poison") {
			typesContent.style.color = "purple";
		} else {
		}
		if (typesContent.innerText === "ground") {
			typesContent.style.color = "brown";
		} else {
		}
		if (typesContent.innerText === "flying") {
			typesContent.style.color = "darkcyan";
		} else {
		}
		if (typesContent.innerText === "psychic") {
			typesContent.style.color = "indianred";
		} else {
		}
		if (typesContent.innerText === "bug") {
			typesContent.style.color = "lightgreen";
		} else {
		}
		if (typesContent.innerText === "rock") {
			typesContent.style.color = "darksalmon";
		} else {
		}
		if (typesContent.innerText === "ghost") {
			typesContent.style.color = "indigo";
		} else {
		}
		if (typesContent.innerText === "dark") {
			typesContent.style.color = "gray";
		} else {
		}
		if (typesContent.innerText === "dragon") {
			typesContent.style.color = "blue";
		} else {
		}
		if (typesContent.innerText === "steel") {
			typesContent.style.color = "cadetblue";
		} else {
		}
		if (typesContent.innerText === "fairy") {
			typesContent.style.color = "hotpink";
		} else {
		}
		if (typesContent.innerText === "normal") {
		} else {
		}
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
