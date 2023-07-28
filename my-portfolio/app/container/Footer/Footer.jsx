import { useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { BiCoffeeTogo, BiSolidSend } from "react-icons/bi";

import "./Footer.scss";

import ShibaCoffeRelax from "../../../public/assets/Shiba Coffee-relax.json";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="text-center capitalize font-extrabold text-[2rem] md:text-5xl">
        Take a coffee & chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card gap-6 w-[50%]">
          <Lottie
            className="app__footer-phoneAnimation"
            animationData={ShibaCoffeRelax}
          />
          <Link
            href="https://www.buymeacoffee.com/allenlabraV"
            target="_blank"
            className="relative flex items-center"
          >
            <button className="bg-[#313bac] font-bold py-2 px-6 pl-10 rounded-lg text-center text-white relative">
              Buy me a coffee
            </button>
            <BiCoffeeTogo
              color="white"
              fontSize={20}
              className="absolute left-3"
            />
          </Link>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex w-[500px]">
            <div className="app__footer-form-input app_flex">
              <input
                className="p-text"
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleChangeInput}
                required
              />
            </div>
            <div className="app__footer-form-input app_flex">
              <input
                className="p-text"
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
                required
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                required
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="mt-4 bg-[#313bac] font-bold py-2 px-6 pr-10 rounded-lg text-center text-white relative flex items-center"
            >
              {loading ? "Sending" : "Send Message"}
              <BiSolidSend
                color="white"
                fontSize={20}
                className="absolute right-3"
              />
            </button>
          </div>
        ) : (
          <div className="app__footer-greeting flex items-center justify-center">
            <h3 className="text-center capitalize font-extrabold text-[2rem] md:text-4xl">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
