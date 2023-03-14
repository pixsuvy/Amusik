import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  let currentTitle = activeSong?.attributes ? activeSong?.attributes?.name : activeSong?.title;
  let currentSong = song?.attributes ? song?.attributes?.name : song?.title;

  return isPlaying && currentTitle === currentSong ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
