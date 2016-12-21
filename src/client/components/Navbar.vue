<template lang="jade">
header.navbar(:class="{'first-screen':'first-screen'}")
    nav(role="navigation")
        .container
            .nav-header
                router-link.brand(to="/")
                    img.logo(src="../assets/img/logo.png",alt="logo")
                a#navbar-toggle.navbar-toggle(href="javascript:;", :class="{open:open}",@click="toggle")
                    .patty
            ul.links.desktop
                li(v-for="link in navLinks")
                    router-link(:to="link.link", v-text="link.name", exact)
            transition(name="wrap")
                .nav-wrapper(v-if="open")
                    ul.links.mobile
                        li(v-for="link in navLinks")
                            router-link(:to="link.link", v-text="link.name", @click.native="open=!open", exact)
</template>

<script scope>
import navLinks from '../static/navLinks.js'
export default {
    name: 'Navbar',
    data() {
        return {
            navLinks,
            open: false
        }
    },
    computed: {
        firstScreen() {
            return this.$store.state.firstScreen
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="stylus">
@import '../styles/_variables.styl'
.navbar
    box-shadow 0 2px 4px rgba(0,0,0,.25)
    position fixed
    z-index $navIndex
    width 100%
    background-color rgba(255,255,255,1)
    .container
        margin 0 auto
        display flex
        justify-content space-between
        a
            color $linkGray
            display inline-block
.nav-header
    .brand
        padding 10px 0 7px 20px
    .logo
        height 50px
.navbar-toggle
    display none
.links
    display flex
    &.desktop
        justify-content flex-end
        margin 0
        padding-left 20px
        list-style none
        li
            position releative
            display inline-block
            text-align center
            font-size 16px
            max-width 100px
            min-width 80px
            a
                padding 27px 0 24px
                // font-weight bold
                &.router-link-active
                    border-bottom 3px solid $logo
                    color $linkBlue
                &:hover
                    color $logo
@media only screen and (min-width: 1200px)
    .navbar .container
        width 1200px
@media only screen and (max-width: 820px)
    .desktop
        display none
    .nav-header
        position releative
        width 100%
        float none
    .navbar-toggle
        display block
        position absolute
        transform translate(0, -50%)
        top 50%
        right 0
        padding 20px
        z-index $toggleIndex
        .patty
            z-index 1000
            transition all .2s ease
            position relative
            width 24px
            height 2px
            border-radius 2px
            background-color rgba(0,0,0,.5)
            content ""
            &::before,
            &::after
                z-index 1
                transition all .2s ease
                position absolute
                display block
                width 24px
                height 2px
                border-radius 2px
                background-color rgba(0,0,0,.5)
                content ""
            &::after
                top 7px
            &::before
                top -7px
    .navbar-toggle.open
        .patty
            background none
            &::before
                transform rotate(-45deg)
                top 0
                background-color #333
            &::after
                transform rotate(45deg)
                top 0
                background-color #333
    .nav-wrapper
        z-index $wrapperIndex
        width 100%
        height 100%
        position fixed
        overflow hidden
        top 0
        left 0
        background-color rgba(255,255,255,.99)
        display flex
        align-items center
        justify-content center
    .links.mobile
        flex-flow column wrap
        list-style none
        padding 0
        text-align center
        opacity 1
        li
            display block
            a
                font-size 26px
                font-weight 320
                outline none
                color #999
                padding-top 3px
                line-height 43px
                &.router-link-active
                    color $logo
    .wrap-enter-active
        transition all .5s ease
        .links.mobile
            transition all .5s ease
    .wrap-leave-active
        transition all .2s ease
    .wrap-enter
        .links.mobile
            transform translate(0, 40%)
            opacity .4
    .wrap-enter,
    .wrap-leave-active
        opacity 0
</style>
