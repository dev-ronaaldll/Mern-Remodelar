import { useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import { useTasks } from "../../context/tasks/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center mb-5 ">Tasks</h1>
      <div className="grid grid-cols-1 lg:gap-1 lg:grid-cols-3 ">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
