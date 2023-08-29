import {Sequence, Audio, staticFile, Series, Video, AbsoluteFill, Img} from 'remotion';
import {useTime} from 'remotion-time';
import LogoReveal from './Sequences/02_LogoReveal';
import CreatedWithCode from './Sequences/01_CreatedWithCode';
import EnvieDe from './Sequences/04_EnvieDe';
import RejoinsAsso from './Sequences/06_RejoinsAsso';
import EtObtiens from './Sequences/07_EtObtiens';
import UnSuivi from './Sequences/08_UnSuivi';
import DesRessources from './Sequences/11_devkit';
import DesLicences from './Sequences/12_Licences';
import DesCours from './Sequences/13_Cours';
import Jpo from './Sequences/14_JPO';
import DesEvents from './Sequences/15_Events';
import ShowcaseTitle from './Sequences/16_Showcase';
import Discord from './Sequences/24_Discord';
import EfreiCraftVid from './Sequences/22_EfreiCraft';
import ProjetX from './Sequences/17_projetX';

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
          <EtObtiens />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Idée appli">
          <UnSuivi />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Serv et ressources">
          <DesRessources />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Licences de dév">
          <DesLicences />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Mais c'est super ça">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <Video src={staticFile('ahBahJsuisRavi.mp4')} startFrom={t`3s`} endAt={t`4.8s`} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.6s`} name="Suis nos cours">
          <DesCours />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.7s`} name="Ateliers JPO">
          <Jpo />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.6s`} name="Events">
          <DesEvents />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`1.2s`} name="Showcase">
          <ShowcaseTitle />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 1">
          <ProjetX title="Clyde" author="Par Yohan Sanjivy et Adrien Clemenceau" video="22_Ludos.mp4" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 2">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <ProjetX title="IntelliVote" author="Par Michaël Nass, Vincent Marguet..." video="22_Ludos.mp4" />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 3">
          <ProjetX title="Link Rupees Rush" author="Par Anis Hannachi (2022)" video="22_Ludos.mp4" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`3.3s`} name="PJ 4">
          <ProjetX title="Kagescan-cms" author="Par Logan Tann (2023)" video="22_Ludos.mp4" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`2.5s`} name="Efrei Craft">
          <AbsoluteFill style={{backgroundColor: '#4392B2'}}>
            <Img src={staticFile('21_EfreiCraft.png')} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`4.5s`} name="Minecraft 1 et 2">
          <EfreiCraftVid />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`6s`} name="Discord 1 et 2">
          <Discord />
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`5s`} name="Join the one be the one">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <Img src={staticFile('26_JoinTheOne.png')} />
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={t`4s`} name="Crédits">
          <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
            <Img src={staticFile('27_Credits.png')} />
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </>
  );
}

export default Main;
