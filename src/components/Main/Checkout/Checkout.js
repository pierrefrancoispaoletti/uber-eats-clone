import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Divider, Header } from "semantic-ui-react";
import { getCartTotal, uniqueKeyID } from "../../../utils";
import CartItem from "./CartItem";

const Checkout = ({
  cart,
  user,
  removeFromCart,
  emptyCart,
  updateCartQuantity,
}) => {
  return (
    <Container>
      {user.userId?.typeUser === "Merchant" || user.typeUser === "Merchant" ? (
        <Header as="h1">
          Bonjour , {`${user.userId.firstName} ${user.userId.lastName}`}
        </Header>
      ) : (
        <Header as="h1">
          Bonjour , {`${user.firstName} ${user.lastName}`}
        </Header>
      )}
      <Header as="h3">Votre Panier</Header>
      <p>
        Total : <strong>{getCartTotal(cart)}</strong> €
      </p>
      <Link to="/payment">
        <Button
          onClick={(e) => console.log(getCartTotal(cart))}
          color="green"
          content="Payer"
        />
      </Link>
      <Divider />
      <Card.Group stackable itemsPerRow={3}>
        {cart.map((cartItem) => (
          <CartItem
            key={uniqueKeyID()}
            removeFromCart={removeFromCart}
            {...cartItem}
            updateCartQuantity={updateCartQuantity}
          />
        ))}
      </Card.Group>
    </Container>
  );
};

export default Checkout;
