<template>
	<div>
		{{word}}
		<form @submit="handlerSubmit">
			<input type="text" ref="wordInput" v-model="value">
			<button type="submit">입력</button>
		</form>
		{{result}}
	</div>
</template>

<script>
	export default {
		name: 'Word',
		data() {
			return {
				word: '햇님이',
				value: '',
				result: '',
			}
		},
		methods: {
			handlerSubmit(e) {
				e.preventDefault();
				console.log("this.word.length - 1 ",this.value[0]);
				if (this.value === "") return;
				if (this.word[this.word.length - 1] === this.value[0]) {
					this.result = '정답';
					this.word = this.value;
					this.value = ""
					this.$refs.wordInput.focus();
				} else {
					this.result = '오답입니다 다시 입력 해 주세요';
					this.value = "";
					this.$refs.wordInput.focus();
				}

			}
		},
	}
</script>

<style lang="scss" scoped>

</style>