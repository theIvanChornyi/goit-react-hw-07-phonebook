import styled from 'styled-components';
export const ContactItem = styled.li`
  position: relative;
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: space-between;

  min-width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.body};
  letter-spacing: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.regular};

  background-color: rgba(255, 255, 255, 0.4);
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color linear 200ms;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  :hover {
    background-color: ${p => p.theme.colors.muted};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 40px;
    background-color: gold;
    display: ${p => (p.favorite ? 'block' : 'none')};

    transform: rotate(45deg) translate(-90%);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 200ms;

  :hover,
  :focus {
    background-color: ${p => p.color ?? p.theme.colors.accent};
    cursor: pointer;
  }
`;
export const Itemlink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 200ms;

  :hover,
  :focus {
    background-color: ${p => p.color ?? p.theme.colors.accent};
    cursor: pointer;
  }
`;
