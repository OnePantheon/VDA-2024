import useEnvieDeAnim, {OpacityTimingKey} from './UseEnvieDeAnim';

type EnvieDeTexteProps = {
  children?: React.ReactNode;
  rotate?: number;
  opacityKey?: OpacityTimingKey;
};

function EnvieDeTexte({opacityKey, rotate: initialRotate, children}: EnvieDeTexteProps) {
  const {opacity, rotate} = useEnvieDeAnim(opacityKey, initialRotate);
  return (
    <div className="absolute top-[50%] -translate-y-[50%] text-8xl font-medium text-white">
      <div style={{transform: `rotate(${rotate}deg)`, transformOrigin: 'center left', opacity}}>
        <span className={children ? 'text-transparent ml-40' : 'ml-40'}>Envie</span>
        {children && <span className="ml-10">{children}</span>}
      </div>
    </div>
  );
}
export default EnvieDeTexte;
