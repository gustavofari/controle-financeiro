import React from "react";
import * as C from "./styles"; // Pega todos os itens que começam com C

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;