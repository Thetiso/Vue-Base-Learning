<template>
    <div>
        <h1>this is page for user who's id = {{userId}}!</h1>
    </div>
</template>
<script>
    export default {
        asyncData ({ params, env, error }) {
            console.log(env, params);
            return {
                name:'d',
                number:'f',
                userId: params.id,
            }
        },
        data: function() {
            return {
                userId: 0,
            }
        },
        beforeMount: function () {
            console.log(this.request)
        },
    }
</script>
<style>

</style>
