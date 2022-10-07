<template>
    <section>
        <div class="Home-page">
            <BannerVue />
            <AboutVue />
            <ServicesVue />
            <PortfolioFilterVue />
            <LetestBlogVue />
            <ContactUsVue />
        </div>
    </section>
</template>

<script>
import BannerVue from '@/components/Banner.vue';
import AboutVue from '@/components/About.vue';
import ServicesVue from '@/components/Services.vue';
import PortfolioFilterVue from '@/components/PortfolioFilter.vue';
import LetestBlogVue from '@/components/LetestBlog.vue';
import ContactUsVue from '@/components/ContactUs.vue';
import "../assets/Responsive.css"
export default {
    name: 'Home-H',
    components: {
        BannerVue,
        AboutVue,
        ServicesVue,
        PortfolioFilterVue,
        LetestBlogVue,
        ContactUsVue
    }
}
</script>

<style>
section {
    width: 100%;
    padding: 50px 0;
}
</style>