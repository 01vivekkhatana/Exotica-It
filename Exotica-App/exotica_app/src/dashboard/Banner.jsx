import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Link } from 'react-router-dom';

function Banner() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar />
        <div className="content">
          <Topbar />
          <div className="container-fluid pt-4 px-4">
            <div className="card card-primary">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="sect-banner">
                    <div className="banner-set">
                      <h5 className="card-title" style={{ color: "white" }}>Banner Setting</h5>
                      <div className="btn-add-banner">
                        <button onClick={handleOpenModal} className="btn btn-success"><i className="fas fa-plus"></i><span>Add Banner</span></button>
                        <button className="btn btn-danger"><i className="fas fa-minus"></i><span>Delete</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>
                        <span className="custom-checkbox">
                          <input type="checkbox" id="selectAll" />
                          <label htmlFor="selectAll"></label>
                        </span>
                      </th>
                      <th>Heading</th>
                      <th>Sub Heading</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="custom-checkbox">
                          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                          <label htmlFor="checkbox1"></label>
                        </span>
                      </td>
                      <td>Thomas Hardy</td>
                      <td>thomashardy@mail.com</td>
                      <td>89 Chiaroscuro Rd, Portland, USA</td>
                      <td>
                        <Link to="#"><i className="fas fa-edit"></i></Link>
                        <Link to="#"><i className="fas fa-trash-alt"></i></Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Edit Modal HTML */}
            {showModal && (
              <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form className='banner-form'>
                      <div className="modal-header">
                        {/* <h4 className="modal-title">Add Employee</h4> */}
                        <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="form-group">
                          <label>Heading</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Sub Heading</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Image</label>
                          <input type="file" className="form-control" required />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={handleCloseModal}>Cancel</button>
                        <button type="submit" className="btn btn-success">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
