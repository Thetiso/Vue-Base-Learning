<template>
    <div>
        <div class="avatar">
            <img :src='avatar' />
        </div>
        <div class="name">
            name:{{name}}
        </div>
        <div class="title">
            title: {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAvatar",
        computed: {
            name: function () {
                return this.$store.state.counter
            },
        },
        data: function() {
            return {
                avatar: '',
                title: this.$store.state.counter,
            }
        }
    }
</script>

<style scoped>

</style>
