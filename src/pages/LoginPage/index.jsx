import React, { useState, useContext } from 'react'
import { AuthContext } from "../../contexts/auth"
import "./styles.css";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submit", { email, password });
        login(email, password); //integração com o contexto / api
    };

    return (

        <>
            <div align="center">
                <a href="http://asofacil.online"> <img className='logoSuperior' src="logo.jpeg" alt='AsoFacilLogo' /></a>
            </div>

            <div id='login'>

                <h3 className='title'>Por favor, faça login...</h3>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='field'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' name='password' id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="actions">
                        <button className='buttonEntrar' type="submit">Entrar</button>
                    </div>
                    <h7>Ou, caso não possua, <a href="https://asofacil.online/cadastro">cadastre-se</a></h7>
                </form>
            </div>

        <div id="footer">
        <p>Para dúvidas ou sugestões, contacte-nos:<br/>
            <i class="fa fa-phone-square" aria-hidden="true"></i> (13) 99799-7575<br/>
            <i class="fa fa-envelope" aria-hidden="true"></i> atendimento@arquivoexpress.com.br<br/>
        </p>
        </div>

        </>
    );
};

export default LoginPage