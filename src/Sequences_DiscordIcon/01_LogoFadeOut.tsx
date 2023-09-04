import {AbsoluteFill} from 'remotion';
import OneFadeOut from './OneFadeOut';

function LogoFadeOut() {
  return (
    <AbsoluteFill
      className="flex items-center justify-center z-50"
    >
      <div className="inline-flex items-center justify-center">
        <OneFadeOut />
      </div>
    </AbsoluteFill>
  );
}
export default LogoFadeOut;
