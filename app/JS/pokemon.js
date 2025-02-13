const pokemonArray = [
    { name: "Pikachu", types: ["Electric"], abilities: ["Static", "Lightning Rod"], weaknesses: ["Ground"] },
    { name: "Bulbasaur", types: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"], weaknesses: ["Fire", "Ice", "Flying", "Psychic"] },
    { name: "Charmander", types: ["Fire"], abilities: ["Blaze", "Solar Power"], weaknesses: ["Water", "Ground", "Rock"] },
    { name: "Squirtle", types: ["Water"], abilities: ["Torrent", "Rain Dish"], weaknesses: ["Electric", "Grass"] },
    { name: "Jigglypuff", types: ["Normal", "Fairy"], abilities: ["Cute Charm", "Competitive"], weaknesses: ["Steel", "Poison"] },
    { name: "Zubat", types: ["Poison", "Flying"], abilities: ["Inner Focus", "Infiltrator"], weaknesses: ["Psychic", "Electric", "Ice", "Rock"] },
    { name: "Geodude", types: ["Rock", "Ground"], abilities: ["Rock Head", "Sturdy"], weaknesses: ["Water", "Ice", "Grass", "Fighting", "Ground"] },
    { name: "Pidgey", types: ["Normal", "Flying"], abilities: ["Keen Eye", "Tangled Feet"], weaknesses: ["Electric", "Rock", "Ice"] },
    { name: "Rattata", types: ["Normal"], abilities: ["Run Away", "Hustle"], weaknesses: ["Fighting"] },
    { name: "Mankey", types: ["Fighting"], abilities: ["Anger Point", "Vital Spirit"], weaknesses: ["Flying", "Psychic", "Fairy"] },
    { name: "Sandshrew", types: ["Ground"], abilities: ["Sand Veil", "Sand Rush"], weaknesses: ["Water", "Ice", "Grass"] },
    { name: "Poliwag", types: ["Water"], abilities: ["Water Absorb", "Damp"], weaknesses: ["Electric", "Grass"] },
    { name: "Machop", types: ["Fighting"], abilities: ["Guts", "No Guard"], weaknesses: ["Flying", "Psychic", "Fairy"] },
    { name: "Magnemite", types: ["Electric", "Steel"], abilities: ["Magnet Pull", "Sturdy"], weaknesses: ["Fire", "Ground"] },
    { name: "Diglett", types: ["Ground"], abilities: ["Magnezone", "Arena Trap"], weaknesses: ["Water", "Ice", "Grass"] },
    { name: "Meowth", types: ["Normal"], abilities: ["Pickup", "Technician"], weaknesses: ["Fighting"] },
    { name: "Eevee", types: ["Normal"], abilities: ["Run Away", "Adaptability"], weaknesses: ["Fighting"] },
    { name: "Jolteon", types: ["Electric"], abilities: ["Volt Absorb", "Quick Feet"], weaknesses: ["Ground"] },
    { name: "Flareon", types: ["Fire"], abilities: ["Flash Fire"], weaknesses: ["Water", "Ground", "Rock"] },
    { name: "Vaporeon", types: ["Water"], abilities: ["Water Absorb", "Hydration"], weaknesses: ["Electric", "Grass"] },
    { name: "Espeon", types: ["Psychic"], abilities: ["Synchronize", "Magic Bounce"], weaknesses: ["Bug", "Ghost", "Dark"] },
    { name: "Umbreon", types: ["Dark"], abilities: ["Synchronize", "Inner Focus"], weaknesses: ["Fighting", "Bug", "Fairy"] },
    { name: "Leafeon", types: ["Grass"], abilities: ["Leaf Guard"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Glaceon", types: ["Ice"], abilities: ["Ice Body", "Snow Cloak"], weaknesses: ["Fire", "Fighting", "Rock", "Steel"] },
    { name: "Sylveon", types: ["Fairy"], abilities: ["Cute Charm", "Pixilate"], weaknesses: ["Steel", "Poison"] },
    { name: "Gible", types: ["Dragon", "Ground"], abilities: ["Sand Veil", "Rough Skin"], weaknesses: ["Ice", "Dragon", "Fairy"] },
    { name: "Garchomp", types: ["Dragon", "Ground"], abilities: ["Sand Veil", "Rough Skin"], weaknesses: ["Ice", "Dragon", "Fairy"] },
    { name: "Turtwig", types: ["Grass"], abilities: ["Overgrow", "Shell Armor"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Chimchar", types: ["Fire"], abilities: ["Blaze", "Iron Fist"], weaknesses: ["Water", "Ground", "Rock"] },
    { name: "Piplup", types: ["Water"], abilities: ["Torrent", "Defiant"], weaknesses: ["Electric", "Grass"] },
    { name: "Snorlax", types: ["Normal"], abilities: ["Immunity", "Thick Fat"], weaknesses: ["Fighting"] },
    { name: "Lucario", types: ["Fighting", "Steel"], abilities: ["Steadfast", "Inner Focus"], weaknesses: ["Fire", "Fighting", "Ground"] },
    { name: "Cyndaquil", types: ["Fire"], abilities: ["Blaze", "Flash Fire"], weaknesses: ["Water", "Ground", "Rock"] },
    { name: "Totodile", types: ["Water"], abilities: ["Torrent", "Sheer Force"], weaknesses: ["Electric", "Grass"] },
    { name: "Chikorita", types: ["Grass"], abilities: ["Overgrow", "Leaf Guard"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Hoothoot", types: ["Normal", "Flying"], abilities: ["Insomnia", "Keen Eye"], weaknesses: ["Electric", "Rock", "Ice"] },
    { name: "Ledyba", types: ["Bug", "Flying"], abilities: ["Swarm", "Rattled"], weaknesses: ["Fire", "Flying", "Rock"] },
    { name: "Spinarak", types: ["Bug", "Poison"], abilities: ["Swarm", "Insomnia"], weaknesses: ["Fire", "Flying", "Rock"] },
    { name: "Miltank", types: ["Normal"], abilities: ["Thick Fat", "Scrappy"], weaknesses: ["Fighting"] },
    { name: "Shuckle", types: ["Bug", "Rock"], abilities: ["Sturdy", "Gluttony"], weaknesses: ["Fire", "Flying", "Rock", "Steel"] },
    { name: "Zangoose", types: ["Normal"], abilities: ["Immunity", "Quick Feet"], weaknesses: ["Fighting"] },
    { name: "Lunatone", types: ["Rock", "Psychic"], abilities: ["Levitate", "Drought"], weaknesses: ["Water", "Ghost", "Dark", "Bug"] },
    { name: "Solrock", types: ["Rock", "Psychic"], abilities: ["Levitate", "Drought"], weaknesses: ["Water", "Ghost", "Dark", "Bug"] },
    { name: "Wailmer", types: ["Water"], abilities: ["Water Veil", "Oblivious"], weaknesses: ["Electric", "Grass"] },
    { name: "Wailord", types: ["Water"], abilities: ["Water Veil", "Oblivious"], weaknesses: ["Electric", "Grass"] },
    { name: "Castform", types: ["Normal"], abilities: ["Forecast"], weaknesses: ["Fighting"] },
    { name: "Mawile", types: ["Steel", "Fairy"], abilities: ["Intimidate", "Hyper Cutter"], weaknesses: ["Fire", "Ground"] },
    { name: "Beldum", types: ["Steel", "Psychic"], abilities: ["Clear Body", "Light Metal"], weaknesses: ["Fire", "Ground", "Ghost", "Dark"] },
    { name: "Shuppet", types: ["Ghost"], abilities: ["Insomnia", "Frisk"], weaknesses: ["Ghost", "Dark"] },
    { name: "Banette", types: ["Ghost"], abilities: ["Insomnia", "Frisk"], weaknesses: ["Ghost", "Dark"] },
    { name: "Slakoth", types: ["Normal"], abilities: ["Truant"], weaknesses: ["Fighting"] },
    { name: "Vigoroth", types: ["Normal"], abilities: ["Vital Spirit"], weaknesses: ["Fighting"] },
    { name: "Slaking", types: ["Normal"], abilities: ["Truant"], weaknesses: ["Fighting"] },
    { name: "Corphish", types: ["Water"], abilities: ["Hustle", "Adaptability"], weaknesses: ["Electric", "Grass"] },
    { name: "Crawdaunt", types: ["Water", "Dark"], abilities: ["Hustle", "Adaptability"], weaknesses: ["Electric", "Bug", "Fairy", "Fighting"] },
    { name: "Meditite", types: ["Fighting", "Psychic"], abilities: ["Pure Power", "Infiltrator"], weaknesses: ["Flying", "Ghost", "Fairy", "Bug"] },
    { name: "Bidoof", types: ["Normal"], abilities: ["Simple", "Unaware"], weaknesses: ["Fighting"] },
    { name: "Bibarel", types: ["Normal", "Water"], abilities: ["Simple", "Unaware"], weaknesses: ["Electric", "Grass"] },
    { name: "Kricketot", types: ["Bug"], abilities: ["Shed Skin", "Run Away"], weaknesses: ["Flying", "Fire", "Rock"] },
    { name: "Kricketune", types: ["Bug"], abilities: ["Shed Skin", "Technician"], weaknesses: ["Flying", "Fire", "Rock"] },
    { name: "Shinx", types: ["Electric"], abilities: ["Rivalry", "Intimidate"], weaknesses: ["Ground"] },
    { name: "Luxio", types: ["Electric"], abilities: ["Rivalry", "Intimidate"], weaknesses: ["Ground"] },
    { name: "Luxray", types: ["Electric"], abilities: ["Rivalry", "Intimidate"], weaknesses: ["Ground"] },
    { name: "Turtwig", types: ["Grass"], abilities: ["Overgrow", "Shell Armor"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Grotle", types: ["Grass"], abilities: ["Overgrow"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Torterra", types: ["Grass", "Ground"], abilities: ["Overgrow", "Shell Armor"], weaknesses: ["Fire", "Ice", "Flying", "Bug", "Water"] },
    { name: "Chimchar", types: ["Fire"], abilities: ["Blaze", "Iron Fist"], weaknesses: ["Water", "Ground", "Rock"] },
    { name: "Monferno", types: ["Fire", "Fighting"], abilities: ["Blaze", "Iron Fist"], weaknesses: ["Water", "Ground", "Rock", "Flying", "Psychic"] },
    { name: "Infernape", types: ["Fire", "Fighting"], abilities: ["Blaze", "Iron Fist"], weaknesses: ["Water", "Ground", "Rock", "Flying", "Psychic"] },
    { name: "Piplup", types: ["Water"], abilities: ["Torrent", "Defiant"], weaknesses: ["Electric", "Grass"] },
    { name: "Prinplup", types: ["Water"], abilities: ["Torrent"], weaknesses: ["Electric", "Grass"] },
    { name: "Empoleon", types: ["Water", "Steel"], abilities: ["Torrent", "Defiant"], weaknesses: ["Electric", "Ground", "Fire"] },
    { name: "Starly", types: ["Normal", "Flying"], abilities: ["Keen Eye", "Reckless"], weaknesses: ["Electric", "Rock", "Ice"] },
    { name: "Staravia", types: ["Normal", "Flying"], abilities: ["Intimidate", "Reckless"], weaknesses: ["Electric", "Rock", "Ice"] },
    { name: "Staraptor", types: ["Normal", "Flying"], abilities: ["Intimidate", "Reckless"], weaknesses: ["Electric", "Rock", "Ice"] },
    { name: "Shinx", types: ["Electric"], abilities: ["Rivalry", "Intimidate"], weaknesses: ["Ground"] },
    { name: "Combee", types: ["Bug", "Flying"], abilities: ["Honey Gather", "Shield Dust"], weaknesses: ["Fire", "Flying", "Rock"] },
    { name: "Vespiquen", types: ["Bug", "Flying"], abilities: ["Pressure", "Unnerve"], weaknesses: ["Fire", "Flying", "Rock"] },
    { name: "Drifloon", types: ["Ghost", "Flying"], abilities: ["Aftermath", "Unburden"], weaknesses: ["Ghost", "Dark", "Ice", "Electric", "Rock"] },
    { name: "Drifblim", types: ["Ghost", "Flying"], abilities: ["Aftermath", "Unburden"], weaknesses: ["Ghost", "Dark", "Ice", "Electric", "Rock"] },
    { name: "Croagunk", types: ["Poison", "Fighting"], abilities: ["Anticipation", "Dry Skin"], weaknesses: ["Ground", "Psychic", "Flying", "Fairy"] },
    { name: "Toxicroak", types: ["Poison", "Fighting"], abilities: ["Anticipation", "Dry Skin"], weaknesses: ["Ground", "Psychic", "Flying", "Fairy"] },
    { name: "Carnivine", types: ["Grass"], abilities: ["Levitate"], weaknesses: ["Fire", "Flying", "Bug", "Ice"] },
    { name: "Finneon", types: ["Water"], abilities: ["Swift Swim", "Storm Drain"], weaknesses: ["Electric", "Grass"] },
    { name: "Lumineon", types: ["Water"], abilities: ["Swift Swim", "Storm Drain"], weaknesses: ["Electric", "Grass"] },
    { name: "Munchlax", types: ["Normal"], abilities: ["Immunity", "Thick Fat"], weaknesses: ["Fighting"] },
    { name: "Riolu", types: ["Fighting"], abilities: ["Steadfast", "Inner Focus"], weaknesses: ["Flying", "Psychic", "Fairy"] },
    { name: "Lucario", types: ["Fighting", "Steel"], abilities: ["Steadfast", "Inner Focus"], weaknesses: ["Fire", "Fighting", "Ground"] },
    { name: "Hippopotas", types: ["Ground"], abilities: ["Sand Stream"], weaknesses: ["Water", "Ice", "Grass"] },
    { name: "Hippowdon", types: ["Ground"], abilities: ["Sand Stream"], weaknesses: ["Water", "Ice", "Grass"] },
    { name: "Cherrim", types: ["Grass"], abilities: ["Flower Gift"], weaknesses: ["Fire", "Ice", "Flying", "Bug"] },
    { name: "Shellos", types: ["Water"], abilities: ["Sticky Hold", "Storm Drain"], weaknesses: ["Electric", "Grass"] },
    { name: "Gastrodon", types: ["Water", "Ground"], abilities: ["Sticky Hold", "Storm Drain"], weaknesses: ["Grass", "Ice"] },
    { name: "Ambipom", types: ["Normal"], abilities: ["Pickup", "Technician"], weaknesses: ["Fighting"] },
    { name: "Buizel", types: ["Water"], abilities: ["Swift Swim", "Water Veil"], weaknesses: ["Electric", "Grass"] },
    { name: "Floatzel", types: ["Water"], abilities: ["Swift Swim", "Water Veil"], weaknesses: ["Electric", "Grass"] },
    { name: "Drifloon", types: ["Ghost", "Flying"], abilities: ["Aftermath", "Unburden"], weaknesses: ["Ghost", "Dark", "Ice", "Electric", "Rock"] },
    { name: "Roserade", types: ["Grass", "Poison"], abilities: ["Natural Cure", "Poison Point"], weaknesses: ["Fire", "Flying", "Ice", "Bug"] },
    { name: "Bronzor", types: ["Steel", "Psychic"], abilities: ["Levitate", "Heatproof"], weaknesses: ["Fire", "Ground", "Ghost", "Dark"] },
    { name: "Chimecho", types: ["Psychic"], abilities: ["Levitate"], weaknesses: ["Ghost", "Dark", "Bug"] }
  ];
  export {pokemonArray}