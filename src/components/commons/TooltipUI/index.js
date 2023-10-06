import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const TooltipUI = ({children, title}) => {
    const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      {children}
    </OverlayTrigger>
  );
    return(
        <Link title={title} id="t-1">
            {children}
        </Link>
    )
}