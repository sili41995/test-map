import { ITargetEntry, SolarPanelEntries } from 'types/types';

class SolarPanelsEntriesServiceApi {
  private BASE_URL = 'https://api3.geo.admin.ch/rest/services';

  getAllEntries(): Promise<{ results: SolarPanelEntries }> {
    return fetch(
      `${this.BASE_URL}/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=600989,197423.7&tolerance=400&imageDisplay=608,360,96&mapExtent=600913,197378.7,601065,197468.7`
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Not Found');
      }

      return response.json();
    });
  }

  getEntryById(id: string): Promise<{ feature: ITargetEntry }> {
    return fetch(
      `${this.BASE_URL}/all/MapServer/ch.bfe.solarenergie-eignung-daecher/${id}?geometryFormat=esriGeojson`
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Not Found');
      }

      return response.json();
    });
  }
}

const solarPanelsEntriesServiceApi = new SolarPanelsEntriesServiceApi();

export default solarPanelsEntriesServiceApi;
