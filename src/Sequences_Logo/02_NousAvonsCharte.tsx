import {AbsoluteFill, Easing} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate, useTime} from 'remotion-time';

function NouvelleCharte() {
  const underlineWidth = useInterpolate(['start + 0.4s', 'start + 0.8s'], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.exp),
  });
  const fadeOutAnim = useInterpolate(['end - 0.5s', 'end'], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  }) as number;
  return (
    <AbsoluteFill
      style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}}
      className="text-white text-6xl font-medium flex justify-center text-center"
    >
      <p className="leading-[1.3] tracking-w" style={{opacity: fadeOutAnim}}>
        <span>Dites</span>
        <span className="mx-[0.5ch] relative inline-block p-1">
          <span
            style={{width: `${underlineWidth}%`}}
            className="absolute z-30 overflow-hidden top-0 left-0 h-full text-black p-1 drop-shadow whitespace-nowrap"
          >
            bonjour
          </span>
          <span className="relative z-20">bonjour</span>
          <span
            style={{width: `${underlineWidth}%`}}
            className="absolute z-10 bg-yellow-300 top-[10%] left-0 h-[80%]"
          />
        </span>
        <span>à notre nouvelle charte graphique !</span>
      </p>
    </AbsoluteFill>
  );
}

export default NouvelleCharte;
