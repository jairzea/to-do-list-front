import { Col, Row } from "react-bootstrap";
import { PageHeader } from "../../components/commons/PageHeader";
import Layout from "../../layouts/Layout";
import { useTodoStore } from "../../state/store";
import TaskListPaginated from "../../components/TaskListPaginated";

export const TaskInProgress = () => {
  const { taskList } = useTodoStore();
  const inProgressTasks = taskList.inProgress.tasks;

  return (
    <Layout>
      <PageHeader tittle="Tareas en progreso" subTittle="Estas son tus tareas en curso"/>
      <Row>
          <Col md={12}>
            <TaskListPaginated tasks={inProgressTasks} pageSize={5} />
          </Col>
        </Row>
    </Layout>
  );
};