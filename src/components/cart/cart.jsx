/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./cart.css";
import jwtDecode from "jwt-decode";
import axios from "axios";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [order_id, setOrder_id] = useState("");
  const [total, setTotal] = useState("");
  const [token, setToken] = useState("");

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const process = async () => {
    const decode = jwtDecode(localStorage.getItem("token"));
    const data = {
      name: decode.name,
      order_id: Math.random(),
      total: price,
    };
    // console.log(data);
    const config = {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:4000/api/payment/process-transaction",
      data,
      config
    );
    setToken(response.data.token);
  };
  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
        },
        onPending: (result) => {
          localStorage.setItem("Pembayaran", JSON.stringify(result));
          setToken("");
        },
        onError: (error) => {
          console.log(error);
          setToken("");
        },
        onClose: () => {
          console.log("Anda Belum Menyelesaikan Pembayaran");
          setToken("");
        },
      });
      setName("");
      setOrder_id("");
      setTotal("");
    }
  }, [token]);

  useEffect(() => {
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;

    const midtransClientKey = "SB-Mid-client-RGHlGALHJ5YF5uma";
    scriptTag.setAttribute("data-client-key", midtransClientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <h1
        className="mt-5 mb-5 text-center fw-bold"
        style={{ color: "#8b542f" }}
      >
        CART
      </h1>
      <article className="bg-white shadow mb-5">
        {cart.map((item) => (
          <div className="cart_box bg-white" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span className="fs-5">{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rp. {price}</span>
        </div>
      </article>
      <div className="d-flex justify-content-center">
        <a
          onClick={process}
          className=" fs-4 fw-bold h-50 ms-3 mt-4 btn text-dark "
          style={{
            backgroundColor: "#faaf18",
            borderColor: "#faaf18",
          }}
        >
          Check Out
        </a>
      </div>
      <div style={{ marginBottom: "330px" }}></div>
    </>
  );
};

export default Cart;
