// import logo from "./logo.svg";
import "./App.css";
import Blog from "./component/Blog";
import Mobile from "./component/Mobile";
import Posts from "./component/Posts";

const blog = {
  color: "purple",
  backgroundColor: "lavender",
  padding: "20px",
  marginTop: "30px",
  textAlign: "justify",
};

function App() {
  return (
    <div className="App">
      <article style={blog}>
        <h2 style={{ textAlign: "center" }}>Every blogs of some of the writers</h2>
        <Blog></Blog>
        <Blog></Blog>
        <Mobile></Mobile>
        <Posts></Posts>
      </article>
    </div>
  );
}

export default App;
