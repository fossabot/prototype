import { connect } from "react-redux";
import Link from "next/link";

import { motion } from "framer-motion";
import Head from "next/head";

import SkillsSphere from "../components/skills/skills-sphere";

const AboutContainer = ({ animationRouteVariant, lang }) => {
  return (
    <>
      <Head>
        <title>About me</title>
      </Head>
      <motion.section
        className="about-container container-fluid"
        variants={animationRouteVariant} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        layoutId="about-container"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-lg-10">
            <div className="row">
              <div className="col-12 col-xl-12 mt-auto mb-auto pr-5">
                <h1 className="cap__title">About me</h1>
                <h2 className="cap__text">
                  I’m a Software Developer located in Kazakhstan. I have a serious
                  passion for solving the problems in high load systems and an
                  intuitive innovative interfaces, dynamic user experiences.
                  <br />
                  <br />
                  Well-organised person, problem solver, independent employee
                  with high attention to detail.
                  <br />
                  <br />
                  Interested in the entire Web Software spectrum and working on
                  ambitious projects.
                </h2>
                <h2 className="cap__text cap__text--link">
                  <Link legacyBehavior={true} href={`/contact`}>
                    <a className="cap__text cap__text--link">
                      Let’s make something special.
                    </a>
                  </Link>
                </h2>
              </div>

              {/* <div className="d-none d-xl-flex col-12 col-xl-5 mt-auto mb-auto">
                <SkillsSphere />
              </div> */}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

const mapStateToProps = ({ theme: { animationRouteVariant } }) => {
  return { animationRouteVariant };
};

export default connect(mapStateToProps)(AboutContainer);
