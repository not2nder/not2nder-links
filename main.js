import './src/styles/global/global.css'
import { getSubs } from './src/js/counter.js'
import { getProfile } from './src/js/getProfile.js'

document.querySelector('#app').innerHTML = `
<main>
    <div class="head">
        <h2>not2nder</h2>
        <p style="color: var(--white);">Artist and Developer</p>
        <div class="social">
            <a href="https://open.spotify.com/artist/4WB56sWCElzGrYSNcZgwro" target="_blank"><i class="fa-brands fa-spotify"></i></a>
            <a href="https://www.youtube.com/@not2nder" target="_blank"><i class="fa-brands fa-square-youtube"></i></a>
            <a href="https://www.deezer.com/artist/253733472" target="_blank"><i class="fa-brands fa-deezer"></i></a>
            <a href="https://tiktok/@not2nder" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://instagram.com/2nder.dev" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/not2nder" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
    <div class="buttons">
        <!-- fist item on top -->
        <div class="pinned">
            <div class="text">
                <p>New Release!</p>
                <a href="https://open.spotify.com/album/1Mkazs5hL3ILMQ2V3JCWLW" target="_blank">Unfortunately, it's over </a>
            </div>
        </div>
        <div class="yt">
            <div class="top">
                <i class="fa-brands fa-youtube"></i>
                <p>Recommended by not2nder</p>
            </div>
            <div id="iframe-card" class="iframe-wrapper" onclick="window.open('https://www.youtube.com/watch?v=aZ3h14UdWoo')">
                <img class="video-card" src="https://img.youtube.com/vi/aZ3h14UdWoo/maxresdefault.jpg" alt="Featured Video">
                <div class="video-title">
                    <p>BREAK TAPES: Cyberia Collection</p>
                </div>
            </div>

            <div class="bottom" onclick="window.open('https://youtube.com/@not2nder')">
                <div class="left">
                    <img id="yt-image" src="" alt="">
                        <div class="name">
                        <a class="channel" href="https://www.youtube.com/@not2nder" target="_blank">
                            @not2nder <svg width="13px" fill="#AAAAAA" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7z"></path></svg>
                        </a>
                        <div id="carry">
                            <p id="subs"></p>
                        </div>
                    </div>
                    
                </div>
                <a href="https://youtube.com/@not2nder" target="_blank">
                    <button class="secondary">
                        Subscribe
                    </button>
                </a>
            </div>
        </div>
        <button class="primary" onclick="window.open('https://open.spotify.com/artist/4WB56sWCElzGrYSNcZgwro')">
            <a href="https://open.spotify.com/artist/4WB56sWCElzGrYSNcZgwro" target="_blank"><i class="fa-brands fa-spotify"></i> Ｓｐｏｔｉｆｙ</a>
        </button>
        <button class="primary" onclick="window.open('https://instagram.com/2nder.dev')">
            <a href="https://instagram.com/2nder.dev" target="_blank"><i class="fa-brands fa-instagram"></i> 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮</a>
        </button>
        <button class="primary" onclick="window.open('https://tiktok.com/@not2nder')">
            <a href="https://tiktok.com/@not2nder" target="_blank"><i class="fa-brands fa-tiktok"></i> T̶i̶k̶t̶o̶k̶</a>
        </button>
    </div>
</main>
`
getSubs(document.querySelector("#subs"))
getProfile(document.querySelector("#yt-image"))