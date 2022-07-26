import styled from "styled-components";

const LR_Section = styled.section`
  .content {
    display: flex;
    margin: 20px 0;
    .left {
      flex: 1;
      /* border: 1px solid red; */
    }
    .right {
      flex: 6;
      /* border: 1px solid red; */
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
      margin: 10px 0;
      display: flex;
      .left {
        flex: 1;
      }
      .right {
        padding-left: 10px;
        flex: 4;
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

export default LR_Section;
