import React, { useRef } from "react";
import { Container } from "react-bootstrap";

const AddService = () => {
  const nameRef = useRef();
  const roomRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();
  const imgRef = useRef();

  const handleAddService = (e) => {
    const name = nameRef.current.value;
    const rooms = roomRef.current.value;
    const price = roomRef.current.value;
    const img = imgRef.current.value;
    const description = desRef.current.value;
    const newService = { name, rooms, price, img, description };

    fetch("https://mighty-plateau-69257.herokuapp.com/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thank you! Your Service have been added successfully");
          // console.log(data);
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container
        className="text-center mt-5 mb-5 pt-5 pb-5"
        style={{ backgroundColor: "#C19B77" }}
      >
        <h1 className="fw-bolder">Add A Service</h1>
        <div className="p-3">
          <form
            className="d-flex flex-column overflow-hidden"
            onSubmit={handleAddService}
          >
            <input
              className="my-1"
              type="text"
              ref={nameRef}
              placeholder="Service Name"
            />
            <input
              className="my-1"
              type="number"
              ref={roomRef}
              placeholder="Total Person"
            />
            <input
              className="my-1"
              type="number"
              ref={priceRef}
              placeholder="Price"
            />
            <input
              type="url"
              ref={imgRef}
              name="img"
              id="photo"
              placeholder="img"
            />
            <input
              className="my-1"
              type="text"
              ref={desRef}
              placeholder="Add Description"
            />
            <input
              className="my-1 fw-bolder"
              style={{
                backgroundColor: "#1C1C1C",
                color: "#C19B77",
                border: "#1C1C1C",
                padding: "5px 30px",
              }}
              type="submit"
              value="Add A Service"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddService;
