import Inner from "../00.common/Inner.styled";
import SubTitle from "../00.common/SubTitle";
import Hr from "../00.common/Hr.styled";
import { CareerProps } from "../components.model";
import Container from "./Careet.styled";
interface Props {
  data: CareerProps;
}

function Career({ data: { data } }: Props) {
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Career" />
        <Hr />
        {data.map(({ leftSection: { period }, rightSection: { name, team, desc } }, i) => {
          return (
            <div key={i} className="content">
              <div className="left">
                <span>{period}</span>
              </div>
              <div className="right">
                <h6>{name}</h6>
                <p>{team}</p>
                <ul>
                  {desc.map((v, i) => {
                    return <li key={i}>{v}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </Inner>
    </Container>
  );
}

export default Career;
