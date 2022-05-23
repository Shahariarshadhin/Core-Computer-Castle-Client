import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { Button, Form } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import OrderModal from "./Inventory/OrderModal";


const OrderDetails = () => {
    const { partId } = useParams();
    const [parts, setParts] = useState([]);
    const [count, setCount] = useState([]);
    const [user, loading, error] = useAuthState(auth);




    useEffect(() => {
        const url = (`http://localhost:5000/part/${partId}`);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setParts(data));
    }, [partId]);
    useEffect(() => {
        const url = (`http://localhost:5000/part/${partId}`);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCount(data.available));
    }, [partId]);

    const navigate = useNavigate();

    const handleSingleUniteDelevery = (event) => {
        event.preventDefault();

        const updatedQuentity = count - 1;
        setCount(updatedQuentity);
        if (count < 0 || updatedQuentity < 0) {
            alert("You mighthave mistaken");
            return;
        } else {
            const updatedInfo = { updatedQuentity };
            //send updated data in backend
            const url = (`http://localhost:5000/part/${partId}`);
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedInfo),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("success", updatedInfo);
                    console.log(parts);

                    alert("Informatin updated successfully");
                });
        }

    };

    const handleUpdateDeleveredQuentity = (event) => {
        event.preventDefault();
        const inpvalue = parseInt(event.target.delevered.value);
        console.log(typeof inpvalue);
        const updatedQuentity =
            count - inpvalue;
        setCount(updatedQuentity);

        if (
            count < inpvalue ||
            updatedQuentity < 0
        ) {
            alert("You mighthave mistaken");
            return;
        } else {
            const updatedInfo = { updatedQuentity };
            //send updated data in backend
            const url = (`http://localhost:5000/part/${partId}`);
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedInfo),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("success", updatedInfo);
                    console.log(parts);
                    alert("Informatin updated successfully");
                    console.log(parts);
                    event.target.reset();
                });
        }
    };

    const handleResockItemQuentity = (event) => {
        event.preventDefault();
        const inpvalue = parseInt(event.target.restocked.value);
        const updatedQuentity = count + inpvalue;
        setCount(updatedQuentity);

        console.log(typeof inpvalue);

        if (
            count < event.target.restocked.value ||
            updatedQuentity < 0
        ) {
            alert("You mighthave mistaken");
            return;
        } else {
            const updatedInfo = { updatedQuentity };
            //send updated data in backend
            const url = (`http://localhost:5000/part/${partId}`);
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedInfo),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("success", updatedInfo);
                    console.log(parts);
                    alert("Informatin updated successfully");
                    console.log(parts);
                    event.target.reset();
                });
        }


    };

    return (

        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={parts.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="text-2xl font-bold">{parts.name}</h2>
                    <p><small>{parts.description}</small></p>
                    <p>Price: {parts.price}</p>
                    <p>Minimun Order Quantity :{parts.minimum_order_quantity}</p>
                    <p>Available Quantity :{parts.available_quantity}</p>




                    <label for="booking-modal" class="btn modal-button">Buy Now</label>


                    <input type="checkbox" id="booking-modal" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="font-bold text-lg">{parts.name}</h3>
                            <form>
                                <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered input-accent w-full max-w-xs  mb-3" />
                                <input type="email" name="email" disabled value={user?.email} class="input input-bordered input-accent w-full max-w-xs mb-3" />
                                <input type="text" name="address" placeholder="Address" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                                <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs mb-3" />
                                <input type="submit" value="Confirm" class="input input-bordered input-accent w-full max-w-xs mb-3 btn btn-info" />
                            </form>

                        </div>
                    </div>




                </div>
            </div>
        </div>
        // <div className="">
        //     <h1 className="text-center pt-4 mt-4 text-primary">{parts.title}</h1>

        //         {/* <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        //         <Card.Img
        //             className="border rounded mx-auto mt-2 p-1 card-img"
        //             variant="top"
        //             src={parts.img}
        //         />
        //         <Card.Body>
        //             <Card.Title className="title">{parts.title}</Card.Title>
        //             <Card.Text className="text">{parts.description}</Card.Text>
        //             <Card.Text className="text">Price: {parts.price}</Card.Text>
        //             <Card.Text className="text">available: {count}</Card.Text>
        //             <Card.Text className="text">
        //                 Supplier: {parts.supplier_name}
        //             </Card.Text>
        //             <Card.Text className="text">Supplyer Id.: {parts._id}</Card.Text>
        //         </Card.Body>
        //     </Card> */}






        //         <div className="form-container mx-auto mt-5 mb-5">
        //             <div className="update-deliver">
        //                 <Form
        //                     onSubmit={handleUpdateDeleveredQuentity}
        //                     className="form-body mx-auto"
        //                 >
        //                     {/* Multiple unite delevery operation */}
        //                     <Form.Group className="mb-3">
        //                         <Form.Label>Put the quantity of delevered gear</Form.Label>
        //                         <Form.Control
        //                             name="delevered"
        //                             type="number"
        //                             placeholder="How many delevered"
        //                             required
        //                         />
        //                         <Form.Text className="text-muted">
        //                             Make sure the gear is delevered.
        //                         </Form.Text>
        //                     </Form.Group>

        //                     <Button
        //                         className="mb-3 d-flex justify-content-center align-items-center"
        //                         variant="primary"
        //                         type="submit"
        //                     >
        //                         <i
        //                             className="fa-solid fa-truck"
        //                             style={{ transform: "rotateY(180deg)" }}
        //                         ></i>
        //                         <span className="mx-1">Delevered</span>
        //                     </Button>
        //                     <hr />

        //                     {/* single unite delevery operation */}
        //                     <p>Click here for single unite delevery</p>
        //                     <Button
        //                         onClick={handleSingleUniteDelevery}
        //                         className="mb-3 "
        //                         variant="primary"
        //                         type="submit"
        //                     >
        //                         <i
        //                             className="fa-solid fa-truck"
        //                             style={{ transform: "rotateY(180deg)" }}
        //                         ></i>
        //                         <span className="mx-1">Delivered</span>
        //                     </Button><hr />
        //                     <Form.Text className="text-muted">
        //                         Make sure the gear is delevered.
        //                     </Form.Text>

        //                     <ToastContainer />
        //                 </Form>
        //             </div>
        //         </div>

        //         {/* Re Stock Operations */}
        //         <div className="form-container mx-auto mt-5 mb-5">
        //             <div>
        //                 <form onSubmit={handleResockItemQuentity} className="form-body mx-auto">
        //                     <h2> Restock the items</h2>
        //                     {/* Multiple unite delevery operation */}
        //                     <Form.Group className="mb-3 mx-5 " controlId="formBasicEmail">
        //                         <Form.Label>Put the quantity of gear been Restocked</Form.Label>
        //                         <Form.Control
        //                             className=" text-center update-deliver"
        //                             name="restocked"
        //                             type="number"
        //                             placeholder="How many delevered"
        //                             required
        //                         />
        //                         <Form.Text className="text-muted">
        //                             Make sure the gear is stocked.
        //                         </Form.Text>
        //                     </Form.Group>

        //                     <Button
        //                         className="mb-3 "
        //                         variant="primary"
        //                         type="submit"
        //                     >
        //                         <i className="fa-solid fa-cash-register"></i>
        //                         <span className="mx-1">Restock</span>
        //                     </Button>
        //                 </form>
        //             </div>
        //         </div>
        //         <div className="text-center">
        //             <Link to="/mnagestock">
        //                 <Button className="mb-5">Manage Stock</Button>
        //             </Link>
        //         </div>
        //     </div>


    );
};

export default OrderDetails;