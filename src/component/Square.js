import React, { useState } from "react";
import styled from "styled-components";

const ButtonWrap = styled.button`
  color: blue;
  padding: 1rem;

  width: 100px; /* Set a reasonable width */
  height: 100px; /* Set a reasonable height */
`;

const Square = ({ onSquareClick, value }) => {
  return <ButtonWrap onClick={onSquareClick}>{value}</ButtonWrap>;
};

export default Square;
