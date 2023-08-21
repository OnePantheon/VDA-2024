import {Sequence, Audio, staticFile, Series} from 'remotion';
import {useTime} from 'remotion-time';
import LogoReveal from './Sequences/02_LogoReveal';
import CreatedWithCode from './Sequences/01_CreatedWithCode';
import EnvieDe from './Sequences/04_EnvieDe';
import RejoinsAsso from './Sequences/06_RejoinsAsso';

function Main() {
  const t = useTime();
  return (
    <>
      <Audio src={staticFile('bgMusic.mp3')} />
      <Series>
        <Series.Sequence durationInFrames={t`5s`} name="Créé avec du code">
          <CreatedWithCode />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`6.5s`} name="Logo reveal">
          <LogoReveal />
        </Series.Sequence>
      </Series>
      <Sequence from={t`13.5s`} durationInFrames={t`2.5s`} name="Rejoins asso">
        <RejoinsAsso />
      </Sequence>
      <Sequence from={t`11.5s`} durationInFrames={t`3s`} name="Envie de ...">
        <EnvieDe />
      </Sequence>
    </>
  );
}

export default Main;
