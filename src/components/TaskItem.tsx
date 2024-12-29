import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interface";
import { useState } from "react";
import { format } from "date-fns";
import { IoCheckmarkDone, IoTrash, IoPencil, IoSaveSharp  } from "react-icons/io5";

interface Props {
    task: Task;
}

function TaskItem({ task }: Props) {
    const { deleteTask, updateTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async () => {
        await updateTask(task._id, editedTask);
        setIsEditing(false);
    };

    return (
        <div key={task._id} className=" bg-gray-900 p-2 m-2 flex justify-between hover:bg-gray-800">
            <div>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={editedTask.title}
                            onChange={handleEditChange}
                            className="bg-gray-700 p-2 mb-2 flex"
                        />
                        <textarea
                            name="description"
                            value={editedTask.description}
                            onChange={handleEditChange}
                            className="bg-gray-700 p-2 flex"
                        />
                    </div>
                ) : (
                    <div>
                        <h1>{task.title}</h1>
                        <p>{task.description}</p>
                        <p>Creado el: {format(new Date(task.createdAt), 'dd/MM/yyyy')}</p>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                <button onClick={async () => {
                    await updateTask(task._id, {
                        completed: !task.completed,
                    });
                }}>{task.completed ? <IoCheckmarkDone className="text-green-600 w-5 h-5" /> : <IoCheckmarkDone className="text-gray-500 w-5 h-5" />}</button>

                {isEditing ? (
                    <button onClick={handleEditSubmit}><IoSaveSharp /></button>
                ) : (
                    <button onClick={() => setIsEditing(true)}><IoPencil /></button>
                )}

                <button onClick={async () => {
                    if (!window.confirm("Are you sure you want to delete this task?")) return;
                    await deleteTask(task._id);
                }}><IoTrash /></button>
            </div>
        </div>
    );
}

export default TaskItem;