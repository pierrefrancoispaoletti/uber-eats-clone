import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Input,
} from "semantic-ui-react";

import './login.css';

const Login = ({user, login}) => {
  console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const userCredentials = {
      username: email,
      password: password,
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      login(userCredentials)
    }
  return (
    <Container textAlign="center">
        <Divider />
      <Container>
        <Header>Login</Header>
      </Container>
      <Divider />
      <Form onSubmit={handleSubmit}>
        <Form.Field label="E-mail" control={Input}>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field control={Input} label="password">
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        <Divider />
        <Button
          type="submit"
          color="black"
          size="large"
          content="Se connecter"
        />
      </Form>
    </Container>
  );
};

export default Login;
