/* eslint-disable react/prop-types */
import "./PokemonCard.scss"
import pokeballBw from "../../assets/pokeball-bw.png";
import { useState } from "react";
import Modal from "../Modal/Modal";

const PokemonCard = ({ id, name, image, type, weight, height, stats, statsName }) => {

  const [isShown, setIsShown] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)


  function modalHandler() {
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat--container-title">
            <img src={image} alt={name} className="image--title" />
            <p style={{ width: "180px", color: "black" }}> No. {id}</p>
            <p>{name}</p>
            <img src={pokeballBw} alt="pokeball" className="pokeball--title" />
          </div>
          <img src={image} alt="name" />
          <div style={{ display: " flex", width: "100%" }}>
            <div style={{ background: "#dbdbd9", textAlign: "center" }} className="stats--left">
              <p>Type</p>
              <p>Weight</p>
              <p>Height</p>
            </div>
            <div style={{ background: "white", textAlign: "center" }} className="stats--right">
              <p>{type}</p>
              <p>{weight} lbs</p>
              <p>{height}0 cm</p>
            </div>
          </div>
          <div className="base--stats">
            <div>
              {statsName.map((stat) => (
                <p key={stat} className="stats">{stat}</p>
              ))}
            </div>
            <div>
              {stats.map((stat, index) => (
                <p key={index} className="stats">{stat}</p>
              ))}
            </div>
          </div>

        </div>
      )}
      <div className="right" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={modalHandler} >
        <img src={image} alt={name} style={{ height: "50px", marginRight: "10px", width: "50px" }} />
        <p style={{ width: "275px" }}>No. {id}</p>
        <p>{name}</p>
        <img src={pokeballBw} alt="pokeball" style={{ marginLeft: "auto", width: "40px" }} />
      </div>
      {modalIsOpen && (
        <Modal id={id} name={name} image={image} height={height} weight={weight} stats={stats} statsName={statsName} type={type} onClick={closeModalHandler} />
      )}
    </div>
  )
}

export default PokemonCard
