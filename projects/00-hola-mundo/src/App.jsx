import "./app.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  { userName: "midulev", name: "Miguel Angel Duran", isFollwong: true },
  { userName: "tedogls", name: "Tedo Gulisashvili", isFollwong: false },
  { userName: "takss", name: "Tako Karelidze", isFollwong: false },
  { userName: "benjik", name: "Bejan Sesitashvili", isFollwong: true },
];

function App() {
  return (
    <section>
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          name={user.name}
          initialIsFollowing={user.isFollwong}
        />
      ))}
    </section>
  );
}

export default App;
