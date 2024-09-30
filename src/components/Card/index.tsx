import bgheader from "../../assets/bg-header.png";
import { FaLinkedin } from "react-icons/fa";
import "./styles.scss";

const Card = () => {
  return (
    <article className="card">
      <div className="header-img">
        <img src={bgheader} alt="" />
      </div>
      <header>
        <figure>
          <img
            src="https://www.github.com/guipramos.png"
            alt="Header bg main"
          />
          <figcaption>
            <h1>Guilherme Ramos</h1>
            <p>@guipramos</p>
          </figcaption>
        </figure>
      </header>
      <section className="card-icon">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/guihpramos" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </section>
      <section className="card-content">
        <p>
          Crafting brand and communication strategies, creating visual designs,
          leading art direction, and capturing portraits through photography.
        </p>
      </section>
      <section className="card-btn">
        <a href="#" className="card-btn-full">
          Fallow
        </a>
        <a href="#" className="card-btn-outline">
          Message
        </a>
      </section>
    </article>
  );
};

export default Card;
