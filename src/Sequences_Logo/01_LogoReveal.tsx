import {AbsoluteFill, Easing} from 'remotion';
import Logo from '../Sequences/02_LogoReveal/logo';
import Owl from '../Sequences/./02_LogoReveal/owl';
import {useInterpolate} from 'remotion-time';
import {IbmPlexMonoFont, PoppinsFont} from '../shared/fonts';

function LogoReveal() {
  const translateOwl = useInterpolate(['start + 3.8s', 'start + 4.2s'], [0, 200], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  }) as number;
  const fadeOutAnim = useInterpolate(['end - 0.5s', 'end'], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.ease),
  }) as number;
  return (
    <AbsoluteFill
      style={{backgroundColor: '#0e2a47', fontFamily: IbmPlexMonoFont, opacity: fadeOutAnim}}
      className="flex items-center justify-center z-50"
    >
      <div className="inline-flex items-center justify-center" style={{opacity: fadeOutAnim}}>
        <Owl />
        <Logo />
      </div>
      <div
        style={{height: `${translateOwl}px`, paddingTop: `-${translateOwl}px`}}
        className="text-center text-4xl text-white overflow-hidden font-medium leading-[1.3] tracking-w"
      >
        <p className="pt-8">
          L'association informatique de l'EFREI
          <br />
          Paris Panthéon-Assas Université
        </p>
      </div>
    </AbsoluteFill>
  );
}
export default LogoReveal;
