import { useTasks } from "../context/tasks/TaskProvider";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4 w-full my-2">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-3 mt-2 justify-center ">
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded-lg"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded-lg"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
        <button
          className="bg-red-400 px-2 py-1 text-black rounded-lg"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
