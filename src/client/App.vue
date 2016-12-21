<template lang="jade">
#root
    navbar
    main.site-body(role="main")
        .site-container
            router-view
    footer-bar
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
    data() {
        return {
            fixed: true
        }
    },
    components: {
        Navbar,
        FooterBar
    }
}
</script>

<style lang="stylus">
@import './keen-ui/styles/imports.styl'
@import './styles/imports.styl'
*
    box-sizing border-box

html,
body,
#app
    max-width 100vw
    margin 0
    padding 0

body
    @extends $font
b,
strong,
.bold
    font-weight 700
h1,
h2,
h3,
h4,
h5,
h6
    font-weight normal
    margin 0
    line-height 1

h1
    font-size 40px

h2
    font-size 34px

h3
    font-size 30px

h4
    font-size 18px

h5
    font-size 16px

h6
    font-size 14px
a
    text-decoration none
    color $md-blue-700

    &:hover,
    &:focus
        text-decoration none

.m-b-0
    margin-bottom 0

#app
    display flex

.page
    flex-grow 1
    display flex
    margin-left 272px

.site-body
    background-image url('./assets/img/page-background.png')
    background-color #f7f7f7
    padding-top 150px
    position relative
    z-index 1
    min-height 2000px
.site-container
    margin 0 auto
    overflow hidden
    @media only screen and (min-width:1200px)
        width 1200px

/*
 * Scrollbar style for chrome. From: https://gist.github.com/devinrhode2/2573411
 */

// Turn on custom 8px wide scrollbar
::-webkit-scrollbar
    /*
     * 1px wider than Lion.
     * This is more usable for users trying to click it.
     */
    width 10px
    background-color rgba(0, 0, 0, .1)
    -webkit-border-radius 100px

// hover effect for both scrollbar area, and scrollbar 'thumb'
::-webkit-scrollbar:hover
    background-color rgba(0, 0, 0, .2)

// The scrollbar 'thumb' ...that marque oval shape in a scrollbar
::-webkit-scrollbar-thumb:vertical
    /*
     * This is the EXACT color of Mac OS scrollbars.
     * Yes, I pulled out digital color meter
     */
    background-color rgba(0, 0, 0, .5)
    -webkit-border-radius 100px
    background-clip padding-box
    border 2px solid rgba(0, 0, 0, 0)

    // Prevent it from getting too small
    min-height 10px

// Some darker color when you click it
::-webkit-scrollbar-thumb:vertical:active
    background-color rgba(0,0,0,0.61)
    -webkit-border-radius 100px

</style>
