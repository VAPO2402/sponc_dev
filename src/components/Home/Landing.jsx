import React from "react";

function Card(props){
  return (
    <>
    </>
  );
}

const Landing = () => {
  return (
    <>
      <div className="main">
        <div className="landingMain">
          <div className="landleft"></div>
          <div className="landMiddle"></div>
          <div className="landRight"></div>
        </div>
        <div className="landingBottom">
          <div className="landBl">
            <Card />
            <Card />
            <Card />  
            <Card />
          </div>
          <div className="landBm"></div>
          <div className="landBr">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
