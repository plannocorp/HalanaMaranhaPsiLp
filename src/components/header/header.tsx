import './header.css'

function Header() {
    return(
        <>
            <header>
                <div className="logo-box">
                    <h1 className="logo">Ψ</h1>
                    <h1 className="logo-text">Halana <br />Maranha</h1>
                </div>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre Mim</a>
                    <a href="#">Abordagem & Clínica</a>
                    <a href="#">Contato</a>
                </nav>
            </header>
        </>
    )
}

export default Header