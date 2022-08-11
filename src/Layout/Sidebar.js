import React, { useState } from "react";
import { Button, Collapse, ListGroup, NavDropdown } from "react-bootstrap";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar_main shadow ">
      <div>
        <h4 className="text-center">Hello lakhan</h4>
        <ListGroup
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text "
          aria-expanded={open}
          className="w-75 mx-auto"
        >
          Dashbord
        </ListGroup>
        <Collapse in={open}>
          <ListGroup as="ul" variant="flush" className="w-75 mx-auto ">
            <ListGroup.Item as="li" active>
              Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
            SSS<ListGroup.Item as="li" disabled>
              Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Collapse>
      </div>
    </div>
  );
};

export default Sidebar;
