import {Video, staticFile, AbsoluteFill} from 'remotion';
import {PoppinsFont} from '../shared/fonts';
import {useTime} from 'remotion-time';

function AhBahJsuisRavi() {
  const t = useTime();
  return (
    <AbsoluteFill style={{backgroundColor: '#0e2a47', fontFamily: PoppinsFont}}>
      <Video src={staticFile('ahBahJsuisRavi.mp4')} startFrom={t`3s`} endAt={t`4.8s`} />
      <p className="absolute bottom-8 w-full text-center text-6xl font-semibold text-white">Ah mais c'est super ça !</p>
    </AbsoluteFill>
  );
}

export default AhBahJsuisRavi;
