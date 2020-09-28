export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default interface Tasks {
  [id: number]: Task;
}
