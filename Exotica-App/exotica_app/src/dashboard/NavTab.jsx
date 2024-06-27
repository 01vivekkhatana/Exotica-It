import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import axios from "axios";
function NavTab() {
  const [email, setEmail] = useState();
  const [showModal, setShowModal] = useState(false);

  const emailbtn = async (e, email) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8081/Navfooter", { email });
        if (response && response.data.message === "Email saved successfully") {
            console.log("Email saved successfully");
        } else {
            console.log('Error saving email');
        }
    } catch (err) {
        console.error("Error sending email:", err.message);
    }
};


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar />
        <div className="content">
          <Topbar />
          <div className="container-fluid pt-4 px-4">
            <div className="card card-primary">
              <div className="card-header">
                <h5 className="card-title" style={{ color: "white" }}>
                  Nav-Bar Footer Setting
                </h5>
              </div>
              <form>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="left-cart-body">
                        <div className="form-input">
                          <div className="top-text-cart">
                            <label htmlFor="">Email</label>
                          </div>
                          <div className="right-icon-aear">
                            <Link onClick={handleOpenModal}>
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link>
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="top-text-cart">
                            <label htmlFor="">Phone No</label>
                          </div>
                          <div className="right-icon-aear">
                            <Link onClick={handleOpenModal}>
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link>
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="right-cart-body">
                        <div className="form-input">
                          <div className="top-text-cart">
                            <label htmlFor="">Second-Email</label>
                          </div>
                          <div className="right-icon-aear">
                            <Link onClick={handleOpenModal}>
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link>
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="form-input">
                          <div className="top-text-cart">
                            <label htmlFor="">Second-No</label>
                          </div>
                          <div className="right-icon-aear">
                            <Link onClick={handleOpenModal}>
                              <i className="fas fa-edit"></i>
                            </Link>
                            <Link>
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="yjtdjyt">
                    <div className="row">
                      <div className="col-12">
                        <div className="wEGF">
                          <div className="form-input">
                            <div className="top-text-cart">
                              <label htmlFor="">Address</label>
                            </div>
                            <div className="right-icon-aear">
                              <Link onClick={handleOpenModal}>
                                <i className="fas fa-edit"></i>
                              </Link>
                              <Link>
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="wEGF">
                          <div className="form-input">
                            <div className="top-text-cart">
                              <label htmlFor="">Footer Description</label>
                            </div>
                            <div className="right-icon-aear">
                              <Link onClick={handleOpenModal}>
                                <i className="fas fa-edit"></i>
                              </Link>
                              <Link>
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="social-media">
                    <div className="row">
                      <div className="col-4">
                        <div className="fb">
                          <div className="form-input">
                            <div className="top-text-cart">
                              <label htmlFor="">Facebook</label>
                            </div>
                            <div className="fb-link">
                              <Link onClick={handleOpenModal}>
                                <i className="fas fa-edit"></i>
                              </Link>
                              <Link>
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="fb">
                          <div className="form-input">
                            <div className="top-text-cart">
                              <label htmlFor="">Facebook</label>
                            </div>
                            <div className="fb-link">
                              <Link onClick={handleOpenModal}>
                                <i className="fas fa-edit"></i>
                              </Link>
                              <Link>
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="fb">
                          <div className="form-input">
                            <div className="top-text-cart">
                              <label htmlFor="">Facebook</label>
                            </div>
                            <div className="fb-link">
                              <Link onClick={handleOpenModal}>
                                <i className="fas fa-edit"></i>
                              </Link>
                              <Link>
                                <i className="fas fa-trash-alt"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Modal */}
          <div
            className={`modal fade ${showModal ? "show" : ""}`}
            style={{ display: showModal ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content" id="cont-modal">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form action='POST'>
                  <div className="form-group">
                    <input
                      type="text"
                      value={email}
                      className="form-control"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  </form>
                  {/* Other fields */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary sub-btn"
                    onClick={emailbtn}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          {/* <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content" id='cont-modal'>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter number" />
                                    </div>
                                  
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary sub-btn">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>  */}
          {/* Modal */}
          {/* <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content" id='cont-modal'>
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary sub-btn">Save</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
}
export default NavTab;
