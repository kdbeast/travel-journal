const Entry = ({ name, country, date, text, img, location }) => {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img className="main-image" src={img} alt={name} />
        </div>
        <div className="info-container">
          <img className="marker" src="/marker.png" alt="map marker icon" />
          <span className="country">{country} </span>
          <a href={location}>View on Google Maps</a>
          <h2 className="entry-title">{name}</h2>
          <p className="trip-dates"> {date}</p>
          <p className="entry-text">{text}</p>
        </div>
      </article>
    </>
  );
};

export default Entry;
