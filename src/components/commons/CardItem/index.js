import { Card } from "react-bootstrap";

export const CardItem = ({content}) => 
    <Card className="mb-3 mt-2 p-2 shadow" style={{ border: "none" }}>
        <small>{content}</small>
    </Card>