import groq from 'groq';

export const BUTTON = groq`
  button {
    styles[] {
      label,
      textColor,
      textHoverColor,
      bgColor,
      bgHoverColor
    }
  }
`;
