import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { SkillsProps } from "../components.model";
import Container from "./Skills.styled";
import { Component } from "react";
import Validator from "../../utils/Validator";
import SubTitle from "../00.common/SubTitle";

interface Props {
  data: SkillsProps;
}

enum SKILL {
  FRONTEND = 0,
  BACKEND,
  DEPLOY,
  ETC,
}

class Skills extends Component<Props> {
  @Validator.getInst().ArrayInitRequired
  private data: string[][];

  constructor(props: Props) {
    super(props);
    this.data = props.data.data;
    // console.log(typeof this.data, Array.isArray(this.data));
    // console.log(typeof this.parenthesis);
  }

  skillCategory(idx: number): string {
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
  render() {
    if (!Validator.getInst().validate(this)) {
      return <div>Err : props 셋팅 확인 필요</div>;
    }
    return (
      <Container>
        <Inner>
          <SubTitle subtitle="Skills" />
          <Hr />
          <div>
            {this.data.map((specific_skill, idx) => {
              return (
                <div key={idx} className="part">
                  <span className="category">{this.skillCategory(idx)}</span>
                  {specific_skill.map((skill, i) => {
                    return <span key={i}> {i !== specific_skill.length - 1 ? skill + "," : skill}</span>;
                  })}
                </div>
              );
            })}
          </div>
        </Inner>
      </Container>
    );
  }
}
export default Skills;
