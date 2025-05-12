import React from "react";
import { Task } from "../models/Task";

interface taskProps {
  task: Task;
  onComplete: (id: number) => void;
}

const Classes = {
  Low: "text-info",
  Medium: "text-warning",
  High: "text-danger",
};

const TaskCard = ({ task, onComplete }: taskProps) => {
  return (
    <div
      className={
        task.isDone ? "card w-50 bg-dark text-light my-3 " : "card w-50 my-3"
      }
    >
      <div className="card-body">
        <h5 className="card-title">{task.objective}</h5>
        <p className={Classes[task.difficulty]}>{task.difficulty}</p>

        {!task.isDone && (
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => onComplete(task.id)}
          >
            Mark as completed
          </a>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
