import styled from "styled-components";

const LR_Section = styled.section`
  .content {
    display: flex;
    margin: 20px 0;
    line-height: 1.5;
    .left {
      flex: 1;
      margin-top: 3px;
      /* border: 1px solid red; */
    }
    .right {
      flex: 6;
      margin-left: 30px;
      /* border: 1px solid red; */

      .link {
        a {
          color: ${(props) => props.theme.subjectColor};
        }
      }

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
    line-height: 1;
    .content {
      margin: 10px 0;
      flex-direction: column;
      .left {
        flex: 1;
        margin-top: 0px;
        > * {
          display: inline-block;
          margin-right: 5px;
          color: tomato;
        }
      }
      .right {
        margin-left: 0;
        padding-left: 0px;
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
