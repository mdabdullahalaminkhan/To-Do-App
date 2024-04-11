

import Swal from "sweetalert2";
import store from "../../../redux/store";
import { EditTodo } from "../../../redux/todoSlice"; 

export function todoEditAlert(i, item) { 
    Swal.fire({
        title: "Update Task Name",
        input: "text",
        inputValue: item,
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({ index: i, task: value })); 
            }
        }
    });
}


