import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Register = props => {
  const { setAlert } = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password don't match", 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  
  return (
    <div className="columns is-mobile is-centered" style={{ height: '100vh' }}>
      <div className="column is-10-mobile is-8-tablet is-one-third-fullhd is-half-desktop ">
        <form
          onSubmit={onSubmit}
          className="box has-rem-padding-2 has-rem-margin-top-5"
        >
          <h2 style={{ textAlign: 'center' }} className="title is-4">
            Register
          </h2>
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChange}
                value={name}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope-open"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="password"
                className="input"
                type="password"
                placeholder="Password"
                onChange={onChange}
                value={password}
                required
                minLength={8}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-unlock-alt" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="password2"
                className="input"
                type="password"
                placeholder="Confirm Password"
                onChange={onChange}
                value={password2}
                required
                minLength={8}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-unlock-alt" />
              </span>
            </div>
          </div>
          <div className="field has-rem-padding-top-2">
            <div className="buttons">
              <button className="button has-text-white is-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
