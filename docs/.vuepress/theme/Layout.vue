<!--
 * @Author: hp
 * @Date: 2021-05-20 22:28:17
 * @LastEditTime: 2021-05-20 23:01:39
 * @LastEditors: your name
 * @Description: 天净若风的前端之路
 * @FilePath: /Front-end-of-mrtian/docs/.vuepress/theme/Layout.vue
-->
<template>
	<div class='public-layout'>
		<say-hello></say-hello>
	</div>
</template>

<script>
import SayHello from '../components/SayHello.vue'
export default {
	components: { SayHello },
	name: 'publiclayout',
	data() {
		return {}
	},
}
</script>

<style lang="scss" scoped>
</style>
