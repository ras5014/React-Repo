/*
  1. For ReactQuery Setup please look into main.tsx file
  2. For queryFn do not add any error handling logic, just call api and return.
     Error will be handled by React Query
*/

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../services/api/todoService";
import { useEffect, useRef, useState } from "react";

const ReactQuery = () => {
  const queryClient = useQueryClient();
  // Optional Pagination logic
  const [page, setPage] = useState<number>(1);
  // Handle page change
  const handlePageChange = (type) => {
    if (type === "next") {
      setPage((prevPage) => prevPage + 1);
    } else {
      setPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  // fetching todos
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => fetchTodos(page), // Every parameter that goes into queryFn should go to queryKey also to maintain the specific cache
    queryKey: ["todos", { page }],
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });

  // adding todos
  const [input, setInput] = useState<string>("");

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate todos
      queryClient.invalidateQueries(["todos"]);
    },
  });

  // To autofocus input field
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [todos]);

  if (isError) {
    return <div>Error fetching todos</div>;
  }

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
            <input
              ref={inputRef}
              className="input"
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              className="button ml-4"
              onClick={async () => {
                await addTodoMutation({ title: input });
                setInput("");
              }}
            >
              Add Todo
            </button>
          </div>
          <div className="flex gap-8 mt-10">
            <button className="button" onClick={() => handlePageChange("prev")}>
              Previous
            </button>
            <button className="button" onClick={() => handlePageChange("next")}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactQuery;
