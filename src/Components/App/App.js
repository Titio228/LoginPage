import "./App.css";

export default function App() {
  return (
    <div className="App">
      <i class="fa-solid fa-circle-half-stroke"></i>
      <div className="box">
        <span className="borderLine"></span>
        <form action="#">
          <h1>Sign In</h1>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="link">
            <a href="#">Password forgotten</a>
            <a href="#">Sign Up</a>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
