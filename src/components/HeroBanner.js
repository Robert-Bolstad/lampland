import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="heroBanner">
      <div className="heroBanner__inner">
        <span className="heroBanner__slogen">Quality</span>
        <span className="heroBanner__slogen">Modern Design</span>
        <Link className="heroBanner__btn" to="/products">
          Check out our lamps
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
