import React, { useEffect, useState } from "react";
import { Button, Card, Container, Divider, Image } from "semantic-ui-react";

const CartItem = ({
  id,
  name,
  unitPrice,
  image,
  quantity,
  removeFromCart,
  updateCartQuantity,
  options,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  useEffect(() => {
    if (itemQuantity !== quantity) {
      updateCartQuantity(id, itemQuantity);
    }
  }, [itemQuantity]);
  return (
    <Card>
      <Card.Content>
        <Image floated="left" size="small" src={image} />
        <h4>{name}</h4>
        <Card.Meta>{unitPrice * itemQuantity} €</Card.Meta>
        {Object.keys(options).map((option) =>        
          <Card.Meta>{option}: {options[option]}</Card.Meta>
        )}
        <Divider />
        <Container textAlign="center" fluid>
          <Button
            onClick={(e) =>
              itemQuantity <= 0
                ? setItemQuantity(0)
                : setItemQuantity(itemQuantity - 1)
            }
            circular
            icon="minus"
            color="red"
            size="tiny"
          />
          <Button disabled>
            <strong>{itemQuantity}</strong>
          </Button>
          <Button
            color="green"
            onClick={(e) => setItemQuantity(itemQuantity + 1)}
            circular
            icon="plus"
            size="tiny"
          />
        </Container>
      </Card.Content>
      <Button
        onClick={(e) => removeFromCart(id)}
        color="red"
        content="retirer du panier"
        circular
      />
    </Card>
  );
};

export default CartItem;
