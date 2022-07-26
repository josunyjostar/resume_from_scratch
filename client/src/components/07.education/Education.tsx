import Inner from "../00.common/Inner.styled";
import SubTitle from "../00.common/SubTitle";
import Hr from "../00.common/Hr.styled";
import { EducationProps } from "../components.model";
import Container from "./Education.styled";
interface Props {
  data: EducationProps;
}

function Education({ data: { data } }: Props) {
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Education" />
        <Hr />
        {data.map(({ leftSection: { period }, rightSection: { organization, subtitle, desc } }, i) => {
          return (
            <div key={i} className="content">
              <div className="left">
                <span>{period}</span>
              </div>
              <div className="right">
                <h6>{organization}</h6>
                <p>{subtitle}</p>
                <ul>
                  {desc.map((val, idx) => {
                    const { main, sub } = val;
                    return (
                      <li key={idx}>
                        {main}
                        {sub
                          ? sub.desc.map((v, i) => {
                              return <span key={i}>{v}</span>;
                            })
                          : null}
                        {sub?.url ? (
                          <a href={sub.url} target="_blank">
                            {sub.url}
                          </a>
                        ) : null}
                      </li>
                    );
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

export default Education;
