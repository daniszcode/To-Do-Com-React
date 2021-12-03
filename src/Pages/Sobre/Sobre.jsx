import "./Sobre.css"
import { Navbar } from "../../Components/Navbar/Navbar"
import { Footer } from "../../Components/Footer/Footer"

const Sobre = () => {
    return (
        <>
        <Navbar />
        <section className="conteudo">
        <h1>Página criada como atividade do curso da Reprograma</h1>
        <p>Eu sou a Daniele, tenho 28 anos, sou baiana e apaixonada por tecnologia! Para conhecer meus projetos e estudos clique aqui</p>
        <h2>Vamos reprogramar o mundo!</h2>
        </section>
        <Footer />
        </>
    )
}


export {Sobre};