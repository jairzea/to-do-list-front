import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TaskList } from "../../components/commons/TaskList";
import { SuggestedTasks } from "../../components/commons/SuggestedTasks";
import { useTodoStore } from "../../state/store";

export const TaskManagement = () => {

    const { taskList, setTaskList } = useTodoStore();
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(taskList)
    },[taskList])

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return; 

        const sourceListId = source.droppableId;
        const destListId = destination.droppableId;
        const sourceIndex = source.index;
        const destIndex = destination.index;

        // Copia el estado actual
        const updatedTaskList = { ...taskList };

        // Obtiene las listas de tareas de origen y destino
        const sourceList = updatedTaskList[sourceListId];
        const destList = updatedTaskList[destListId];

        // Obtiene la tarea movida
        const movedTask = sourceList.tasks.splice(sourceIndex, 1)[0];

        // Inserta la tarea en la lista de destino en la posición correcta
        destList.tasks.splice(destIndex, 0, movedTask)

        // Actualiza el estado con el nuevo orden
        setTaskList(updatedTaskList);
    };
    return (
        <Layout>
            <SuggestedTasks/>
            <Container>
                <h5>Administrador de Tareas</h5>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Row>
                        {Object.keys(data).map((key) => (
                            <Col key={key} md={4}>
                                <TaskList key={key} id={key} listName={data[key]?.listName} title={data[key].title} tasks={data[key].tasks} />
                            </Col>
                        ))}
                    </Row>
                </DragDropContext>
            </Container>
        </Layout>
    );
};