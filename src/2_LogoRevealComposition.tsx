import {Series, Sequence, AbsoluteFill} from 'remotion';
import {useTime} from 'remotion-time';
import LogoReveal from './Sequences_Logo/01_LogoReveal';
import NouvelleCharte from './Sequences_Logo/02_NousAvonsCharte';

function LogoRevealRoot() {
  const t = useTime();
  return (
    <>
      <Sequence from={t`6s`} durationInFrames={t`3.0s`} name="Nouvelle charte">
        <NouvelleCharte />
      </Sequence>
      <Sequence durationInFrames={t`6.5s`} name="Logo reveal">
        <LogoReveal />
      </Sequence>
    </>
  );
}

export default LogoRevealRoot;
