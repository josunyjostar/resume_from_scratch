import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { IntroProps } from "../components.model";
import Container from "./Intro.styled";
import SubTitle from "../00.common/SubTitle";

interface Props {
  data: IntroProps;
}

function Introduction({ data: { data } }: Props) {
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Introduction" />
        <Hr />
        {data.map((v, i) => {
          return (
            <div key={i} className="desc">
              {v}
            </div>
          );
        })}
      </Inner>
    </Container>
  );
}

export default Introduction;
