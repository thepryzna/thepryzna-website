import React from "react";

interface Reel {
  id: number;
  videoUrl: string;
  title: string;
}

const reels: Reel[] = [
  {
    id: 1,
    videoUrl: "/videos/lv_0_20260309160913.mp4",
    title: "Creative Brand Story",
  },
];

const ReelShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reels.map((reel) => (
        <div
          key={reel.id}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <video
            src={reel.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[350px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ReelShowcase;