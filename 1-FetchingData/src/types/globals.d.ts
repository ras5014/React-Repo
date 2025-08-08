declare global {
  interface Post {
    id: number;
    title: string;
  }
}

// This export statement is crucial - it makes this file a module
// Without it, the global declarations won't work
export {};
