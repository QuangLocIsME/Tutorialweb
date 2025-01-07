import './styles/App.css';
import Avatar from './components/Avatar/Avatar.js';
import Avatar1 from "./components/Avatar/assets/image1.png";
import Avatar2 from "./components/Avatar/assets/image2.png";
import Avatar3 from "./components/Avatar/assets/image3.png";

export function App() {
  return (
    <div>
</div>
  );
}

export function Login() {
  return (
    <div className="login-container">
      <h1>Login JSX</h1>
      <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <a href="https://online.vlu.edu.vn/Login">Forgot Password?</a>
    </div>
  );
}

export function ShowImg() {
  return (
    <div>
      <Avatar src={Avatar1} size={{ width: 300, height: 100 }} />
      <Avatar src={Avatar2} size={{ width: 200, height: 80 }} />
      <Avatar src={Avatar3} size={{ width: 100, height: 60 }} />
    </div>
  );
}
