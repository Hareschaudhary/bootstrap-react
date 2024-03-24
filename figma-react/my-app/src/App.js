
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Switchnav from './compo/header/header-compo/Switch';
import UsecontaxtProvider from './store/UsecontaxtProvider';
import Navbar from './compo/header/Navbar'
import Card from './compo/pages/Card'

function App() {
  return (
    <UsecontaxtProvider>
       <Navbar/>
       <Card/>
    </UsecontaxtProvider>
  );
}

export default App;
