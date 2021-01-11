import React, { useState } from "react";
import { Container, Form, Input } from "semantic-ui-react";

const AddressComponent = ({ getMerchants, userAddress }) => {
  // une fois que l'utilisateur est connécté on recupére son adresse dans le use State
  const [address, setAddress] = useState(userAddress);
  const handleSubmit = (e) => {
    e.preventDefault();
    getMerchants(address);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit} size="small">
        <Form.Field>
          <Input
            value={address}
            label="Adresse"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default AddressComponent;
