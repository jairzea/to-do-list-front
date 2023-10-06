import { Col, Row } from "react-bootstrap";
import { PageHeader } from "../../components/commons/PageHeader";
import Layout from "../../layouts/Layout";
import { useTodoStore } from "../../state/store";
import TaskListPaginated from "../../components/TaskListPaginated";

export const TaskCompleted = () => {
    const { taskList } = useTodoStore();
    const completedTasks = taskList.done.tasks;

    return (
      <Layout>
        <PageHeader tittle="Tareas completadas" subTittle="Estas son tus tareas completadas"/>
        <Row>
          <Col md={12}>
            <TaskListPaginated tasks={completedTasks} pageSize={5} />
          </Col>
        </Row>
      </Layout>
    );
};