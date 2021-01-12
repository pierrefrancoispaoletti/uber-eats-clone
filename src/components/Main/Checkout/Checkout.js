import React, { useState } from "react";
import { Button, Card, Container, Divider, Header } from "semantic-ui-react";
import { getCartTotal, uniqueKeyID } from "../../../utils";
import CartItem from "./CartItem";

const Checkout = ({ cart, user, removeFromCart, emptyCart, updateCartQuantity }) => {
  return (
    <Container>
      <Header as="h1">
        Bonjour , {`${user.userId.firstName} ${user.userId.lastName}`}
      </Header>
      <Header as="h3">Votre Panier</Header>
      <p>
        Total : <strong>{getCartTotal(cart)}</strong> €
      </p>
      <Button onClick={e => console.log(getCartTotal(cart))} color="green" content="Payer" />
      <Divider />
      <Card.Group stackable itemsPerRow={1}>
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
