import home from "../../assets/img/home.svg";

import { Link } from "react-router-dom";
import "./styles.css";
import ButtonProfessional from "../../components/ButtonProfessional/index.style";
import ButtonUser from "../../components/ButtonUser/index.style";
import Container from "../../components/Container";

const Home = () => {
  return (
    <Container>
      <div className="home-content-container">
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

        <div className="home-button-container">
          <div className="button-content-container">
            <Link to="/user">
              <ButtonUser />
            </Link>
          </div>
          <div className="button-content-container">
            <Link to="/professional">
              <ButtonProfessional />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-content-second">
        <div className="home-image-container">
          <img src={home} alt="Logo" />;
        </div>
      </div>
    </Container>
  );
};

export default Home;
