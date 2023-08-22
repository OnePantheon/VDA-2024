import {Img, Sequence} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {staticFile, Easing, AbsoluteFill} from 'remotion';
import {useInterpolate, useTime} from 'remotion-time';
import {Video} from 'remotion';

function RejoinsAsso() {
  const t = useTime();
  const translateEntrance = useInterpolate(['start', 'start + 0.4s'], [-20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  });
  const underlineWidth = useInterpolate(['start + 0.8s', 'start + 1.2s'], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.exp),
  });
  const CampusAsset = staticFile('06_Campus.png');
  const CombienAsset = staticFile('Combien.mp4');
  return (
    <AbsoluteFill style={{fontFamily: PoppinsFont}} className="text-white">
      <Img src={CampusAsset} />
      <div
        style={{transform: `translateX(${translateEntrance}%)`}}
        className="absolute w-11/12 h-full top-0 right-0 flex flex-col justify-center items-start"
      >
        <p className="text-8xl font-medium ml-20 drop-shadow-md">Rejoins notre association</p>
        <p className="text-6xl mt-10 self-end mr-72 drop-shadow-md">
          pour
          <span className="ml-[0.5ch] relative inline-block p-1">
            <span
              style={{width: `${underlineWidth}%`}}
              className="absolute z-30 overflow-hidden top-0 left-0 h-full text-black p-1 drop-shadow whitespace-nowrap"
            >
              1€ symbolique
            </span>
            <span className="relative z-20">1€ symbolique</span>
            <span style={{width: `${underlineWidth}%`}} className="absolute z-10 bg-yellow-300 top-0 left-0 h-full" />
          </span>
        </p>
      </div>
      <Sequence from={t`2s`} durationInFrames={t`1.3s`}>
        <Video src={CombienAsset} className="absolute z-40 w-1/3 h-auto bottom-20 left-16" />
        <p className="absolute bottom-20 left-16 z-50 text-4xl w-1/3 text-center font-bold">Combien ??</p>
      </Sequence>
    </AbsoluteFill>
  );
}

export default RejoinsAsso;
