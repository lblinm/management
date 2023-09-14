import { Outlet, Link, useRoutes } from 'react-router-dom'
import router from './router'
function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/Home">Home</Link>|
      <Link to="/About">About</Link> */}
      {outlet}
    </div>
  )
}

export default App
