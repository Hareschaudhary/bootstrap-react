import './App.css';
import Routing from './Routing';
import UsecontaxtProvider from './Store.jsx/UsecontaxtProvider'
function App() {
  return (
 <UsecontaxtProvider>
   <Routing/>
 </UsecontaxtProvider>
    

  );
}

export default App;
