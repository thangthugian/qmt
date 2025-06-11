import { useRef, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { TfiMusicAlt } from "react-icons/tfi";
import { RiPauseLine, RiPlayLargeLine } from "react-icons/ri";
import { SlVolume2 } from "react-icons/sl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const songs = [
  {
    name: "Cảm Ơn Tổn Thương",
    url: "/Musics/camontonthuong.mp3",
    duration: "4:28",
  },
  {
    name: "Anh Đã Lớn Hơn Thế Nhiều",
    url: "/Musics/anhdalonhonthenhieu.mp3",
    duration: "5:15",
  },
  {
    name: "Mưa Ơi Đừng Buồn",
    url: "/Musics/muaoidungbuon.mp3",
    duration: "4:01",
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showPlayer, setShowPlayer] = useState(false);
  const [askPermission, setAskPermission] = useState(true);
  const [showSongList, setShowSongList] = useState(false); // <- thêm state mới

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    audioRef.current.pause();
    audioRef.current.load();
    audioRef.current.play();
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  const handleAccept = () => {
    setShowPlayer(true);
    setAskPermission(false);
    setTimeout(() => {
      setExpanded(false);
    }, 0);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 0);
  };

  const handleDecline = () => {
    setAskPermission(false);
    setShowPlayer(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <>
      {askPermission && (
        <div className="fixed inset-0  bg-opacity-60  z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-indigo-950  rounded-xl p-6 shadow-xl w-[350px] text-center space-y-4 opacity-100 border-2 border-violet-950">
            <h2 className="text-lg font-bold">
              Bạn có muốn phát nhạc trong khi lướt web không?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAccept}
                className="flex flex-row px-4 py-2 bg-sky-800 text-white font-bold rounded hover:bg-cyan-500"
              >
                Đồng ý
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-slate-800  rounded font-bold hover:bg-rose-400"
              >
                Từ chối
              </button>
            </div>
          </div>
        </div>
      )}

      {showPlayer && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300 z-40 ${
            expanded ? "w-[340px] h-[430px]" : "w-[150px] h-[50px]"
          }  bg-slate-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-lg text-white`}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <audio ref={audioRef} src={currentSong.url} />

          {expanded ? (
            <div className="p-4 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm font-bold flex">
                    Local Music
                    <button
                      className="ml-2"
                      onClick={() => setShowSongList((prev) => !prev)}
                    >
                      {showSongList ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </p>

                  <p className="text-xs text-gray-300 font-thin">SEASONS</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setShowPlayer(false)}>
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Song list toggle */}
              {showSongList && (
                <div className="mb-2">
                  {songs.map((song, idx) => (
                    <div
                      key={idx}
                      onClick={() => changeSong(song)}
                      className={`flex justify-between items-center px-2 py-1 rounded-lg cursor-pointer ${
                        currentSong.name === song.name
                          ? "bg-cyan-600"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      <span className="text-sm">{song.name}</span>
                      <span className="text-xs">{song.duration}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Cover + progress */}
              <div className="relative h-20 mb-2">
                <img
                  src="/image/avatar7.png"
                  alt="cover"
                  className="w-full h-full object-cover rounded-md opacity-60"
                />
                <div className="absolute left-2 bottom-1 text-xs">0:00</div>
                <div className="absolute right-2 bottom-1 text-xs">22:10</div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center gap-2">
                <button>
                  <RxTrackPrevious />
                </button>
                <button onClick={togglePlay} className="text-xl ml-8">
                  {isPlaying ? <RiPauseLine /> : <RiPlayLargeLine />}
                </button>
                <button className="ml-8">
                  <RxTrackNext />
                </button>
                <div className="flex items-center gap-2 ml-auto">
                  <SlVolume2 />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[140px] h-[50px] flex items-center justify-center">
              <TfiMusicAlt className="glow-text" />
              <span className="font-thin  ml-2">Đang phát</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
