import { Link } from 'gatsby';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { render } from 'react-dom';

function MobileMenu({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Link to={'/team'} activeStyle={{ color: "var(--primary)" }}>Team</Link>
                    <Link to={'/properties'} activeStyle={{ color: "var(--primary)" }}>Properties</Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function MobileMenuToggle() {
    return (
        <>
            <MobileMenu placement={'end'} name={'end'} />
        </>
    );
}


render(<MobileMenuToggle />);

export default MobileMenuToggle;