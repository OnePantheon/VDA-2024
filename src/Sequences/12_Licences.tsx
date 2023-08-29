import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

function DesLicences() {
  const img11 = staticFile('12_devlicenses.png');
  const imgTopPos = useInterpolate(['start', '0.2s', 'end'], [8, 0, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const imgOpacity = useInterpolate(['start', '0.2s', 'end'], [0, 1, 1], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill
      style={{backgroundColor: '#4392B2', fontFamily: PoppinsFont}}
      className="text-white text-8xl font-medium text-center"
    >
      <Img
        src={img11}
        className="absolute left-0 height-full width-full"
        style={{top: `${imgTopPos}rem`, opacity: imgOpacity}}
      />
      <p className="mt-16">Des licences de développement</p>
      <p className="mt-8" />
    </AbsoluteFill>
  );
}
export default DesLicences;
