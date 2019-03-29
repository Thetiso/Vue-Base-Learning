<template>
    <div>
        <h1>this is general user page!</h1>
        <div>
            <h1>Url Query</h1>
            <h3>user name : {{params.nickName}}</h3>
            <h3>user gender : {{params.genderDesc}}</h3>
        </div>
        <div>
            <h1>Url Params</h1>
            <h3>user name : {{query.nickName}}</h3>
            <h3>user gender : {{query.genderDesc}}</h3>
        </div>
        <div>
            <h1>Cached Params</h1>
            <h3>user name : {{userCached.user.nickname}}</h3>
            <h3>user gender : {{userCached.user.gender}}</h3>
        </div>
        <userAvatar></userAvatar>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import userAvatar from '~/components/UserAvatar.vue';
    export default {
        asyncData: function ({ params, query, env, error }) {
            let gender = params.gender;
            let genderDesc = gender ? 'male' : '';
            let gender2 = query.gender;
            let genderDesc2 = gender2 ? 'male' : '';
            return {
                params: {
                    nickName: params.nickname,
                    genderDesc: genderDesc,
                },
                query: {
                    nickName: query.nickname,
                    genderDesc: genderDesc2,
                },
            }
        },
        computed: {
            ...mapState({
               userCached: 'user'
            }),
        },
        mounted: function () {
            console.log(this.$store.state.user.user)
            console.log(this.userCached)
        },
        components: {
            userAvatar
        }
    }
</script>
<style>

</style>
