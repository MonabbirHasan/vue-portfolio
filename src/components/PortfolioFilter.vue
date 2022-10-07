<template>
    <div class="portfolio" id="portfolio">
        <div class="container">
            <div class="title">
                <h1>Portfolio</h1>
            </div>

            <div class="portfolio-filter">

                <div class="menu">
                    <ul>
                        <li @click="activeTabe ='1'">All</li>
                        <li @click="activeTabe ='2'">PHP website</li>
                        <li @click="activeTabe ='3'">React.js website</li>
                        <li @click="activeTabe ='4'">Python website</li>
                        <li @click="activeTabe ='5'">wordpress website</li>
                    </ul>
                </div>
                <div class="tabs-content">

                    <div class="portfolio-box" v-if="activeTabe==='1'">
                        <div class="portfolio-card" v-for="item in card_details" :key="item.id">
                            <div class="card-img"><img src="../assets/img2.png" class="img-fluid" alt=""></div>
                            <div class="card-link">
                                <a href='{{item.git_link}}'>
                                    <span>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                </a>
                                <a href='{{item.live_link}}'>
                                    <span>
                                        <ion-icon name="link-outline"></ion-icon>
                                    </span>
                                </a>
                            </div>
                            <div class="card-title">
                                <h3>1 Portfolio website</h3>
                            </div>
                            <div class="card-desc">
                                <p>I am Using This technology html5,css3,js,vue.js,php,laravel for build this website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box" v-if="activeTabe==='2'">
                        <div class="portfolio-card" v-for="item in card_details" :key="item.id">
                            <div class="card-img"><img src="../assets/img2.png" class="img-fluid" alt=""></div>
                            <div class="card-link">
                                <a href='{{item.git_link}}'>
                                    <span>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                </a>
                                <a href='{{item.live_link}}'>
                                    <span>
                                        <ion-icon name="link-outline"></ion-icon>
                                    </span>
                                </a>
                            </div>
                            <div class="card-title">
                                <h3>2 Portfolio website</h3>
                            </div>
                            <div class="card-desc">
                                <p>I am Using This technology html5,css3,js,vue.js,php,laravel for build this website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box" v-if="activeTabe==='3'">
                        <div class="portfolio-card" v-for="item in card_details" :key="item.id">
                            <div class="card-img"><img src="../assets/img2.png" class="img-fluid" alt=""></div>
                            <div class="card-link">
                                <a href='{{item.git_link}}'>
                                    <span>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                </a>
                                <a href='{{item.live_link}}'>
                                    <span>
                                        <ion-icon name="link-outline"></ion-icon>
                                    </span>
                                </a>
                            </div>
                            <div class="card-title">
                                <h3>3 Portfolio website</h3>
                            </div>
                            <div class="card-desc">
                                <p>I am Using This technology html5,css3,js,vue.js,php,laravel for build this website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box" v-if="activeTabe==='4'">
                        <div class="portfolio-card" v-for="item in card_details" :key="item.id">
                            <div class="card-img"><img src="../assets/img2.png" class="img-fluid" alt=""></div>
                            <div class="card-link">
                                <a href='{{item.git_link}}'>
                                    <span>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                </a>
                                <a href='{{item.live_link}}'>
                                    <span>
                                        <ion-icon name="link-outline"></ion-icon>
                                    </span>
                                </a>
                            </div>
                            <div class="card-title">
                                <h3>4 Portfolio website</h3>
                            </div>
                            <div class="card-desc">
                                <p>I am Using This technology html5,css3,js,vue.js,php,laravel for build this website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box" v-if="activeTabe==='5'">
                        <div class="portfolio-card" v-for="item in card_details" :key="item.id">
                            <div class="card-img"><img src="../assets/img2.png" class="img-fluid" alt=""></div>
                            <div class="card-link">
                                <a href='{{item.git_link}}'>
                                    <span>
                                        <ion-icon name="logo-github"></ion-icon>
                                    </span>
                                </a>
                                <a href='{{item.live_link}}'>
                                    <span>
                                        <ion-icon name="link-outline"></ion-icon>
                                    </span>
                                </a>
                            </div>
                            <div class="card-title">
                                <h3>5 Portfolio website</h3>
                            </div>
                            <div class="card-desc">
                                <p>I am Using This technology html5,css3,js,vue.js,php,laravel for build this website
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'portfolio-p',
    data() {
        return {
            activeTabe: '1',
            card_details: [
                {
                    "id": 1,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": 'logo-github',
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 2,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 3,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 4,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 5,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 6,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 7,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 8,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
                {
                    "id": 9,
                    "img": "../assets/img2.png",
                    "live_link": "https://monabbirhasan.github.io/metaportal",
                    "git_link": "https://monabbirhasan.github.io/metaportal",
                    "live_icon": "link-outline",
                    "git_icon": "logo-github",
                    "card_title": "Portfolio website",
                    "card_desc": "I am Using This technology html5,css3,js,vue.js,php,laravel for build this website"

                },
            ]
        }
    }

}
</script>

<style>
.title h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 3rem;
    display: inline-block;
    border-bottom: 2px solid #2196f3;
    padding: 10px 0;
}

.portfolio-box {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
}

.portfolio-filter {
    padding: 50px 0;
}

.portfolio-card:nth-child(even) {
    background: #2196f3;
}

.portfolio-card:nth-child(odd) {
    background: #fff;
}

.portfolio-card {
    padding: 10px;
    width: 300px;
    background: #fff;
    box-shadow: -2px -2px 5px #eee;
    text-align: left;
    margin: 30px;
    filter: drop-shadow(1px 1px 2px #bbb);
}

.portfolio-card .card-img {
    overflow: hidden;
    transition: .5s;
}

.portfolio-card .card-img img {
    width: 100%;
    height: auto;
    transition: .5s;
    transform: scale(1.1) rotateY(-0deg);
}

.portfolio-card .card-img img:hover {
    transform: scale(1.5) rotateY(40deg);
}

.portfolio-card .card-link {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.portfolio-card .card-link a span {
    font-size: 18px;
    color: #000;
    cursor: pointer;
}

.portfolio-card .card-link a span:last-child:hover {
    background: #2196f3;
    color: #000;
}

.portfolio-card .card-link a span:first-child:hover {
    color: #fff;
}

.portfolio-card .card-link a span:first-child {
    font-size: 2.3rem;
    /* box-shadow: 2px 2px 5px #eee;
    filter: drop-shadow(2px 4px 6px black); */
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.portfolio-card .card-link a span:last-child {
    font-size: 2.3rem;
    /* box-shadow: 2px 2px 5px #eee; */
    filter: drop-shadow(2px 3px 4px black);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 3px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #fff;
}

.portfolio-card .card-title {
    padding: 10px 0 0 10px;
}

.portfolio-card .card-title h3 {
    font-weight: 600;
    text-transform: capitalize;
    color: #000;
    font-size: 24px;
}

.portfolio-card .card-desc {
    padding: 5px;
}

.portfolio-card .card-desc p {
    font-weight: 400;
    text-transform: capitalize;
    color: #000;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Fira Sans', sans-serif;
    padding: 5px;
}

.menu {
    padding: 10px;
}

.menu ul li {
    display: inline-block;
    background: #2196f3;
    padding: 5px 20px;
    text-transform: capitalize;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    margin: 0 10px;
    font-weight: 500;
    border-radius: 5px;
}

.tabs-content {
    padding: 10px 0;

}

.tabs-content .box {
    padding: 30px;
    background: #eee;
}
</style>