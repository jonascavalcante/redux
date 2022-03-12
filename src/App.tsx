import React from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setAge, setName } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

const App = () => {

  const dispatch = useDispatch();

  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  }

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value));
  }

  const handleTheme = () => {
    if (theme.status === 'light') {
      return dispatch(setThemeStatus('dark'));
    }

    dispatch(setThemeStatus('light'));
  }

  return (
    <div>
      My name is {user.name} and I'm {user.age} years old.
      <br />
      <br />
      Theme: {theme.status}

      <hr />

      <label>
        Name
        <br />
        <input
          type="text"
          value={user.name}
          onChange={handleName}
        />
      </label>

      <br />

      <label>
        Age
        <br />
        <input
          type="number"
          value={user.age}
          onChange={handleAge}
          min='0'
        />
      </label>

      <hr />

      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
