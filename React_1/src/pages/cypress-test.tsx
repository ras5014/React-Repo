const todos = [
  {
    id: 1,
    text: "Learn Cypress",
    completed: false,
  },
  {
    id: 2,
    text: "Write Cypress tests",
    completed: true,
  },
  {
    id: 3,
    text: "Deploy to production",
    completed: false,
  },
];
export default function CypressTest() {
  return (
    <div className="page-container">
      <h1 data-testid="cypress-test" className="headline">
        Cypress Test
      </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid={`todo-${todo.id}`}>
            <span>{todo.completed ? "✅ " : "❌ "}</span>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
