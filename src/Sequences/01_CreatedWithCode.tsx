import {Img} from 'remotion';
import {AbsoluteFill, staticFile} from 'remotion';
import TypingText from './01_CreatedWithCode/TypingText';
import {IbmPlexMonoFont} from '../shared/fonts';
import {useInterpolate} from 'remotion-time';

function CreatedWithCode() {
  const opacity = useInterpolate(['start', 'end - 1.2s', 'end - 1s', 'end'], [1, 1, 0, 0]);
  const img = staticFile('01_github.png');

  return (
    <AbsoluteFill style={{backgroundColor: '#0e2a47'}}>
      <div
        className="flex items-center justify-center bg-black w-full h-full"
        style={{
          opacity: opacity as number,
        }}
      >
        <TypingText
          text=">> Toutes les frames de cette vidéo ont été générées avec du code"
          duration="1.2s"
          style={{
            fontSize: 40,
            fontFamily: IbmPlexMonoFont,
            fontWeight: '500',
            color: 'white',
            marginRight: '20%',
            marginLeft: '20%',
          }}
        />
        <Img src={img} className="absolute bottom-7" />
      </div>
    </AbsoluteFill>
  );
}
export default CreatedWithCode;
