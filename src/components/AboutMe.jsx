import React from "react";

const aboutMeContainerStyle = {
  color: "white",
  backgroundColor: "rgba(0, 0, 0, .7)",
  padding: "20px",
  borderRadius: "10px",
  margin: "20px auto",
  textAlign: "center",
  maxWidth: "800px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

// const headingStyle = {
//   color: "#45a049",
//   marginBottom: "10px",
// };

const subHeadingStyle = {
  color: "#EDDEA4",
  textAlign: 'left',
  marginTop: "20px",
  marginBottom: "10px",
  marginLeft: "0%",
};


const paragraphStyle = {
  marginBottom: "10px",
  width: '100%',
  margin: 'auto',
  textAlign: 'left',
};

const spotifyIFrameStyle = {
  width: "100%",
  height: "400px",
  marginTop: "20px",
};



function AboutMe() {
  return (
    <div className="container" style={aboutMeContainerStyle}>
      {/* <h2 style={headingStyle}>About Me</h2> */}

      <div className="blob2-container">
          <div className="blob2"></div>
        </div>

      <h3 style={subHeadingStyle}>Who Am I?</h3>

      <p style={paragraphStyle}>
        Hi! My name is Anthony, but most people call me AJ. I am 27 years old and I really enjoy coding. I am a full stack web developer living in Oklahoma City, Oklahoma. In December of 2023, I completed a Full Stack Web Development certificate from The University of Oklahoma, University Outreach - associated with Fullstack Academy.
      </p>
      <br></br>
      <p style={paragraphStyle}>These days, I find myself bulding projects with the PERN (PostgreSQL, Express.js, React.js and Node.js) tech stack. However, I keep it a personal goal to continue to learn new tech and code each day.</p>
      <br></br>
      <p style={paragraphStyle}>Aside from coding, I enjoy traveling with my wife and dogs and playing music around OKC and the surrounding areas.</p>


      <h3 style={subHeadingStyle}>My Journey in Web Development</h3>

      <div className="certificate-container">
    <div className="centered-image">
        <img
            src='./WebDevCert.jpg'
            alt="OU web dev cert."
        />
    </div>
    
</div>


      

      <h3 style={subHeadingStyle}>Music</h3>

      <p style={paragraphStyle}>
        Want to know more about my music? Check out my band Disco Stranger and our latest tracks on Spotify!
      </p>

      <iframe
        style={spotifyIFrameStyle}
        title="iframe"
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default AboutMe;
