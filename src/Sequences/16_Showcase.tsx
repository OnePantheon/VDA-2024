import {AbsoluteFill} from 'remotion';
import {PoppinsFont} from '../shared/fonts';

function ShowcaseTitle() {
  return (
    <AbsoluteFill
      style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}}
      className="text-white text-9xl font-bold"
    >
      <p className="m-auto">Showcase !</p>
    </AbsoluteFill>
  );
}

export default ShowcaseTitle;
