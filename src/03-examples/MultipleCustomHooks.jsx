import React from "react";
import { useCounter, useFetch, useForm } from "../hooks";
import { Spinner } from "./Spinner";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { onInputChange, pokemonId } = useForm({ pokemonId: 1 });
  const { increment, decrement, counter } = useCounter(1);
  const { data, isLoading, hasError, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  return (
    <>
      <h1>Pokemon Info</h1>
      {console.log("Render")}
      <div>
        <input
          name="pokemonId"
          style={{ width: "80px" }}
          className="form-control mt-2 mtr-2"
          type="number"
          onChange={(e) => e.target.value.length > 0 ? onInputChange(e) : null}
          value={pokemonId}
        />
      </div>

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? decrement(1) : null)}
      >
        Previous
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment(1)}>
        Next
      </button>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <PokemonCard
            name={data.name}
            id={data.id}
            sprites={[
              data.sprites.back_default,
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_shiny,
            ]}
          />
        </div>
      )}
    </>
  );
};
