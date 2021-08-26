import React, { useState, useContext } from "react";
import { AccountContext } from "../components/Account";

export default () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = event => {
    event.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        user.changePassword(password, newPassword, (err, result) => {
          if (err) console.error(err);
          console.log("Sample " +result);
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder = 'Old Pwd'
        />

        <input
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
          placeholder = 'New Pwd'
        />

        <button type="submit">Change password</button>
      </form>
    </div>
  );
};
