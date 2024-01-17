import "./UserProfile.css";
import {Card, Container, Tabs, Tab, Col , Row, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserImg from "./ImgMenu/icons8-test-account-100.png";
import Logout from "./ImgMenu/icons8-logout-rounded-100.png";
import { useState } from "react";
import { useTranslation} from "react-i18next";
import {useCookies} from "react-cookie";
import {  useEffect } from 'react';

const UserProfile = () => {
  const [t] = useTranslation();
  const [_, setCookies] = useCookies(["access_token"]);
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [username, setUsername] =useState(localStorage.getItem("username"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [donationAmount, setDonationAmount] = useState(0);
  // Logout
  const removeCookies = () => {
      setCookies("access_token", "")
      window.localStorage.removeItem("userID")
  }

  useEffect(() => {
    // Hier eine Anfrage an den Server senden, um den aktuellen Spendenbetrag abzurufen
    fetch("http://localhost:3001/getDonationAmount", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDonationAmount(data.amount); // Annahme: Der Spendenbetrag wird in "data.amount" zurückgegeben
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen des Spendenbetrags:", error);
      });
  }, []);


  // Funktion zum Ändern des Passworts
  const handleEditProfile = async () => {
    // Stellen Sie sicher, dass newPassword nicht leer ist
    if (newPassword === "" || !username || !email) {
      alert("Bitte geben Sie ein gutligen Daten ein.");
      return;
    }
    // Senden Sie eine Anfrage an den Server, um das Passwort zu ändern
    try {
      const response = await fetch("http://localhost:3001/updateProfile", {
        method: "PUT",
        headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({
      userID: localStorage.getItem("userID"),
      newUsername,
      newEmail,
      newPassword,
    }),
  });
  if (response.ok){
    setUsername(newUsername) && setEmail(newEmail);
    localStorage.setItem("username", newUsername);
    localStorage.setItem("email", newEmail);
    alert("Das Profil wurde erfolgreich aktualisiert.");
  } else {
    alert("Profilaktualisierung fehlgeschlagen.");
  }}
   catch (error) {
    console.error("Fehler bei der Profilaktualisierung:", error);
    alert("Fehler bei der Profilaktualisierung.");
  }

  // Setzen Sie das newPassword zurück, um das Formular zu leeren.
setNewPassword("");
setNewUsername("");
setNewEmail("");
};

  return (
    <Container>
      <Card style={{ width: '50%' }} className="d-flex align-items-center p-2 rounded-5 userProfile">
        <Card.Body className="border-bottom">
          <Card.Img variant="top" src={UserImg} className="w-100 mb-5 userProfileImg"/>
          <Card.Title className="fs-4">{username}</Card.Title>
          <Card.Title className="fs-6 fst-italic">{donationAmount} $ </Card.Title>
        </Card.Body>
          <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-4 "> 
              <Tab eventKey="accountInformation" title="معلومات الحساب">
              <Form className="">
                <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                  <Col sm="12">
                    {/* <Form.Control className="text-center" plaintext readOnly defaultValue={username} /> */}
                    <Form.Control type="text" className="text-center" 
                    // value={setUsername}
                    placeholder={username}
                    onChange={(e) => setNewUsername(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Col sm="12">
                    {/* <Form.Control className="text-center"  plaintext defaultValue={email}/> */}
                    <Form.Control type="text" className="text-center"
                    // value={setEmail}
                    placeholder={email}
                    onChange={(e) => setNewEmail(e.target.value)}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm="12">
                  <Form.Control
                    type="password"
                    className="text-center"
                    placeholder="Type new Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Col>
              </Form.Group>
              </Form>
              </Tab>
              <Tab eventKey="donations" title="تبرعاتك" active>
                
              </Tab>
              <Tab eventKey="guarantees" title="كفالاتك">
                
              </Tab>

            </Tabs>
        <Card.Body className="border-top mt-5">
            <Link className="text-decoration-none" onClick={handleEditProfile} >Save your profile changes</Link> <br />
            <Link to={"/"} className="text-decoration-none" onClick={removeCookies}><Card.Img variant="top" src={Logout} title="Logout" className="w-50 m-2 userProfileImg"/></Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;