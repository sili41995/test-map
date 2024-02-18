import PagePaths from 'constants/pagePaths';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './SolarPanelList.types';

const SolarPanelList: FC<IProps> = ({ entries }) => (
  <ul>
    {entries.map((entry, index) => (
      <li key={index}>
        <Link to={`${PagePaths.panelsPath}/${entry.featureId}`}>
          {entry.featureId}
        </Link>
      </li>
    ))}
  </ul>
);

export default SolarPanelList;
