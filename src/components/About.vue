<template>
    <div class="about" id="about">
        <div class="container">
            <div class="about-content row">
                <div class="about-left col-md-5">
                    <img src="../assets/my.jpg" class="img-fluid" alt="">
                </div>
                <div class="about-right col-md-7">
                    <div class="filter-menu">
                        <ul>
                            <li v-on:click="showHide1" class="active">about me</li>
                            <li v-on:click="showHide2">my skills</li>
                            <li v-on:click="showHide3">exparience</li>
                        </ul>
                    </div>

                    <div class="content">
                        <div class="item" v-if="show1">
                            <h1>About My self</h1>
                            <p>
                                I am monabbirhasan I am professional full-stack website and mobile apps developer
                                I have lot of exparience in we development, I am honestly working we development sinc
                                2019.
                                and also I have wordpress cms shopify wix skills.
                                Thanks.
                            </p>
                            <div class="download">
                                <a name="" id="" class="btn btn-primary" href="#" role="button" download>download cv</a>
                            </div>
                        </div>

                        <div class="item" v-if="show2">
                            <h1>my Skills</h1>
                            <div class="skill-box">
                                <p>
                                    I am monabbirhasan I am professional
                                </p>
                                <div class="wrapper d-flex">

                                    <div class="skill-wrapper">
                                        <div class="skill-item">
                                            <label for="web development">web design <span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>
                                        </div>
                                        <div class="skill-item">
                                            <label for="web development">mern-stack<span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>
                                        </div>
                                        <div class="skill-item">
                                            <label for="web development">mobile app development<span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>

                                        </div>
                                        <div class="download">
                                            <a name="" id="" class="btn btn-primary" href="#" role="button"
                                                download>download cv</a>
                                        </div>
                                    </div>
                                    <div class="skill-wrapper">
                                        <div class="skill-item">
                                            <label for="web development">web development <span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>
                                        </div>
                                        <div class="skill-item">
                                            <label for="web development">mean-stack<span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>
                                        </div>

                                        <div class="skill-item">
                                            <label for="web development">desktop app development<span
                                                    class="badge badge-primary ml-2">70%</span></label><br />
                                            <div class="outer-box">
                                                <div class="inner-box"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item" v-if="show3">
                            <h1>my exparience</h1>
                            <p>
                                I am monabbirhasan I am professional full-stack website and mobile apps developer
                                I have lot of exparience in we development, I am honestly working we development sinc
                                2019.
                                and also I have wordpress cms shopify wix skills.
                                Thanks.
                            </p>
                            <div class="download">
                                <a name="" id="" class="btn btn-primary" href="../assets/my.jpg" role="button"
                                    download>download cv</a>
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
    name: 'About-A',
    data() {
        return {
            show1: true,
            show2: false,
            show3: false
        }

    }, methods: {
        showHide1() {
            this.show1 = !this.show1;
            this.show2 = false;
            this.show3 = false;
        },
        showHide2() {
            this.show2 = !this.show2;
            this.show1 = false
            this.show3 = false
        },
        showHide3() {
            this.show3 = !this.show3;
            this.show2 = false;
            this.show1 = false;
        }


    }
}
</script>

<style>
.about {
    padding: 70px 0;
    background: #fff;
    margin-top: 20px;
}

.about-content {
    padding: 10px;
}

.filter-menu {
    padding: 0;
    text-align: left;
}

.about-content .filter-menu ul li {
    display: inline-block;
    list-style: none;
    padding: 5px 10px;
    text-transform: capitalize;
    font-weight: 400;
    text-align: left;
    font-size: 15px;
    background: #000;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    box-shadow: -2px -2px 5px #bbb, 2px 2px 5px #bbb;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: .2s;
}

.filter-menu ul li:hover {
    background: #2196f3;
}

.about-content .filter-menu ul .active {
    background: #000;
}

.content {
    padding: 10px 0;
    text-align: left;
    display: grid;
    grid-template-columns: auto auto auto;
    overflow: hidden;
}

.content .item {
    padding: 10px;
}

.content .item h1 {
    text-align: left;
    text-transform: capitalize;
    color: #000;
    padding: 10px 0;
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Fira Sans', sans-serif;
}

.content .item p {
    padding: 10px 0;
    text-transform: capitalize;
    color: #000;
    font-family: 'Roboto Mono', monospace;
}

dl,
ol,
ul {
    margin: 0 !important;
    padding: 0 !important;
}

.about-left img {
    width: 400px;
    height: 70vh;
    border: 5px solid #2196f3;
    filter: drop-shadow(1px 1px 6px #3b8ed1) hue-rotate(0deg);
    animation: filter 2s linear infinite;
}

.skill-box {
    padding: 10px 0;
}

.download {
    padding: 10px 0;
    margin-left: auto;
}

.download a {
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    background: #000;
}

.skill-item {
    padding: 10px 0;
    width: 100%;
    margin-right: 30px;
}

.skill-item label {
    font-size: 12px;
    text-transform: capitalize;
    color: #000;
    font-weight: 400;
}

.skill-item .outer-box {
    width: 150px;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    background: #cdd9e5;
    box-shadow: -2px 2px 2px #bbb, 2px 2px 2px #bbb;

}

.skill-item .outer-box .inner-box {
    width: 50px;
    height: 5px;
    background: #2196f3;
    border-radius: 30px;
}
</style>