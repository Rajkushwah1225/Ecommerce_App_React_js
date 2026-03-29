import { useState } from "react"

function Todo() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!input.trim()) return
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <button onClick={addTodo} style={styles.button}>
          Add
        </button>
      </div>

      <div style={styles.todoList}>
        {todos.map((todo, index) => (
          <div key={index} style={styles.todoItem}>
            {todo}
          </div>
        ))}
      </div>

    </div>
  )
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    background: "#f8fafc",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  todoList: {
    marginTop: "20px",
  },
  todoItem: {
    background: "white",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "6px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  }
}

export default Todo
