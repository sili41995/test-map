import SharedLayout from 'components/SharedLayout';
import PagePaths from 'constants/pagePaths';
import EntryDetailsPage from 'pages/EntryDetailsPage';
import HomePage from 'pages/HomePage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={`${PagePaths.panelsPath}/:${PagePaths.dynamicParam}`}
          element={<EntryDetailsPage />}
        />
        <Route path='*' element={<div>not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
