<template lang="jade">
footer.site-footer
    .container
        section.footer-top
            .footer-info
                h4|网站信息
                ul.footer-list
                    li(v-for="(link, name) in links.info")
                        router-link(:to="link", v-text="name")
            .footer-tools
                h4|相关工具
                ul.footer-list
                    li(v-for="(link, name) in links.tools")
                        router-link(:to="link", v-text="name")
            .footer-contact
                h4|联系我们
                ul.footer-list
                    li(v-for="(link, name) in links.contact")
                        router-link(:to="link", v-text="name")
            .footer-links
                h4|友情链接
                ul.footer-list
                    li(v-for="(link, name) in links.links")
                        router-link(:to="link", v-text="name")
        section.footer-bottom
            .footer-logo
                img(src="../assets/img/logo_2.jpg")
            .footer-record
                p(v-text="record")
</template>

<script>
export default {
    data() {
        return {
            links: {
                info: {
                    '关于我们': '#',
                    '展会计划': '#',
                    '加入我们': '#',
                    '常见问题': '#'
                },
                tools: {
                    '外汇牌价查询': '#',
                    '世界天气查询': '#',
                    '世界时差查询': '#'
                },
                contact: {
                    '邮箱: info@ucnexpo.com': '#',
                    '电话: +86-0592-6030835': '#',
                    '手机: +86-1875-0228-962': '#',
                    '传真: +86-0592-6030835': '#'
                },
                links: {
                    '****': '#',
                    '*****': '#',
                    '******': '#',
                    '*******': '#'
                }
            },
            record: '©2016 UCN EXHIBITION CO.LTD 闽ICP备16012444号'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports.styl'
.site-footer
    padding-top 40px
.container
    margin 0 auto
section[class^="footer-"]
    display flex
    flex-wrap wrap
.footer-top
    text-align center
    justify-content space-around
    align-items flex-end
    [class^="footer-"]
        flex 1
        color $logo
    h4
        margin-bottom 20px
    .footer-list
        list-style none
        margin 0
        padding 0
        font-size 16px
        min-height 108px
        margin-bottom 20px
        a
            color $linkGray
            &:hover
                color $logo
        li
            padding-top 5px
.footer-bottom
    align-items center
    .footer-logo
        flex 1
        display flex
        justify-content center
        img
            height 80px
    .footer-record
        flex 1
        display flex
        text-align center
        align-items center
        justify-content center

@media only screen and (min-width: 1200px)
    .container
        width 1200px
    .footer-logo
        width 400px
        justify-content flex-end
@media only screen and (max-width: 820px)
    .footer-top [class^="footer-"]
        min-width 271px
    .footer-logo
        min-width 410px
    .footer-record
        min-width 410px
@media only screen and (max-width: 410px)
    .footer-top [class^="footer-"]
        min-width 205px
    .footer-logo
        min-width 205px
    .footer-record
        min-width 205px
</style>
