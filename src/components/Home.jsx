import { NavLink } from "react-router-dom";
import allSurah from "../../services/allSurah";
import SkeletonHome from "./SkeletonHome";
import { useState, useEffect } from "react";

const Home = () => {
  const [surahData, setSurahData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const res = await allSurah();
      setSurahData(res);
    } catch (err) {
      console.log("error get api: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="h-full w-full p-4">
      <main className="container">
        <div>
          <h1 className="font-semibold py-2">Daftar Surah yang Tersedia: </h1>
        </div>
        {loading ? (
          <SkeletonHome />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {surahData &&
              surahData.map((surah) => (
                <NavLink to={`/detailssurah/${surah.nomor}`} key={surah.nomor}>
                  <div className="flex border rounded-sm justify-between p-2 bg-white">
                    <div className="flex gap-3">
                      <div className="flex justify-center items-center">
                        <p className="border rounded-full w-[35px] h-[35px] bg-slate-200 flex justify-center items-center">
                          {surah.nomor}
                        </p>
                      </div>
                      <div className="flex justify-center flex-col flex-wrap">
                        <p className="font-semibold">
                          {surah.nama_latin} <span>{`(${surah.arti})`}</span>
                        </p>
                        <p className="text-xs first-letter:uppercase">
                          {surah.tempat_turun}{" "}
                          <span>* {surah.jumlah_ayat} Ayat</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <p>{surah.nama}</p>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
