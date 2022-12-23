import { Step } from './app.models';

export const EDITOR_TITLE = {
  [Step.Card]: { kr: '카드를 선택해주세요', en: 'Select the card' },
  [Step.Lettering]: {
    kr: '레터링 이미지를 선택해주세요',
    en: 'Select the lettering',
  },
  [Step.Background]: {
    kr: '배경지를 선택해주세요',
    en: 'Select the background',
  },
  [Step.Text]: { kr: '편지를 작성해주세요', en: 'Write the letter' },
  [Step.Music]: {
    kr: '희망찬 새해를 위한 첫 음악을 선물해주세요',
    en: 'Choose the new-year-song',
  },
};

export const MAX_LENGTH = 200;

export const MUSICS = [
  {
    id: 0,
    name: 'Try Everything',
    artist: 'Shakira',
    spotifyLink: 'https://open.spotify.com/track/1N3dZ7TTWO6VcD4Y3hHYLZ',
    image: 'https://i.scdn.co/image/ab67616d0000b273bb8981af04f38a53e2be34f5',
    lyrics: 'Try everything\nTry everything\nTry everything',
    youtubeLink:
      'https://www.youtube.com/watch?v=230sI_WxO7Y&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&ab_channel=Shakira-Topic',
  },
  {
    id: 1,
    name: 'Take the World By Storm',
    artist: 'Lukas Graham',
    spotifyLink: 'https://open.spotify.com/track/5xRBYte8zzJNmRfBgYIWnX',
    image: 'https://i.scdn.co/image/ab67616d0000b2732d94d0f04e9a58d1654b760b',
    lyrics: "I'm not afraid\n'Cause I take the world by storm",
    youtubeLink:
      'https://www.youtube.com/watch?v=EDGrBqnQFRU&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=2&ab_channel=LukasGraham-Topic',
  },
  {
    id: 2,
    name: 'Son of Man',
    artist: 'Phil Collins',
    spotifyLink: 'https://open.spotify.com/track/1LhFadk0aWYczltTjIbFlI',
    image: 'https://i.scdn.co/image/ab67616d0000b273ba44f1ff74c2c7c2da6e4c3f',
    lyrics: "It's you\nwho'll reach the peak",
    youtubeLink:
      'https://www.youtube.com/watch?v=2sBtUBR-cYA&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=3&ab_channel=PhilCollins-Topic',
  },
  {
    id: 3,
    name: 'Go Your Own Way',
    artist: 'Fleetwood Mac',
    spotifyLink: 'https://open.spotify.com/track/07GvNcU1WdyZJq3XxP0kZa',
    image: 'https://i.scdn.co/image/ab67616d0000b2730001af4f80be77069fc8fd41',
    lyrics: 'You can go your own way',
    youtubeLink:
      'https://www.youtube.com/watch?v=DubafeFeJ7Y&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=4&ab_channel=FleetwoodMac-Topic',
  },
  {
    id: 4,
    name: 'Spread Your Wings',
    artist: 'Queen',
    spotifyLink: 'https://open.spotify.com/track/6hvFXQ9Kmsabx520Xlu5rK',
    image: 'https://i.scdn.co/image/ab67616d0000b27393c65b02f4a72cd6eccf446d',
    lyrics: 'Spread your wings and fly away\nfly away far away',
    youtubeLink:
      'https://www.youtube.com/watch?v=lz2gf7ut2W0&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=5&ab_channel=Queen-Topic',
  },
  {
    id: 5,
    name: 'Drive It Like You Stole It',
    artist: 'Sing Street',
    spotifyLink: 'https://open.spotify.com/track/2ZBiHAwdeCnrKvXap6Yzef',
    image: 'https://i.scdn.co/image/ab67616d0000b273a0fcd768753456e78294c8d6',
    lyrics: 'This is your life,\nyou can be anything',
    youtubeLink:
      'https://www.youtube.com/watch?v=0eyrBf00VIE&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=6&ab_channel=SingStreet-Topic',
  },
  {
    id: 6,
    name: 'On My Way',
    artist: 'Phil Collins',
    spotifyLink: 'https://open.spotify.com/track/7wjiMdiSgsL9Vkrwb10Num',
    image: 'https://i.scdn.co/image/ab67616d0000b273eb02d5af28b4cbed922cb2ea',
    lyrics: "I'm on my way\nand I'm lovin' every step I take",
    youtubeLink:
      'https://www.youtube.com/watch?v=EKphgamhPrw&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=7&ab_channel=PhilCollins-Topic',
  },
  {
    id: 7,
    name: "Don't Stop Me Now",
    artist: 'Queen',
    spotifyLink: 'https://open.spotify.com/track/7hQJA50XrCWABAu5v6QZ4i',
    image: 'https://i.scdn.co/image/ab67616d0000b273008b06ec71019afd70153889',
    lyrics: "Yes I'm having a good time\nI don't wanna stop at all",
    youtubeLink:
      'https://www.youtube.com/watch?v=CczcMarUoVk&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=8&ab_channel=Queen-Topic',
  },
  {
    id: 8,
    name: 'Titanium (feat. Sia)',
    artist: 'David Guetta',
    spotifyLink: 'https://open.spotify.com/track/0lHAMNU8RGiIObScrsRgmP',
    image: 'https://i.scdn.co/image/ab67616d0000b273a197a2ef3ad6704d1f44aa4e',
    lyrics: "You shoot me down,\nbut I won't fall I am titanium",
    youtubeLink:
      'https://www.youtube.com/watch?v=LRPGqNeav_M&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=9&ab_channel=DavidGuetta-Topic',
  },
  {
    id: 9,
    name: '7 rings',
    artist: 'Ariana Grande',
    spotifyLink: 'https://open.spotify.com/track/6ocbgoVGwYJhOv1GgI9NsF',
    image: 'https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8',
    lyrics: 'I want it, I got it',
    youtubeLink:
      'https://www.youtube.com/watch?v=XZ868t23Pb4&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=10&ab_channel=ArianaGrande-Topic',
  },
  {
    id: 10,
    name: 'Congratulations',
    artist: 'Post Malone',
    spotifyLink: 'https://open.spotify.com/track/3a1lNhkSLSkpJE4MSHpDu9',
    image: 'https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41',
    lyrics:
      "They said I wouldn't be nothin'\nNow they always say congratulations",
    youtubeLink:
      'https://www.youtube.com/watch?v=FFhGqNa-Waw&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=11&ab_channel=PostMalone-Topic',
  },
  {
    id: 11,
    name: "I Ain't Worried",
    artist: 'OneRepublic',
    spotifyLink: 'https://open.spotify.com/track/4h9wh7iOZ0GGn8QVp4RAOB',
    image: 'https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13',
    lyrics: "I ain't worried\n'bout it right now",
    youtubeLink:
      'https://www.youtube.com/watch?v=NF7oYY7Lhq4&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=12&ab_channel=OneRepublic-Topic',
  },
  {
    id: 12,
    name: 'About Damn Time',
    artist: 'Lizzo',
    spotifyLink: 'https://open.spotify.com/track/1PckUlxKqWQs3RlWXVBLw3',
    image: 'https://i.scdn.co/image/ab67616d0000b273b817e721691aff3d67f26c04',
    lyrics:
      "I got a feelin' I'm gon' be alright\nOkay, alright\nIt's about damn time",
    youtubeLink:
      'https://www.youtube.com/watch?v=wnWxeBfV2ZQ&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=13&ab_channel=Lizzo-Topic',
  },
  {
    id: 13,
    name: 'Tubthumping',
    artist: 'Chumbawamba',
    spotifyLink: 'https://open.spotify.com/track/5YScXJKtefsgdskIy60N7A',
    image: 'https://i.scdn.co/image/ab67616d0000b2735c4c06edb5f620551acf8df9',
    lyrics:
      'I get knocked down, but I get up again\nYou are never gonna keep me down',
    youtubeLink:
      'https://www.youtube.com/watch?v=0AAbY9Pvp6A&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=14&ab_channel=Chumbawamba-Topic',
  },
  {
    id: 14,
    name: 'On The Road',
    artist: 'Keane',
    spotifyLink: 'https://open.spotify.com/track/1sAju0j7q4L09ynwEFQQPn',
    image: 'https://i.scdn.co/image/ab67616d0000b27316ccd869f332eb6bb17814ce',
    lyrics: "Golden light lies ahead\nIt's just around the bend",
    youtubeLink:
      'https://www.youtube.com/watch?v=iJqjZU5iiS8&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=15&ab_channel=Keane-Topic',
  },
  {
    id: 15,
    name: 'Unstoppable',
    artist: 'Sia',
    spotifyLink: 'https://open.spotify.com/track/1yvMUkIOTeUNtNWlWRgANS',
    image: 'https://i.scdn.co/image/ab67616d0000b273754b2fddebe7039fdb912837',
    lyrics: "I'm invincible Yeah,\nI win every single game",
    youtubeLink:
      'https://www.youtube.com/watch?v=I90KY3HNm0Y&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=16&ab_channel=Sia-Topic',
  },
  {
    id: 16,
    name: 'Get Lucky (feat. Pharrell Williams & Nile Rodgers)',
    artist: 'Daft Punk',
    spotifyLink: 'https://open.spotify.com/track/69kOkLUCkxIZYexIgSG8rq',
    image: 'https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937',
    lyrics: "We're up all night to get lucky",
    youtubeLink:
      'https://www.youtube.com/watch?v=4D7u5KF7SP8&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=17&ab_channel=DaftPunk-Topic',
  },
  {
    id: 17,
    name: "Everything's Gonna Be Alright",
    artist: 'Sweetbox',
    spotifyLink: 'https://open.spotify.com/track/1ifq3DVpguU02W6Prh5T3u',
    image: 'https://i.scdn.co/image/ab67616d0000b27305ca28350f10bd09905a0929',
    lyrics: "Everything's gonna be alright",
    youtubeLink:
      'https://www.youtube.com/watch?v=h2wUFr4JQTs&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=18&ab_channel=Sweetbox-Topic',
  },
  {
    id: 18,
    name: 'Underdog',
    artist: 'Alicia Keys',
    spotifyLink: 'https://open.spotify.com/track/7FsAFw1oZeTJUZmIzSh0cg',
    image: 'https://i.scdn.co/image/ab67616d0000b273844c2527b8254266a3d8d300',
    lyrics: 'You will rise up, rise up, yeah',
    youtubeLink:
      'https://www.youtube.com/watch?v=JkEaoGnHb9Q&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=19&ab_channel=AliciaKeys-Topic',
  },
  {
    id: 19,
    name: 'Rise Up',
    artist: 'Andra Day',
    spotifyLink: 'https://open.spotify.com/track/0tV8pOpiNsKqUys0ilUcXz',
    image: 'https://i.scdn.co/image/ab67616d0000b273ccd9af18cc83991382c9ab9a',
    lyrics: "I'll rise like the day",
    youtubeLink:
      'https://www.youtube.com/watch?v=ZMpXtI6Nhsk&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=20&ab_channel=AndraDay-Topic',
  },
  {
    id: 20,
    name: 'Good as Hell',
    artist: 'Lizzo',
    spotifyLink: 'https://open.spotify.com/track/6KgBpzTuTRPebChN0VTyzV',
    image: 'https://i.scdn.co/image/ab67616d0000b273bf7d271b8f3051af3cf0bf55',
    lyrics: "Baby, how you feelin'?\nFeelin' good as hell",
    youtubeLink:
      'https://www.youtube.com/watch?v=xZdj3LM5X1M&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=21&ab_channel=Lizzo-Topic',
  },
  {
    id: 21,
    name: 'On Top Of The World',
    artist: 'Imagine Dragons',
    spotifyLink: 'https://open.spotify.com/track/5GWRm7nIODJA6wUnDfb1xC',
    image: 'https://i.scdn.co/image/ab67616d0000b2735419f930b160fc120e8c9462',
    lyrics: "Been dreaming of this since a child\nI'm on top of the world",
    youtubeLink:
      'https://www.youtube.com/watch?v=dj86haGuI8w&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=22&ab_channel=ImagineDragons-Topic',
  },
  {
    id: 22,
    name: 'I’m Ready (with Demi Lovato)',
    artist: 'Sam Smith',
    spotifyLink: 'https://open.spotify.com/track/1fipvP2zmef6vN2IwXfJhY',
    image: 'https://i.scdn.co/image/ab67616d0000b2734faa7bcdea2019fc871ef49e',
    lyrics: "I'm ready I'm ready\nFor someone to love me",
    youtubeLink:
      'https://www.youtube.com/watch?v=nJgmhvnjOPk&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=23&ab_channel=SamSmith-Topic',
  },
  {
    id: 23,
    name: 'New Day',
    artist: '폴킴',
    spotifyLink: 'https://open.spotify.com/track/78FwF2MisGmnjbMydmntr8',
    image: 'https://i.scdn.co/image/ab67616d0000b2734981853b7b84e8a3b0cd0124',
    lyrics: '이뤄질 거라 믿으면\n언젠간 꼭 오겠지',
    youtubeLink:
      'https://www.youtube.com/watch?v=hGFKxgpa3fc&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=24&ab_channel=PaulKim-Topic',
  },
  {
    id: 24,
    name: 'Happy Things',
    artist: '제이레빗',
    spotifyLink: 'https://open.spotify.com/track/7gwu8e5AmtSvV5F1EeAY45',
    image: 'https://i.scdn.co/image/ab67616d0000b273938b7e74534bb8cb367c29e2',
    lyrics: '아주 머리가 잘 돌아갈 때\n말도 안돼! 공부 안 했는데 백점',
    youtubeLink:
      'https://www.youtube.com/watch?v=Z10O-rmUDEo&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=25&ab_channel=JRabbit-Topic',
  },
  {
    id: 25,
    name: '새해 복',
    artist: '장기하와 얼굴들',
    spotifyLink: 'https://open.spotify.com/track/6lvVk13gK9xWjDjqTZnPLp',
    image: 'https://i.scdn.co/image/ab67616d0000b273a026e2391a8965a17396f472',
    lyrics:
      '새해 복만으로도 돼\n절대 잘 하지 마 (돼)\n노력을 하지 마 (돼)\n새해 복만으로도 돼',
    youtubeLink:
      'https://www.youtube.com/watch?v=sGXoIluStPY&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=26&ab_channel=Kiha%26theFaces-Topic',
  },
  {
    id: 26,
    name: '행복 (Happiness)',
    artist: 'Red Velvet',
    spotifyLink: 'https://open.spotify.com/track/6XP9L7di5JnOc9WaeAW8oe',
    image: 'https://i.scdn.co/image/ab67616d0000b273ccd9a8fe25e9ae6039ac6ce6',
    lyrics:
      'Shine On Me Let It Shine On Me Yeah\n내 품에 Let It Shine\nShine On Me Let It Shine On Me Yeah\n내 두 팔에 Let It Shine',
    youtubeLink:
      'https://www.youtube.com/watch?v=K0THWR1irk0&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=27&ab_channel=RedVelvet-Topic',
  },
  {
    id: 27,
    name: '이루리',
    artist: '우주소녀',
    spotifyLink: 'https://open.spotify.com/track/42zMiF3EFBg5CsYbgKdhj1',
    image: 'https://i.scdn.co/image/ab67616d0000b27375a05a342311ea842c4deec6',
    lyrics: '이루리 이루리 La\n이루리 이루리 La\n모두 다 이뤄질 거야',
    youtubeLink:
      'https://www.youtube.com/watch?v=Jz1Mqg_-SRk&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=28&ab_channel=WJSN-Topic',
  },
  {
    id: 28,
    name: 'Celebrity',
    artist: 'IU',
    spotifyLink: 'https://open.spotify.com/track/5nCwjUUsmBuNZKn9Xu10Os',
    image: 'https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff',
    lyrics:
      '잊지마 이 오랜 겨울 사이\n언 틈으로 피울 꽃 하나\n보이니 하루 뒤 봄이 얼마나\n아름다울지 말야',
    youtubeLink:
      'https://www.youtube.com/watch?v=ZThVobEtp_o&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=29&ab_channel=IU-Topic',
  },
  {
    id: 29,
    name: '개화 (Flowering)',
    artist: 'LUCY',
    spotifyLink: 'https://open.spotify.com/track/1ygmHMAn6HYtCrQ4fHqD0x',
    image: 'https://i.scdn.co/image/ab67616d0000b2735b558b31b6ba531d48f46007',
    lyrics: '괜찮아 (괜찮아) 언젠가 (언젠가) 파랗게 피어날 거야',
    youtubeLink:
      'https://www.youtube.com/watch?v=7jxlsVRylq8&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=30&ab_channel=LUCY-Topic',
  },
  {
    id: 30,
    name: 'I (feat. 버벌진트)',
    artist: 'TAEYEON',
    spotifyLink: 'https://open.spotify.com/track/5ZkITfPpcNPnyYGTibkO6m',
    image: 'https://i.scdn.co/image/ab67616d0000b273f531f18feaf3c28366ad52d4',
    lyrics: '아득했던 날, 저 멀리 보내고 찬란하게 날아가',
    youtubeLink:
      'https://www.youtube.com/watch?v=ShP6KqZVQtM&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=31&ab_channel=TAEYEON-Topic',
  },
  {
    id: 31,
    name: '한 페이지가 될 수 있게',
    artist: 'DAY6',
    spotifyLink: 'https://open.spotify.com/track/21BoUOSvHlXgcEhiA4T1nA',
    image: 'https://i.scdn.co/image/ab67616d0000b273c4541a0a847e512a214d8522',
    lyrics: '아름다운 청춘의 한 장 함께 써내려 가자',
    youtubeLink:
      'https://www.youtube.com/watch?v=-9fC6oDFl5k&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=32&ab_channel=DAY6-Topic',
  },
  {
    id: 32,
    name: '행운을 빌어요',
    artist: '페퍼톤스',
    spotifyLink: 'https://open.spotify.com/track/03JARaiVyO6xN2UNDi7NYZ',
    image: 'https://i.scdn.co/image/ab67616d0000b2737e46d330530b121f55cfa4e5',
    lyrics: '긴 여행의 날들\n끝없는 행운만이\n그대와 함께이길',
    youtubeLink:
      'https://www.youtube.com/watch?v=x_Y_TWbRWCA&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=33&ab_channel=PEPPERTONES-Topic',
  },
  {
    id: 33,
    name: '고민보다 Go',
    artist: 'BTS',
    spotifyLink: 'https://open.spotify.com/track/5vOT8VO87TAnUjh0oADwb1',
    image: 'https://i.scdn.co/image/ab67616d0000b273829305487c8f3b96a1d955b3',
    lyrics: 'Yolo yolo yolo yo\nYolo yolo yo\n탕진잼 탕진잼 탕진잼',
    youtubeLink:
      'https://www.youtube.com/watch?v=AEm5O3VnKi8&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=34&ab_channel=BTS-Topic',
  },
  {
    id: 34,
    name: 'MONEY',
    artist: 'LISA',
    spotifyLink: 'https://open.spotify.com/track/7hU3IHwjX150XLoTVmjD0q',
    image: 'https://i.scdn.co/image/ab67616d0000b273330f11fb125bb80b760f9e19',
    lyrics:
      'Dolla bills\nDolla bills\nWatch it fallin for me\nI love the way that feels',
    youtubeLink:
      'https://www.youtube.com/watch?v=4YSHPGn9-LM&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=35&ab_channel=LISA-Topic',
  },
  {
    id: 35,
    name: '날개 (Feel So Fine)',
    artist: '태연',
    spotifyLink: 'https://open.spotify.com/track/5GOXozqZHMtpUXNciSOWS1',
    image: 'https://i.scdn.co/image/ab67616d0000b2738da57096b4f09bd7cc6e1954',
    lyrics:
      'Oh oh 하늘 끝까지\nOh oh 가득 펼쳐진\nI know you know 환히 빛나는 World\nI feel so fine',
    youtubeLink:
      'https://www.youtube.com/watch?v=YIrON_YUE70&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=36&ab_channel=TAEYEON-Topic',
  },
  {
    id: 36,
    name: 'We Go Up',
    artist: 'NCT DREAM',
    spotifyLink: 'https://open.spotify.com/track/26vOBLHS116a4WNUVlvAUW',
    image: 'https://i.scdn.co/image/ab67616d0000b273182f42112113f08871e71c53',
    lyrics:
      '좀 더 멀리 날아 보려고 해\n서툰 날 빛나게 해 준 날의\n기억들로 날 아름답게 해\n이번 트랙을 끝내 자 다음 스테이지',
    youtubeLink:
      'https://www.youtube.com/watch?v=Av5mL5V5HZw&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=37&ab_channel=NCTDREAM-Topic',
  },
  {
    id: 37,
    name: 'Hello Future',
    artist: 'NCT DREAM',
    spotifyLink: 'https://open.spotify.com/track/332GJ8ykVuEt3jOT1sy7j6',
    image: 'https://i.scdn.co/image/ab67616d0000b273e6d118f2ad157bf0bbfb83cf',
    lyrics:
      "기다렸어 어서 와\n어디든 We're coming together\n아무 걱정 하지 마\n잘 될 거야 Hello Future",
    youtubeLink:
      'https://www.youtube.com/watch?v=UpeUA9rtAJk&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=38&ab_channel=NCTDREAM-Topic',
  },
  {
    id: 38,
    name: '비누',
    artist: 'BIBI',
    spotifyLink: 'https://open.spotify.com/track/0lSJQip2wVidbu1JfZ4IEQ',
    image: 'https://i.scdn.co/image/ab67616d0000b27359b2cee47926f1d35b285519',
    lyrics:
      '비누로 깨끗이 씻어내면\n상처입은 것들을 다 씻어내면\n그속에 든 이쁜 마음이 보여\n너랑 나랑 같이 비누 하자',
    youtubeLink:
      'https://www.youtube.com/watch?v=JeuZ5RCgvwM&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=39&ab_channel=BIBI-Topic',
  },
  {
    id: 39,
    name: 'ANTIFRAGILE',
    artist: 'LE SSERAFIM',
    spotifyLink: 'https://open.spotify.com/track/4fsQ0K37TOXa3hEQfjEic1',
    image: 'https://i.scdn.co/image/ab67616d0000b273a991995542d50a691b9ae5be',
    lyrics:
      '더 높이 가줄게 내가 바랐던 세계 젤 위에\n떨어져도 돼 I’m antifragile antifragile',
    youtubeLink:
      'https://www.youtube.com/watch?v=SZiwpL62to8&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=40&ab_channel=LESSERAFIM-Topic',
  },
  {
    id: 40,
    name: '작전명 청-춘!',
    artist: '잔나비',
    spotifyLink: 'https://open.spotify.com/track/2C39KrMvf6G2EMIx7uC7ub',
    image: 'https://i.scdn.co/image/ab67616d0000b273834e69858ed0f1b4ccbe0188',
    lyrics:
      '오늘밤 우리는 내일 부를 노랠 짓네\n친구야 내일도 함께 부르자 우리는\n청춘 청춘 청춘\n비와 바람 천둥에 소리를 이겨 춤을 추겠네',
    youtubeLink:
      'https://www.youtube.com/watch?v=HrCCo-tFRgY&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=41&ab_channel=JANNABI-Topic',
  },
  {
    id: 41,
    name: '매직카펫라이드',
    artist: '자우림',
    spotifyLink: 'https://open.spotify.com/track/5rtSUuJx5VMaG88z9YEJUa',
    image: 'https://i.scdn.co/image/ab67616d0000b273bcc7ff36e02247850aa2dacb',
    lyrics:
      '이렇게 멋진 푸른세상 속을\n나르는 마법 융단을 타고\n이렇게 멋진 장미빛 인생을\n당신과 나와 우리 둘이 함께',
    youtubeLink:
      'https://www.youtube.com/watch?v=kUlMiYseY_U&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=44&ab_channel=Jaurim-Topic',
  },
  {
    id: 42,
    name: 'Answer : Love Myself',
    artist: 'BTS',
    spotifyLink: 'https://open.spotify.com/track/2X3UgVLSA4wYriGIQyYmMA',
    image: 'https://i.scdn.co/image/ab67616d0000b2733825e6d4d02e4b4c0cec7e1d',
    lyrics:
      '왜 자꾸만 감추려고만 해\n니 가면 속으로\n내 실수로 생긴 흉터까지\n다 내 별자린데',
    youtubeLink:
      'https://www.youtube.com/watch?v=9mwRYgMmSGE&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=42&ab_channel=BTS-Topic',
  },
  {
    id: 43,
    name: '여행',
    artist: '볼빨간사춘기',
    spotifyLink: 'https://open.spotify.com/track/4dMGKGfaWMZNLQEjkd8lme',
    image: 'https://i.scdn.co/image/ab67616d0000b273186da8518d2ddf313e6dfee3',
    lyrics: 'I can fly away\nFly always, always, always\nFly always',
    youtubeLink:
      'https://www.youtube.com/watch?v=DMcRIihAq9Q&list=PLMOnBPx_op0Um_NXofYyx26WGAG6ApwZI&index=43&ab_channel=BOL4-Topic',
  },
];
