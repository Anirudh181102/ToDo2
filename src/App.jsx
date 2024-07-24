import "./App.css";
import Body from "./components/Body";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">  {/* Changed */}
      <Navbar />
      <div className="flex flex-1">  {/* Changed */}
        <Body />
      </div>
    </div>
    </>
  );
}

export default App;
