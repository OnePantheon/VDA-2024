import {Sequence} from 'remotion';
import {useTime} from 'remotion-time';
import LogoAnim from './Sequences_DiscordIcon/02_LogoAnim';
import LogoFadeOut from './Sequences_DiscordIcon/01_LogoFadeOut';
import Background from './Sequences_DiscordIcon/XX_Background';

function LogoAnimComposition() {
  const t = useTime();
  return (
    <>
      <Sequence durationInFrames={t`6s`} name="Background">
        <Background />
      </Sequence>
      <Sequence durationInFrames={t`0.3s`} name="Fade out">
        <LogoFadeOut />
      </Sequence>
      <Sequence from={t`0.3s`} durationInFrames={t`6s`} name="Logo reveal">
        <LogoAnim />
      </Sequence>
    </>
  );
}

export default LogoAnimComposition;
