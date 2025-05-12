"use client";
import React, { useState } from "react";
import { Task } from "../models/Task";
import TaskCard from "../components/TaskCard";
import Form from "../components/Form";

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, objective: "Do home", difficulty: "High", isDone: false },
    { id: 2, objective: "Walk the dog", difficulty: "Medium", isDone: false },
    { id: 3, objective: "Go to work", difficulty: "High", isDone: false },
    { id: 4, objective: "Play football", difficulty: "Low", isDone: false },
  ]);

  const handleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isDone: true } : task))
    );
    console.log(tasks);
  };

  function handleSubmit(FormData) {
    const objective = FormData.get("objective");
    const dificultad = FormData.get("priority");
    console.log(`${objective} y ${dificultad}`);

    const newTask: Task = {
      id: parseInt(Math.random().toString()),
      objective: objective,
      difficulty: dificultad,
      isDone: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  // const [filter, setFilter] = useState("All");

  return (
    <div className="container mt-4">
      <h1 className="my-5">TASK MANAGER</h1>
      <div className="row my-5">
        <Form onSubmit={handleSubmit}></Form>
      </div>
      <div className="row">
        <div className="col-6">
          <h1>To do</h1>
          {/* <FilterBar value={filter} onChange={setFilter}></FilterBar> */}
          {tasks
            .filter((task: Task) => !task.isDone)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={handleComplete}
              ></TaskCard>
            ))}
        </div>
        <div className="col-6">
          <h1>Tasks done</h1>

          {tasks
            .filter((task: Task) => task.isDone)
            .map((task) => (
              <TaskCard key={task.id} task={task} onComplete={handleComplete} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
