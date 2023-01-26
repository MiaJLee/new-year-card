# DJ블랙버니 클라이언트 DJ Bunny Frontend
![og-image-bunny](https://user-images.githubusercontent.com/48678660/214809468-3ddd67da-9119-46e9-b25a-b61b91d397c4.jpeg)

# 개발 리뷰 포스트 Project Review Blog
https://velog.io/@hyounglee/DJ-blackbunny
개발 과정에서 느꼈던 것들, 개발/배포 과정에서의 이슈에 대해 풀어낸 글입니다.

# 서버 레포지토리 Server Repository
https://github.com/MiaJLee/new-year-card-server

# 프레임워크 Framework
- Angular v15



# 주요 화면
## 랜딩페이지, 에디터 진입
![ezgif com-gif-maker](https://user-images.githubusercontent.com/48678660/214815695-e1910351-8683-436f-8a20-661ce7cb0396.gif)

## 카드 에디터
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/48678660/214815987-4cb5d0e0-09b5-4de1-8497-53f80de64e9a.gif)

## 음악 선택 화면
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/48678660/214816960-7aa8b436-e299-44ce-b822-dc4ade0ba9b1.gif)

## 편지 에디터
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/48678660/214817192-d2866e0c-4284-4892-8c7e-609c90f578d9.gif)

## 카드 저장 플로우
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/48678660/214817600-30fc6f67-81af-47b8-9cca-fe16be6b00c3.gif)

## 카드 조회 플로우
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/48678660/214817618-ff1edc80-3da0-4006-883f-f80536cd58d0.gif)

# 그 외
## 카카오 공유하기 API 적용
![image](https://user-images.githubusercontent.com/48678660/214817822-8de75ef5-4ebc-4c3b-9224-b15b4250325a.png)


# 디렉토리 구조
```

📦src
 ┣ 📂api
 ┃ ┣ 📜api.models.ts
 ┃ ┗ 📜api.service.ts
 ┣ 📂app
 ┃ ┣ 📂editor                                      // 카드 에디터 모듈
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂editor
 ┃ ┃ ┃ ┃ ┣ 📜editor.component.html
 ┃ ┃ ┃ ┃ ┣ 📜editor.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜editor.component.ts
 ┃ ┃ ┃ ┣ 📂form-card-bg
 ┃ ┃ ┃ ┃ ┣ 📜form-card-bg.component.html
 ┃ ┃ ┃ ┃ ┣ 📜form-card-bg.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜form-card-bg.component.ts
 ┃ ┃ ┃ ┣ 📂form-card-shape
 ┃ ┃ ┃ ┃ ┣ 📜form-card-shape.component.html
 ┃ ┃ ┃ ┃ ┣ 📜form-card-shape.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜form-card-shape.component.ts
 ┃ ┃ ┃ ┣ 📂form-lettering
 ┃ ┃ ┃ ┃ ┣ 📜form-lettering.component.html
 ┃ ┃ ┃ ┃ ┣ 📜form-lettering.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜form-lettering.component.ts
 ┃ ┃ ┃ ┗ 📂form-music-playlist
 ┃ ┃ ┃ ┃ ┣ 📜form-music-playlist.component.html
 ┃ ┃ ┃ ┃ ┣ 📜form-music-playlist.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜form-music-playlist.component.ts
 ┃ ┃ ┗ 📜editor.module.ts
 ┃ ┣ 📂landing                                        // 랜딩 페이지 컴포넌트
 ┃ ┃ ┣ 📜landing.component.html
 ┃ ┃ ┣ 📜landing.component.scss
 ┃ ┃ ┗ 📜landing.component.ts
 ┃ ┣ 📂not-found                                      // 404 페이지 컴포넌트
 ┃ ┃ ┣ 📜not-found.component.html
 ┃ ┃ ┣ 📜not-found.component.scss
 ┃ ┃ ┗ 📜not-found.component.ts
 ┃ ┣ 📂popup                                      // 팝업 모듈
 ┃ ┃ ┣ 📂popup
 ┃ ┃ ┃ ┣ 📜popup.component.html
 ┃ ┃ ┃ ┣ 📜popup.component.scss
 ┃ ┃ ┃ ┗ 📜popup.component.ts
 ┃ ┃ ┣ 📜popup.module.ts
 ┃ ┃ ┗ 📜popup.service.ts
 ┃ ┣ 📂shared                                     // 공통 모듈
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┣ 📂bg-canvas
 ┃ ┃ ┃ ┃ ┣ 📜bg-canvas.component.html
 ┃ ┃ ┃ ┃ ┣ 📜bg-canvas.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜bg-canvas.component.ts
 ┃ ┃ ┃ ┣ 📂card-object
 ┃ ┃ ┃ ┃ ┣ 📜card-object.component.html
 ┃ ┃ ┃ ┃ ┣ 📜card-object.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜card-object.component.ts
 ┃ ┃ ┃ ┣ 📂countdown-timer
 ┃ ┃ ┃ ┃ ┣ 📜countdown-timer.component.html
 ┃ ┃ ┃ ┃ ┣ 📜countdown-timer.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜countdown-timer.component.ts
 ┃ ┃ ┃ ┣ 📂loading-screen
 ┃ ┃ ┃ ┃ ┣ 📜loading-screen.component.html
 ┃ ┃ ┃ ┃ ┣ 📜loading-screen.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜loading-screen.component.ts
 ┃ ┃ ┃ ┣ 📂text-viewer
 ┃ ┃ ┃ ┃ ┣ 📜text-viewer.component.html
 ┃ ┃ ┃ ┃ ┣ 📜text-viewer.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜text-viewer.component.ts
 ┃ ┃ ┃ ┗ 📂youtube-player
 ┃ ┃ ┃ ┃ ┣ 📜youtube-player.component.html
 ┃ ┃ ┃ ┃ ┗ 📜youtube-player.component.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜loading-screen.service.ts
 ┃ ┃ ┃ ┣ 📜loading.interceptor.ts
 ┃ ┃ ┃ ┣ 📜newlinetobr.pipe.ts
 ┃ ┃ ┃ ┗ 📜safe.pipe.ts
 ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📂viewer                                      // 카드 뷰어 모듈
 ┃ ┃ ┣ 📂component
 ┃ ┃ ┃ ┗ 📂card-viewer
 ┃ ┃ ┃ ┃ ┣ 📜card-viewer.component.html
 ┃ ┃ ┃ ┃ ┣ 📜card-viewer.component.scss
 ┃ ┃ ┃ ┃ ┗ 📜card-viewer.component.ts
 ┃ ┃ ┗ 📜viewer.module.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.ts
 ┃ ┣ 📜app.models.ts
 ┃ ┣ 📜app.module.ts
 ┃ ┣ 📜app.utils.ts
 ┃ ┣ 📜app.value.ts
 ┃ ┗ 📜global.d.ts
 ┣ 📂assets                                      // 에셋
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜bunnya.svg
 ┃ ┃ ┣ 📜bunnyb.svg
 ┃ ┃ ┣ 📜bunnyc.svg
 ┃ ┃ ┣ 📜checkerboard.svg
 ┃ ┃ ┣ 📜cloud.svg
 ┃ ┃ ┣ 📜heart.svg
 ┃ ┃ ┗ 📜oval.svg
 ┃ ┣ 📂envelop
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜envelop-close.svg
 ┃ ┃ ┣ 📜envelop-motion.svg
 ┃ ┃ ┗ 📜envelop.svg
 ┃ ┣ 📂scripts
 ┃ ┃ ┗ 📜setEnv.ts
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜check.svg
 ┃ ┃ ┣ 📜close.svg
 ┃ ┃ ┗ 📜play.svg
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜ico-kakao.png
 ┃ ┣ 📜ico-link.png
 ┃ ┣ 📜icon-info.png
 ┃ ┣ 📜icon-note.png
 ┃ ┗ 📜og-image-bunny.jpeg
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜.DS_Store
 ┣ 📜_redirects
 ┣ 📜index.html
 ┣ 📜main.ts
 ┣ 📜polyfills.ts
 ┣ 📜styles.scss
 ┗ 📜test.ts
 
```
