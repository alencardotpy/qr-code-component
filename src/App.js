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
      <h1 className="card__title">
        Improve your front-end skills by building projects
      </h1>
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
          className="attribution__link"
        >
          Frontend Mentor.
        </a>
        Coded by:
        <a
          className="attribution__link"
          href="https://github.com/alencardotpy"
          target="_blank"
        >
          alencarDotPy
        </a>
      </p>
    </div>
  );
};

export default App;
