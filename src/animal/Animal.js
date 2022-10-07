import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Animal() {
  const [animal, setAnimal] = useState();

  async function getAnimal() {
    const res = await axios.get(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );
    setAnimal(res.data);
  }

  return (
    <>
      <Button onClick={getAnimal}>Get new animal</Button>
      <h1>{animal ? animal.name : "Get Animal"}</h1>

      {animal ? (
        <section>
          <h2>
            <i>{animal.latin_name}</i>
          </h2>
          <p>
            <b>Life span:</b> {animal.lifespan} years
          </p>
          <img src={animal.image_link} width="100%" alt={`${animal.name}`} />
        </section>
      ) : (
        <p>No animal selected</p>
      )}
    </>
  );
}

export default Animal;
