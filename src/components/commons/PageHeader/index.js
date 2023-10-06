import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import { useTodoStore } from "../../../state/store";

export const PageHeader = ({tittle, subTittle}) => {
    const { addTask } = useTodoStore();

    const handleAddTask = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        const taskName = form.elements.task.value;
        if(!taskName) return;
        const newTask = { id: uuidv4(), content: taskName };
        addTask('todo', newTask);
        form.elements.task.value = ""
    };

    return(
        <Row className="mb-2">
            <Col md={6}>
                <h5>{tittle}</h5>
                <p className="text-muted text-sm">{subTittle}</p>
            </Col>
            <Col md={6}>
                <Form noValidate onSubmit={handleAddTask}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Añade tu propia tarea"
                        aria-describedby="add-task-new"
                        size="sm"
                        name="task"
                    />
                    <InputGroup.Text id="add-task-new">
                        <Button variant="outline-primary" size="sm" type="submit" >Nueva tarea</Button>
                    </InputGroup.Text>
                </InputGroup>
                </Form>                 
            </Col>
        </Row>
    )
}