export interface ISolarPanelEntry {
  type: string;
  id: string;
  geometry: {
    type: string;
    coordinates: number[][][];
  };
  properties: {
    freq_0: number;
    freq_120: number;
    freq_150: number;
    freq_180: number;
    freq_210: number;
    freq_240: number;
    freq_270: number;
    freq_300: number;
    freq_30: number;
    freq_330: number;
    freq_60: number;
    freq_90: number;
    v_mean_0: number;
    v_mean_120: number;
    v_mean_150: number;
    v_mean_180: number;
    v_mean_210: number;
    v_mean_240: number;
    v_mean_270: number;
    v_mean_300: number;
    v_mean_30: number;
    v_mean_330: number;
    v_mean_60: number;
    v_mean_90: number;
    v_mean: number;
    wei_a_0: number;
    wei_a_120: number;
    wei_a_150: number;
    wei_a_180: number;
    wei_a_210: number;
    wei_a_240: number;
    wei_a_270: number;
    wei_a_300: number;
    wei_a_30: number;
    wei_a_330: number;
    wei_a_60: number;
    wei_a_90: number;
    wei_a: number;
    wei_k_0: number;
    wei_k_120: number;
    wei_k_150: number;
    wei_k_180: number;
    wei_k_210: number;
    wei_k_240: number;
    wei_k_270: number;
    wei_k_300: number;
    wei_k_30: number;
    wei_k_330: number;
    wei_k_60: number;
    wei_k_90: number;
    wei_k: number;
    label: string;
  };
  layerBodId: string;
  layerName: string;
  featureId: string;
  bbox: number[];
}

export type SolarPanelEntries = ISolarPanelEntry[];

export interface ITargetEntry {
  featureId: number;
  bbox: number[];
  layerBodId: string;
  layerName: string;
  id: number;
  geometry: {
    rings: number[][][];
    spatialReference: {
      wkid: number;
    };
  };
  attributes: {
    monate: number[];
    building_id: number;
    a_param: number[];
    b_param: number[];
    c_param: number[];
    heizgradtage: number[];
    bedarf_heizung: number;
    bedarf_warmwasser: number;
    datum_aenderung: string;
    datum_erstellung: string;
    dg_heizung: number;
    dg_waermebedarf: number;
    duschgaenge: number;
    flaeche_kollektoren: number;
    gstrahlung: number;
    mstrahlung: number;
    sb_datum_aenderung: string;
    sb_datum_erstellung: string;
    sb_objektart: number;
    volumen_speicher: number;
    waermeertrag: number;
    klasse: number;
    flaeche: number;
    ausrichtung: number;
    finanzertrag: number;
    stromertrag: number;
    stromertrag_winterhalbjahr: number;
    stromertrag_sommerhalbjahr: number;
    monats_ertrag: number[];
    gs_serie_start: string;
    klasse_text: string;
    gwr_egid: number;
    df_nummer: number;
    neigung: number;
    label: number;
  };
}
