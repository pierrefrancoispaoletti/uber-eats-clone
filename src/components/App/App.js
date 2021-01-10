import { useState } from "react";
import Header from "../Header/Header";
import HeaderMenu from "../Header/HeaderMenu/HeaderMenu";
import Main from "../../containers/Main/Main.container";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <HeaderMenu visible={visible} setVisible={setVisible}>
        <Header visible={visible} setVisible={setVisible} />
        <Main />
      </HeaderMenu>
    </div>
  );
}

export default App;
