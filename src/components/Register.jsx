import { createUserWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { auth } from "../firebase";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toastr.success("test");
      console.log("Register User", userCredential);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="mb-5">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3 d-flex justify-content-around">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4 d-flex justify-content-around">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="d-flex justify-content-evenly">
          <button type="submit" className="btn btn-primary">
            Register
          </button>

          <button type="reset" className="btn btn-secondary px-4">
            Clear
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
