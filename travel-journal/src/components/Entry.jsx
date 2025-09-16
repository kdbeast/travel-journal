import data from "./data";

const Entry = () => {
  return (
    <>
      {data.map((data) => (
        <article key={data.id} className="journal-entry">
          <div className="main-image-container">
            <img className="main-image" src={data.img.src} alt={data.img.alt} />
          </div>
          <div className="info-container">
            <img className="marker" src="/marker.png" alt="map marker icon" />
            <span className="country">{data.country} </span>
            <a href={data.googleMapsLink}>View on Google Maps</a>
            <h2 className="entry-title">{data.title}</h2>
            <p className="trip-dates"> {data.dates}</p>
            <p className="entry-text">{data.text}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default Entry;
