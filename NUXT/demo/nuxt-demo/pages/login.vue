<template>
    <div>
        <h2>
            login page!
        </h2>

        <h1 @click="$_login"> click to login by random!</h1>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex';
    export default {
        methods: {
            //两种方式
            //方式一
            // $_login: function() {
            //     this.$store.dispatch('user/login')
            // }
            //方式二
            ...mapActions('user', {
                $_login: 'login'
            })
        }
    }
</script>
<style>

</style>
