import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to Todo App</p>

      <button onClick={() => navigate("/todo")}>
        Get Started
      </button>
    </div>
  )
}

export default Home
