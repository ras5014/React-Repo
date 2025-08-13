/* During Data fetching, We have to handle 
 1. Loading state
 2. Error state
 3. Data state
 4. Cache data
 5. Race conditions,
    - Which will occur when multiple requests are made to the server. 
    - Scenario: If a user clicks on the next button multiple times,
      and while the first page api is fetching user clicked on next and now 2nd page loaded
      but then the first page api response comes back,
      then 2nd page will be overwritten by the first page data.
    - To handle this,
      We need to ensure that only the latest request is processed.
      We do that by using useRef
  6. Pagination state
     We will use useState and useEffect hooks to manage these states.
*/

import { useEffect, useState } from "react";

function DataFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<unknown>(null);
  // Paging Logic
  const [page, setPage] = useState<number>(1);

  const paginationHandler = (type) => {
    if (type === "next") {
      setPage((prevPage) => prevPage + 1);
    } else if (type === "prev") {
      setPage((prevPage) => {
        if (prevPage > 1) {
          return prevPage - 1;
        }
        return prevPage;
      });
    }
  };

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const posts = (await response.json()) as Post[];
      setPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  if (error) {
    return (
      <h1>
        Error fetching posts:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </h1>
    );
  }

  return (
    <div className="page-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="headline">Data fetching in React</h1>
          <ul className="grid grid-cols-2 gap-4">
            {posts.map((post) => {
              return (
                <li className="border rounded-sm p-4" key={post.id}>
                  <h2>{post.title}</h2>
                </li>
              );
            })}
          </ul>
          {/* paginationHandler("next") with this it will call the function */}
          <div className="flex gap-8 mt-10">
            <button
              className="button"
              onClick={() => paginationHandler("prev")}
            >
              Previous
            </button>
            <button
              className="button"
              onClick={() => paginationHandler("next")}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DataFetching;
