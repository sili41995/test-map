import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main } from './SharedLayout.styled';

const SharedLayout: FC = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
