import styled from "styled-components";
const Container = styled.section`
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
        font-size: 20px;
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
          font-size: 15px;
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
