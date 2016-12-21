<template lang="jade">
.home-root
    .above-fold(:style="aboveFoldStyle")
        section.carousel
            ui-carousel.index-top-carousel(:itemNum="carouselImages.length", type="fadeUp")
                img(v-for="n of carouselImages.length", :src="carouselImages[n-1]+'_1200'", alt="views", :slot="n")
        section.slogan
            h3
                b|链接世界，用心服务，誉展全球！
                small|助力千家中国企业拓展海外市场
        section.arrow
            a(href="#content"): ui-icon(icon="keyboard_arrow_down").bounce
    .index-content#content
        section.screen
            .jumbotron
                h2: strong(v-text="slogan")
        section.cards(ref="cards")
            sign.sign(text="热门会展")
            ui-carousel.index-bottom-carousel(type="goDown",:itemNum="rowNum",:controlDot="false")
                .card-container(v-for="m of rowNum", :slot="m")
                    card.card(v-for="n of cardNum", :image="exhibCards[cardIndex(m, n)].imageSrc + '_500'", :caption="exhibCards[cardIndex(m, n)].name")
        section.w-map
            sign.sign(text="誉华足迹")
            world-map(:points="footprints")


</template>

<script>
import { mapGetters } from 'vuex'
import { throttle } from 'lodash'
import Sign from './Sign.vue'
import Card from './Card.vue'
import WorldMap from './WorldMap.vue'

const fetchIndex = store => store.dispatch('FETCH_INDEX_JSON')
const { ceil } = Math

export default {
    name: 'Home',
    data() {
        return {
            height: 800,
            rowNum: 0,
            cardNum: 0,
        }
    },
    computed: {
        ...mapGetters([
            'carouselImages',
            'slogan',
            'exhibCards',
            'footprints'
        ]),
        aboveFoldStyle() {
            return {
                height: this.height + 'px'
            }
        },
    },
    preFetch: fetchIndex,
    methods: {
        init() {
            this.resize()
            this.calcuCards()
            this.resizeThrottled = throttle(this.resize, 500)
            window.addEventListener('resize', this.resizeThrottled, false)
        },
        resize() {
            this.calcuCards()
            const [wWidth, wHeight] = [window.innerWidth, window.innerHeight]
            const height = wHeight - 150

            // the height needed
            const minimal = (wWidth * 0.45 > 600 ? 600 : wWidth * 0.45) + 150
            const result = height > minimal ? height : minimal
            if (this.height !== result) {
                this.height = result
            }
        },
        calcuCards() {
            const length = this.$refs.cards.clientWidth
            this.cardNum = ceil(length / 500)
            this.rowNum = ceil(this.exhibCards.length / this.cardNum)
        },
        cardIndex(m, n) {
            const result = (m - 1) * this.cardNum + (n - 1),
                length = this.exhibCards.length
            return  result < length ? result : result - length
        }
    },
    mounted() {
        this.init()
    },
    destroy() {
        if (this.resizeThrottled) {
            windos.removeEventListener('resize', this.resizeThrottled)
        }
    },
    components: {
        Sign,
        Card,
        WorldMap
    }
}

</script>

<style lang="stylus">
@import '../styles/imports.styl'
.above-fold,
.index-content
    display flex
    flex-flow column nowrap
    align-items center
    justify-content space-between
.carousel
    width 90%
    overflow hidden
.index-top-carousel
    img
        width 100%
    .ui-carousel-page.active
        .ui-carousel-border
            border-color $logo !important
        .ui-carousel-inner-dot
            background-color $logo !important
.slogan
    width 90%
    h3
        display flex
        flex-flow row wrap
        align-items flex-end
        justify-content center
    b
        color $logo
        font-size 35px
        text-align center
    small
        font-size 22.75px
.arrow
    padding-bottom 15px
    margin-top -15px
    // overflow show
    .bounce
        padding-bottom -5px
        position relative
        animation bounce 1.4s infinite cubic-bezier(.3, 2.4, .85, 2.5)
        transform-origin center bottom
    .ui-icon
        font-size 80px
        font-weight bold
        color $logo
        cursor pointer
    &:hover
        .ui-icon
            color $arrowHover
.index-content
    padding-top 50px
    section
        margin-top 50px
.screen,
.cards,
.w-map
    width 100%
    margin 0 auto
.jumbotron
    width 100%
    padding 48px 60px
    text-align center
    background-color #fff
    border-radius 6px
    h2
        font-size 30px
.card-container
    width 100%
    display flex
    flex-flow row nowrap
    justify-content space-around
    .card
        flex-basis auto

@media only screen and (min-width: 1334px)
    .carousel
        width 100%
@media only screen and (max-width: 1200px)
    .screen,
    .cards,
    .w-map
        width 90%
@media only screen and (max-width: 948px)
    .slogan small
        margin-top 50px

@keyframes bounce
    from, to
        transform translateY(20px)
    80%
        transform translateY(10px)

</style>
