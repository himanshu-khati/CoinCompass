export const COIN_LIST_API = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const HISTORICAL_CHART = (id, currency, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const PORTFOLIO_API = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=tether%2C%20ethereum%2C%20bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

export const EXCHANGE_RATES_API = `https://api.coingecko.com/api/v3/exchange_rates`;

export const DURATION_BUTTONS = [
  {
    title: "1D",
    value: 1,
  },
  {
    title: "1W",
    value: 7,
  },
  {
    title: "1M",
    value: 30,
  },
  {
    title: "1Y",
    value: 365,
  },
];
