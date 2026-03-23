export default function App() {
  const users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Priya" }
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}