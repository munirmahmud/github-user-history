import React from 'react';
import styled from 'styled-components';
import loginImg from '../images/github-user.svg';

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <img src={loginImg} alt="Github User Login" />
                <h1>Github User</h1>
                <button className="btn">Login</button>
            </Wrapper>
        </Container>
    )
};

const Container = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
`;

const Wrapper = styled.div`
    width: 90vw;
    max-width: 600px;
    text-align: center;

    img {
        margin-bottom: 2rem;
        display: block;
        width: 100%;
    }
    h1 {
        margin-bottom: 1.5rem;
    }
`;

export default Login;
