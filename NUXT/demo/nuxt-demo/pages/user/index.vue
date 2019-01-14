<template>
    <div>
        <h1>this is general user page!</h1>
        <div>
            <h1>Url Query</h1>
            <h3>user name : {{nickName}}</h3>
            <h3>user gender : {{genderDesc}}</h3>
        </div>
        <div>
            <h1>Url Params</h1>
            <h3>user name : {{nickName}}</h3>
            <h3>user gender : {{genderDesc}}</h3>
        </div>

    </div>
</template>
<script>
    export default {
        asyncData: function ({ params, env, error }) {
            let gender = params.gender;
            let genderDesc = gender ? 'male' : 'female';
            return {
                nickName: params.nickname,
                genderDesc: genderDesc
            }
        }
    }
</script>
<style>

</style>
