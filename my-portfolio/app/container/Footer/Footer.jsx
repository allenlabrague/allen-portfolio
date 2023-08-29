import { useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";

import { FooterWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { BiCoffeeTogo, BiSolidSend } from "react-icons/bi";

import { Button } from "@nextui-org/button";

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
            className="flex items-center"
          >
            <Button
              className="bg-[#313bac] font-bold py-2 px-6 rounded-lg text-center text-white"
              startContent={<BiCoffeeTogo />}
            >
              Buy me a coffee
            </Button>
          </Link>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex w-[500px]">
            <div className="app__footer-form-input app_flex bg-red-400">
              <input
                className="p-text bg-[#edf2f8] dark:dark:bg-[#383838]"
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
                className="p-text bg-[#edf2f8] dark:dark:bg-[#383838]"
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
                className="p-text bg-[#edf2f8] dark:dark:bg-[#383838]"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                required
              />
            </div>

            {name && email && message ? (
              <>
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#313bac] font-bold py-2 px-6 rounded-lg text-center text-white flex items-center transition-opacity"
                  endContent={<BiSolidSend />}
                >
                  {loading ? (
                    <Button
                      isLoading
                      className="bg-[#313bac] font-bold py-2 rounded-lg text-white opacity-70 transition-opacity"
                      endContent={<BiSolidSend />}
                    >
                      Sending
                    </Button>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </>
            ) : (
              <>
                <Button
                  disabled
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#313bac] font-bold py-2 px-6 rounded-lg text-center text-white flex items-center opacity-70 cursor-not-allowed transition-opacity"
                  endContent={<BiSolidSend />}
                >
                  {loading ? "" : "Send Message"}
                </Button>
              </>
            )}
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

export default FooterWrap(MotionWrap(Footer, "app__footer"), "contact");
