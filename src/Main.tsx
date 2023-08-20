import {Sequence, Audio, staticFile} from 'remotion';
import {useTime} from 'remotion-time';
import LogoReveal from './Sequences/LogoReveal';
import CreatedWithCode from './Sequences/CreatedWithCode';

function Main() {
  const t = useTime();
  return (
    <>
      <Audio src={staticFile('bgMusic.mp3')} />
      <Sequence durationInFrames={t`5s`} name="Créé avec du code">
        <CreatedWithCode />
      </Sequence>
      <Sequence from={t`5s`} durationInFrames={t`7s`} name="Logo reveal">
        <LogoReveal />
      </Sequence>
    </>
  );
}

export default Main;
