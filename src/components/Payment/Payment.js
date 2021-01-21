import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Container, Divider, Header } from "semantic-ui-react";
import CartItem from "../Main/Checkout/CartItem";

const Payment = ({
  user,
  cart,
  removeFromCart,
  emptyCart,
  updateCartQuantity,
}) => {
  const location = useLocation();
  return (
    <Container text textAlign="center">
      <Header as="h1">Paiement</Header>
      <Divider />
      <Card.Group stackable itemsPerRow={1}>
        {cart.map((item) => (
          <>
            <Header>Chez {item.shop.name}</Header>
            <Divider />
            <CartItem
              {...item}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
              updateCartQuantity={updateCartQuantity}
            />
          </>
        ))}
        
      </Card.Group>
    </Container>
  );
};

export default Payment;
