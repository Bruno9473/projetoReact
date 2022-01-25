import React from "react";
import "../header/header.css"

function Header() {
    return (
        <header className="Container">

            <div className="ContainerHome">

                <div className="titulo">
                    <h1>BRFLIX</h1>
                </div>

                <div className="home">
                    <p>Home</p>
                    <p>Categoria</p>
                </div>

            </div>

            <div className="inputSearch">
                <input type="search" placeholder='Busca...' />
                <button><i class="bi bi-search"></i></button>
            </div>

            <div className="login">
                <p>Login</p>
            </div>

        </header>

    )
};

export default Header;