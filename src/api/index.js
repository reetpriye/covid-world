import Axios from "axios";

const url1 = "https://api.covid19api.com/summary";
const url2 = "https://api.covid19india.org/data.json";
const url3 = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: { TotalConfirmed, TotalDeaths, TotalRecovered }
      }
    } = await Axios.get(url1);

    const modifiedData = { TotalConfirmed, TotalDeaths, TotalRecovered };
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url3}/daily`);

    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {}
};
