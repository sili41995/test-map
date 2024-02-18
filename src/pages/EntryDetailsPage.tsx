import PagePaths from 'constants/pagePaths';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import solarPanelsEntriesServiceApi from 'service/solarPanelsEntriesServiceApi';
import { ITargetEntry } from 'types/types';

const EntryDetailsPage: FC = () => {
  const [targetEntry, setTargetEntry] = useState<ITargetEntry | null>(null);
  const [error, setError] = useState<string | null>(null);
  const id = useParams()[PagePaths.dynamicParam];

  useEffect(() => {
    const getSolarPanelsEntryById = async (id: string) => {
      try {
        setError(null);
        const result = await solarPanelsEntriesServiceApi.getEntryById(id);
        setTargetEntry(result.feature);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    id && getSolarPanelsEntryById(id);
  }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      {targetEntry && (
        <iframe
          src={`https://map.geo.admin.ch/embed.html?lang=en&topic=energie&bgLayer=ch.swisstopo.swissimage&catalogNodes=2419,2420,2427,2480,2429,2431,2434,2436,2767,2441,3206&layers=ch.swisstopo.amtliches-strassenverzeichnis,ch.bfe.solarenergie-eignung-daecher&zoom=13&layers_opacity=0.85,0.65&E=${
            targetEntry.geometry.rings[0][0][0] + 2000000
          }&N=${targetEntry.geometry.rings[0][0][1] + 1000000}&zoom=20`}
          width='600'
          height='450'
          allow='geolocation'
          title='map'
        ></iframe>
      )}
    </>
  );
};

export default EntryDetailsPage;
