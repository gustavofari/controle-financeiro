import React from "react";
import * as C from "./style";
import ResumeItem from "../ResumeItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

import { useState, useEffect } from "react";

const Resume = ({ income, expense, total }) => {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    const totalValue = Number(total.toString().replace("R$", ""));
    if (totalValue > 0) {
      setColor("#00DF59");
    } else if (totalValue === 0) {
      setColor("#000");
    } else {
      setColor("#FF192C");
    }
  }, [total]);
  return (
    <>
      <C.Container>
        <ResumeItem
          title="Entradas"
          value={income}
          Icon={FaRegArrowAltCircleUp}
          color="green"
        />
        <ResumeItem
          title="Saídas"
          value={expense}
          Icon={FaRegArrowAltCircleDown}
          color="red"
        />
        <ResumeItem
          title="Total"
          value={total}
          Icon={FaDollarSign}
          color="blue"
          colorText={color}
        />
      </C.Container>
    </>
  );
};

export default Resume;
