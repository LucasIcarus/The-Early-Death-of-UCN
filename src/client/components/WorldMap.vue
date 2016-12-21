<template lang="jade">
.map-container
    .map
        img(src="http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/images/map/earth.jpg_1200", ref="map")
        .footprints
            span.logo(v-for="(point, index) of points",:style="[spanStyle, spanPosition.length ? {left: `${spanPosition[index].x}px`, top: `${spanPosition[index].y}px`} : {}]", ref=`mapLogo-${index}`)
                ui-tooltip(trigger=`mapLogo-${index}`, :content="point.name", position="top center")
</template>

<script>
import {throttle} from 'lodash'

export default {
    props: {
        points: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            imageWidth: 0,
            imageHeight: 0,
            spanPosition: []
        }
    },
    computed: {
        spanStyle() {
            const size = Math.ceil(this.imageWidth/80)
            return {
                width: `${size}px`,
                height: `${size}px`,
                backgroundSize: `${size}px ${size}px`,
                borderRadius: `${size}px`
            }
        }
    },
    methods: {
        init() {
            this.imageWidth = this.$refs.map.clientWidth
            this.imageHeight = this.$refs.map.clientHeight
            this.calcuPosition()
        },
        calcuPosition() {
            this.spanPosition = this.points.map(p => {
                const halfSize = Math.ceil(this.imageWidth / 80) / 2
                let longitude = Number(p.longitude.replace(/[A-Za-z]/, '')) * (p.longitude.includes('W') ? -1 : 1) + 180
                let latitude = Number(p.latitude.replace(/[A-Za-z]/, '')) * (p.latitude.includes('N') ? -1 : 1) + 90

                let x = -halfSize + longitude / 360 * this.imageWidth
                let y = -halfSize + latitude / 360 * this.imageWidth
                return { x, y }
            })
        }
    },
    mounted() {
        this.init()
        this.resizeThrottled = throttle(this.init, 500)
        window.addEventListener('resize', this.resizeThrottled, false)
    },
    destroy() {
        window.removeEventListener('resize', this.resizeThrottled)
    }
}
</script>

<style lang="stylus" scoped>
.map-container
    margin-bottom 30px
    position relative
    z-index 50
    img
        width 100%
    .logo
        display block
        cursor pointer
        position absolute
        background-image url('../assets/img/ucn-logo.png')
        background-color #fff
</style>
