import {AbsoluteFill} from 'remotion';
import {PoppinsFont} from '../shared/fonts';

function EtObtiens() {
  return (
    <AbsoluteFill
      style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}}
      className="text-white text-8xl font-semibold flex items-center justify-center"
    >
      <p>Et obtiens...</p>
    </AbsoluteFill>
  );
}

export default EtObtiens;
