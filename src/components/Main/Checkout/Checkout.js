import React, { useState } from "react";
import {
    Button,
  Card,
  Container,
  Divider,
  Header,
} from "semantic-ui-react";
import { uniqueKeyID } from "../../../utils";
import CartItem from "./CartItem";

const Checkout = ({ cart, user, removeFromCart }) => {
    const [total , setTotal] = useState(0);
  return (
    <Container>
      <Header as="h1">
        Bonjour , {`${user.userId.firstName} ${user.userId.lastName}`}
      </Header>
      <Header as="h3">Votre Panier</Header>
      <p>Total : <strong>{total}</strong> €</p>
      <Button color="green" content="Payer" />
      <Divider />
      <Card.Group stackable itemsPerRow={1}>
        {cart.map((cartItem) => (
          <CartItem key={uniqueKeyID()} removeFromCart={removeFromCart} {...cartItem} setTotal={setTotal} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default Checkout;
