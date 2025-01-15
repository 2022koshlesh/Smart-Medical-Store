import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import ShopName from "./ShopName";

const sendInvoice = (userEmail, invoiceData, setMessage) => {
  const formData = new FormData();
  formData.append("email", userEmail);
  formData.append("pdf", invoiceData, "invoice-001.pdf");

  axios
    .post("http://localhost:4000/send-invoice", formData)
    .then((response) => {
      if (response.data.success) {
        setMessage({ type: "success", text: "Invoice sent successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to send invoice." });
      }
    })
    .catch((error) => {
      console.error("Error sending invoice:", error);
      setMessage({ type: "error", text: "There was an error while sending the invoice." });
    });
};

const GenerateInvoice = (props, setMessage) => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    const pdfData = pdf.output("blob");
    const userEmail = props.info.billToEmail;

    sendInvoice(userEmail, pdfData, setMessage);
  });
};

const DownloadInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice-001.pdf");
  });
};


const InvoiceModal = (props) => {
  const [message, setMessage] = useState(null);

  return (
    <div>
      <Modal show={props.showModal} onHide={props.closeModal} size="lg" centered>
        <div id="invoiceCapture">
          <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
            <div className="w-500">
              <h6 className="fw-bold text-secondary mb-1">
                <ShopName/>
                Invoice ID: {props.info.id || ""}
              </h6>
              <h4 className="fw-bold my-2">
                {props.info.billFrom || "John Uberbacher"}
              </h4>
              <h6 className="fw-bold text-secondary mb-1">
                Invoice No.: {props.info.invoiceNumber || ""}
              </h6>
            </div>
            <div className="text-end ms-4">
              <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
              <h5 className="fw-bold text-secondary">
                {props.currency} {props.total}
              </h5>
            </div>
          </div>
          <div className="p-4">
            <Row className="mb-4">
              <Col md={4}>
                <div className="fw-bold">Billed to:</div>
                <div>{props.info.billTo || ""}</div>
                <div>{props.info.billToAddress || ""}</div>
                <div>{props.info.billToEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold">Billed From:</div>
                <div>{props.info.billFrom || ""}</div>
                <div>{props.info.billFromAddress || ""}</div>
                <div>{props.info.billFromEmail || ""}</div>
              </Col>
              <Col md={4}>
                <div className="fw-bold mt-2">Date Of Issue:</div>
                <div>{props.info.dateOfIssue || ""}</div>
              </Col>
            </Row>
            <Table className="mb-0">
              <thead>
                <tr>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th className="text-end">PRICE</th>
                  <th className="text-end">AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {props.items.map((item, i) => {
                  return (
                    <tr id={i} key={i}>
                      <td style={{ width: "70px" }}>{item.itemQuantity}</td>
                      <td>
                        {item.itemName} - {item.itemDescription}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {props.currency} {item.itemPrice}
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {props.currency} {item.itemPrice * item.itemQuantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TAX
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {props.currency} {props.taxAmount}
                  </td>
                </tr>
                {props.discountAmount !== 0.0 && (
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      DISCOUNT
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                        {props.currency} {props.discountAmount}
                      </td>
                    </tr>
                  )}
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TOTAL
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {props.currency} {props.total}
                  </td>
                </tr>
              </tbody>
            </Table>
            {props.info.notes && (
              <div className="bg-light py-3 px-4 rounded">
                {props.info.notes}
              </div>
            )}
          </div>
        </div>
        <div className="pb-4 px-4">
          {message && (
            <div
              className={`alert ${
                message.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {message.text}
            </div>
          )}
          <Row>
            <Col md={6}>
              <Button
                variant="primary"
                className="d-block w-100"
                onClick={() => GenerateInvoice(props, setMessage)}
              >
                <BiPaperPlane
                  style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                  className="me-2"
                />
                Send Invoice
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="outline-primary"
                className="d-block w-100 mt-3 mt-md-0"
                onClick={DownloadInvoice}
              >
                <BiCloudDownload
                  style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                  className="me-2"
                />
                Download Copy
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
      <hr className="mt-4 mb-3" />
    </div>
  );
};

export default InvoiceModal;
