import { useAppSelector } from "./redux/hooks/useAppSelector";

const App = () => {

  const user = useAppSelector(state => state.user);

  return (
    <div>
      My name is {user.name} and I'm {user.age} years old.
      <br />
      <br />
      Theme: ...

      <hr />

      <input type="text" value={user.name} />

      <hr />

      <button>Change Theme</button>
    </div>
  );
}

export default App;
