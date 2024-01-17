import React from "react";
import { Modal, Button, Form, Row, Col, InputGroup, Container } from "react-bootstrap";
import { useState } from "react";
import "./PopupModal.css";
import { useTranslation} from "react-i18next";

function PopupModal(props) {
	const [ t, i18n ] = useTranslation();
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
	};
	// setValidated(true);
	return (
		<Modal
			{...props}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Container className="p-4 pt-2 pb-2">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<span className="m-4">{t("Connect_with_us")}</span>
					</Modal.Title>
				</Modal.Header>
				<Form.Group as={Col} md="12" className="m-4">
							<Form.Label>
								{t("PopupText")}
							</Form.Label>
						</Form.Group>
				<Modal.Body>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Row className="mb-3">
						
						{['radio'].map((type) => (
						<div key={`inline-${type}`} className="mb-1 text-center">
							<Form.Check
								inline
								label="Whatsapp"
								name="group1"
								type={type}
								id={`inline-${type}-1`}
							/>
							{/* <Form.Check
								inline
								label="Email"
								name="group1"
								type={type}
								id={`inline-${type}-2`}
							/> */}
						</div>
					))}
						</Row>
						<Row>
							<Form.Group as={Col} md="6">
								<Form.Label> </Form.Label>
							</Form.Group>
							<Form.Control
								as="textarea"
								placeholder={t("your_Text")}
								className=""
								rows={3}
							/>
						</Row>
						<div className="text-center">
							<Button type="submit" className="Button mt-5">{t("Send")}</Button>
							<Button onClick={props.onHide} className="Button mt-5">{t("Cancel")} </Button>
						</div>
					</Form>
				</Modal.Body>
				{/* <Modal.Footer>
					
				</Modal.Footer> */}
			</Container>
		</Modal>
	);
}

export default PopupModal;
