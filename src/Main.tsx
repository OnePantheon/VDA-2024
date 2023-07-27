import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { useTime } from "remotion-time";
import LogoReveal from "./Sequences/LogoReveal";


function Main() {
  const t = useTime();
  return (
    <>
      <Audio src={staticFile("bgMusic.mp3")} />
      <Sequence durationInFrames={t`4s`} name="Créé avec du code">
        <AbsoluteFill></AbsoluteFill>
      </Sequence>
      <Sequence from={t`4s`} durationInFrames={t`7s`} name="Logo reveal">
        <LogoReveal></LogoReveal>
      </Sequence>
    </>
  )
}

export default Main;