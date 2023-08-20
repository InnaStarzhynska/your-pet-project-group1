import icons from '../../images/icons.svg';

export default function SvgIcon({ id }) {
  return (
    <svg width={24} height={24}>
      <use href={`${icons}#${id}`}></use>
    </svg>
  );
}
