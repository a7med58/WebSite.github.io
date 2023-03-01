import { faHomeUser, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import himage from "../../Assets/bg.png";
import "./Home.css";

const Home = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h2> Eagle Company</h2>
            <h5>
              Want seamless user interfaces, smooth navigation, and
              uncompromising accessibility to be the defining traits of your
              next website project? We’ve got you covered! Comprising a skilled
              team and state-of-the-art infrastructure, our front end
              development services will leave no stone unturned to transform
              your vision into reality!
            </h5>
            <button>
              <a href="!#">
                <FontAwesomeIcon className="hoicon" icon={faHomeUser} />
                Explore Packages
              </a>
            </button>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="header-box">
              <img src={himage} alt="background" />
              <FontAwesomeIcon className="hoicon2" icon={faKeyboard} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
