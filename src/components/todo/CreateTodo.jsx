import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/todoSlice";
import { useRef } from "react";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef()
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mb-2">
          <input ref={taskInput} placeholder="Task Name" type="text" className="form-control" />{" "}
        </div>
        <div className="col-md-2">
          <button onClick={()=> dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add To Do</button>
        </div>
      </div>
    </div>
  );
};
export default CreateTodo;
