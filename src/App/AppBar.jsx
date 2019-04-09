import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

export default function() {
  return (
    <Bar>
      <div>Child 1</div>
      <div />
      <div>Child 2</div>
      <div>Child 3</div>
    </Bar>
  );
}
