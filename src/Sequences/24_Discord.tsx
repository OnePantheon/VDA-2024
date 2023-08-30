import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';
import {useInterpolate} from 'remotion-time';

function Discord() {
  const img24 = staticFile('24_Discord.png');
  const img25 = staticFile('25_passion.png');
  const frame = useInterpolate(['start', '2s', 'end'], [0, 1, 1]) as number;

  const opacity = useInterpolate(['start + 0.1s', 'start + 0.2s', 'end - 0.2s', 'end - 0.1s'], [0, 1, 1, 0], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;
  return (
    <AbsoluteFill style={{backgroundColor: frame >= 1 ? '#0e2a47' : '#4392B2'}}>
      <Img src={frame >= 1 ? img25 : img24} style={{opacity}} />
    </AbsoluteFill>
  );
}

export default Discord;
