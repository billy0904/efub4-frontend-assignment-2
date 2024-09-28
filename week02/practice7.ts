interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreviewOmit = Omit<Todo, "description">;

const todoOmit: TodoPreviewOmit ={
    title: "Study English",
    completed: false,
    createdAt: 20240915,
}

type TodoInfoOmit = Omit<Todo, "completed" | "createdAt">

const todoInfoOmit: TodoInfoOmit = {
    title: "Study Math",
    description: "Exam Tomorrow",
}