import { useEffect } from "react";
import Header from "../../containers/Header/Header.container";
import HeaderMenu from "../../containers/Header/HeaderMenu.container";
import Main from "../../containers/Main/Main.container";
import "./App.css";

function App({ user, setUser, setCart, cart }) {
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
    if (JSON.parse(localStorage.getItem("cart")) !== []) {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      setCart(localCart);
    }
  }, []);
  return (
    <div className="App">
      <HeaderMenu user={user}>
        <Header />
        <Main />
      </HeaderMenu>
    </div>
  );
}

export default App;
