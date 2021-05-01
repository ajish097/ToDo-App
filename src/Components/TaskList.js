const TaskList = (props) => {
  const handleDelete = (id) => {
    const filteredTask = props.taskList.filter((task) => task.id !== id);
    props.setTaskList(filteredTask);
  };
  return (
    <div>
      <ul>
        {props.taskList.map((task) => (
          <li className="wrapper-task" key={task.id}>
            <input type="checkbox" id={"task" + task.id} />
            <label className="strike" htmlFor={"task" + task.id}>
              {" "}
              {task.value}{" "}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(task.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
