import icons from '../../images/icons.svg';
import { colors } from 'constants/colors';

export default function SvgIcon({ id, color=colors.blueColor }) {
    return (
        <svg width={24} height={24} stroke={color}>
          <use href={`${icons}#${id}`}></use>
    </svg>
  );
}
