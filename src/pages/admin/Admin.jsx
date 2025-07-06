import { useState } from "react";
import NavAdmin from "./NavAdmin";
import "../../css/admin/Admin.css";
import { Col } from "react-bootstrap";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="d-none d-sm-block">
        <Col md={2} sm={3} className="contenedor-admin-links-pc">
          <NavAdmin celular={false} />
        </Col>
      </div>
      <div className="d-bock d-sm-none">
          <NavAdmin celular={true} />
      </div>
    </div>
  );
};

export default Admin;
