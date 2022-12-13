import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/main";
import Todo from "./pages/todo";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/main/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
