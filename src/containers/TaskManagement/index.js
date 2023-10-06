import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../layouts/Layout";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TaskList } from "../../components/commons/TaskList";
import { SuggestedTasks } from "../../components/commons/SuggestedTasks";

const initialData = {
  todo: {
    title: 'POR HACER',
    id: 1,
    tasks: [
      { id: 'task-1', content: 'Tarea 1' },
      { id: 'task-2', content: 'Tarea 2' },
      { id: 'task-3', content: 'Tarea 3' },
    ],
  },
  inProgress: {
    id: 2,
    title: 'EN CURSO',
    tasks: [],
  },
  done: {
    id: 1,
    title: 'LISTO',
    tasks: [],
  },
};

export const TaskManagement = () => {

    const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return; // El elemento se soltó fuera de una lista válida

    const sourceList = data[source.droppableId];
    const destList = data[destination.droppableId];
    const movedTask = sourceList.tasks[source.index];

    sourceList.tasks.splice(source.index, 1);
    destList.tasks.splice(destination.index, 0, movedTask);

    setData({ ...data });
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
                            <TaskList key={key} id={key} title={data[key].title} tasks={data[key].tasks} />
                        </Col>
                    ))}
                </Row>
            </DragDropContext>
        </Container>
    </Layout>
  );
};