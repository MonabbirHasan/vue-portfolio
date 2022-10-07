<template>
    <div class="banner">
        <div class="banner-content">
            <div class="banner-left ">
                <div class="left-content">
                    <h3>Hi.</h3>
                    <h1>I am monabbirhasan</h1>
                    <p>
                        I am monabbirhasan I am professional full-stack website and mobile apps developer
                        I have lot of exparience in we development, I am honestly working we development sinc 2019.
                        and also I have wordpress cms shopify wix skills.
                        Thanks.
                    </p>
                    <a name="button" id="button" class="btn btn-primary py-2 px-5"
                        href="https://www.fiverr.com/monabbirhasan/create-an-agency-portfolio-business-website-with-elementor"
                        role="button">Hire me</a>
                </div>
            </div>
            <div class="banner-right">
                <img src="../assets/my.jpg" class="img-fluid" alt="monabbirhasan Monabbir Hasan who is monabbir-hasan ">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner-B'
}
</script>

<style>
.banner {
    width: 100%;
    height: 100vh;
    padding: 50px;
    background: #2196f3;
    display: table-cell;
    vertical-align: middle;
    position: relative;
}
.banner-content{
    display: grid;
    grid-template-columns: auto auto;
}

.banner-right::before {
    content: '';
    display: block;
    position: absolute;
    top: 0%;
    left: 0;
    width: 50px;
    height: 50px;
}

.banner-right::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0%;
    right: 0;
    width: 50px;
    height: 50px;
}

.banner-right::before,
.banner-right::after {
    background: none;
    border: 1px solid #eee;
    transform: rotate(46deg);
}

.banner-right img {
    width: 400px;
    height: 70vh;
    border: 20px solid #2196f3;
    box-shadow: -5px -5px 15px #3b8ed1, 5px 5px 15px #3b8ed1;
    filter: drop-shadow(2px 4px 6px #3b8ed1) hue-rotate(0deg);
    animation: filter 2s linear infinite;
}

@keyframes filter {
    0% {
        transform: translateY(0px);
    }

    90% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0deg);
    }
}

.banner-left {
    padding: 10px 0;
    display: table-cell;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    display: flex;
}

.left-content {
    text-align: left;
}

.left-content h3 {
    padding: 10px 0;
    font-weight: 900;
    color: #fff;
    font-family: 'Fira Sans', sans-serif;
    /* font-family: 'Roboto Mono', monospace; */
    /* font-family: 'Roboto Mono', monospace; */
}

.left-content h1 {
    font-weight: 700;
    color: #fff;
    padding: 5px 0;
    text-transform: capitalize;
    font-family: 'Roboto Mono', monospace;

}

.left-content p {
    text-transform: capitalize;
    color: #fff;
    padding: 10px 0;
    font-family: 'Lobster Two', cursive;
    line-height: 45px;
    /* font-family: 'Roboto Mono', monospace; */
}

.left-content #button {
    background: #fff;
    color: #000;
}

.left-content #button:hover {
    background: #000;
    color: #fff;
}
</style>