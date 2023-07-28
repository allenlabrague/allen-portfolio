import { useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle the value of isVisible on each click
  };
  return (
    <div onClick={() => setIsVisible(handleClick)} className="cursor-pointer">
      <div>
        <div className="flex items-center gap-3">
          {children}
          {isVisible ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
        </div>
        <div>{isVisible && <div className="my-2">{text}</div>}</div>
      </div>
    </div>
  );
};

export default Tooltip;
