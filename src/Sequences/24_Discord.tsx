import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {useInterpolate, useTime} from 'remotion-time';

function Discord() {
  const img24 = staticFile('24_Discord.png');
  const img25 = staticFile('25_passion.png');
  const frame = useInterpolate(['start', '2s', 'end'], [0, 1, 1]) as number;
  return (
    <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
      <Img src={frame >= 1 ? img25 : img24} />
    </AbsoluteFill>
  );
}

export default Discord;
