import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import Home from './Components/Home.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"Component={DefaultLayout}>
            <Route index Component={Home}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
