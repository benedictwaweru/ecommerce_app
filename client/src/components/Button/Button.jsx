import PropTypes from "prop-types";
import "./Button.scss";

/* How to bind inputs to states
export function RegisterForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: ""
  });

  const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

  console.log(formFields);

  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text" 
          id="username"
          value={formFields.username}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: event.target.value
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          value={formFields.password}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: event.target.value
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input 
          type="text" 
          id="displayName"
          value={formFields.displayName}
          onChange={(event) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: event.target.value
            }));
          }}
        />
        </div>
        <button disabled={isDisabled}>Sign Up</button>
    </form>
  );
}
*/

export function Button(props) {
  return (
    <button className="btn">
      {props.buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
};

/**
 * How to edit stuff and save it on the UI
 * import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  return (
    <div>
      <div>
        <b>
          ID: {user.id}
          <br />
          Email: 
          {isEditing ? (
            <input
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          ) : user.email}
          <br />
          Username: 
          {isEditing ? (
            <input 
              name="username"
              id="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          ) : user.username}
          <br />
        </b>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >Edit</button>
        {isEditing && (
          <button
            onClick={
              () => {
                setUsers(
                  (currentUsersState) => {
                    return currentUsersState.map(
                      (currentUser) => currentUser.id === user.id ? { ...currentUser, username: username, email: email } : currentUser
                    );
                  }
                );
                setIsEditing(false);
              }
            }
          >Save</button>
        )}
        <button
          onClick={() => {
            setUsers((currentUserState) => currentUserState.filter((currentUser) => currentUser.id !== user.id));
          }}
        >Delete</button>
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  setUsers: PropTypes.func.isRequired
};
 */