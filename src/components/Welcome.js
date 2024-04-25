import styled from "styled-components";
import welcome from "../img/welcome.png";

export default function Welcome(props) {

  const {reqApi} = props;


  const ImageLogo = styled.img`
    width: 450px;
    height: auto;
    filter: drop-shadow(1px 1px 20px yellow);
    &:hover {
      cursor: pointer;
    }
  `;

  const ContentLogo = styled.div`
    width: 100%;
    text-align: center;
  `;

  const WelcomeText = styled.p`
    color: #2a9d8f;
    text-align: center;
    font-weight: 900;
    padding: 50px 0 10px 0;
    font-size: 25px;
  `;
  return (
    <ContentLogo>
      <WelcomeText>Dar click a la imagen :)</WelcomeText>
      <ImageLogo src={welcome} onClick={reqApi}/>
    </ContentLogo>
  );
}
