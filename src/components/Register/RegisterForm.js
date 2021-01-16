import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Divider, Form, Input } from "semantic-ui-react";
import { MerchantType } from "../../datas";

const RegisterForm = () => {
  const { registerType } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [siret, setSiret] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");

  const [disabledButton, setDisabledButton] = useState(true);

  const checkFormErrors = (errors, userObject) => {
    for (let key of Object.keys(userObject)) {
      if (userObject[key].length === 0) {
        errors[key].status = true;
        setErrors(errors);
      } else {
        errors[key].status = false;
        setErrors(errors);
      }
    }
  };
  let obj = {};
  if (registerType === "merchant") {
    obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      siret: siret,
      companyName: companyName,
      companyType: companyType,
    };
  } else {
    obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
    };
  }
  const errorsArray = {
    firstName: {
      status: false,
      errorMessage: {
        firstNameMissing: "Le Nom est obligatoire",
      },
    },
    lastName: {
      status: false,
      errorMessage: {
        lastNameMissing:
          "le Prénom est obligatoire et doit contenir au moins 3 lettres",
      },
    },
    email: {
      status: false,
      errorMessage: {
        emailMissing: "L'email est obligatoire",
      },
    },
    phoneNumber: {
      status: false,
      errorMessage: {
        phoneNumberMissing: "Le numéro de telephone est obligatoire",
      },
    },
    address: {
      status: false,
      errorMessage: {
        addressMissing: "L'adresse est obligatoire",
      },
    },
    password: {
      status: false,
      errorMessage: {
        passwordMissing: "Le mot de passe est obligatoire",
      },
    },
  };
  const [errors, setErrors] = useState(errorsArray);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: registerType === "user" ? '/client-register' : '/merchant-register',
      data: obj
    })
    .then((response) => console.log(response))
  };

  return (
    <>
      <Container textAlign="center">
        <Link to="/register">Retour a l'enregistrement</Link>
      </Container>
      <Container textAlign="center" text>
        <Divider />
        <Container>
          <h2>{`S'inscrire en tant ${
            registerType === "user" ? "qu'Utilisateur ?" : "que Vendeur"
          } `}</h2>
        </Container>
        <Divider />
        <Form onSubmit={handleSubmit}>
          <Form.Field
            control={Input}
            name="firstName"
            label="Nom"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={errors.firstName.status}
          />
          <Form.Field
            control={Input}
            name="lastName"
            label="Prénom"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={errors.lastName.status}
          />
          <Form.Field
            control={Input}
            name="address"
            label="Adresse"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={errors.address.status}
          />
          <Form.Field
            control={Input}
            name="email"
            label="E-Mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email.status}
          />
          <Form.Field
            control={Input}
            name="phone"
            label="Numéro de téléphone"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={errors.phoneNumber.status}
          />
          <Form.Group grouped>
            <Form.Field>
              <label>Mot de passe</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Confirmez votre mot de passe</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Field>
          </Form.Group>
          {registerType === "merchant" && (
            <>
              <Divider horizontal>Vendeur</Divider>
              <Form.Group grouped>
                <Form.Field>
                  <label>Nom de votre société</label>
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Type de votre société</label>
                  <select
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                  >
                    <option value="">Selectionnez un type</option>
                    {MerchantType.map((type) => (
                      <option value={type.name}>{type.name}</option>
                    ))}
                  </select>
                </Form.Field>
                <Form.Field>
                  <label>Siret</label>
                  <input
                    value={siret}
                    onChange={(e) => setSiret(e.target.value)}
                  />
                </Form.Field>
              </Form.Group>
            </>
          )}
          <Divider />
          <Button
            size="large"
            type="submit"
            content="S'inscrire"
            color="black"
          />
        </Form>
        <Link to="/login">
          <p>Vous avez deja un compte ? Se connecter</p>
        </Link>
      </Container>
    </>
  );
};

export default RegisterForm;
