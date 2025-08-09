export const fetchTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const todos = await response.json();
  return todos;
};

export const addTodo = async (todo: { title: string }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const newTodo = await response.json();
  return newTodo;
};
