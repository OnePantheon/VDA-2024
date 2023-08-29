import {AbsoluteFill, Easing, Video, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

type ProjetXProps = {
  title: string;
  author: string;
  video: string;
};

function ProjetX({title, author, video}: ProjetXProps) {
  const videoFile = staticFile(video);
  const videoTranslation = useInterpolate(['start', 'start + 0.2s', 'end - 0.2s', 'end'], [8, 0, 0, -8], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const opacity = useInterpolate(['start', 'start + 0.1s', 'end - 0.1s', 'end'], [0, 1, 1, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill
      style={{backgroundColor: '#4392B2', fontFamily: PoppinsFont}}
      className="text-white text-center justify-start align-center"
    >
      <div className="mt-[5rem] mx-auto">
        <Video
          src={videoFile}
          className="h-[45rem] rounded-3xl"
          style={{transform: `translateX(${videoTranslation}rem)`, opacity}}
        />
      </div>
      <div style={{transform: `translateX(${videoTranslation}rem)`, opacity}} className="my-auto">
        <p className="text-6xl font-semibold">{title}</p>
        <p className="text-5xl font-normal mt-6">{author}</p>
      </div>
    </AbsoluteFill>
  );
}
export default ProjetX;
