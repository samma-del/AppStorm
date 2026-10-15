export type ScreenName =
  | 'login'
  | 'forgot'
  | 'verify'
  | 'reset'
  | 'register'
  | 'city';

export type ScreenProps = {
  navigate: (screen: ScreenName) => void;
};