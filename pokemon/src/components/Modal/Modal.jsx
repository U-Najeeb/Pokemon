/* eslint-disable react/prop-types */
import pokeballBw from "../../assets/pokeball-bw.png";
import "./Modal.scss"

const Modal = ({ onClick, id, name, image, type, height, weight, stats, statsName }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0%",
        left: "0%",
        width: "100%",
        height: "100%",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundImage: `url(${bg})`,
        background: "linear-gradient(115deg, #fff1ff 34%, #f3533b 34%, #fb7248 55%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}

      className="modal"
    >
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          borderRadius: "50%",
          padding: "5px 10px",
          background: "black",
          color: "white",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </div>

      <div>
        <img src={image} alt={name} style={{ filter: "drop-shadow(2px 4px 12px black)" }} />
      </div>

      <div className="modal--stats">
        <div className="stat--container-title">
          <img src={image} alt={name} className="image--title" />
          <p style={{ minWidth: "200px", color: "black" }}> No. {id}</p>
          <p>{name}</p>
          <img src={pokeballBw} alt="pokeball" className="pokeball--title" />
        </div>
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

    </div>
  );
};

export default Modal;
