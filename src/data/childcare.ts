// Childcare price data for /childcare-cost-calculator. Real, published numbers only.
//
// Prices: U.S. Department of Labor, Women's Bureau, National Database of Childcare Prices (NDCP),
// "State-Level Estimates and Affordability Rankings 2022" (XLSX, released Nov 2024). Median price of full-time
// weekly care, by state, provider type (center / family child care home) and age group. We use the latest year
// 2020-2022 that has data for each state and type. Downloaded Oct 27, 2026 from the data.virginia.gov mirror of the
// DOL file (dol.gov blocks automated downloads). Generated JSON: ./childcare-ndcp.json.
//
// Inflation: BLS CPI-U, "Day care and preschool", U.S. city average, not seasonally adjusted (series CUUR0000SEEB03),
// pulled from the BLS public API Oct 27, 2026. Annual averages are the mean of the 12 monthly values.
import ndcp from './childcare-ndcp.json';

export type Ages = 'infant' | 'toddler' | 'preschool' | 'schoolage';
export const AGE_INDEX: Record<Ages, number> = { infant: 0, toddler: 1, preschool: 2, schoolage: 3 };
export const AGE_LABEL: Record<Ages, string> = {
  infant: 'Infant (0–23 months)',
  toddler: 'Toddler (2 years)',
  preschool: 'Preschool (3–4 years)',
  schoolage: 'School-age (before/after school)',
};

export type StateEntry = { center?: { year: number; weekly: (number | null)[] }; family?: { year: number; weekly: (number | null)[] } };
export const STATES = ndcp.states as Record<string, StateEntry>;

export const CPI = {
  series: 'CUUR0000SEEB03',
  annual: { 2020: 311.887, 2021: 317.746, 2022: 330.305 } as Record<number, number>,
  latest: { label: 'September 2026', value: 407.335 },
};
export const inflate = (weekly: number, year: number) => weekly * (CPI.latest.value / CPI.annual[year]);
export const monthly = (weekly: number) => (weekly * 52) / 12;

export const SOURCES = {
  ndcp: 'https://www.dol.gov/agencies/wb/topics/featured-childcare',
  ndcpMirror: 'https://data.virginia.gov/dataset/childcare-prices',
  cpi: 'https://data.bls.gov/timeseries/CUUR0000SEEB03',
  hhs2024: 'https://www.federalregister.gov/documents/2024/03/01/2024-04139/improving-child-care-access-affordability-and-stability-in-the-child-care-and-development-fund-ccdf',
  hhs2026: 'https://acf.gov/occ/law-regulation/2026-ccdf-final-rule',
};
export const DATA_CHECKED = 'Oct 27, 2026';
