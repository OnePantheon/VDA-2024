import {Sequence, Audio, staticFile, Series, Video, AbsoluteFill} from 'remotion';
import {useTime} from 'remotion-time';
import LogoReveal from './Sequences/02_LogoReveal';
import CreatedWithCode from './Sequences/01_CreatedWithCode';
import EnvieDe from './Sequences/04_EnvieDe';
import RejoinsAsso from './Sequences/06_RejoinsAsso';
import EtBeneficie from './Sequences/07_EtBeneficie';

function Main() {
  const t = useTime();
  const bgMusic = staticFile('bgMusic.flac');
  return (
    <>
      <Audio src={bgMusic} acceptableTimeShiftInSeconds={0.1} />
      <Series>
        <Series.Sequence durationInFrames={t`5s`} name="Créé avec du code">
          <CreatedWithCode />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`6.5s`} name="Logo reveal">
          <LogoReveal />
        </Series.Sequence>
      </Series>
      <Sequence from={t`13.5s`} durationInFrames={t`3.5s`} name="Rejoins asso">
        <RejoinsAsso />
      </Sequence>
      <Sequence from={t`11.5s`} durationInFrames={t`3.5s`} name="Envie de ...">
        <EnvieDe />
      </Sequence>
      <Series>
        <Series.Sequence offset={t`17s`} durationInFrames={t`1s`} name="Et obtiens...">
          <EtBeneficie />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Idée appli">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Un suivi pour réaliser ton idée d'application, site ou jeu</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Serv et ressources">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Un serveur et des ressources à disposition</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Licences de dév">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Des licences de développement</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Mais c'est super ça">
          <AbsoluteFill>
            <Video src={staticFile('ahBahJsuisRavi.mp4')} startFrom={t`3s`} endAt={t`4.8s`} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.6s`} name="Suis nos cours">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Suis nos cours et TPs</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Ateliers JPO">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Ateliers JPO</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.6s`} name="Events">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Events</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.2s`} name="Showcase">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Showcase</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 1">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">PJ 1</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 2">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">PJ 2</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 3">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">PJ 3</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 4">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">PJ 4</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`2.5s`} name="Efrei Craft">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Efrei Craft</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`4.5s`} name="Minecraft 1 et 2">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Un serveur où vous pourrez jouer</p>
            <p className="text-9xl">Tout comme programmer</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`6s`} name="Discord 1 et 2">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">On vous a convaincu ? </p>
            <p className="text-9xl">Pas besoin de s'engager </p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`5s`} name="Join the one be the one">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Join the one, be the one</p>
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`4s`} name="Crédits">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <p className="text-9xl">Crédits</p>
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </>
  );
}

export default Main;
