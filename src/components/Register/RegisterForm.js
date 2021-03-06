import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import { MerchantType } from "../../datas";
import { decryptPhoneNumber } from "../../utils";

const RegisterForm = ({ user }) => {
  const { registerType } = useParams();
  const location = useLocation();

  const [firstName, setFirstName] = useState(
    (user?.firstName !== undefined && user.firstName) ||
      (user?.userId.firstName !== undefined && user.userId.firstName) ||
      ""
  );
  const [lastName, setLastName] = useState(
    (user?.lastName !== undefined && user.lastName) ||
      (user?.userId.lastName !== undefined && user.userId.lastName) ||
      ""
  );
  const [address, setAddress] = useState(
    (user?.address !== undefined && user.address) ||
      (user?.userId.address !== undefined && user.userId.address) ||
      ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    (user?.phoneNumber !== undefined && decryptPhoneNumber(user.phoneNumber)) ||
      (user?.userId.phoneNumber !== undefined &&
        decryptPhoneNumber(user.userId.phoneNumber)) ||
      ""
  );
  const [email, setEmail] = useState(
    (user?.email !== undefined && user.email) ||
      (user?.userId.email !== undefined && user.userId.email) ||
      ""
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [siret, setSiret] = useState(
    (user?.siret !== undefined && user.siret) || ""
  );
  const [companyName, setCompanyName] = useState(
    (user?.name !== undefined && user.name) || ""
  );
  const [companyType, setCompanyType] = useState(
    (user?.type !== undefined && user.type) || ""
  );
  const [companyImage, setCompanyImage] = useState(null);

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
  let data = new FormData();
  if (registerType === "merchant") {
    data.append("firstName", firstName)
    data.append("lastName", lastName)
    data.append("email", email)
    data.append("password", password)
    data.append("phoneNumber", phoneNumber)
    data.append("address", address)
    data.append("siret", siret)
    data.append("companyName", companyName)
    data.append("companyType", companyType)
    data.append("image", companyImage)
    
  } else {
    data.append("firstName", firstName)
    data.append("lastName", lastName)
    data.append("email", email)
    data.append("password", password)
    data.append("phoneNumber", phoneNumber)
    data.append("address", address)
  }

  let config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkFormErrors(data);
    if (!error && password === confirmPassword && location.pathname !=="/account/user-infos" ) {
      setDisabledButton(true);
      axios({
        method: "post",
        url:
          registerType === "user" ? "/client-register" : "/merchant-register",
        data: data,
        config: config
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
      {location.pathname !== "/account/user-infos" && (
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
          </Container>
        </>
      )}
      <Container textAlign="center" text>
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
          {(registerType === "merchant" ||
            user?.userId.typeUser === "Merchant") && (
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
                  name="companyImage"
                  label="une image de votre société"
                  type="file"
                  files={companyImage}
                  onChange={(e) => setCompanyImage(e.target.files[0])}
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
          {location.pathname !== "/account/user-infos" ? (
            <>
              <Button
                disabled={disabledButton}
                loading={disabledButton}
                size="large"
                type="submit"
                content="S'inscrire"
                color="black"
              />
              <Link to="/login">
                <p>Vous avez deja un compte ? Se connecter</p>
              </Link>
            </>
          ) : (
            <Button
              disabled={disabledButton}
              loading={disabledButton}
              size="large"
              type="submit"
              content="Modifier mes infos"
              color="green"
            />
          )}
        </Form>
      </Container>
    </>
  );
};

export default RegisterForm;
