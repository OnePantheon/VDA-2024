import {AbsoluteFill, Easing, Img, staticFile} from 'remotion';

import {useInterpolate} from 'remotion-time';

function EfreiCraftTitle() {
  const imgTopPos = useInterpolate(['start', '0.2s', 'end'], [8, 0, 0], {
    easing: Easing.out(Easing.quad),
  }) as number;
  const imgOpacity = useInterpolate(['start', '0.2s', 'end'], [0, 1, 1], {
    easing: Easing.out(Easing.quad),
  }) as number;
  return (
    <AbsoluteFill style={{backgroundColor: '#4392B2'}}>
      <Img
        src={staticFile('21_EfreiCraft.png')}
        style={{opacity: imgOpacity, top: `${imgTopPos}rem`}}
        className="absolute left-0 height-full width-full"
      />
    </AbsoluteFill>
  );
}
export default EfreiCraftTitle;
