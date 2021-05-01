import { useEffect } from "react";
const InputTaskList = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTaskList([
      ...props.taskList,
      { id: new Date().getTime().toString(), value: e.target[0].value }
    ]);
    e.target.reset();
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(props.taskList));
  });

  return (
    <>
      <h5>Add Task</h5>
      <form onSubmit={handleSubmit}>
        <div className="wrapper-input-box">
          <input required />
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default InputTaskList;
