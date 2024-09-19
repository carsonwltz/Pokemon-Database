function renderEverything() {
	let allPokemonContainer = document.querySelector("#main-pokemon");
	allPokemonContainer.innerText = "";
	fetchPokemon();
}

function fetchPokemon() {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
		.then((response) => response.json())
		.then(function (allpokemon) {
			allpokemon.results.forEach(function (pokemon) {
				fetchTypesData(pokemon);
			});
		});
}
function fetchTypesData(pokemon) {
	fetch("./json/types.json")
		.then((response) => response.json())
		.then(function (json) {
			fetchPokemonData(pokemon, json);
		});
}
function fetchPokemonData(pokemon, json) {
	let url = pokemon.url;
	fetch(url)
		.then((response) => response.json())
		.then(function (pokeData) {
			renderPokemon(pokeData, json);
		});
}
function renderPokemon(pokeData, json) {
	let allPokemonContainer = document.getElementById("main-pokemon");
	let pokeContainer = document.createElement("article");
	let pokeName = document.createElement("div");
	pokeName.className = "pokeName";
	pokeName.innerText = pokeData.name;
	let pokeNumber = document.createElement("div");
	pokeNumber.className = "pokeNumber";
	pokeNumber.innerText = `#${pokeData.id}`;
	createPokeImage(pokeData.id, pokeContainer);
	pokeContainer.append(pokeName, pokeNumber);
	createTypes(pokeData.types, json, pokeContainer);
	allPokemonContainer.appendChild(pokeContainer);
}
function createTypes(types, json, containerDiv) {
	let typesDiv = document.createElement("div");
	typesDiv.className = "types";
	types.forEach(function (type) {
		let typesContent = document.createElement("div");
		let typesContentType = type["type"]["name"];
		typesContent.innerText = typesContentType;
		typesContent.style.textTransform = "capitalize";
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
		createTypesWeaknesses(typesContentType, json, containerDiv);
	});
}
function createTypesWeaknesses(type, json, containerDiv) {
	let weakness = json[type][0]["double_damage_from"];
	let weaknessTypeDiv = document.createElement("div");
	weaknessTypeDiv.className = "weaknessTypes";
	weakness.forEach(function (weakness) {
		let weaknessDiv = document.createElement("div");
		let weaknessName = weakness.name;
		weaknessDiv.innerText = weaknessName;
		weaknessDiv.style.textTransform = "capitalize";
		if (weaknessDiv.innerText === "fire") {
			weaknessDiv.style.color = "red";
		} else {
		}
		if (weaknessDiv.innerText === "water") {
			weaknessDiv.style.color = "cornflowerblue";
		} else {
		}
		if (weaknessDiv.innerText === "grass") {
			weaknessDiv.style.color = "green";
		} else {
		}
		if (weaknessDiv.innerText === "electric") {
			weaknessDiv.style.color = "yellow";
		} else {
		}
		if (weaknessDiv.innerText === "ice") {
			weaknessDiv.style.color = "aqua";
		} else {
		}
		if (weaknessDiv.innerText === "fighting") {
			weaknessDiv.style.color = "orange";
		} else {
		}
		if (weaknessDiv.innerText === "poison") {
			weaknessDiv.style.color = "purple";
		} else {
		}
		if (weaknessDiv.innerText === "ground") {
			weaknessDiv.style.color = "brown";
		} else {
		}
		if (weaknessDiv.innerText === "flying") {
			weaknessDiv.style.color = "darkcyan";
		} else {
		}
		if (weaknessDiv.innerText === "psychic") {
			weaknessDiv.style.color = "indianred";
		} else {
		}
		if (weaknessDiv.innerText === "bug") {
			weaknessDiv.style.color = "lightgreen";
		} else {
		}
		if (weaknessDiv.innerText === "rock") {
			weaknessDiv.style.color = "darksalmon";
		} else {
		}
		if (weaknessDiv.innerText === "ghost") {
			weaknessDiv.style.color = "indigo";
		} else {
		}
		if (weaknessDiv.innerText === "dark") {
			weaknessDiv.style.color = "gray";
		} else {
		}
		if (weaknessDiv.innerText === "dragon") {
			weaknessDiv.style.color = "blue";
		} else {
		}
		if (weaknessDiv.innerText === "steel") {
			weaknessDiv.style.color = "cadetblue";
		} else {
		}
		if (weaknessDiv.innerText === "fairy") {
			weaknessDiv.style.color = "hotpink";
		} else {
		}
		if (weaknessDiv.innerText === "normal") {
		} else {
		}
		weaknessTypeDiv.append(weaknessDiv);
		containerDiv.append(weaknessTypeDiv);
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
