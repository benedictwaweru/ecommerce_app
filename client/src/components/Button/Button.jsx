import PropTypes from "prop-types";
import "./Button.scss";

/** How to bind states to inputs
 * export function RegisterForm() {
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