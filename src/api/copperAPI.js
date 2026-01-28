export const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL || 'https://copperdjango-production.up.railway.app';

//HOME & NEWS APIS

export const COPPER_NEWS = `${BASE_URL}/api/copper_news/`;

export const SPORT_PRICE_CHART = `${BASE_URL}/api/spot-price-chart/`;

export const COPPER_PRICES = `${BASE_URL}/api/copper-prices/`;

export const PRESS_RELEASE = `${BASE_URL}/api/press-releases/`;

export const STOCK_NEWS = `${BASE_URL}/api/stock-news/`;

export const SUBSTACKS = `${BASE_URL}/api/substack/`;

//INVESTMENT APIS

export const MOST_FOLLOWED = `${BASE_URL}/api/most-followed-stocks/`;

export const COPPER_STOCK_DETAIL = `${BASE_URL}/api/copper-stock-detail/`;

export const STOCK_SCREENER = `${BASE_URL}/api/stock-metrics/`;

export const FOLLOWED_STOCKS = `${BASE_URL}/api/followed-stocks/`;

export const INSIDER_TRANSACTIONS = `${BASE_URL}/api/insider-transactions/`;

//VIDEOS API

export const VIDEOS = `${BASE_URL}/api/videos/`;

//CALENDAR

export const CALENDAR = `${BASE_URL}/api/calendar-events`;

///FORUM

export const FORUM_POSTS = `${BASE_URL}/community/api/forum/posts/`;