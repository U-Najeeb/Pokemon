import { useEffect, useState } from "react";
import "./PokeList.scss";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokeList() {
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=649&offset=0');
    const data = await response.json();

    const pokemonDataArray = await Promise.all(data.results.map(async (pokemon) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      return response.json();
    }));

    // Sort based on the Pokemon names in a case-insensitive manner
    setAllPokemons(pokemonDataArray.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })));
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
};


    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className="app--container">
            <div className="pokemon--container">
                <div className="all--container">
                    {allPokemons.map((pokemonStats) => (
                        <PokemonCard key={pokemonStats.id}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={pokemonStats.sprites.other["official-artwork"].front_default}
                            name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
                            type={pokemonStats.types[0].type.name}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats.map(stat => stat.base_stat).slice(0, 3)}
                            statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0, 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokeList;
