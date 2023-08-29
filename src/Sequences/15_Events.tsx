import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

function DesEvents() {
  const img15 = staticFile('15_evts.png');
  const imgTopPos = useInterpolate(['start', '0.2s', 'end'], [8, 0, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const imgOpacity = useInterpolate(['start', '0.2s', 'end'], [0, 1, 1], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}} className="text-white text-center">
      <Img
        src={img15}
        className="absolute left-0 height-full width-full"
        style={{top: `${imgTopPos}rem`, opacity: imgOpacity}}
      />
      <p className="mt-16 text-8xl font-semibold">Participe aux évènements</p>
      <p className="mt-8 text-6xl font-normal">À l'école ou dans le monde</p>
    </AbsoluteFill>
  );
}
export default DesEvents;
