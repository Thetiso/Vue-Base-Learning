<template>
    <section class="container">
        <commonHeader></commonHeader>
        <commonSearch></commonSearch>
        <div>
            index.html
        </div>
        <commonFooter></commonFooter>
    </section>
</template>

<script>
    import commonFooter from '~/components/common/footer.vue'
    import commonHeader from '~/components/common/header.vue'
    import commonSearch from '~/components/common/search.vue'
    export default {
        name: "index",
        components: {
            commonFooter,
            commonHeader,
            commonSearch,
        }
    }
</script>

<style scoped>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
