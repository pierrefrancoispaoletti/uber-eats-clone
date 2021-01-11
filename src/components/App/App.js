import { useEffect, useState } from "react";
import Header from "../../containers/Header/Header.container";
import HeaderMenu from "../Header/HeaderMenu/HeaderMenu";
import Main from "../../containers/Main/Main.container";
import "./App.css";

function App({ user, setUser, setCart, cart }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!user && localStorage.user) {
      const localUser = JSON.parse(localStorage.user);
      setUser(localUser);
    }
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('cart')) !== []) {
      const localCart = JSON.parse(localStorage.getItem('cart'))
      console.log(cart[0])
      setCart(localCart)
    }
  }, []);
  return (
    <div className="App">
      <HeaderMenu visible={visible} setVisible={setVisible} user={user}>
        <Header visible={visible} setVisible={setVisible} />
        <Main />
      </HeaderMenu>
    </div>
  );
}

export default App;
