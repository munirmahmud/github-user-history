import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
    return (
        <Container>
            <div>

            </div>
            <h1>404</h1>
            <h3>sorry, the page you tried cannot be found</h3>
            <Link className="btn" to="/">Back to Home</Link>
        </Container>
    );
};

const Container = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--clr-primary-10);
    text-align: center;

    h1 {
        font-size: 10rem;
    }
    h3 {
        color: var(--clr-grey-3);
        margin-bottom: 1.5rem;
    }
`;

export default Error;
