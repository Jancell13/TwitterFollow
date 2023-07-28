import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard.jsx";

const users = [
  {
    userName: "jancell13",
    name: "Jancell13",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "reddit",
    name: "Reddit",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      <h2>A quién seguir</h2>

      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
