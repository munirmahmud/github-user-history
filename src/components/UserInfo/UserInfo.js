import React from 'react';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { GoGist, GoRepo } from 'react-icons/go';
import styled from 'styled-components';
import { GithubContext } from '../../context/context';
import Item from './Item';

const UserInfo = () => {
    const {githubUser} = GithubContext();
    const { public_repos, followers, following, public_gists } = githubUser;

    const items = [
        {
          id: 1,
          icon: <GoRepo className='icon' />,
          label: 'repos',
          value: public_repos,
          color: 'pink',
        },
        {
          id: 2,
          icon: <FiUsers className='icon' />,
          label: 'followers',
          value: followers,
          color: 'green',
        },
        {
          id: 3,
          icon: <FiUserPlus className='icon' />,
          label: 'following',
          value: following,
          color: 'purple',
        },
        {
          id: 4,
          icon: <GoGist className='icon' />,
          label: 'gists',
          value: public_gists,
          color: 'yellow',
        },
    ];

    return (
        <section className="section">
            <Container className="section-center">
                {items.length > 0 && items.map(item => {
                    return <Item key={item.id} item={item} />
                })}
            </Container>
        </section>
    )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

export default UserInfo;
