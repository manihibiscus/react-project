
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { LoginPage } from './components/LoginPage'
import store from './redux/store';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
function App() {

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />}/>
    </Routes>

    </Provider>
    </BrowserRouter>
  )
}

export default App
