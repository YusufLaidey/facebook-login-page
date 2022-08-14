import React, { Fragment } from "react";

import "./login.css";

import { Grid, Box, Button, Typography } from "@mui/material";

const Login = () => {
  return (
    <Fragment>
      <div className="container">
        <div>
          <p className="p1">facebook</p>
          <p className="p2">
            Facebook help you connect and share <br />
            with the people in your life.
          </p>
        </div>
        <div className="div">
          <div>
            <form>
              <input
                className="email"
                type={"email, text"}
                placeholder="Email address or phone number"
              />
            </form>
            <br />
            <form>
              <input className="password" type="text" placeholder="Password" />
            </form>
            <br />
            <button className="log">Log in</button>
            <p className="forgotten">Forgotten password?</p>
            <hr className="hr"></hr>
            <button className="create">create new acct</button>
          </div>
        </div>
      </div>
      <div className="div1">
        <p>
          <strong>create page</strong> for a clebrity, brand or business.
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
