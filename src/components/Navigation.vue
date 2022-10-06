<template>
    <div class="container">
        <div class="Nav">
            <nav class="navbar navbar-expand-sm navbar-light">
                <a class="navbar-brand" href="/">
                    <span>
                        <ion-icon name="logo-mastodon"></ion-icon>
                    </span>
                    <span>.portfolio</span>
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

                        <li class="nav-item active">
                            <a class="nav-link" href="/">home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#about">about</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#about">skills</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#services">services</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">portfolio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navigation-N'
}
</script>

<style>
.navbar-brand span{
    font-size: 2rem;
    color: #2196f3;
}
.navbar-brand span:nth-child(2){
    font-size: 2rem;
    color: black;
    text-transform: capitalize;
}

.nav-item {
    position: relative;
    margin: 0 5px;
}

.nav-item::before {
    content: '';
    display: block;
    clear: both;
    position: absolute;
    bottom: 0;
    width: 0%;
    background: #2196f3;
    height: 3px;
    transition: .3s ease-in-out;
    border-radius: 10px;
}

.nav-item:hover.nav-item::before {
    width: 100%;
}

.nav-item .nav-link {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1px;
    color: #000 !important;
}

.nav-item .nav-link:hover {
    color: none !important;
}
</style>