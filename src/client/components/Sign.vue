<template lang="jade">
.sign
    ui-icon.icon(:icon="icon ? icon : 'face'")
    h2.text: strong(v-text="text")
</template>

<script>
export default {
    name: 'Sign',
    props: {
        icon: String,
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports.styl'
.sign
    margin-bottom 30px
    margin-left 20px
    max-width 180px
    display flex
    flex-flow row nowrap
    align-items center
    padding 10px
    background-color $logo
    border-radius 5px
    .text,
    .icon
        color #fff
        font-size 30px
    .text
        padding-left 10px

</style>
