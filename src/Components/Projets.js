import styled from "styled-components"
import { useEffect } from "react"


export default function Projets(props) {
    const { listOfProjets } = props;
  
    useEffect(() => {
      const handleScroll = () => {
        const blocks = document.querySelectorAll(".block");
  
        blocks.forEach((block) => {
          const rect = block.getBoundingClientRect();
          const isInView = rect.top <= 250 && rect.top >= -200;
  
          block.style.width = isInView ? "100vw" : "50vw";
          block.style.height = isInView ? "calc(100vh - 100px)" : "50vh";
          block.querySelector("div").style.display = isInView ? "flex" : "none";
          block.querySelector(".background").style.opacity = isInView ? "0.75" : "0";
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <Container>
        <h1 className="titre-2">Mes Projets</h1>
        {listOfProjets ? (
          listOfProjets.map((projet, i) => (
            <Containt className="block" key={i} onClick={() => (window.location = projet.Lien_Projet)}>
              <h3>{projet.Nom_Projet}</h3>
              <div>
                <h3>Année : {projet.Date}</h3>
                <h3>
                  Description : <br />
                  <p>{projet.Description}</p>
                </h3>
                <h3>Technologies utilisées :</h3>
                <ul>
                  {projet.Competences.split(",").map((technologie, a) => (
                    <li key={a}>{technologie}</li>
                  ))}
                </ul>
                <h3>Langages utilisés :</h3>
                <ul>
                  {projet.Langages_Utilisés.split(",").map((langage, a) => (
                    <li key={a}>{langage}</li>
                  ))}
                </ul>
              </div>
              <img className="background" src={projet.Background} alt="background"/>
            </Containt>
          ))
        ) : (
          <h1 className="titre-2">Chargement ...</h1>
        )}
      </Container>
    );
  }
  

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    width: 100%;
    min-height: calc(100vh - 100px);
    max-height: 100%;
    background-color: #191919;
    color: aliceblue;
    overflow: hidden;

    .titre-2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 100px);
    }

    @media (max-width: 1200px) {
        .titre-2{
            height: calc(100vh - 300px);
        }   
    }
`

const Containt = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    height: 50vh;
    cursor: pointer;
    transition: all 1s ease;
    overflow: hidden;
    z-index: 2;

    .background{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -10;
        transition: 2s all ease;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            width: 100%;
            padding: 0px 50px;

            & > *{
                width: 100%;
            }

            h1, h3, p, li{
                text-align: center;
            }

            *{
                font-size: 2vw;
            }
        }
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 400px;

        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;

            & > *{
                margin-right: 20px;
            }
        }

        & > *{
            margin: 20px 0px;
        }
    }

    @media (max-width: 1200px) {
        ul{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
`