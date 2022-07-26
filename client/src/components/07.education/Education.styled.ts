import styled from "styled-components";
import LR_Section from "../00.common/LR_Section.styled";

const Container = styled(LR_Section)`
  .content {
    .right {
      li span:first-child {
        display: block;
      }
    }
  }
`;

export default Container;
