import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider } from "semantic-ui-react";

const Register = () => {
  return (
    <Container textAlign="center">
      <Divider />
      <Container>
        <h2>S'enregistrer</h2>
      </Container>
      <Divider />
      <Button.Group vertical>
        <Link to={"register/user"}>
          <Button
            size="massive"
            color="blue"
            content="S'enregistrer en tant qu'Utilisateur"
          />
        </Link>
        <Divider horizontal content="ou" />
        <Link to="register/merchant">
          <Button
            size="massive"
            color="green"
            content="S'enregistrer en tant que Vendeur"
          />
        </Link>
      </Button.Group>
      <Container>
        <Link to="/login">Vous avez deja un compte ? Se connecter</Link>
      </Container>
    </Container>
  );
};

export default Register;
