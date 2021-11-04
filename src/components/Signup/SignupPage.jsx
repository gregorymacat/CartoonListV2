import React, {useState} from 'react';

function inputValidation (email, password) {
  let errors = {};
  let errorFound = false;

  if (email.split('@').length < 2) {
    errors.email = 'Please enter a valid email';
    errorFound = true;
  }

  if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
    errorFound = true;
  }
  return errors;
}

function SignupPage (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputErrors, setInputErrors] = useState({});

  function handleChange (event) {
    if (event.target.id === 'user-email') {
      setEmail(event.target.value);
    } else if (event.target.id === 'user-pass') {
      setPassword(event.target.value);
    }
  }

  function handleSubmit (event) {
    event.preventDefault();
    let err = inputValidation(email, password);
    if (Object.keys(err).length === 0) {
      props.toggleLogin();
    } else {
      setInputErrors(err);
    }
  }

  return (
    <div>
      <form className="sign-in">
        <label>Email</label>
        <input id="user-email" type="text" onChange={handleChange}></input>
        {
          inputErrors.email ?
          <span className="input-error">{inputErrors.email}</span> :
          null
        }
        <label>Password</label>
        <input id="user-pass" type="text" onChange={handleChange}></input>
        {
          inputErrors.password ?
          <span className="input-error">{inputErrors.password}</span> :
          null
        }
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  )
}



export default SignupPage;