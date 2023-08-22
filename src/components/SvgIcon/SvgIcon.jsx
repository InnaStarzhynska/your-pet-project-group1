import icons from '../../images/icons.svg';
import { colors } from 'constants/colors';

export default function SvgIcon({ className, id, color=colors.blueColor }) {
    return (
        <svg width={24} height={24} stroke={color} className={className}>
          <use href={`${icons}#${id}`}></use>
    </svg>
  );
}
