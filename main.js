import './src/styles/global/global.css'
import { getSubs } from './src/js/counter.js'
import { getProfile } from './src/js/getProfile.js'
import './src/js/getDate.js'

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
            <div class="top">
                <h2>Upcoming Release!</h2>
            </div>
            <div class="center">
                <img src="src/assets/Canva.webp" width=120 id="album-cover">
            </div>
            <div class="bottom">
                <div>
                    <h2 id="days"></h2>
                    <p>Days</p>
                </div>
                :
                <div>
                    <h2 id="hours"></h2>
                    <p>Hours</p>
                </div>
                :
                <div>
                    <h2 id="mins"></h2>
                    <p>Minutes</p>
                </div>
                :
                <div>
                    <h2 id="secs"></h2>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
        <div class="yt">
            <div class="bottom" onclick="window.open('https://youtube.com/@not2nder')">
                <div class="left">
                    <img id="yt-image" src="" alt="">
                        <div class="name">
                        <a class="channel" href="https://www.youtube.com/@not2nder" target="_blank">
                            @not2nder
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
        <button class="primary" onclick="window.open('https://music.apple.com/us/artist/not2nder/1735580732')">
            <a href="https://open.spotify.com/artist/4WB56sWCElzGrYSNcZgwro" target="_blank"><svg fill="var(--white)" height="18px" width="18px" viewBox="0 0 512 512"><path d="M503.319,5.939c-5.506-4.705-12.783-6.767-19.958-5.635L169.555,49.852c-12.04,1.901-20.909,12.28-20.909,24.47v99.097 v156.903H99.097C44.455,330.323,0,371.073,0,421.161C0,471.25,44.455,512,99.097,512c54.642,0,99.097-40.75,99.097-90.839v-66.065 V194.588l264.258-41.725v136.169h-49.548c-54.642,0-99.097,40.75-99.097,90.839s44.455,90.839,99.097,90.839 S512,429.959,512,379.871v-66.065V123.871V24.774C512,17.529,508.827,10.646,503.319,5.939z"></path></svg> 𝔸𝕡𝕡𝕝𝕖 𝕄𝕦𝕤𝕚𝕔</a>
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