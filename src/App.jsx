import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import Home from './Components/Home.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'
import FormReview from './Components/FormReview.jsx'
import AddMoviesForm from './Components/addMoviesForm.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<DefaultLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/MovieDetails/:id" element={<MovieDetails/>}/>
            <Route path="/FormReview" element={<FormReview/>}/>
            <Route path="/AddMoviesForm" element={<AddMoviesForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App