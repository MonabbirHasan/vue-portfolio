<template>
    <div class="services" id="services">
        <div class="container">
            <div class="title">
                <h1>services</h1>
            </div>
            <div class="service-content">

                <div class="item-wrapper">

                    <a href="#" v-for="item in skills" :key="item.id">
                        <div class="service-item">
                            <div class="icon"><span>
                                    <img class="img" src="https://img.icons8.com/material-sharp/30/000000/design.png" />
                                </span></div>
                            <div class="title">
                                <h3>{{item.title}}</h3>
                            </div>
                            <div class="desc">
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service-S',
    data(){
        return{
            skills:[
                {
                    "id":1,
                    "icon":"https://img.icons8.com/material-sharp/30/000000/design.png",
                    "title":"web design",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
                {
                    "id":2,
                    "icon":"https://img.icons8.com/ios-glyphs/30/000000/development.png",
                    "title":"web development",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
                {
                    "id":3,
                    "icon":"https://img.icons8.com/ios-glyphs/30/000000/react.png",
                    "title":"mern-stack",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
                {
                    "id":4,
                    "icon":"https://img.icons8.com/ios-filled/30/000000/angularjs.png",
                    "title":"mean-stack",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
                {
                    "id":5,
                    "icon":"https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-mobile-app-ux-and-ui-flatart-icons-outline-flatarticons.png",
                    "title":"mobile app development",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
                {
                    "id":6,
                    "icon":"https://img.icons8.com/external-others-pike-picture/30/000000/external-Desktop-Applications-software-others-pike-picture-2.png",
                    "title":"desktop application",
                    "desc":"Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                },
            ]
        }
    }
}
</script>

<style>
.services {
    padding: 50px 0;
}

.title h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 2rem;
    display:inline-block;
    border-bottom:2px solid #2196f3;
    padding: 10px 0;
}

.service-content {
    padding: 20px 0;
}

.item-wrapper {
    margin: 50px 0;
    grid-gap: 30px;
    display: grid;
    grid-template-columns: auto auto auto;
}

.service-content .service-item {
    padding: 10px;
    display: inline-block;
    text-align: center;
    z-index: 1;
    margin: 0 10px;
    background: #fff;
    border-bottom: 5px solid #2196f3;
    border-top: 5px solid #2196f3;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 40px;
    position: relative;
    box-shadow: -2px -2px 5px #bbb, 2px 2px 5px #bbb;
    overflow: hidden;
    transition-delay: .5s;
}

.service-content .service-item:nth-child(even) {
    background: red;
}

.service-content .service-item::before {
    content: '';
    display: block;
    clear: both;
    position: absolute;
    left: 0;
    width: 0%;
    height: 0%;
    z-index: -999;
    transform: translateX(20px);
    transition: .5s;
}

.service-content .service-item:hover::before {
    width: 100%;
    bottom: 0;
    height: 100%;
    background: #2196f3;
    transform: translateX(0px);
    transition: .2s;
    color: #fff;
}

.service-content .service-item:hover h3 {
    color: #fff;
    transition: .5s;
}

.service-content .service-item:hover span {
    border-color: #fff;
    color: #fff;
    transition: .5s;
}

.service-content .service-item span .img {
    filter: invert(1);
}

.service-content .service-item:hover span .img {
    filter: invert(1);
    transition: .5s;
}

.service-content .service-item:hover p {
    transition: .5s;
    color: #fff;
}

.service-content .service-item .icon {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 10px 0;
    margin-top: 10px;

}

.service-item .icon span {
    font-size: 2rem;
    color: #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;
    background: #2196f3;
    border: 3px solid #f1e9e9;
    vertical-align: middle;
}

.service-item .title {
    padding: 10px 0;
}

.service-item .title h3 {
    text-transform: capitalize;
    color: #000;
    font-weight: 900;
    font-size: 15px;
    font-family: 'Roboto Mono', monospace;
}

.service-item .desc {
    padding: 10px 0;
    text-align: center;
}

.service-item .desc p {
    text-transform: capitalize;
    color: #000;
    display: inline-block;
    width: 200px;
    font-family: 'Roboto Mono', monospace;
}
</style>