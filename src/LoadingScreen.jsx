import { useEffect, useState, useRef } from "react";

export default function LoadingScreen({ isLoading, onLoadingComplete }) {
  const [visible, setVisible] = useState(isLoading);
  const videoRef = useRef(null);
  const playCountRef = useRef(0);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      playCountRef.current = 0;
    } else {
      // small delay so it doesn't hard-cut
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  // Handle video end event
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoading) return;

    const handleEnded = () => {
      playCountRef.current += 1;
      if (playCountRef.current >= 2) {
        // Stop after 2 plays
        video.pause();
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      } else {
        // Replay
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener('ended', handleEnded);
    // Start the video
    video.play();

    return () => video.removeEventListener('ended', handleEnded);
  }, [isLoading, onLoadingComplete]);

  if (!visible) return null;

  return (
    <div style={overlayStyle(isLoading)}>
      <video
        ref={videoRef}
        src="/loader.mp4"
        muted
        playsInline
        preload="auto"
        style={videoStyle}
      />
    </div>
  );
}

const overlayStyle = (isLoading) => ({
  position: "fixed",
  inset: 0,
  display: "grid",
  placeItems: "center",
  backgroundColor: "#0b0b0f", // MUST match your site bg
  zIndex: 9999,
  transition: "opacity 300ms ease",
  opacity: isLoading ? 1 : 0,
});

const videoStyle = {
  width: "320px",
  maxWidth: "70vw",
  height: "auto",
};