import { Button, Container, Offcanvas } from 'react-bootstrap';
function CompareSidebar({ show, setShow }) {

    const closeSidebar = () => setShow(false);
    const showSidebar = () => setShow(true);
    return (
        <>
            <Container className='p-4'>

                <Offcanvas placement='end' show={show} onHide={closeSidebar}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Compare Properties</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some dummy text, we can have any text or element at at this place.
                        .row

                        <button className='btn-first'>Compare</button>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    );
}
export default CompareSidebar;  
