import {AbsoluteFill} from 'remotion';
import One from './One';

function LogoAnim() {
  return (
    <AbsoluteFill
      className="flex items-center justify-center z-50"
    >
      <div className="inline-flex items-center justify-center">
        <One />
      </div>
    </AbsoluteFill>
  );
}
export default LogoAnim;
