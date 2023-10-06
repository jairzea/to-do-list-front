import { useEffect, useState } from "react"
import { CardItem } from "../CardItem"
import { getSuggestedTasks } from "../../../services/tasks"
import { Alert, Button, ButtonGroup, Col, Container, Row } from "react-bootstrap"
import { TooltipUI } from "../TooltipUI"
import { PageHeader } from "../PageHeader"
import { useTodoStore } from "../../../state/store"

export const SuggestedTasks = () => {
    const [tasks, setTasks] = useState([])
    const { addTask } = useTodoStore();

    const callService = async () => {
        try {
            const resp = await getSuggestedTasks()
            setTasks(resp?.data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        callService()
    },[])

    return(
        <Container className="mb-4">
            <PageHeader tittle="Tareas sugeridas" subTittle="Dale click y añade una tarea."/>
            <div className="task-grid-container bg-light">
                {tasks.length ? 
                (<div className="task-grid p-3">
                    {tasks.map((item) => 
                        <ButtonGroup key={item?.id}>
                            <CardItem >
                                <TooltipUI title="Añade esta tarea">
                                    <Button size="sm" variant="secondary" onClick={()=>addTask('todo', item)}>
                                        <small>{item?.content}</small>
                                    </Button>
                                    </TooltipUI>
                            </CardItem>
                        </ButtonGroup>
                    )}
                </div>):(   
                    <Alert variant="info">
                        No hay tareas sugeridas u ocurrio un error al intentar cargarlas.
                    </Alert>
                )}
            </div>
        </Container>
    )
}