
import './App.css'
import Api from './compo/api/Api'
import UsecontaxtProvider from './store/UsecontaxtProvider'

function App() {


  return (
  <>
  <UsecontaxtProvider>
  <Api/>
  </UsecontaxtProvider>
  </>
  )
}

export default App
