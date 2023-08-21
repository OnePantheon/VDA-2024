import {AbsoluteFill} from 'remotion';
import Logo from './02_LogoReveal/logo';

function LogoReveal() {
  return (
    <AbsoluteFill
      style={{backgroundColor: '#0e2a47'}}
      className="flex items-center justify-center"
    >
      <Logo />
    </AbsoluteFill>
  );
}
export default LogoReveal;
