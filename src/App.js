import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider } from './context/AuthContext';
import { useEffect, useState } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import Createpost from './pages/CreatePost/Createpost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    }, [auth])

  })

  if (loadingUser) {
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/posts/create' element={user ? <Createpost /> : <Navigate to='/login' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login' />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
