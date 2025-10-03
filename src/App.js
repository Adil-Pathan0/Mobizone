import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './mobizone/header'
import Footer from './mobizone/Footer';
import Routing from './mobizone/Routing';
import Dashboard from './mobizone/Admin/Dashboard';
import { createContext, useState } from 'react';

export const loginstatus = createContext()

function App() {
  const [login, setlogin] = useState(false)
  return (
    <div >
      <loginstatus.Provider value={[login, setlogin]}>
        <Header />
        <Routing />
        <Footer />
      </loginstatus.Provider>

    </div>
  )
}

export default App;
