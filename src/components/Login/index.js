import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastUI } from "../commons/ToastUI";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const [showToast, setShowToast] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        try {
            const form = event.currentTarget;
            setValidated(true);
            event.preventDefault();
            if (!form.checkValidity()) {
                event.stopPropagation();
                return;
            }

            const username = form.elements.username.value;
            const password = form.elements.password.value;

            await login({ username, password });
            navigate("/tasks");

        } catch (error) {
            setSeverity("error")
            setMessage(error?.response?.data?.message || "Ocurrio un error al iniciar sesión")
            setShowToast(true)
        }
        
    };

    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1 className="header text-center">Inicia sesión - To Do List</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="validationCustomusername">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="User" required name="username" autoComplete="username"/>
                        <Form.Control.Feedback type="invalid">
                            Proporcione un usuario.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustomPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" required name="password" autoComplete="current-password" />
                        <Form.Control.Feedback type="invalid">
                            Proporcione una contraseña.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" className="align-center">Iniciar sesión</Button>
                </Form>
            </Container>
            {showToast && <ToastUI severity={severity} message={message} setShowToast={setShowToast}/>}
        </Container>
    );
}
