import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        name="Mr. Whiskerson"
        img="/cat1.png"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        alt="Photo of Mr. Whiskerson"
      />
      <Contact
        name="Fluffykins"
        img="/cat2.png"
        phone="(212) 555-2345"
        email="fluff@me.com"
        alt="Photo of Fluffykins"
      />
      <Contact
        name="Felix"
        img="/cat3.png"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
        alt="Photo of Felix"
      />
      <Contact
        name="Pumpkin"
        img="/cat4.png"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
        alt="Photo of Pumpkin"
      />
    </div>
  );
}

export default App;
