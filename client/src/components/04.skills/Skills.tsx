import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { SkillsProps } from "../components.model";
import Container from "./Skills.styled";

interface Props {
  data: SkillsProps;
}

function Skills({ data: { data, parenthesis } }: Props) {
  enum SKILL {
    FRONTEND = 0,
    BACKEND,
    DEPLOY,
    ETC,
  }

  function skillCategory(idx: number): string {
    switch (idx) {
      case SKILL.FRONTEND:
        return "[프론트 엔드]";
      case SKILL.BACKEND:
        return "[백 엔드]";
      case SKILL.DEPLOY:
        return "[배포]";
      case SKILL.ETC:
        return "[기타]";
      default:
        return "[idx err]";
    }
  }

  return (
    <Container>
      <Inner>
        <h2>Skills</h2>
        <Hr />
        <div>
          {data.map((specific_skill, idx) => {
            return (
              <div key={idx} className="part">
                <span className="category">{skillCategory(idx)}</span>
                {specific_skill.map((skill, i) => {
                  return <span> {i !== specific_skill.length - 1 ? skill + "," : skill}</span>;
                })}
              </div>
            );
          })}
          <p>
            (<span>{parenthesis}</span>)
          </p>
        </div>
      </Inner>
    </Container>
  );
}

export default Skills;
