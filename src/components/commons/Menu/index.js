import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { TASKS_COMPLETED, TASKS_IN_PROGRESS, TASKS_MANAGEMENT, TASKS_PENDING,  } from '../../../constants/routeNames';
import { useAuth } from '../../../hooks/useAuth';

export const Menu = () => {
    const { logout } = useAuth();
    const location = useLocation();
    const currentRoute = location?.pathname

    return (
        <>
            <Navbar expand={false} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">To Do List - App</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`to-do-list-nav-expand`} />
                    <Navbar.Offcanvas
                    id={`to-do-list-nav-expand`}
                    aria-labelledby={`to-do-list-label-nav-expand`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`to-do-list-label-nav-expand`}>
                        To Do List - App
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link 
                                    className="bg-body-tertiary p-3 to-do-list_nav-dark" 
                                    as={Link} 
                                    to={TASKS_MANAGEMENT} 
                                    active={currentRoute ===TASKS_MANAGEMENT}
                                >
                                    Administrador de tareas
                                </Nav.Link>
                                <Nav.Link 
                                    className="p-3 to-do-list_nav-gray" 
                                    as={Link} 
                                    to={TASKS_PENDING} 
                                    active={currentRoute === TASKS_PENDING}
                                >
                                    Tareas pendientes
                                </Nav.Link>
                                <Nav.Link 
                                    className="bg-body-tertiary p-3 to-do-list_nav-dark" 
                                    as={Link} 
                                    to={TASKS_IN_PROGRESS} 
                                    active={currentRoute === TASKS_IN_PROGRESS}
                                >
                                    Tareas en curso
                                </Nav.Link>
                                <Nav.Link 
                                    className="p-3 to-do-list_nav-gray" 
                                    as={Link} 
                                    to={TASKS_COMPLETED} 
                                    active={currentRoute === TASKS_COMPLETED}
                                >
                                    Tareas completadas
                                </Nav.Link>
                                <Nav.Link 
                                    className="bg-body-tertiary p-3 to-do-list_nav-dark" 
                                    onClick={()=>logout()}
                                >
                                    Cerrar sesión
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}