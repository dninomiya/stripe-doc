import { ChangeEvent, useEffect, useRef } from 'react';

type Props = {
  id: string;
};

const DocVideo = ({ id }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const rate = localStorage.getItem('playbackRate');
      videoRef.current.defaultPlaybackRate = rate ? Number(rate) : 2;
    }
  }, [videoRef.current]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [id]);

  const changeRate = (e: ChangeEvent<HTMLVideoElement>) => {
    const rate = e.target.playbackRate;
    localStorage.setItem('playbackRate', String(rate));
  };

  const src =
    (process.env.NODE_ENV === 'production' ? '/stripe-doc' : '') +
    '/docs/videos/' +
    id +
    '.mov';

  return (
    <video
      ref={videoRef}
      loop
      autoPlay
      controlsList="nodownload"
      controls
      className="aspect-video bg-slate-800 w-full"
      onRateChange={changeRate}
    >
      <source src={src} />
    </video>
  );
};

export default DocVideo;
