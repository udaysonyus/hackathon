export default function AboutMe() {
  return(
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/logo-transparent-png.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">
            About
          </p>
          <h1 className="skills--section--heading">About Us</h1>
          <p style = {{fontSize: '1.25vw'}} className="hero--section-description">As an organization composed of students at the Jacobs School of Medicine, community health workers, and physicians, the Lighthouse Free Medical Clinic is dedicated to providing free healthcare to the uninsured and under served patients of Buffalo, New York
          </p>
</div>
      </div>
    </section>
  )
}