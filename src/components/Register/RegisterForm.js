import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
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

  const [disabledButton, setDisabledButton] = useState(false);
  const [error, setError] = useState(false);

  const [message, setMessage] = useState(undefined);
  const [siretMessage, setSiretMessage] = useState({});

  const checkFormErrors = (userObject) => {
    for (let key of Object.keys(userObject)) {
      if (userObject[key].length === 0) {
        setError(true);
        return false;
      }
    }
    setError(false);
    return true;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormErrors(obj);
    if (!error && password === confirmPassword) {
      setDisabledButton(true);
      axios({
        method: "post",
        url:
          registerType === "user" ? "/client-register" : "/merchant-register",
        data: obj,
      })
        .then((response) => setMessage(response.data))
        .catch((e) => console.log(e))
        .finally(() => setDisabledButton(false));
    }
  };

  const handleChangeSiret = (userSiret) => {
    setSiret(userSiret);
    axios
      .get(`https://entreprise.data.gouv.fr/api/sirene/v1/siret/${userSiret}`)
      .then((res) => {
        if (res.data.etablissement.siret === userSiret) {
          setError(false);
          setSiretMessage({
            status: "positive",
            message: "votre siret est valide",
          });
        }
      })
      .catch((e) => {
        setSiretMessage({
          status: "negative",
          message: "votre siret ne correspond a aucune société existante",
        });
        setError(true);
      });
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
          {message?.status === 200 && (
            <Message
              positive={message?.status === 200}
              content={message?.message}
            />
          )}
          {message?.status === 400 && (
            <Message
              negative={message?.status === 400}
              content={message?.message}
            />
          )}
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
            error={
              firstName.length === 0 &&
              error && {
                content: "Ce champ est obligatoire",
                pointing: "below",
              }
            }
          />
          <Form.Field
            control={Input}
            name="lastName"
            label="Prénom"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={
              lastName.length === 0 &&
              error && {
                content: "Ce champ est obligatoire",
                pointing: "below",
              }
            }
          />
          <Form.Field
            control={Input}
            name="address"
            label="Adresse"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={
              address.length === 0 &&
              error && {
                content: "Ce champ est obligatoire",
                pointing: "below",
              }
            }
          />
          <Form.Field
            control={Input}
            name="email"
            label="E-Mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={
              email.length === 0 &&
              error && {
                content: "Ce champ est obligatoire",
                pointing: "below",
              }
            }
          />
          <Form.Field
            control={Input}
            name="phone"
            label="Numéro de téléphone"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={
              phoneNumber.length === 0 &&
              error && {
                content: "Ce champ est obligatoire",
                pointing: "below",
              }
            }
          />
          <Form.Group grouped>
            <Form.Field
              control={Input}
              name="password"
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={
                password !== confirmPassword && {
                  content: "Vos mots de passe sont differents",
                  pointing: "below",
                }
              }
            />
            <Form.Field
              control={Input}
              name="confirmPassword"
              label="Confirmez votre mot de passe"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={
                password !== confirmPassword && {
                  content: "Vos mots de passe sont differents",
                  pointing: "below",
                }
              }
            />
          </Form.Group>
          {registerType === "merchant" && (
            <>
              <Divider horizontal>Vendeur</Divider>
              <Form.Group grouped>
                <Form.Field
                  control={Input}
                  name="companyName"
                  label="Le nom de votre société"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  error={
                    companyName.length === 0 &&
                    error && {
                      content: "Ce champs est obligatoire",
                      pointing: "below",
                    }
                  }
                />
                <Form.Field
                  control={Input}
                  label="Type de votre société"
                  name="CompanyType"
                  value={companyType}
                  error={
                    companyType === "" &&
                    error && {
                      content:
                        "Veuillez selectioner une option dans le menu déroulant",
                      pointing: "below",
                    }
                  }
                >
                  <select onChange={(e) => setCompanyType(e.target.value)}>
                    <option value="">Selectionnez un type</option>
                    {MerchantType.map((type) => (
                      <option value={type.name}>{type.name}</option>
                    ))}
                  </select>
                </Form.Field>
                <Form.Field
                  control={Input}
                  name="siret"
                  label="Le siret de votre société"
                  type="text"
                  value={siret}
                  onChange={(e) => handleChangeSiret(e.target.value)}
                  error={
                    siret.length === 0 &&
                    error && {
                      content: "Ce champs est obligatoire",
                      pointing: "below",
                    }
                  }
                />
                {siretMessage.status === "positive" && (
                  <Message positive content={siretMessage.message} />
                )}
                {siretMessage.status === "negative" && (
                  <Message negative content={siretMessage.message} />
                )}
              </Form.Group>
            </>
          )}
          <Divider />
          <Button
            disabled={disabledButton}
            loading={disabledButton}
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
