import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"
import { getSuggestedTasks } from "../../../services/tasks"
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap"

export const SuggestedTasks = () => {
    const [tasks, setTasks] = useState([])

    const callService = async () => {
        try {
            const resp = await getSuggestedTasks()
            setTasks(resp?.data)
        } catch (error) {
            
        }
    }

    console.log("tasks", tasks);

    useEffect(()=>{
        callService()
    },[])

    return(
        <Container className="mb-4">
            <Row className="mb-2">
                <Col md={6}>
                    <h5>Tareas sugeridas</h5>
                </Col>
                <Col md={6}>
                    <Button variant="outline-primary" className="float-end">Nueva tarea</Button>
                </Col>
            </Row>
            
            <div className="task-grid-container bg-light">
                <div className="task-grid p-3">
                    {tasks.map((item) => <ButtonGroup key={item?.id} aria-label="Basic example">
                                            <CardItem  content={item?.title}/>
                                            <Button Size="sm" variant="secondary">+</Button>
                                        </ButtonGroup>)}
                </div>
            </div>
        </Container>
    )
}