import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apropos from "./Components/Apropos";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projets from "./Components/Projets";

function App() {
  const [mydata, setMydata] = useState();

  useEffect(() => {
    setMydata([
      {
        Nom_Projet: "Questionnaire interactif pour issho-partners.",
        Date: "2022",
        Description:
          "ce projet est un questionnaire interactif pour issho-partners. Il permet de répondre à des questions et de voir les résultats en temps réel.",
        Langages_Utilisés: "HTML, CSS, JS",
        Competences: "Conception, Développement, Design, Recueil de besoins",
        Lien_Projet:
          "https://samuel-dd07.github.io/questionnaire-issho-partners/",
        Background:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        Nom_Projet: "Elocutio Paris Nord",
        Date: "2022",
        Description: "Promouvoir un évenement (fictif) : Élocutio Paris Nord.",
        Langages_Utilisés: "HTML, CSS, JS",
        Competences: "Développement, Comprension des besoins, Travail en équipe",
        Lien_Projet: "https://samuel-dd07.github.io/Elocutio-paris-nord/",
        Background:
          "https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        Nom_Projet: "Apple Home Remake",
        Date: "2021",
        Description: "Refaire la page d'accueil du site web d'Apple.",
        Langages_Utilisés: "HTML, CSS, JS, REACT.JS",
        Competences: "Développement, Apprentissage de React.js, Apprentissage de la librairie styled-components",
        Lien_Projet: "https://samuel-dd07.github.io/Apple-Home-Remake/",
        Background:
          "https://images.unsplash.com/photo-1579693409321-1be2df1ab130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        Nom_Projet: "Site Web pour un mariage",
        Date: "2021",
        Description: "Ceci est une description de test",
        Langages_Utilisés: "HTML, CSS, JS",
        Competences: "Développement, Recueil de besoins",
        Lien_Projet: "https://samuel-dd07.github.io/Wedding-Website/",
        Background:
          "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      },
      {
        Nom_Projet: "Decryption-Project",
        Date: "2021",
        Description: "Recréer l'effet du chiffrement de César sur Web.",
        Langages_Utilisés: "HTML, CSS, JS",
        Competences: "Développement",
        Lien_Projet: "https://samuel-dd07.github.io/Decryption-Project/",
        Background:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        Nom_Projet: "City Generator",
        Date: "2021",
        Description: "Généner une ville 3D aléatoirement.",
        Langages_Utilisés: "HTML, CSS, JS, THREE.JS",
        Competences: "Développement, Apprentissage de Three.js",
        Lien_Projet: "https://samuel-dd07.github.io/City-Generator/",
        Background:
          "https://images.unsplash.com/photo-1629459322097-a190793bd00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
      },
    ]);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <Route exact path="/" element={<Home listOfProjets={mydata} />} />
            <Route
              exact
              path="/Projets"
              element={<Projets listOfProjets={mydata} />}
            />
            <Route exact path="/Apropos" element={<Apropos />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
