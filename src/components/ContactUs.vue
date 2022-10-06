<template>
    <div class="contact">
        <div class="container">
            <div class="title">
                <h1>contact us</h1>
            </div>
            <div class="contact-form">
                <div class="contact-left">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Dhaka&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                            <a href="https://putlocker-is.org"></a><br>
                        </div>
                    </div>
                </div>
                <div class="contact-right ">
                    <form action="/">
                        <div class="form-group">
                            <label for="username">username</label>
                            <input type="text" class="form-control" name="username" id="username"
                                aria-describedby="helpId" placeholder="username">
                        </div>
                        <div class="form-group">
                            <label for="username">E-mail</label>
                            <input type="email" class="form-control" name="email" id="username"
                                aria-describedby="helpId" placeholder="email">
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="message" cols="60" rows="7"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary px-5 py-2">Submit</button>
                    </form>
                    <div class="follow-box">
                        <div class="social">
                            <span>facebook</span>
                            <a href="#">
                                <span>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </span>
                            </a>
                        </div>
                        <div class="social">
                            <span>linkedin</span>
                            <a href="#">
                                <span>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </span>
                            </a>
                        </div>
                        <div class="social">
                            <span>youtube</span>
                            <a href="#">
                                <span>
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </span>
                            </a>
                        </div>
                        <div class="social">
                            <span>instagram</span>
                            <a href="#">
                                <span>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </span>
                            </a>
                        </div>
                        <div class="social">
                            <span>twitter</span>
                            <a href="#">
                                <span>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact-c'
}
</script>
<style>
.mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
}

.contact {
    padding: 10px 0;
    width: 100%;
}

.contact-form {
    padding: 50px 0;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: auto auto;
}

.contact-left {
    padding: 10px;
}

.contact-right {
    text-align: left;
}

.contact-right label {
    font-size: 20px;
    text-transform: capitalize;
    border-bottom: 2px solid #2196f3;
}

.contact-right input {
    border: 2px solid #bbb;
    outline: none;
}

.contact-right #message {
    border: 2px solid #bbb;
    resize: none;
    outline: none;
    border-radius: 5px;
}

.contact-right button {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 600;
    color: #fff;
}

.follow-box {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
}

.follow-box .social {
    padding: 10px;
}

.follow-box .social span {
    font-size: 20px;
    text-align: center;
    text-transform: capitalize;
    font-weight: bolder;
    color: #000;
}

.follow-box .social span:last-child {
    font-size: 24px;
}

.follow-box .social span:last-child:hover {
    color: #2196f3;
}
</style>
