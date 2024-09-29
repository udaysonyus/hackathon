import data from "../../data/index.json";

export default function MyServices() {
  return (
    <section className="skills--section" id="MyServices" style={{ height: "auto", padding: "40px 0" }}>
      <div className="portfolio--container">
        <h2 className="skills--section--heading" style={{ textAlign: "center", paddingBottom: "20px" }}>
          Our Services
        </h2>
      </div>
      <div
        className="skills--section--container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap", // Allow cards to wrap if necessary
          gap: "20px", // Consistent gap between the cards
          width: "100%", // Ensure full width is used
          maxWidth: "1200px", // Limit the total width for better presentation on larger screens
          margin: "0 auto", // Center the container horizontally
        }}
      >
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card"
            style={{
              flex: "1 1 calc(33% - 20px)", // Each card takes up roughly 1/3rd of the available space
              maxWidth: "calc(33% - 20px)", // Ensure the card does not exceed 1/3 of the container width
              margin: "10px", // Add margin around each card
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#f0f0f0", // Background color for better visual
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            {/* Image Section */}
            <div className="skills--section--img" style={{ marginBottom: "20px" }}>
              <img
                src="/img/sthe.jpg"
                alt={item.title}
                style={{ width: "100%", maxWidth: "300px", height: "auto" }} // Responsive image size
              />
            </div>

            {/* Content Section */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title" style={{ marginBottom: "15px" }}>{item.title}</h3>

              {/* Description */}
              {item.description && (
                <p className="skills--section--description" style={{ marginBottom: "20px" }}>{item.description}</p>
              )}

              {/* Explore Button */}
              <a
                href={item.href}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "auto" }}
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
