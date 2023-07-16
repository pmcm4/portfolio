import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
        {/* <Routes>
            <Route path='*' Component={NotFound}/>
        </Routes> */}
        <Routes>
           <Route path='/' Component={Home}/>
         </Routes>
         <Routes>
           <Route path='/about' Component={About}/>
         </Routes>
         <Routes>
           <Route path='/projects' Component={Projects}/>
         </Routes>
         <Routes>
           <Route path='/contact' Component={Contact}/>
         </Routes>
       </BrowserRouter> 
        </div>
    );
}

export default App;
