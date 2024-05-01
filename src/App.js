import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SingleCat from "./components/CatDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/.components" element={<Home />}></Route>
          <Route path="/.components" element={<SingleCat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App