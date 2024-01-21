import TopBar from './components/TopBar/TopBar'
import BottomBar from './components/BottomBar/BottomBar'
import "./App.scss"
import PokeList from './components/PokeList/PokeList'

function App() {
  return (
    <>
    <TopBar/>

    <PokeList/>

    <BottomBar/>
    </>
  )
}

export default App
