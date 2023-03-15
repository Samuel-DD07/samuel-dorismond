import styled from "styled-components"
import iconGithub from '../Assets/Github-icons.png'
import iconLinkedIn from '../Assets/LinkedIn-icons.png'
import iconMail from '../Assets/mail-icons.png'

let randomColor = require('randomcolor');

export default function Contact(props){

    return (
        <Content>
            <h1>Mes Contacts</h1>
            <div>
                <a href="mailto:samuel.dorismond@yahoo.com">
                    <img src={iconMail} alt="Mail"/>
                    <h3>Mail</h3>
                </a>
                <a href="https://www.linkedin.com/in/samuel-dorismond-a5798321b/">
                    <img src={iconLinkedIn} alt="linkedIn"/>
                    <h3>LinkedIn</h3>
                </a>
                <a href="https://github.com/Samuel-DD07">
                    <img src={iconGithub} alt="github"/>
                    <h3>GitHub</h3>
                </a>
            </div>
        </Content>
    )
}

const colorRand = randomColor();

const Content = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20vw;
    color: aliceblue;

   & > h1{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 100px);
    }

    div{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 50vw;

        & > *{
            color: aliceblue;
            margin: 50px;
            animation: animation1 1s ease;
        }

        a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            transition: 1s all;
        }

        a:hover{
            border: 3px solid ${colorRand};
            transition: 1s all;
        }

        img{
            filter: invert(100%);
            width: 60px;
            margin: 0;
        }
    }

    @media (max-width: 1200px) {

        & > h1{
            margin-top: -100px;
        }
        width: 100%;
        

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            & > *{
                margin: 30px 10px;
            }
        }
    }

    @keyframes animation1{
        0%{
            opacity: 0;
            transform: translateY(-100px);
        }

        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
`