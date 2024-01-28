import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>the only thing we're serious about is food.</p>
          </div>
          <p className="mod">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            beatae in tempora error ex nesciunt odit assumenda illum, quis quod
            inventore facere, at quaerat veniam optio! Repellat perferendis
            expedita ab iste quisquam labore cumque odio error, cupiditate
            voluptatem natus asperiores ea autem. Delectus fugit, quo
            necessitatibus eaque laboriosam hic quasi.
          </p>
          <Link to={"/"}>
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};
export default About;
