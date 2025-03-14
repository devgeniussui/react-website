import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        src={videoSrc}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-[#7cff00]/80 text-white hover:text-black p-2 rounded-full transition-all duration-300"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-black/50 hover:bg-[#7cff00]/80 text-white hover:text-black p-2 rounded-full transition-all duration-300"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;