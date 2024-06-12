/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Surah from "../../services/Surah";
import { Button } from "@/components/ui/button";
import SkeletonSurah from "./SkeletonSurah";

const DetailsSurah = () => {
  const [surahData, setSurahData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const callApi = async () => {
    try {
      setLoading(true);
      const res = await Surah(id);
      setSurahData(res);
    } catch (err) {
      console.log("error get api: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleNextButton = () => {
    if (surahData?.surat_selanjutnya?.nomor) {
      navigate(`/detailssurah/${surahData.surat_selanjutnya.nomor}`);
    } else {
      console.error("No next surah data available");
    }
  };

  const handlePrevButton = () => {
    if (surahData?.surat_sebelumnya?.nomor) {
      navigate(`/detailssurah/${surahData.surat_sebelumnya.nomor}`);
    } else {
      console.error("No previous surah data available");
    }
  };

  return loading ? (
    <SkeletonSurah />
  ) : (
    <div className="container">
      <div className="p-4">
        <div className="text-center">
          <h1 className="font-semibold text-lg">{surahData.nama_latin}</h1>
        </div>
        <div>
          <span
            className="text-xs"
            dangerouslySetInnerHTML={{ __html: surahData.deskripsi }}
          ></span>
        </div>
        <div className="flex items-center justify-center">
          <p>Dengarkan: </p>
          <audio controls>
            <source src={surahData.audio} type="audio/mpeg" />
          </audio>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center p-5">
            <p className="text-3xl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          </div>
          {surahData.ayat.map((surah) => (
            <div className="p-2 bg-white rounded-lg" key={surah.id}>
              <div className="flex justify-end items-center gap-4 p-5">
                <p className="text-2xl w-[95%] text-end">{surah.ar}</p>
                <p className="border rounded-full w-[35px] h-[35px] bg-slate-200 flex justify-center items-center">
                  {surah.nomor}
                </p>
              </div>
              <div className="text-sm flex justify-start flex-col gap-2 p-2">
                <p dangerouslySetInnerHTML={{ __html: surah.tr }}></p>
                <p dangerouslySetInnerHTML={{ __html: surah.idn }}></p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full flex justify-center items-center gap-2 p-2">
          <Button
            variant="outline"
            disabled={!surahData.surat_sebelumnya}
            onClick={handlePrevButton}
          >
            Ayat Sebelum
          </Button>
          <Button
            variant="outline"
            disabled={!surahData.surat_selanjutnya}
            onClick={handleNextButton}
          >
            Ayat Berikutnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsSurah;
