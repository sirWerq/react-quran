import axios from "axios";

const Surah = async (id) => {
  try {
    const res = await axios.get(
      `https://quran-api.santrikoding.com/api/surah/${id}`
    );
    return res.data;
  } catch (err) {
    console.log("error fetch api: ", err);
  }
};

export default Surah;
