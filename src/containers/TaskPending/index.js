import { Col, Row } from "react-bootstrap";
import { PageHeader } from "../../components/commons/PageHeader";
import Layout from "../../layouts/Layout";
import { useTodoStore } from "../../state/store";
import TaskListPaginated from "../../components/TaskListPaginated";

export const TaskPending = () => {
  const { taskList } = useTodoStore();
  const pendingTasks = taskList.todo.tasks;

  return (
    <Layout>
      <PageHeader tittle="Tareas pendintes" subTittle="Estas son tus tareas pendientes"/>
      <Row>
          <Col md={12}>
            <TaskListPaginated tasks={pendingTasks} pageSize={5} />
          </Col>
        </Row>
    </Layout>
  );
};