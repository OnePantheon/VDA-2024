import {evolvePath} from '@remotion/paths';
import {LogoPaths} from './paths';
import {useCurrentFrame} from 'remotion';
import {useTime} from 'remotion-time';

function Logo() {
  const frame = useCurrentFrame();
  const time = useTime();
  const progress = frame / time`2s`;

  return (
    <svg width="417" height="222" viewBox="0 0 417 222" fill="none" xmlns="http://www.w3.org/2000/svg">
      {}
      <text x={350} y={20} fill="white" fontSize={20}>
        {frame}
      </text>
      {/*     
    LogoPaths.map((dProp, key) => {
      const evolution = evolvePath(progress, dProp);
      return <path
        key={key}
        d={dProp}
        fill="transparent"
        stroke="white"
        strokeWidth={2}
        strokeDasharray={evolution.strokeDasharray}
        strokeDashoffset={evolution.strokeDashoffset}
      />;
    })
    <path d={p} fill="#DBDFE4" />
    <path d={a} fill="#DBDFE4" />
    <path d={n1} fill="#DBDFE4" />
    <path d={t} fill="#DBDFE4" />
    <path d={h} fill="#DBDFE4" />
    <path d={e} fill="#DBDFE4" />
    <path d={o} fill="#DBDFE4" />
    <path d={n2} fill="#DBDFE4" />
    <path d={N} fill="#DBDFE4" />
    <path d={E} fill="#DBDFE4" />
    <path d={I} fill="#4392B2" />
    <path d={i} fill="white" />
    <path d={O} fill="white" /> */}
    </svg>
  );
}

export default Logo;
