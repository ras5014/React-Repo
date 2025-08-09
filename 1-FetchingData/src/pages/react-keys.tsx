/*
 1. By specifying a key while you map over a list of items, 
    React can identify which items have changed, are added, or are removed.
    So when it has to update the virtual DOM, it can do so more efficiently.

  2. To know this remove the key and watch the html code in element inspector inside dev tools.
  3. if we use array index as a key, then after the deletion index changes, so
     We won't get the benefits, so use id as key.

  4. key has to be unique or in this case if you make two users with the same id, it will cause issues.
     It will delete the wrong user.
*/

import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
  },
  {
    id: 3,
    name: "Bob Johnson",
  },
  {
    id: 4,
    name: "Alice Williams",
  },
];

const ReactKeys = () => {
  const [users, setUsers] = useState(initialUsers);
  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div className="page-container">
      <h1 className="headline">React Key Benefits</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="m-4">
            <button className="button" onClick={() => handleDelete(user.id)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactKeys;
