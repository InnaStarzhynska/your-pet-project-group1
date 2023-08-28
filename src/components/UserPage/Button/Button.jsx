import { StyledButton } from './Button.styled';

export default function Button({
  type,
  $content,
  $darkType,
  style = {},
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      $darkType={$darkType}
      style={style}
      onClick={onClick}
    >
      {$content}
    </StyledButton>
  );
}
