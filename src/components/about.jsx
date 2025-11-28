import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>{"Being a successful UX designer does not only mean you are capable of visualizing ideas on a screen, it also means that you are a great salesperson too. First of all you have to create a proposal and define scope of your work.The proposal should clearly state the problem and your approach to a solution. Articulate what you offer as a UX Designer. Proposals are a reference for both you and your client for what is expected throughout your relationship."}
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{"Strong focus on performance optimization"}
                    {/* {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"} */}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>{"Proven expertise in modern React development"}
                    {/* {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
