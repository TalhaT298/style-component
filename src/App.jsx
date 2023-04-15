import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {BrowserRouter , Routes,  Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from "styled-components"

const App = () => {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route 
          path='/'
          element={<Home></Home>}
        
        ></Route>
        <Route 
          path='/about'
          element={<About></About>}
        
        ></Route>
        <Route 
          path='/services'
          element={<Services></Services>}
        
        ></Route>
        <Route 
          path='/contact'
          element={<Contact></Contact>}
        
        ></Route>
      </Routes>
      <Footer></Footer>

    </BrowserRouter>
    </ThemeProvider>

  );
};

export default App;