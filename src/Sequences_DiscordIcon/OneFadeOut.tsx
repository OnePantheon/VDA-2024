import {O, i, I, N, E} from '../Sequences/02_LogoReveal/paths';
import {Easing,  useCurrentFrame} from 'remotion';
import {useInterpolate, useTime} from 'remotion-time';

function OneFadeOut() {
  const frame = useCurrentFrame();
  const t = useTime();
  const opacity = useInterpolate(['start', 'start + 0.1s'], [1, 0], {
    easing: Easing.in(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;

  return (
    // 417x222
    <svg width="415" height="210" viewBox="0 0 415 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadowWhite" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
        <feOffset dx="42" dy="39" />
        <feDropShadow dx="0" dy="1" stdDeviation="8" flood-color="#ffffff" flood-opacity={0} />
      </filter>
      <filter id="translate" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
        <feOffset dx="42" dy="39" />
      </filter>

      <g filter="url(#shadowWhite)" fill="white" fillOpacity={opacity}>
        <path d={O} />
        <path d={i} />
      </g>
      <g filter="url(#translate)" fill="#4392B2" fillOpacity={opacity}>
        <path d={I} />
      </g>
      <g filter="url(#translate)" fill="#DBDFE4" fillOpacity={opacity}>
        {[N, E].map((dProp, key) => <path key={key} d={dProp} />)}
      </g>
    </svg>
  );
}

export default OneFadeOut;
