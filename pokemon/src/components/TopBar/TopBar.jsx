import pokeballColor from "../../assets/pokeball-color.png";
import pokeballBw from "../../assets/pokeball-bw.png";
import "./TopBar.scss"

function TopBar() {
  return (
    <div className="title">
      <div className="title--left">
        <p>Pokedex</p>
        <div className="caught--seen">
          <div className="caught">
            <img
              src={pokeballColor}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeballBw}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  )
}

export default TopBar