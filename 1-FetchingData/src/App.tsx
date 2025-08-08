import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<unknown>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"
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
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>
        Error fetching posts:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </h1>
    );
  }

  return (
    <div className="">
      <h1>Data fetching in React</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
