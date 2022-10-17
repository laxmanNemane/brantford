import { validateYupSchema } from "formik";
import { useContext } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersContext } from "../../Context/UserContext";
function CompareSidebar({ show, setShow }) {
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
  //   console.log("dataCompare", dataCompare);
  const { selectedProperty, setSelectedProperty } = useContext(usersContext);
  const navigate = useNavigate();

  const goOnComparePage = () => {
    if (selectedProperty.length <= 1) {
      toast.warning("select another one");
    } else {
      navigate("/copareproperty");
      // toast.warning("select property");
    }
  };

  const onDeleteSelectedProperty = (id) => {
    const newdata = selectedProperty.filter((val) => {
      return val.id !== id;
    });
    setSelectedProperty(newdata);
  };

  return (
    <>
      <Container className="p-4">
        <Offcanvas placement="end" show={show} onHide={closeSidebar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Compare Properties</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="container">
              <div className="row">
                {selectedProperty &&
                  selectedProperty.map((ele, index) => {
                    return (
                      <ul key={index} className="list-unstyled col-lg-6">
                        <div className="">
                          <li>
                            <div className="px-4 py-4 card shadow position-relative">
                              <p>{ele.id}</p>

                              <p
                                className="position-absolute d-flex align-items-center justify-content-center"
                                style={{
                                  right: "0",
                                  width: "20px",
                                  height: "20px",
                                  bottom: "-10px",
                                  borderRadius: "50%",
                                  background: "grey",
                                }}
                                onClick={() => onDeleteSelectedProperty(ele.id)}
                              >
                                <i className="fa-sharp fa-solid fa-xmark"></i>
                              </p>
                            </div>
                          </li>
                        </div>
                      </ul>
                    );
                  })}
                <div className="col-12 my-2 mt-5">
                  <button
                    className="btn-second w-100"
                    onClick={() => goOnComparePage()}
                  >
                    Compare
                  </button>
                </div>
                <div className="col-12 my-2">
                  <button
                    onClick={() => setShow(false)}
                    className="w-100 cancel-btn"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}
export default CompareSidebar;
