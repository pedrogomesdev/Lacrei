import pro from "../../assets/img/professional.svg";
import Container from "../../components/Container";

import "./styles.css";

const Professional = () => {
  return (
    <Container>
      <div className="home-content-container">
        <h1>Profissional</h1>
        <p id="p-row">A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora</p>
      </div>
      <div className="home-content-second">
          <div className="home-image-container">
            <img src={pro} alt="Logo" />;
          </div>
        </div>
    </Container>
  );
};

export default Professional;
