<template>
   <div class="title">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
export default {
    name:"pageTitle-T",
}
</script>

<style>
.title h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 3rem;
    display:inline-block;
    border-bottom:2px solid #2196f3;
    padding: 10px 0;
}
</style>