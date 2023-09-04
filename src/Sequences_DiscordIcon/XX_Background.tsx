import {AbsoluteFill, Easing,  Img,  staticFile} from 'remotion';
import {useInterpolate, useTime} from 'remotion-time';

function Background() {
  const percentTranslate = useInterpolate(['start', 'start + 0.2s', 'start + 3.5s', 'start + 4.0s'], [0, 100, 100, 0], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0E2A47' }} className='relative'>
      <Img src={staticFile('Discord__P.svg')} className="absolute top-0 left-0 w-full h-full" style={{
        transform: `translateY(${-percentTranslate}%)`,
      }}/>
      <Img src={staticFile('Discord__Pantheon.svg')} className="absolute top-0 left-0 w-full h-full" style={{
        transform: `translateY(${percentTranslate}%)`
      }}/>
    </AbsoluteFill>
  );
}

export default Background;
