async function renderEverything() {
	let allPokemonContainer = document.querySelector("#main-pokemon");
	allPokemonContainer.innerText = "";
	fetchPokemon();
}

async function fetchPokemon() {
	fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151")
		.then((response) => response.json())
		.then(function (allpokemon) {
			allpokemon.results.forEach(function (pokemon) {
				fetchTypesData(pokemon);
			});
		});
}
async function fetchTypesData(pokemon) {
	fetch("src/json/types.json")
		.then((response) => response.json())
		.then(function (json) {
			fetchPokemonData(pokemon, json);
		});
}
async function fetchPokemonData(pokemon, json) {
	let url = pokemon.url;
	fetch(url)
		.then((response) => response.json())
		.then(function (pokeData) {
			renderPokemon(pokeData, json);
		});
}
async function renderPokemon(pokeData, json) {
	let allPokemonContainer = document.getElementById("main-pokemon");
	let pokeContainer = document.createElement("article");
	let pokeName = document.createElement("div");
	pokeName.className = "pokeName";
	pokeName.innerText = pokeData.name;
	let pokeNumber = document.createElement("div");
	pokeNumber.className = "pokeNumber";
	pokeNumber.innerText = `#${pokeData.id}`;
	let weaknessTypeHeaderDiv = document.createElement("div");
	weaknessTypeHeaderDiv.className = "weaknessTypesHeader";
	weaknessTypeHeaderDiv.innerText = "Weakness";
	createPokeImage(pokeData.id, pokeContainer);
	pokeContainer.append(pokeName, pokeNumber);
	createTypes(pokeData.types, json, pokeContainer);
	allPokemonContainer.appendChild(pokeContainer);
}
async function createPokeImage(pokeID, containerDiv) {
	let imgContainer = document.createElement("div");
	let img = document.createElement("img");
	imgContainer.className = "img";
	img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;
	imgContainer.append(img);
	containerDiv.append(imgContainer);
}
async function createTypes(types, json, containerDiv) {
	let typesDiv = document.createElement("div");
	let typeProperties = document.createElement("div");
	typeProperties.className = "properties";
	typesDiv.className = "types";
	let weaknessTypeDiv = document.createElement("div");
	weaknessTypeDiv.className = "weaknessTypes";
	let resistTypeDiv = document.createElement("div");
	resistTypeDiv.className = "resistTypes";
	let immuneTypeDiv = document.createElement("div");
	immuneTypeDiv.className = "immuneTypes";
	let weaknessTypesHeader = document.createElement("div");
	weaknessTypesHeader.className = "weaknessTypesHeader";
	weaknessTypesHeader.innerText = "x2.0 Damage From";
	let resistTypesHeader = document.createElement("div");
	resistTypesHeader.className = "resistTypesHeader";
	resistTypesHeader.innerText = "x0.5 Damage From";
	let immuneTypesHeader = document.createElement("div");
	immuneTypesHeader.className = "immuneTypesHeader";
	immuneTypesHeader.innerText = "x0.0 Damage From";
	types.forEach(async function (type) {
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
		await containerDiv.append(typesDiv);
		createTypesWeaknesses(
			typesContentType,
			typeProperties,
			weaknessTypeDiv,
			weaknessTypesHeader,
			json,
			containerDiv
		);
		createTypesResists(
			typesContentType,
			typeProperties,
			resistTypeDiv,
			resistTypesHeader,
			json,
			containerDiv
		);
		createTypesImmune(
			typesContentType,
			typeProperties,
			immuneTypeDiv,
			immuneTypesHeader,
			json,
			containerDiv
		);
	});
}
async function createTypesWeaknesses(
	type,
	typeProperties,
	weaknessTypeDiv,
	weaknessTypesHeader,
	json,
	containerDiv
) {
	let weakness = json[type][0]["double_damage_from"];
	weakness.forEach(async function (weakness) {
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
		weaknessTypeDiv.append(weaknessTypesHeader);
		weaknessTypesHeader.append(weaknessDiv);
		typeProperties.append(weaknessTypeDiv);
		containerDiv.append(typeProperties);
	});
}
async function createTypesResists(
	type,
	typeProperties,
	resistTypeDiv,
	resistTypesHeader,
	json,
	containerDiv
) {
	let resist = json[type][0]["half_damage_from"];
	resist.forEach(async function (resist) {
		let resistDiv = document.createElement("div");
		let resistName = resist.name;
		resistDiv.innerText = resistName;
		resistDiv.style.textTransform = "capitalize";
		if (resistDiv.innerText === "fire") {
			resistDiv.style.color = "red";
		} else {
		}
		if (resistDiv.innerText === "water") {
			resistDiv.style.color = "cornflowerblue";
		} else {
		}
		if (resistDiv.innerText === "grass") {
			resistDiv.style.color = "green";
		} else {
		}
		if (resistDiv.innerText === "electric") {
			resistDiv.style.color = "yellow";
		} else {
		}
		if (resistDiv.innerText === "ice") {
			resistDiv.style.color = "aqua";
		} else {
		}
		if (resistDiv.innerText === "fighting") {
			resistDiv.style.color = "orange";
		} else {
		}
		if (resistDiv.innerText === "poison") {
			resistDiv.style.color = "purple";
		} else {
		}
		if (resistDiv.innerText === "ground") {
			resistDiv.style.color = "brown";
		} else {
		}
		if (resistDiv.innerText === "flying") {
			resistDiv.style.color = "darkcyan";
		} else {
		}
		if (resistDiv.innerText === "psychic") {
			resistDiv.style.color = "indianred";
		} else {
		}
		if (resistDiv.innerText === "bug") {
			resistDiv.style.color = "lightgreen";
		} else {
		}
		if (resistDiv.innerText === "rock") {
			resistDiv.style.color = "darksalmon";
		} else {
		}
		if (resistDiv.innerText === "ghost") {
			resistDiv.style.color = "indigo";
		} else {
		}
		if (resistDiv.innerText === "dark") {
			resistDiv.style.color = "gray";
		} else {
		}
		if (resistDiv.innerText === "dragon") {
			resistDiv.style.color = "blue";
		} else {
		}
		if (resistDiv.innerText === "steel") {
			resistDiv.style.color = "cadetblue";
		} else {
		}
		if (resistDiv.innerText === "fairy") {
			resistDiv.style.color = "hotpink";
		} else {
		}
		if (resistDiv.innerText === "normal") {
		} else {
		}
		resistTypeDiv.append(resistTypesHeader);
		resistTypesHeader.append(resistDiv);
		typeProperties.append(resistTypeDiv);
		containerDiv.append(typeProperties);
	});
}
async function createTypesImmune(
	type,
	typeProperties,
	immuneTypeDiv,
	immuneTypesHeader,
	json,
	containerDiv
) {
	let immune = json[type][0]["no_damage_from"];
	immune.forEach(async function (immune) {
		let immuneDiv = document.createElement("div");
		let immuneName = immune.name;
		immuneDiv.innerText = immuneName;
		immuneDiv.style.textTransform = "capitalize";
		if (immuneDiv.innerText === "fire") {
			immuneDiv.style.color = "red";
		} else {
		}
		if (immuneDiv.innerText === "water") {
			immuneDiv.style.color = "cornflowerblue";
		} else {
		}
		if (immuneDiv.innerText === "grass") {
			immuneDiv.style.color = "green";
		} else {
		}
		if (immuneDiv.innerText === "electric") {
			immuneDiv.style.color = "yellow";
		} else {
		}
		if (immuneDiv.innerText === "ice") {
			immuneDiv.style.color = "aqua";
		} else {
		}
		if (immuneDiv.innerText === "fighting") {
			immuneDiv.style.color = "orange";
		} else {
		}
		if (immuneDiv.innerText === "poison") {
			immuneDiv.style.color = "purple";
		} else {
		}
		if (immuneDiv.innerText === "ground") {
			immuneDiv.style.color = "brown";
		} else {
		}
		if (immuneDiv.innerText === "flying") {
			immuneDiv.style.color = "darkcyan";
		} else {
		}
		if (immuneDiv.innerText === "psychic") {
			immuneDiv.style.color = "indianred";
		} else {
		}
		if (immuneDiv.innerText === "bug") {
			immuneDiv.style.color = "lightgreen";
		} else {
		}
		if (immuneDiv.innerText === "rock") {
			immuneDiv.style.color = "darksalmon";
		} else {
		}
		if (immuneDiv.innerText === "ghost") {
			immuneDiv.style.color = "indigo";
		} else {
		}
		if (immuneDiv.innerText === "dark") {
			immuneDiv.style.color = "gray";
		} else {
		}
		if (immuneDiv.innerText === "dragon") {
			immuneDiv.style.color = "blue";
		} else {
		}
		if (immuneDiv.innerText === "steel") {
			immuneDiv.style.color = "cadetblue";
		} else {
		}
		if (immuneDiv.innerText === "fairy") {
			immuneDiv.style.color = "hotpink";
		} else {
		}
		if (immuneDiv.innerText === "normal") {
		} else {
		}
		immuneTypeDiv.append(immuneTypesHeader);
		immuneTypesHeader.append(immuneDiv);
		typeProperties.append(immuneTypeDiv);
		containerDiv.append(typeProperties);
	});
}
renderEverything();
