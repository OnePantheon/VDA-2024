import { Composition } from 'remotion';
import { useTimeConfig } from "remotion-time";
import "./style.css";
import Main from './1_VDA_Composition';
import LogoRevealRoot from './2_LogoRevealComposition';
export const RemotionRoot: React.FC = () => {
	const config = useTimeConfig("66s @ 60fps");
	const configLogo = useTimeConfig("9s @ 60fps");
	return (
		<>
			<Composition
				id='Vda2024'
				{...config}
				component={Main}
				height={1080}
				width={1920}
			/>
			<Composition
				id='LogoReveal'
				{...configLogo}
				component={LogoRevealRoot}
				height={1080}
				width={1080}
			/>
		</>
	);
};
