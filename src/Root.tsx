import { Composition } from 'remotion';
import { useTimeConfig } from "remotion-time";
import "./style.css";
import Main from './Main';
export const RemotionRoot: React.FC = () => {

	const config = useTimeConfig("75s @ 30fps");
	return (
		<>
			<Composition
				id='Vda2024'
				{...config}
				component={Main}
				height={1080}
				width={1920}
			/>
		</>
	);
};
