

import {useInterpolate} from 'remotion-time';
import {Easing} from 'remotion';

export type OpacityTimingKey = keyof typeof OpacityTiming;

const OpacityTiming = {
  FIRST: [0, 1, 1, 0.5, 0.5, 0.25, 0.25],
  SECOND: [0, 0.5, 0.5, 1, 1, 0.5, 0.5],
  THIRD: [0, 0, 0, 0.5, 0.5, 1, 1],
};

export default function useEnvieDeAnim(opacityTimingKey?: OpacityTimingKey, initialRotate?: number) {
  const timings = [
    'start',
    'start + 0.2s',
    'start + 0.6s',
    'start + 0.8s',
    'start + 1s',
    'start + 1.2s',
    'start + 1.4s',
  ];
  const rotateBase = useInterpolate(timings, [0, -15, -15, -30, -30, -45, -45], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  const opacityBase = useInterpolate(timings, OpacityTiming[opacityTimingKey ?? 'FIRST'], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  if (opacityTimingKey === undefined || initialRotate === undefined) {
    return {rotate: 0, opacity: 1};
  }
  const rotateOffset = initialRotate ?? 0;
  const rotate = Math.max(-30, Math.min(30, (rotateBase as number) + rotateOffset));
  const opacity = Math.max(0, Math.min(1, opacityBase as number));
  return {rotate, opacity};
}