import React from "react";

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="center" style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          <div className="box">
            <h3 style={{ flexBasis: "40px" }}>UNIVERSIDAD MAYOR DE SAN ANDRES</h3>
            <p className="small">Bachelor degree in computer science</p>
            <p className="small">2021-2025</p>
          </div>
        </div>
        <div style={{ maxWidth: "40%", alignSelf: "center", paddingRight: "10rem" }}>
          <img
            src={
              "https://www.tramitesenbolivia.com/base/stock/Entity/53-logo-umsa/53-logo-umsa_small.jpg.webp"
            }
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={"UMSA"}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
