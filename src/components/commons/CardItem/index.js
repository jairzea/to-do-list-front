import { Card } from "react-bootstrap";

export const CardItem = ({children}) => 
    <Card className="mb-3 mt-2 p-2 shadow" style={{ border: "none" }}>
        {children}
    </Card>