import './App.css'
import {BrowserRouter , Routes ,Route, Link} from 'react-router-dom'
import Create from './pages/Create.jsx' 
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import EditProfile from './pages/EditProfile.jsx'

function App() {
  return <div>

    <BrowserRouter>
    <nav>
          <Link to="/">Home</Link>
        </nav>
        <br></br>
  <Routes>
    <Route path='create' element={<Create />}/>
    <Route path='/' element={<Homepage />}/>
    <Route path='login' element={<Login />}/>
    <Route path='profile' element={<EditProfile />}/>
    <Route path='*' element={<PageNotFound />}/>
  </Routes>
  </BrowserRouter>
  </div>
}

export default App
