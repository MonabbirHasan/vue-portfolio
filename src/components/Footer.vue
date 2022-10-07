<template>
    <footer>
        <div class="container">
            <div class="wrap">
                <div class="row">
                    <div class="col-md-4 footer-item">
                        <h4>monabbirhasan</h4>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <a href="#">
                            <span>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </span>
                        </a>
                    </div>
                    <div class="col-md-4 footer-item">
                        <h4>services</h4>
                        <p>web design</p>
                        <p>web devlelopment</p>
                        <p>app development</p>
                        <p>graphics design</p>
                    </div>
                    <div class="col-md-4 footer-item">
                        <h4>have any quistions</h4>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        <p>+8801743714489</p>
                        <p>hmd320667@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer-f"
}
</script>

<style>
footer {
    padding: 50px 0;
    width: 100%;
    background: #2196f3;
}

.footer-item h4,
p {
    padding: 5px;
    text-align: left;
    color: #fff;
}

.footer-item {
    text-align: left;
}

.footer-item h4 {
    text-transform: capitalize;
    font-weight: 600;
    color: #000;
}

.footer-item span {
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
    padding: 5px;
    cursor: pointer;
}
.footer-item span:hover{
    color: #000;
}
.footer-item p{
    cursor: pointer;
}
.footer-item p:hover{
    color: #000;
}
</style>