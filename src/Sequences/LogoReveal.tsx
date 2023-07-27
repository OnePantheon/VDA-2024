import { AbsoluteFill } from "remotion";
import Logo from "./LogoReveal/logo";
import { useTime } from "remotion-time";

export type LogoRevealProps = {

}
function LogoReveal({ }: LogoRevealProps) {
  return (
    <AbsoluteFill style={{ backgroundColor: '#0e2a47' }} className="flex items-center justify-center">
      <Logo />
    </AbsoluteFill>
  );
}
export default LogoReveal;