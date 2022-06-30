import "./App.css";
import qrCode from "./image-qr-code.png";

function App() {
  return (
    <div className="App">
      <Card />
      <Attribution />
    </div>
  );
}

const Card = () => {
  return (
    <div className="card">
      <img src={qrCode} alt="" className="card__image" />
      <p className="card__title">
        {" "}
        Improve your front-end skills by building projects
      </p>
      <p className="card__text">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

const Attribution = () => {
  return (
    <div class="attribution">
      <p className="attribution__text">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="attribution__link"
        >
          Frontend Mentor.
        </a>
        Coded by:
        <a
          className="attribution__link"
          href="d"
          target="_blank"
          rel="noreferer"
        >
          alencarDotPy
        </a>
      </p>
    </div>
  );
};

export default App;
