const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "和煦的糖果风",
        artist: 'Candy_Wind',
        url: 'http://music.163.com/song/media/outer/url?id=439142564',
        cover: 'http://p1.music.126.net/W17K-JoGcG5ldwHK-wttVQ==/109951162805729020.jpg',
      },
      {
        name: 'Bloom of Youth',
        artist: '清水準一',
        url: 'http://music.163.com/song/media/outer/url?id=760058',
        cover: 'http://p1.music.126.net/BxiuK1_8_RXArdjxOqqUeg==/3382097775018074.jpg',
      }
    ]
});