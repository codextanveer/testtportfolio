import React from "react";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-main">
          <div className="about-inner">
            <div className="about-content">
              <p className="about_content_label body-text text-uppercase">
                About me
              </p>
              <div className="about_content_desc h2 scroll-paragraph-parent">
                <div className="scroll-paragraph-mask js-scroll-paragraph-mask is-masking">
                  <div className="about-line">
                    I’m a <strong>selectively</strong> <strong>skilled</strong>{" "}
                    product
                  </div>

                  <div className="about-line">
                    designer with strong focus on
                  </div>

                  <div className="about-line">producing high quality &amp;</div>

                  <div className="about-line">
                    impactful digital experience.
                  </div>
                </div>

                {/* <div className="scroll-paragraph-mask js-scroll-paragraph-mask is-bg">
                  <div className="about-line">
                    I’m a <strong>selectively</strong> <strong>skilled</strong>{" "}
                    product
                  </div>

                  <div className="about-line">designer with strong focus on</div>

                  <div className="about-line">producing high quality &amp;</div>

                  <div className="about-line">impactful digital experience.</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
