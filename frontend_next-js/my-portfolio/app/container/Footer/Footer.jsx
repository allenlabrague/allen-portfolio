import { useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { Button } from "@nextui-org/react";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { Send, Buy } from "react-iconly";

import AnimationPhone from "../../../public/assets/mobile-animation.json";
import AnimationThankyou from "../../../public/assets/thankyou-animation.json";
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
          <Link href="https://www.buymeacoffee.com/allenlabraV" target="_blank">
            <Button
              auto
              icon={<Buy set="bold" />}
              className="bg-[#313bac] font-bold"
            >
              Buy me a coffee
            </Button>
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
            <Button
              auto
              type="button"
              iconRight={<Send set="bold" />}
              onClick={handleSubmit}
              className="mt-4"
            >
              {loading ? "Sending" : "Send Message"}
            </Button>
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
