import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import "./Template.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import { BiShieldAlt2 } from "react-icons/bi";
// import { TfiWrite } from "react-icons/tfi";
import { Divider } from "antd";

export const Template = () => {
  const deliverBenifits = [
    { title: "Responsive",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla."},
    {  title: "One click instal",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla." },
    { title: "Multi-purpose" ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla."},
  ];
  return (
    <div className="template-container">
      {/* <div> */}
      <h1 className="template-container-header">Build or Choose a template</h1>
        <div className="template-left-container">
          {deliverBenifits.map((each,i) => (
            <div key={i} className="template-left-each-container">
              <div className='template-icon'><AiOutlineCheckCircle/></div>
              <div className="template-left-each-details-container">
                <h1 className="template-left-each-details-container-title">{each.title}</h1>
                <p className="template-left-each-details-container-para">
                  {each.description}
                </p>
              <Divider/>
              </div>
            </div>
          ))}
        </div>
        <div className="template-image-container">
          <img
            src=" https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Home_10_img_4.png"
            alt=""
            className="template-container-image"
          />
        </div>
      {/* </Row> */}
    </div>
  );
};