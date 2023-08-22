import {AbsoluteFill, Easing, interpolateColors, useCurrentFrame} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import EnvieDeTexte from './04_EnvieDe/04_EnvieDeTexte';
import {useInterpolate, useTime} from 'remotion-time';
function EnvieDe() {
  const t = useTime();
  const frame = useCurrentFrame();
  const backgroundColor = interpolateColors(frame, [t`end - 0.5s`, t`end - 0.1s`], ['#0e2a47ff', '#0e2a4700']);
  const translateY = useInterpolate(['end - 0.7s', 'end - 0.3s'], [0, -60], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.in(Easing.ease),
  });
  const opacity = useInterpolate(['end - 0.7s', 'end - 0.5s'], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;
  return (
    <AbsoluteFill style={{backgroundColor, fontFamily: PoppinsFont}}>
      <div style={{transform: `translateY(${translateY}%)`, opacity}} className="absolute w-full h-full top-0 left-0">
        <EnvieDeTexte />
        <EnvieDeTexte rotate={15} opacityKey="FIRST">
          de <strong>créer ?</strong>
        </EnvieDeTexte>
        <EnvieDeTexte rotate={30} opacityKey="SECOND">
          de <strong>développer ?</strong>
        </EnvieDeTexte>
        <EnvieDeTexte rotate={45} opacityKey="THIRD">
          de <strong>monter en compétences ?</strong>
        </EnvieDeTexte>
      </div>
    </AbsoluteFill>
  );
}

export default EnvieDe;
