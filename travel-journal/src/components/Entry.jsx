const Entry = () => {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg"
            alt="mount fuji"
          />
        </div>
        <div className="info-container">
          <img className="marker" src="/marker.png" alt="map marker icon" />
          <span className="country">Japan </span>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
            View on Google Maps
          </a>
          <h2 className="entry-title">Mount Fuji</h2>
          <p className="trip-dates"> Dates: 12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="entry-text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </article>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src="https://images.pexels.com/photos/33861670/pexels-photo-33861670.jpeg"
            alt="mount fuji"
          />
        </div>
        <div className="info-container">
          <img className="marker" src="/marker.png" alt="map marker icon" />
          <span className="country">India </span>
          <a href="https://www.google.com/maps/place/Rock+Garden+of+Chandigarh,+Sector+1,+Chandigarh,+160001/@30.7524074,76.809448,16z/data=!3m1!4b1!4m6!3m5!1s0x390fed4412bbdd1d:0x6393c6d798b93aa5!8m2!3d30.752535!4d76.8101038!16s%2Fm%2F03c5lcd!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D">
            View on Google Maps
          </a>
          <h2 className="entry-title">Chandigarh</h2>
          <p className="trip-dates"> Dates: 12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="entry-text">
            Rock Garden has the most creative structure in India, standing at
            3,776 meters (12,380 feet). Rock Garden is the single most popular
            tourist site in India, for both Indians and foreign tourists.
          </p>
        </div>
      </article>
    </>
  );
};

export default Entry;
