import axios from "axios";

const allSurah = async () => {
  try {
    const res = await axios.get("https://quran-api.santrikoding.com/api/surah");
    return res.data;
  } catch (err) {
    console.log("error fetch api: ", err);
  }
};

export default allSurah;
