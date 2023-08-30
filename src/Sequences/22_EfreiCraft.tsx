import {AbsoluteFill, Easing, Img, Video, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';

import {useInterpolate, useTime} from 'remotion-time';

function EfreiCraftVid() {
  const ludos = staticFile('22_Ludos.mp4');
  const frame = useInterpolate(['start', '2s', 'end'], [0, 1, 1]) as number;

  const videoTranslation = useInterpolate(['start', 'start + 0.2s', 'end - 0.2s', 'end'], [8, 0, 0, -8], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const opacity = useInterpolate(['start', 'start + 0.1s', 'end - 0.1s', 'end'], [0, 1, 1, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill
      style={{backgroundColor: '#4392B2', fontFamily: PoppinsFont}}
      className="text-white text-center justify-end align-center"
    >
      <div
        className="flex flex-col justify-center h-full"
        style={{transform: `translateX(${videoTranslation}rem)`, opacity}}
      >
        <p className="text-6xl font-semibold">
          {frame < 1 ? 'Un serveur minecraft où vous pourrez jouer...' : "Tout comme maintenir l'infra"}
        </p>
        {frame >= 1 && <p className="text-6xl font-normal my-6">voire programmer les jeux !</p>}
      </div>
      <div className="mb-[5rem] mx-auto" style={{transform: `translateX(${videoTranslation}rem)`, opacity}}>
        <Video src={ludos} className="h-[50rem] rounded-3xl" volume={0} />
      </div>
    </AbsoluteFill>
  );
}
export default EfreiCraftVid;
