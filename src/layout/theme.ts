import { DefaultTheme } from 'styled-components';

const gradientsColor = {
  light: {
    PRIMARY: '#4575F5',
    PRIMARYSUB: '#C3DCFF',
    POINT_1: '#83B0ED',
    POINT_2: '#364FC7',
  },
  dark: {
    PRIMARY: '#4575F5',
    PRIMARYSUB: '#B1CCEF',
    POINT_1: '#69A5F5',
    POINT_2: '#2744CC',
  },
};

export const light: DefaultTheme = {
  background: {
    PRIMARY: '#ffffff',
    SECONDARY: '#FAFAFA',
    TERTIARY: '#F0F0F0',
  },
  color: {
    PRIMARY: '#4575F5',
    SECONDARY: '#3F4CB2',
    TERTIARY: '#0C1F6F',
    POINT: '#f77721',
    PRIMARYSUB: '#C3DCFF',
    SECONDARYSUB: '#98a9f0',
    TERTIARYSUB: '#6f85e3',
    POINTSUB: '#ffcab2',
    BLACK: '#1a1a1a',
    GRAY5: '#444444',
    GRAY4: '#808080',
    GRAY3: '#BEBEBE',
    GRAY2: '#F0F0F0',
    GRAY1: '#F7F7F7',
    GRAY0: '#FAFAFA',
    WHITE: '#FFFFFF',
    WARNING: '#FF6060',
    WARNINGSUB: '#FFE2E2',
    SUCCESS: '#4575f5',
    GRADIENT0: `linear-gradient(to right, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.PRIMARYSUB})`,
    GRADIENT1: `linear-gradient(to right, ${gradientsColor.light.POINT_1}, ${gradientsColor.light.PRIMARY})`,
    GRADIENT2: `linear-gradient(to bottom, ${gradientsColor.light.PRIMARY}, ${gradientsColor.light.POINT_2})`,
  },
  radius: 4,
};

export const dark: DefaultTheme = {
  background: {
    PRIMARY: '#363636',
    SECONDARY: '#2B2B2B',
    TERTIARY: '#1A1A1A',
  },
  color: {
    PRIMARY: '#176FFF',
    SECONDARY: '#3F4CB2',
    TERTIARY: '#0c1f6f',
    POINT: '#FF7215',
    PRIMARYSUB: '#B1CCEF',
    SECONDARYSUB: '#8D9DE0',
    TERTIARYSUB: '#687CD8',
    POINTSUB: '#F2B9A0',
    BLACK: '#FFFFFF',
    GRAY5: '#EBEBEB',
    GRAY4: '#BEBEBE',
    GRAY3: '#A7A7A7',
    GRAY2: '#808080',
    GRAY1: '#585858',
    GRAY0: '#535353',
    WHITE: '#444444',
    WARNING: '#FF6060',
    WARNINGSUB: '#EFC2C2',
    SUCCESS: '#336BFF',
    GRADIENT0: `linear-gradient(to right, ${gradientsColor.dark.PRIMARY}, ${gradientsColor.dark.PRIMARYSUB})`,
    GRADIENT1: `linear-gradient(to right, ${gradientsColor.dark.POINT_1}, ${gradientsColor.dark.PRIMARY})`,
    GRADIENT2: `linear-gradient(to bottom, ${gradientsColor.dark.PRIMARY}, ${gradientsColor.dark.POINT_2})`,
  },
  radius: 4,
};

