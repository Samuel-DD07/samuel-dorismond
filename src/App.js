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
        Nom_Projet: "Redesigner Site web formation Ready for digital",
        Date: "2023",
        Description:
          "Redesign du site web avec la nouvelle nouvelle charte graphique de l'entreprise ready-for-digital",
        Langages_Utilisés: "Wordpress, Canva, Elementor",
        Competences:
          "Conception, Design, Redisgn, Recueil de besoins, Travail en équipe",
        Lien_Projet: "https://formation.multisite.ready4digital.com/",
        Background: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        Nom_Projet: "Développer Questionnaire Blake and Mouton",
        Date: "2023",
        Description:
          "Conception et développement d'un questionnaire interactif pour évaluer le style de leadership d'un pdg, dirigeant.",
        Langages_Utilisés: "Next.js, React.js, TailwindCss, Versel",
        Competences: "Conception, Design, Développement, Recueil de besoins",
        Lien_Projet: "https://blake-and-mouton.vercel.app/",
        Background: "https://plus.unsplash.com/premium_photo-1681487091177-2d8881ca4000?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        Nom_Projet: "Redesigner Site web vitirine issho partners",
        Date: "2022",
        Description:
          "Redesign du site web avec la nouvelle charte graphique de l'entreprise issho et optimisation des performances du site web",
        Langages_Utilisés: "Wordpress, Canva, Elementor",
        Competences:
          "Conception, Design, Redisgn, Recueil de besoins, Travail en équipe",
        Lien_Projet: "https://issho-partners.com/",
        Background: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        Nom_Projet: "Développer Questionnaire Evaluation COMEX / CODIR",
        Date: "2022",
        Description:
          "Conception et développement d'un questionnaire interactif pour évaluer le comex, le codir d'une entreprise",
        Langages_Utilisés: "React.js, Express.js, bootstrap, Versel",
        Competences: "Conception, Design, Développement, Recueil de besoins",
        Lien_Projet: "https://evaluation-dirigeant.onrender.com/",
        Background: "https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        Nom_Projet:
          "Développer une plateforme de gestion de contenus et d'e-learning de leadership",
        Date: "2022",
        Description:
          "Conception et développement d'une plateforme de gestion de contenus, de formations et d'outils de leadership",
        Langages_Utilisés:
          "Laravel, React.js, tailwindcss, Graph Api, Azure web Linux, Github",
        Competences:
          "Conception, Design, Développement, Recueil de besoins, Experience utilisateurs, Service Après Vente",
        Lien_Projet: "https://reset-leadership.com/",
        Background: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
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
        Competences:
          "Développement, Comprension des besoins, Travail en équipe",
        Lien_Projet: "https://samuel-dd07.github.io/Elocutio-paris-nord/",
        Background:
          "https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        Nom_Projet: "Apple Home Remake",
        Date: "2021",
        Description: "Refaire la page d'accueil du site web d'Apple.",
        Langages_Utilisés: "HTML, CSS, JS, REACT.JS",
        Competences:
          "Développement, Apprentissage de React.js, Apprentissage de la librairie styled-components",
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
          <Route>
            <Route
              exact
              path="/samuel-dorismond"
              element={<Home listOfProjets={mydata} />}
            />
            <Route
              exact
              path="/samuel-dorismond/Projets"
              element={<Projets listOfProjets={mydata} />}
            />
            <Route
              exact
              path="/samuel-dorismond/Apropos"
              element={<Apropos />}
            />
            <Route
              exact
              path="/samuel-dorismond/Contact"
              element={<Contact />}
            />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
