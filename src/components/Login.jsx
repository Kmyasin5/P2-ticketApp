import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toastr.success("Login Successfully");
      console.log("Loggedin-user", userCredential);
    } catch (err) {
      toastr.error("Login Failed");
      setError(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1 className="mb-5">Login</h1>
        <div className="mb-3 d-flex justify-content-around">
          <label htmlFor="login">Login</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3 d-flex justify-content-around">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="d-flex justify-content-around mb-3">
          <button type="submit" className="btn btn-primary px-3">
            Login
          </button>
          <button type="reset" className="btn btn-secondary px-3">
            clear
          </button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Login;
