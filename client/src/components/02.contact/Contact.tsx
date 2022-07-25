import styled from "styled-components";
import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { ContactProps } from "../components.model";

const Container = styled.section`
  h2 {
    font-size: ${(props) => props.theme.subjectFontSize};
    color: ${(props) => props.theme.subjectColor};
    font-weight: bold;
  }

  ul {
    margin: 0 0;
    padding-left: 25px;
    font-size: 15px;
    li {
      margin: 5px 0;
    }
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_mobile};
    }
    ul {
      padding-left: 20px;
      font-size: 12px;
      li {
        margin: 5px 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    h2 {
      font-size: ${(props) => props.theme.subjectFontSize_tablet};
    }
    ul {
      padding-left: 20px;
      font-size: 17px;
      li {
        margin: 5px 0;
      }
    }
  }
`;
interface Props {
  data: ContactProps;
}

function Contact({ data }: Props) {
  const { mobile, email, github, github_desc, blog } = data;
  return (
    <Container>
      <Inner>
        <h2>Contact</h2>
        <Hr />
        <ul>
          <li>Mobile: {mobile}</li>
          <li>E-mail: {email}</li>
          <li>
            Git-hub:
            <a href={github} target="_blank">
              {` ${github}`}
            </a>
          </li>
          <li>
            blog:
            <a href={blog} target="_blank">
              {` ${blog}`}
            </a>
          </li>
        </ul>
      </Inner>
    </Container>
  );
}

export default Contact;
