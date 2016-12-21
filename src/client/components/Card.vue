<template lang="jade">
.thumbnail
    a.img(:href="link"): img(:src="image")
    .caption(v-if="caption"): h4(v-text="caption")
</template>

<script>
export default {
    name: 'Card',
    props: {
        link: {
            type: String,
            default: '####'
        },
        image: {
            type: String,
            required: true
        },
        caption: String
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports.styl'
.thumbnail
    width 100%
    margin 10px 10px
    cursor pointer
    display flex
    flex-flow column nowrap
    align-items center
    .img
        width 100%
        padding 4px
        height 100%
        border 1px solid #ddd
        border-radius 4px
        display block
        background-color #fff
        img
            width 100%
            height 100%
    .caption
        margin-top 20px
        h4
            font-size 24px
            color #000
            transition color .2s ease-in-out
    &:hover
        .caption h4
            color $logo
</style>
