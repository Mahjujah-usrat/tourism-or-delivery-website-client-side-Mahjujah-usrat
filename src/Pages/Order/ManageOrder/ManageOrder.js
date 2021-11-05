import { useEffect, useState } from "react";
import useFirebase from "./../../hooks/useFirebase.js";
import { Container, Table } from "react-bootstrap";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://mighty-plateau-69257.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure to confirm!");
    if (confirmation) {
      fetch(`https://mighty-plateau-69257.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            setControl(!control);
          }
        });
    }
  };
  function confirmationHandler(id) {
    fetch(`https://mighty-plateau-69257.herokuapp.com/update/${id}`, {
      method: "put",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          setControl(!control);
        }
      });
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-2">
        My Current Order : {orders.length}{" "}
      </h1>
      <Container className="mb-5 w-50">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>#SL</th>
              <th>Client</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Status</th>
              <th>Confirmation</th>
              <th>Cancellation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => confirmationHandler(order._id)}>
                    Confirm
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    style={{ backgroundColor: "#C19B77" }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageOrder;
