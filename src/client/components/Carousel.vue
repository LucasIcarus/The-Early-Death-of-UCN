<template lang="jade">
.carousel
    .inner(role="list-box")
        transition(v-for="(list, index) of lists", name="slide")
            .item(:class="{active:index===showNum}", v-show="index===showNum")
                img(:src="list.src",alt="banner")
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            lists: [
                {src: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/UCN/banner/banner-1.jpg'},
                {src: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/UCN/banner/banner-2.jpg'},
                {src: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/UCN/banner/banner-3.jpg'},
                {src: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/UCN/banner/banner-4.jpg'},
                {src: 'http://fancy-oss.oss-cn-shenzhen.aliyuncs.com/UCN/banner/banner-5.jpg'}
            ],
            showNum: 0,
        }
    },
    methods: {
        change() {
            if (this.showNum===this.lists.length - 1) {
                this.showNum = 0
            } else {
                this.showNum++
            }
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            // this.change()
        }, 3000)
    },
    destroyed() {
        clearInterval(this.interval)
    }
}
</script>

<style lang="stylus">
.carousel
    position relative
.inner
    position relative
    overflow hidden
    width 100%
    >.item
        position relative
        transition all .5s ease-in-out
        >img
            max-width 100%
            height auto
            line-height 1
        &.active
            position absolute
            top 0
            width 100%
.slide-enter
    transform translate3d(100%, 0, 0)
.slide-leave-active
    transform translate3d(-100%, 0, 0)
</style>
