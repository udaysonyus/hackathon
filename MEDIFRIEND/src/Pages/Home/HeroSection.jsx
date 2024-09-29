export default function HeroSection() {
  const handleButtonClick = () => {
    window.location.href = "https://medi-friend.streamlit.app/";
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" style={{ fontSize: '2vw' }}>WELCOME TO</p>
          <h1 className="hero--section--title">
            <span className="hero--section--ttle--color">MEDIFRIEND</span>
            <p className="hero--section--description">
            Helping you make better choices.
          </p>
            <br />
          </h1>
          
          <p className="hero--section--description">
            Wanna decide on an Insurance plan? 
            <br />
            Wanna find best networked Insurance Plans?
            <br />
            Click on Converse to have a conversation with our AI.
          </p>
        </div>

        {/* Glowing Converse Button */}
        <button
          className="glowing-btn" // Apply the glowing effect class
          onClick={handleButtonClick}
        >
          Explore Doctors
        </button>
      </div>

      <div className="hero--section--img">
        <img src="./img/ai-bot.avif" alt="Hero Section" />
      </div>
    </section>
  );
}
