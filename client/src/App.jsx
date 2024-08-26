import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <header>
        <h1>IOUs</h1>
        <nav>
          <a href='/'>Home</a> | <a href='/ious'>IOUs</a> | <a href='/admin'>Admin</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
