import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Header } from "semantic-ui-react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container textAlign="center">
      <Divider />
      <Container>
        <h2 >S'enregistrer</h2>
      </Container>
      <Divider />
      <Button.Group vertical>
        <Button
          size="massive"
          color="blue"
          content="S'enregistrer en tant qu'Utilisateur"
        />
        <Divider horizontal content="ou" /> 
        <Button
          size="massive"
          color="green"
          content="S'enregistrer en tant que Vendeur"
        />
      </Button.Group>
      <Link to="/login">Vous avez deja un compte ? Se connecter</Link>
    </Container>
  );
};

export default Register;
