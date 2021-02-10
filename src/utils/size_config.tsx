import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// 아이폰 11을 기준으로 함.
const getProportionateScreenWidth = SCREEN_WIDTH / 414.0;
const getProportionateScreenHeight = SCREEN_HEIGHT / 896.0;

export const normalizeFontSize = (size: number) => {
  const newSize = size * getProportionateScreenWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
