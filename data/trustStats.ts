/**
 * Authentic Studio Stats & Trust Metrics
 * Easily editable data source for NavYug studio stats.
 */

export interface TrustStat {
  value: string;
  label: string;
}

export const studioStats: TrustStat[] = [
  {
    value: "18+",
    label: "Projects Delivered",
  },
  {
    value: "98+",
    label: "Average Lighthouse",
  },
  {
    value: "100%",
    label: "Custom Code",
  },
  {
    value: "<24h",
    label: "Typical Response",
  },
];
