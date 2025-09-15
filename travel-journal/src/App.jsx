import "./App.css";
import Entry from "./components/Entry";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Entry
        name="Mount Fuji"
        country="Japan"
        date="Dates: 12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists."
        img="https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg"
        location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
      />
      <Entry
        name="Rock Garden"
        country="India"
        date="Dates: 12 Jan, 2021 - 24 Jan, 2022"
        text="Rock Garden has the most creative structure in India, standing at
            3,776 meters (12,380 feet). Rock Garden is the single most popular
            tourist site in India, for both Indians and foreign tourists."
        img="https://images.pexels.com/photos/33861670/pexels-photo-33861670.jpeg"
        location="https://www.google.com/maps/place/Rock+Garden+of+Chandigarh,+Sector+1,+Chandigarh,+160001/@30.7524074,76.809448,16z/data=!3m1!4b1!4m6!3m5!1s0x390fed4412bbdd1d:0x6393c6d798b93aa5!8m2!3d30.752535!4d76.8101038!16s%2Fm%2F03c5lcd!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
      />
    </>
  );
}

export default App;
