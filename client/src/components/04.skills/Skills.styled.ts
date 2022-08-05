import styled from "styled-components";
const Container = styled.section`
  .part {
    margin-top: 10px;
    .category {
      font-weight: bold;
      background-color: #eee;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => props.theme.contentfontSize_mobile};
    .part {
      margin-top: 6px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${(props) => props.theme.contentfontSize_tablet};
    .part {
      margin-top: 8px;
    }
  }
`;

export default Container;
