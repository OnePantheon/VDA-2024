import {Img} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {staticFile, Easing, AbsoluteFill} from 'remotion';
import {useInterpolate} from 'remotion-time';

function RejoinsAsso() {
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
  return (
    <AbsoluteFill style={{fontFamily: PoppinsFont}} className="text-white">
      <Img src={staticFile('06_Campus.png')} />
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
              className="absolute z-30 overflow-hidden top-0 left-0 h-full text-black p-1 drop-shadow"
            >
              1€ symbolique
            </span>
            <span className="relative z-20">1€ symbolique</span>
            <span style={{width: `${underlineWidth}%`}} className="absolute z-10 bg-yellow-300 top-0 left-0 h-full" />
          </span>
        </p>
      </div>
    </AbsoluteFill>
  );
}

export default RejoinsAsso;
