import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

function UnSuivi() {
  const img08 = staticFile('08_phone.png');
  const img09 = staticFile('09_screen.png');
  const img10 = staticFile('10_DS.png');
  const imgTopPos = useInterpolate(['start', '0.2s', 'end'], [8, 0, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const imgOpacity = useInterpolate(['start', '0.2s', 'end'], [0, 1, 1], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const sectionNb = useInterpolate(['start', '0.6s', '1.1s', '1.7s'], [0, 1, 2, 2]) as number;
  const key = Math.floor(sectionNb);
  const titleBySection = ["d'appli.", 'de site.', 'de jeu.'];
  const imgBySection = [img08, img09, img10];
  return (
    <AbsoluteFill
      style={{backgroundColor: '#4392B2', fontFamily: PoppinsFont}}
      className="text-white text-8xl font-medium text-center"
    >
      <Img
        src={imgBySection[key]}
        className="absolute left-0 height-full width-full"
        style={{top: `${imgTopPos}rem`, opacity: imgOpacity}}
      />
      <p className="mt-16">Un suivi pour réaliser ton idée </p>
      <p className="mt-8">{titleBySection[key]}</p>
    </AbsoluteFill>
  );
}
export default UnSuivi;
