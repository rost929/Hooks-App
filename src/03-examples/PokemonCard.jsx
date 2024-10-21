import React from "react";

export const PokemonCard = ({id, name, sprites = []}) => {
  return <section style={{ height: 200 }}>

    <h2 className="text-capitalize">#{id} - {name}</h2>

    <div>
        {
            sprites.map( (img) => (
                <img key={img} className=" border border-primary h-30 w-30 m-3 " src={img} alt="pokemon-image" />
            ))
        }
        
    </div>
  </section>;
};
