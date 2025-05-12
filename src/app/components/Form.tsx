import React from "react";
import { Task } from "../models/Task";

interface propsForm {
  onSubmit: (formData: FormData) => void;
}

const Form = ({ onSubmit }: propsForm) => {
  return (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          onSubmit(formData);
        }}
        className="needs-validation"
      >
        <div className="mb-3">
          <input
            required
            type="text"
            name="objective"
            placeholder="What do you need to do?"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select name="priority" required className="form-select">
            <option value="" disabled selected>
              Select priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add task
        </button>
      </form>
    </div>
  );
};

export default Form;
