import React from "react";

const CardPhrase = ({frase, btn, id}) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__text">
          <p>ADVICE # {id}</p>
          <h3>
            " {frase} "
          </h3>
          <img src="./src/images/pattern-divider-desktop.svg" alt="" />
        </div>
        <div className="card__Button">
            <button onClick={btn}><img src="./src/images/icon-dice.svg" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default CardPhrase;
