import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { TaskProvider } from "./context/TaskContext"

function App() {

  return (
    <div className="bg-zinc-900 grow min-h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-[800px] max-w-[97%] rounded-lg">
        <h1 className="text-3xl font-bold text-center block my-2">Task Manager</h1>

        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
