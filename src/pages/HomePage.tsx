import SolarPanelList from 'components/SolarPanelList';
import { FC, useEffect, useState } from 'react';
import solarPanelsEntriesServiceApi from 'service/solarPanelsEntriesServiceApi';
import { SolarPanelEntries } from 'types/types';

const HomePage: FC = () => {
  const [entries, setEntries] = useState<SolarPanelEntries | null>(null);

  useEffect(() => {
    const getSolarPanelsEntries = async () => {
      const result = await solarPanelsEntriesServiceApi.getAllEntries();
      setEntries(result.results);
    };

    getSolarPanelsEntries();
  }, []);

  return entries && <SolarPanelList entries={entries} />;
};

export default HomePage;
