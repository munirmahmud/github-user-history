import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../../context/context';
import PieChart from './Charts/PieChart';
import SampleChart from './Charts/SampleChart';


const Repos = () => {
    const { repos } = GithubContext();

    let languages = repos.reduce((total, item) => {
        const { language } = item;
        if(!language) return total;

        if(!total[language]) {
            total[language] = { label: language, value: 1};
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
            };
        }

        return total;
    }, {});

    languages = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

    return (
        <section className="section">
            <Container className="container-wrapper">
                <PieChart data={languages} />    
                <SampleChart data={languages} />
            </Container>   
        </section>
    );
};

const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  /* div {
    width: 100% !important;
  } */
  .fusioncharts-container {
    width: 100% !important;
    height: 100% !important;
  }
  svg {
    width: 100% !important;
    height: 100%;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
