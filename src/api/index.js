import Axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: { TotalConfirmed, TotalDeaths, TotalRecovered }
      }
    } = await Axios.get(url);

    const modifiedData = { TotalConfirmed, TotalDeaths, TotalRecovered };
    return modifiedData;
  } catch (error) {}
};
