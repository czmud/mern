export {}

const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// divisible by 3
const list1 = pokemon.filter( p => p.id % 3 === 0 );
console.log(list1);

// fire types
const list2 = pokemon.filter( p => p.types.includes('fire') );
console.log(list2);

// more than one type
const list3 = pokemon.filter( p => p.types.length > 1 );
console.log(list3);

// only the names of the pokemon
const list4 = pokemon.map( p => p.name );
console.log(list4);

// only names where id>99
const list5 = pokemon.filter( p => p.id > 99 ).map( p => p.name );
console.log(list5);

// only names where only type is poison
const list6 = pokemon.filter( p => p.types.length === 1 && p.types.includes('poison')).map( p => p.name );
console.log(list6);

// return the first type of pokemon with second type of flying
const list7 = pokemon.filter( p => p.types.length > 1 && p.types[1] === 'flying').map( p => p.types[0]);
console.log(list7);

// count of pokemon of normal type
const count8: number = pokemon.filter( p => p.types.includes('normal') ).length;
console.log(count8);