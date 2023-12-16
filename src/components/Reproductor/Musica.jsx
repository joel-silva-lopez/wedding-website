import { useState, useEffect, useCallback, useRef } from "react";
import "./Musica.css";
import JDLogo from "/JD_logo.png";

export const Musica = () => {
  const audioRef = useRef(new Audio("/osg_S_067.mp3"));
  const [playing, setPlaying] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlaying = useCallback(() => {
    setPlaying((prevPlaying) => {
      if (!prevPlaying) {
        setLoading(true);
        audioRef.current.play()
          .then(() => setLoading(false))
          .catch((error) => console.error("Error al reproducir audio:", error));
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      return !prevPlaying;
    });
  }, []);

  const updateProgress = useCallback(() => {
    const calculatedProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(calculatedProgress);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    audio.loop = true;
    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [updateProgress]);

  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      setLoading(true);
      audio.play()
        .then(() => setLoading(false))
        .catch(error => console.error('Error al reproducir audio:', error));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing]);

  return (
    <div className={`music-container`} onClick={togglePlaying}>
      <img
        className={`play-pause ${playing ? " pause rotate" : " play"}`}
        src={JDLogo}
        alt="JD Logo"
      />
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ height: `${progress}%` }} />
      </div>
    </div>
  );
};
