<template>
	<div>
		<h1>Vue-router</h1>
		<p>- 중첩된 경로, 뷰를 매핑할 수 있다.</p>
		<p>- 컴포넌트 기반의 라우팅을 구혈할 수 있다.</p>
		<p>- Transitino을 적용할 수 있다</p>
		<p>- 히스토리모드와 해시모드를 사용할 수 있다</p>
		<p>- 쿼리스트링, 파라미터, 와일드 카드를 사용하여 구혈할 수 있다.</p>
		<p v-text="textRouterLink"></p>
		<p v-text="importRouter"></p>
		<p v-text="constRouter"></p>
		<p>router-view에는 매핑한 컴포넌트가 나타나게 된다.</p>
	</div>
</template>

<script>
	export default {
		name: 'Router',
		created () {
			const ddd = this.$route.path;
			console.log(ddd);
		},
		data() {
			return {
				textRouterLink: '<router-link to="/home"></router-link>',
				importRouter: 'import VueRouter from "vue-router"',
				constRouter: `
					const router = new VueRouter({
						routes: [
							{ path: '/', component: Home },
							{ path: '/home', component: Home },
							{ path: '/about', component: About },
						]
					});
					export default {
						name: 'app',
						router
					}
				`,
				contactlist: [
					{ no:1001, name:'킨1', tel:'010-3333-3333' },
					{ no:1002, name:'킨2', tel:'010-3333-3333' },
					{ no:1003, name:'킨3', tel:'010-3333-3333' },
				]
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>