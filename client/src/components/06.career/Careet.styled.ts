import styled from "styled-components";
import LR_Section from "../00.common/LR_Section.styled";

const Container = styled(LR_Section)`
  /* border: 1px solid red; */

  .content {
    display: flex;
    /* border: 1px solid red; */
    .left {
      flex: 1;
      /* border: 1px solid blue; */
    }
    .right {
      flex: 6;
      /* border: 1px solid blue; */
      h6 {
        font-size: ${(props) => props.theme.h6FontSize_web};
        font-weight: bold;
      }
      p {
        margin-top: 7px;
        margin-bottom: 5px;
      }
      ul {
        padding-left: 25px;
        margin: 0;

        li {
          margin-top: 5px;
          line-height: 1.4;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.theme.contentfontSize_mobile};
    padding: 0 5px;
    .content {
      display: flex;
      /* border: 1px solid red; */
      .left {
        flex: 1;
        /* border: 1px solid blue; */
      }
      .right {
        padding-left: 10px;
        flex: 4;
        /* border: 1px solid blue; */
        h6 {
          font-size: ${(props) => props.theme.h6FontSize_mobile};
        }
        p {
          margin-bottom: 8px;
        }
        ul {
          padding-left: 18px;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.theme.contentfontSize_tablet};
  }
`;

export default Container;
