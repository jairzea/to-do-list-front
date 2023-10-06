import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

const TaskListPaginated = ({ tasks, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Función para obtener las tareas de la página actual
  const getCurrentPageTasks = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return tasks.slice(startIndex, endIndex);
  };

  // Función para cambiar de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageTasks().map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.content}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className='float-end'>
        {Array.from({ length: Math.ceil(tasks.length / pageSize) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default TaskListPaginated;
