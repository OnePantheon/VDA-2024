import {evolvePath} from '@remotion/paths';
import {LogoPaths, O, i, I} from './paths';
import {Easing, interpolateColors, useCurrentFrame} from 'remotion';
import {useInterpolate, useTime} from 'remotion-time';

function Logo() {
  const frame = useCurrentFrame();
  const t = useTime();
  const progress = useInterpolate(['start + 2.2s', 'start + 4.2s'], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.ease),
  }) as number;
  const backgroundColor = interpolateColors(
    frame,
    [t`start`, t`start + 4.2s`, t`start + 4.4s`, t`end`],
    ['#DBDFE400', '#DBDFE400', '#DBDFE4FF', '#DBDFE4FF']
  );
  const strokeColor = interpolateColors(
    frame,
    [t`start`, t`start + 4.2s`, t`start + 4.4s`, t`end`],
    ['#DBDFE4FF', '#DBDFE4FF', '#DBDFE400', '#DBDFE400']
  );
  const circleFillOpacity = useInterpolate(['start', 'start + 0.7s'], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;
  const circleOutlineOpacity = useInterpolate(['start + 0.7s', 'start + 1.1s'], [1, 0], {
    easing: Easing.in(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;
  const oneFillOpacity = useInterpolate(['start + 1.7s', 'start + 2.2s'], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }) as number;
  return (
    // 417x222
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadowWhite" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
        <feOffset dx="42" dy="39" />
        <feDropShadow dx="0" dy="1" stdDeviation="8" flood-color="#ffffff" flood-opacity={circleOutlineOpacity} />
      </filter>
      <filter id="translate" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
        <feOffset dx="42" dy="39" />
      </filter>

      <g filter="url(#shadowWhite)" fill="white" fillOpacity={circleFillOpacity}>
        <path d={O} />
        <path d={i} />
      </g>
      <g filter="url(#translate)" fill="#4392B2" fillOpacity={oneFillOpacity}>
        <path d={I} />
      </g>

      <g filter="url(#translate)">
        {LogoPaths.map((dProp, key) => {
          const evolution = evolvePath(progress, dProp);
          return (
            <path
              key={key}
              d={dProp}
              fill={backgroundColor}
              stroke={strokeColor}
              strokeWidth={2}
              strokeDasharray={evolution.strokeDasharray}
              strokeDashoffset={evolution.strokeDashoffset}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default Logo;
