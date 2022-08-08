import React from "react";
import * as C from "./style";

const ResumeItem = ({ title, Icon, value, color, colorText }) => {
  return (
    <C.Container className="total">
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon color={color} />
      </C.Header>
      <C.Total style={{ color: colorText }}>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
