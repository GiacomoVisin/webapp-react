import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout.jsx'
import Home from './Components/Home.jsx'
import Loader from './Components/Loader.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'
import FormReview from './Components/FormReview.jsx'
import AddMoviesForm from './Components/addMoviesForm.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<DefaultLayout/>}>
            <Route index element={<Home Loader={Loader} />}/>
            <Route path="/MovieDetails/:id" element={<MovieDetails Loader={Loader}/>}/>
            <Route path="/FormReview" element={<FormReview/>}/>
            <Route path="/AddMoviesForm" element={<AddMoviesForm Loader={Loader}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App