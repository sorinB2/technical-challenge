import { STRINGS } from '../../constants/strings';
import {
	CharacterCard,
	CharacterDetails,
	CharacterImage,
	CharacterInformation,
	CharacterName,
	CharacterStatus,
	CharacterText
} from './CharacterStyledComponents';

const Character = (props: CharacterProps) => {
	const { name, image, status, species, origin } = props;
	return (
		<CharacterCard>
			<CharacterImage src={image} />
			<div>
				<CharacterName>{name}</CharacterName>
				<CharacterInformation>
					<CharacterStatus bg="red" />
					<CharacterText>{`${status} - ${species}`}</CharacterText>
				</CharacterInformation>
				<CharacterDetails>
					<span>{STRINGS.ORIGIN}</span>
					<CharacterText>{origin.name}</CharacterText>
				</CharacterDetails>
			</div>
		</CharacterCard>
	);
};

export default Character;

interface CharacterProps {
	name: string;
	image: string;
	status: string;
	species: string;
	origin: {
		name: string;
	};
}