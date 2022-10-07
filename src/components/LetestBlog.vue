<template>
    <div class="blog" id="blog">
        <div class="container">
            <div class="title">
                <h1>Letest Blogs</h1>
            </div>
            <div class="blog-content">
                <div class="blog-box">
                    <div class="blog-card" v-for="item in AllPost" :key="item.id">
                        <div class="thumbnail"><img src="../assets/img1.png" class="img-fluid" alt=""></div>
                        <div class="reaction">
                            <div class="type react-box">
                                <span>
                                    <ion-icon name="person-outline"></ion-icon>
                                </span>
                                <span>admin</span>
                            </div>
                            <div class="date react-box">
                                <span>
                                    <ion-icon name="calendar-outline"></ion-icon>
                                </span>
                                <span>20-09-200</span>
                            </div>
                            <div class="comment react-box">
                                <span>
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                </span>
                                <span>30</span>
                            </div>
                            <div class="like react-box">
                                <span>
                                    <ion-icon name="thumbs-up-outline"></ion-icon>
                                </span>
                                <span>203</span>
                            </div>
                        </div>
                        <div class="title">
                            <h2><a href="#">Tips About Creating A New Web Design Web Design</a></h2>
                        </div>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto laborum vero
                                sapiente
                                voluptatum dignissimos laboriosam esse sequi aliquid cum quas repellat eveniet soluta
                                pariatur molestias omnis, ratione voluptates. Consectetur, eligendi.</p>
                        </div>
                        <div class="read-more"><a name="" id="" class="btn btn-primary" href="#" role="button">read
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blgo-B',
    data() {
        return {
            AllPost: [
                {
                    "id": 1,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 2,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 3,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 4,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 5,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 6,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 7,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 8,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                    "id": 9,
                    "thumbnail": "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg",
                    "date": new Date(),
                    "type": "admin",
                    "comment": 20,
                    "like": 230,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "desc": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
                },
            ]
        }
    }
}
</script>

<style>
.blog {
    width: 100%;
    padding: 50px 0;
}

.blog-box {
    padding: 5px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;

}

.blog-content {
    padding: 50px 0;

}

.blog-card {
    padding: 10px;
    box-shadow: -2px -2px 5px #eee, 2px 2px 5px #eee;
    width: 350px;
    justify-content: center;
    align-items: center;
}

.blog-card .thumbnail {
    width: 100%;
    height: 100%;
    padding: 5px;
}

.blog-card .thumbnail img {
    width: 100%;
    height: auto;
}

.blog-card .reaction {
    padding: 10px 0;
    display: grid;
    gap: 40px;
    grid-template-columns: auto auto auto auto;
}

.blog-card .reaction .react-box {
    padding: 5px;
    display: grid;
}

.reaction .react-box span {
    padding: 0;
    font-size: 13px;
    text-transform: capitalize;
    color: #000;
    font-weight: 400;
}

.blog-card .title {
    padding: 5px;
    text-align: left;
}

.blog-card .title h2 {
    font-size: 22px;
    text-transform: capitalize;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    transition: .2s;
}

.blog-card .title h2:hover {
    color: #2196f3;
}

.blog-card .desc {
    padding: 5px;
    text-align: left;
}

.blog-card .desc p {
    color: #000;
}

.blog-card .read-more {
    padding: 5px;
    text-align: left;
}

.blog-card .read-more a {
    font-weight: 300;
    font-size: 14px;
    text-transform: capitalize;
    color: #fff;
    padding: 3px !important;
}
.blog-card .read-more a:hover{
    background: #000;
}
</style>