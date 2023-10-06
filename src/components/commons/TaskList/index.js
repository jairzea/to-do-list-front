import { Draggable, Droppable } from "react-beautiful-dnd";
import { Badge, ButtonGroup, Card } from "react-bootstrap";
import { CardItem } from "../CardItem";
import { useTodoStore } from "../../../state/store";

export const TaskList = ({ id, listName, title, tasks }) => {

  const { removeTask } = useTodoStore();

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
                      <CardItem>
                        <ButtonGroup className="d-flex justify-content-between">
                          <small>{task?.content}</small>
                          <Badge pill bg="danger" as="button" className="border-0" onClick={() => removeTask(listName, task?.id)
                            }>x</Badge>
                        </ButtonGroup>
                      </CardItem> 
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
  )
};