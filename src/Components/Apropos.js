import styled from "styled-components"
import MyPhoto from "../Assets/photo_White.png"

export default function Apropos(props){

    // window.addEventListener('scroll', function(){
    //     let element = document.querySelector('.titre-3')
    //     let randomColor = require('randomcolor');

    //     if(!!element){
    //         element.querySelectorAll('div, .exp').forEach((e) =>{
    //             if (e.getBoundingClientRect().top <= 300 && e.getBoundingClientRect().bottom >= 150) {
    //                 let colorTest = randomColor()
    //                 e.style.color = colorTest 
    //                 if (!!e.children[1]) {
    //                     e.children[1].style.color = colorTest
    //                 }
    //                 if (!!e.children[2]) {
    //                     e.children[2].style.color = colorTest
    //                 }
    //                 if (!!e.children[3]) {
    //                     e.children[3].style.color = colorTest
    //                 }
    //                 if (!!e.children[4]) {
    //                     e.children[4].style.color = colorTest
    //                 }
    //                 e.style.border = `3px solid ${colorTest}`  
    //             } else{
    //                 e.style.color = "aliceblue"
    //                 e.style.border =  "none"
    //             }
    //         })
    //     }
    // })

    return (
        <Container className="Apropos">
            <h1>Qui suis-je ?</h1>
            <Containt className="titre-3">
                <h1 className="exp">Je m'appelle Samuel Dorismond.</h1>
                <img src={MyPhoto} alt="me" />
                <div className="Presentation">
                    <h3>Présentation :</h3>
                    <p>Je suis Samuel Dorismond, j'ai 19 ans. Etudiant en B.U.T informatique en alternance à l'Université Villetaneuse Sorbonne Paris Nord.</p>
                    <p>Je suis passionné par le développement web et le design. J'aime créer des sites web et des applications web.</p>
                    <p>Je suis également passionné par le design, j'aime créer des logos, des affiches, des flyers, des cartes de visite, des bannières, des illustrations, etc...</p>
                    <p>De plus, je suis responsable du développement de la plateforme de l'entreprise issho.<br/>Vous pouvez la visiter <Button onClick={() => window.open("https://issho-partners.com/", "_blank")}>en cliquant ici</Button>.</p>
                </div>
                <div className="Parcours">
                    <h3>Parcours :</h3>
                    <p>2021 - En cours : <br/><strong>B.U.T informatique en alternance</strong> <br/>à l'Université Villetaneuse Sorbonne Paris Nord.</p>
                    <p>2018 - 2021 : <br/><strong>BAC GENERAL <br/>(Option Mathématique et Physique-Chimie)</strong> <br/>au lycée André Boulloche.</p>
                </div>
                <div className="Competences">
                    <h3>Competences :</h3>
                    <p><strong>Développement Front-End : <br/></strong>HTML - CSS - JS - REACT.JS - THREE.JS</p>
                    <p><strong>Développement Back-End : <br/></strong>PYTHON - FLASK - SQL - NODE.JS - EXPRESS.JS - MONGODB - LARAVEL</p>
                    <p><strong>Environement de travail : <br/></strong>Git - Github - VSCode - Windows - MacOs - Azure - Heroku</p>
                    <p><strong>UX / UI Designer : <br/></strong>Illustrator - Photoshop - XD</p>
                </div>
            </Containt>
        </Container>
    )
}

const Button = styled.button`
    background-color: transparent;
    border: 2px solid aliceblue;
    color: aliceblue;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    transition: 0.5s all;

    &:hover{
        background-color: aliceblue;
        color: black;
    }
`

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5vw 5vh;
    background-color: rgb(18, 18, 18);
    color: aliceblue;

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 5vw;
        height: auto;
        transition: 0.5s all;
    }

    & > h1{
        height: calc(100vh - 500px);
    }

    p{
        font-size: 1.2vw;
        transition: 0.5s all;
    }
`

const Containt = styled.div`
    position: relative;
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(4, 600px); 
    grid-column-gap: 20px;
    grid-row-gap: 100px; 
    width: 100%;
    height: 100%;

    & > *{
        background-color: black;
    }

    & > h1{
        display: flex;
        grid-area: 1 / 1 / 2 / 2; 
        width: 100%;
        height: 500px;
        padding: 0vw 3vw;
        z-index: 2;
    }

    img{
        display: block;
        width: 100%;
        height: auto;
        opacity: 0.5;
        grid-area: 1 / 2 / 2 / 3;
    }

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px; 
        height: 100%;
        transition: 0.5s all;

        strong{
            font-size: 4vmin;
        }

        h3, span, p{
            text-align: left;
            margin-bottom: 40px;
            width: 100%;
        }
    }

    .Presentation{
        grid-area: 2 / 1 / 3 / 2;
    }

    .Parcours{
        grid-area: 3 / 2 / 4 / 3;
    }

    .Competences{
        grid-area: 4 / 1 / 5 / 2;

        p{
            font-size: 3vmin;
        }
    }

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;

        & > div{
            height: 100%;
            padding: 30px;
        }

        h1{
            display: block;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0;
            padding: 10vh;
            text-align: center;
            height: auto;
            transition: 0.5s all;
        }

        img{
            margin: auto;
            width: 60vw;
            height: auto;
        }

        p{
            font-size: 4vw;
        }

    }
`