import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"

function App() {
  const title = 'CoderMarket'
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={title}/>
    </>
  )
}

export default App
