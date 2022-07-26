import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { ContactProps } from "../components.model";
import Container from "./Contact.styled";
import SubTitle from "../00.common/SubTitle";
interface Props {
  data: ContactProps;
}

function Contact({ data }: Props) {
  const { mobile, email, github, blog } = data;
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Contact" />
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
