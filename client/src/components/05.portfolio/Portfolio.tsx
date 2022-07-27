import styled from "styled-components";
import Inner from "../00.common/Inner.styled";
import SubTitle from "../00.common/SubTitle";
import Hr from "../00.common/Hr.styled";
import { PortfolioProps } from "../components.model";
import LR_Section from "../00.common/LR_Section.styled";

const Container = styled(LR_Section)`
  /* border: 1px solid red; */
  .strong {
    font-weight: bold;
    margin: 10px 0;
  }
  .skills {
    background-color: #e1f0e17e;
  }
  @media screen and (max-width: 767px) {
    .strong {
      font-weight: bold;
      margin: 7px 0;
    }
  }
`;

interface Props {
  data: PortfolioProps;
}

function Portfolio({ data: { data } }: Props) {
  return (
    <Container>
      <Inner>
        <SubTitle subtitle="Portfolio" />
        <Hr />
        {data.map(({ leftSection: { period, institution, order, setup }, rightSection: { title, summary, detail, url, github, prototype, role, skills, part, desc, learned } }, i) => {
          return (
            <div key={i} className="content">
              <div className="left">
                <div>{period}</div>
                <div>{institution}</div>
                <div>{order}</div>
                <div>{setup}</div>
              </div>
              <div className="right">
                <h6>{title}</h6>
                <p>
                  {`프로젝트 요약: ${summary} `}
                  <span>
                    (
                    <a href={url} target="_blank">
                      배포
                    </a>
                    <span> | </span>
                    <a href={github} target="_blank">
                      깃헙
                    </a>
                    <span> | </span>
                    <a href={prototype} target="_blank">
                      기획서
                    </a>
                    )
                  </span>
                </p>
                <ul>
                  <li>{detail}</li>
                </ul>
                <Hr />
                <div className="strong">프로젝트에서 맡은 역할 및 사용한 기술 스택</div>
                <ul>
                  <li>
                    {`${role} / `}
                    <span className="skills">{`${skills}`}</span>
                  </li>
                </ul>
                <div className="strong">{part}</div>
                <ul>
                  {Array.isArray(desc)
                    ? desc.map((v, i) => (
                        <li key={i}>
                          {v.main}
                          <div>{v.sub}</div>
                        </li>
                      ))
                    : null}
                </ul>
                <div className="strong">프로젝트를 진행하며 배운 것들</div>
                <ul>
                  {learned.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </Inner>
    </Container>
  );
}

export default Portfolio;
