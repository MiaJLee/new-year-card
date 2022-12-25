export interface KakaoSDK {
  init: (apiKey: string | undefined) => void;
  isInitialized: () => boolean;
  Link: any;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}
