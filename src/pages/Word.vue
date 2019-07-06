<template>
	<div>
		{{word}}
		<form @submit="handlerSubmit">
			<input type="text" ref="wordInput" v-model="value">
			<button type="submit">입력</button>
		</form>
		{{result}}

		<button @click="showDiv(1)">1</button>
		<button @click="showDiv(2)">2</button>
		<button @click="showDiv(3)">3</button>
		<button @click="showDiv(4)">4</button>

		<div v-if="divEquel1">1</div>
		<div v-if="divEquel2">2</div>
		<div v-if="divEquel3">3</div>
		<div v-if="divEquel4">4</div>
		<!-- <div v-if="divEquel2">2</div>
		<div v-if="divEquel3">3</div>
		<div v-if="divEquel4">4</div> -->
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
				divEquel1: true,
				divEquel2: false,
				divEquel3: false,
				divEquel4: false,
			}
		},
		methods: {
			showDiv(index){
				switch(index) {
					case "1":
							this.divEquel1 = true;
							this.divEquel2 = false;
							this.divEquel3 = false;
							this.divEquel4 = false;						
						break;
					case "2":
							this.divEquel1 = false;
							this.divEquel2 = true;
							this.divEquel3 = false;
							this.divEquel4 = false;						
						break;						
					default: return;
				}			
			},
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