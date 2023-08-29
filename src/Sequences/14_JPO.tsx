import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

function Jpo() {
  const img11 = staticFile('14_JPO.png');
  const imgTopPos = useInterpolate(['start', '0.2s', 'end'], [8, 0, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const imgOpacity = useInterpolate(['start', '0.2s', 'end'], [0, 1, 1], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}} className="text-white text-center">
      <Img
        src={img11}
        className="absolute left-0 height-full width-full"
        style={{top: `${imgTopPos}rem`, opacity: imgOpacity}}
      />
      <p className="mt-16 text-8xl font-semibold">Anime nos ateliers en JPO</p>
      <p className="mt-8 text-6xl font-normal">LXP à la clé !</p>
    </AbsoluteFill>
  );
}
export default Jpo;
