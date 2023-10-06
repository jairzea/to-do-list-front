import { Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import { CardItem } from "../CardItem";

export const TaskList = ({ id, title, tasks }) => {
  console.log("tasks", tasks)
return (
  <Card bg="light" border="light" style={{ minHeight: '18rem' }}>
    <Card.Body>
      <Card.Header><small>{title}</small></Card.Header>
      <Droppable className="mb-2 text-muted" droppableId={id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardItem content={task.content}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card.Body>
  </Card>
)};