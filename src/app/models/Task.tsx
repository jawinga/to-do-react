export interface Task {
  id: number;
  objective: string;
  difficulty: "Low" | "Medium" | "High";
  isDone: boolean;
}
