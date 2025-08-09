import { useMutation, useQuery } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../services/api/todoService";
import { useEffect, useRef } from "react";

const ReactQuery = () => {
  // fetching todos
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });

  // adding todos
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
  });

  if (isError) {
    return <div>Error fetching todos</div>;
  }

  // To autofocus input field
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [todos]);

  return (
    <>
      {isPending && <div className="page-container">Loading...</div>}
      {todos && (
        <div className="page-container">
          <h1 className="headline">Todos List</h1>
          <ul className="content">
            {todos.map((todo) => (
              <li className="box" key={todo.id}>
                {todo.title.slice(0, 10) + "..."}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center items-center">
            <input ref={inputRef} className="input" type="text" />
            <button className="button ml-4">Add Todo</button>
          </div>
          <div className="flex gap-8 mt-10">
            <button className="button" onClick={() => {}}>
              Previous
            </button>
            <button className="button" onClick={() => {}}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactQuery;
