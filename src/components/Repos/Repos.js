import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../../context/context';
import Doughnut from './Charts/Doughnut';
import PieChart from './Charts/PieChart';
import SampleChart from './Charts/SampleChart';


const Repos = () => {
    const { repos } = GithubContext();

    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item;
        if(!language) return total;

        if(!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count };
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            };
        }

        return total;
    }, {});

    // Most used language
    const mostUsed = Object.values(languages)
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);

    //Most stars per language
    const mostPopular = Object.values(languages)
        .sort((a, b) => b.stars - a.stars)
        .map(item => ({...item, value: item.stars }))
        .slice(0, 5);
        
    return (
        <section className="section">
            <Container className="container-wrapper">
                <PieChart data={mostUsed} />    
                <SampleChart data={mostUsed} />
                <Doughnut data={mostPopular} />
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
