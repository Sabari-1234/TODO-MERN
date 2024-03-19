import React, { useContext } from "react";
import axios from "axios";
import { todoContext } from "../App";

function Button({ todo1, name, btn, but, id, visibility }) {
  const Url = process.env.REACT_APP_URL;
  const { fetch1, foc, settodolist, settodo, todo } = useContext(todoContext);

  const fn = async () => {
    if (name === "Delete") {
      foc();
      try {
        await axios.delete(`${Url}/todos/${todo1}`);

        fetch1();
      } catch (error) {
        console.log(error);
      }
    } else if (name === "Add") {
      foc();
      const reg = /^\s+$/;
      if (reg.test(todo) || todo === "") {
        alert("please enter a todo");
      } else {
        try {
          await axios.post(`${Url}/todos`, {
            todo: todo,
            checked: false,
            color: "green",
            decoration: "none",
          });

          fetch1();
          settodo("");
        } catch (error) {
          console.log(error);
        }
      }
    } else if (name === "Edit") {
      foc();
      settodo(todo1.todo);

      but(name, id);
    } else if (name === "Save") {
      foc();
      try {
        but(name, id);
        await axios.patch(`${Url}/todos/${todo1._id}`, {
          todo: todo,
        });

        fetch1();
        settodo("");
      } catch (error) {
        console.log(error);
      }
    } else if (name === "Delete All") {
      foc();
      try {
        await axios.delete(`${Url}/todos`);
        fetch1();
      } catch (error) {
        console.log(error);
      }
    } else if (name === "All") {
      fetch1();
      foc();
    } else if (name === "Completed") {
      foc();
      try {
        const a = await axios.get(`${Url}/todos/red`);

        settodolist(a.data);
      } catch (error) {
        console.log(error);
      }
    } else if (name === "Incompleted") {
      foc();
      try {
        const a = await axios.get(`${Url}/todos/green`);

        settodolist(a.data);
      } catch (error) {
        console.log(error);
      }
    } else if (name === "Delete Completed") {
      foc();
      try {
        await axios.delete(`${Url}/todos/del/red`);

        fetch1();
      } catch (error) {
        console.log(error);
      }
    } else if (name === "Delete Incompleted") {
      foc();
      try {
        await axios.delete(`${Url}/todos/del/green`);

        fetch1();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <button
        className={` btn btn-${btn} ms-5 ${name} rounded-pill`}
        onClick={fn}
        style={{ display: `${visibility}` }}
      >
        {name}
      </button>
    </>
  );
}

export default Button;
