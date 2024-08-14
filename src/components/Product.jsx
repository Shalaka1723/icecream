import React, { useState } from "react";
import i from "../assets/images/i.jpeg";
import ii from "../assets/images/ii.jpg";
import gelato from "../assets/images/gelato.jpg";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { green, purple, yellow } from "@mui/material/colors";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Heart from "react-heart";
import Tooltip from '@mui/material/Tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  let [pimg, setPimg] = useState(i);
  let [quantity, setQuantity] = useState(0);
  const [active, setActive] = useState(false);
  const notify = (message) => toast(message);

  let addition = () => {
    setQuantity(quantity + 1);
  };
  let substract = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-20">
          <div>
            <img src={pimg} className="" />
          </div>
          <div className=" ">
            <ul className="flex justify-evenly p-4 space-x-2">
              <li>
                <img
                  onClick={() => {
                    setPimg(i);
                  }}
                  src={i}
                  className="w-auto h-20"
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setPimg(ii);
                  }}
                  src={ii}
                  className="w-auto h-20"
                />
              </li>
              <li>
                <img
                  onClick={() => {
                    setPimg(gelato);
                  }}
                  src={gelato}
                  className="w-auto h-20"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 p-20">
          <h3 className="text-[#8e02a1] text-lg font-semibold">
            THE ICECREAM COMPANY
          </h3>
          <h1 className="font-semibold text-5xl py-7">
            Limited Edition Flavour
          </h1>
          <p className="text-gray-700 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae corporis laboriosam natus est modi accusamus pariatur
            sint earum tempore architecto? Officia atque expedita odit a iste
            dolorum ex quidem rerum.
          </p>
          <div className="py-3">
          <Tooltip title="Add to Favourites">
            <div style={{ width: "1rem" }}>
            <Heart isActive={active} onClick={() => {
                notify(!active?'Added to Favourites':'Removed from favourites');
                setActive(!active);
            }} />
            <ToastContainer/>
          </div>
          </Tooltip>
            </div>
          <h1 className="font-bold text-2xl ">$25</h1>


          <div className="flex py-3 space-x-5">
            <div className="flex border rounded-md w-fit text-center bg-slate-100 p-1 ">
              <div>
                <RemoveCircleIcon
                  sx={{ color: "#ae6ac2" }}
                  onClick={() => {
                    substract();
                  }}
                />
              </div>
              <input
                type="number"
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
                value={quantity}
                className=" bg-slate-100 [&::-webkit-inner-spin-button]:appearance-none w-10 text-center  "
              />
              <div>
                <AddCircleIcon
                  sx={{ color: "#ae6ac2" }}
                  onClick={() => {
                    addition();
                  }}
                />
              </div>
            </div>
            <div>
              <button className="bg-[#ae6ac2] rounded-sm p-1 px-5 text-white shadow-lg">
                <ShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
