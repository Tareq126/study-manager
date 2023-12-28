import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <ToastContainer />
      <Blog></Blog>
    </>
  );
}

export default App;
