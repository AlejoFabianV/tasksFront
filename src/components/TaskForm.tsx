import { ChangeEvent, FormEvent, useState } from "react";
// import { createTaskRequest } from "../api/task";
import { useTasks } from "../context/useTasks";

function TaskForm() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        completed: false,
    });
    const [filtered, setFilter] = useState([]);

    const { createTask, tasks } = useTasks()

    const handleChnage = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setTask({ ...task, [e.target.name]: e.target.value });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        if (!task.title ) {
            return window.alert("Title is required");
        }
        // Verifica si el titulo ya existe en la lista de tareas actuales
        const titleExists = tasks.some(t => t.title === task.title);
        if (titleExists) {
            return window.alert("Title already exists");
        }
        createTask(task);
    }

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        let filter;
        if (e.target.value === 'completed') {
            filter = tasks.filter(t => t.completed === true);
            console.log(filter);
        } else if (e.target.value === 'pending') {
            filter = tasks.filter(t => t.completed === false);
            console.log(filter);
        } else if (e.target.value === 'all tasks') {
            console.log(tasks);
            setFilter([]);
            return tasks;
        }
        setFilter(filter);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Write a title"
                    onChange={handleChnage}
                />

                <textarea
                    name="description"
                    rows={3}
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Write a description"
                    onChange={handleChnage}
                ></textarea>

                <label className=" inline-flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        className=" h-5 w-5 text-indigo-600 mx-2"
                        onChange={() => setTask({ ...task, completed: !task.completed })}
                    />

                </label>
                <span>Completed</span>
                <button className="bg-indigo-500 px-3 block py-2 my-2 w-full">Save</button>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select 
                        className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleFilter}
                    >  
                        <option value='all tasks'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='pending'>Pending</option>
                    </select>
            </form>
            <div>
                {filtered.map(task => (
                    <div key={task._id} className="bg-gray-900 p-2 m-2 flex justify-between hover:bg-gray-800">
                        <div>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <p>Creado el: {new Date(task.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                            <button>{task.completed ? 'completed ✅' : 'Pending ❌'}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskForm;