
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { LoginPage } from './components/LoginPage'
import store from './redux/store';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import { Register } from './components/Register';
function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/register" element={<Register />}/>

    </Routes>

    </Provider>
    </BrowserRouter>
  )
}

export default App
