import Inner from "../00.common/Inner.styled";
import Hr from "../00.common/Hr.styled";
import { SkillsProps } from "../components.model";
import Container from "./Skills.styled";
import { Component } from "react";

interface Props {
  data: SkillsProps;
}

enum SKILL {
  FRONTEND = 0,
  BACKEND,
  DEPLOY,
  ETC,
}

interface ValidatorConfig {
  [className: string]: {
    [propsName: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

class Skills extends Component<Props> {
  private data: string[][];
  @Required
  private parenthesis: string;
  constructor(props: Props) {
    super(props);
    this.data = props.data.data;
    this.parenthesis = props.data.parenthesis;
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
    return (
      <Container>
        <Inner>
          <h2>Skills</h2>
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
            <p>
              (<span>{this.parenthesis}</span>)
            </p>
          </div>
        </Inner>
      </Container>
    );
  }
}
export default Skills;
