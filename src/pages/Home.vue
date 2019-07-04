<template>
	<div>
		
		
		<ul>
			<li v-for="(list,index) in lists" :key="index">
				{{ list.title }}
				<button type="button" @click="deleteList(index)">DELETE</button>
				<button type="button" @click="editList(index)">Edit</button>
				<div v-if="list.editInput">
					<input type="text" v-model="editValue" placeholder="수정할 내용을 입력하세요.">
					<button type="button" @click="editReg(index)">수정</button>
				</div>
			</li>
		</ul>

		<p>
			<input type="text" v-model="searchValue">
			<button type="button" @click="handlerSearch">검색</button>
		</p>
		<p>
			<input type="text" v-model="inputValue">
			<button type="button" ref="reg" @click="regList">등록</button>
		</p>

		{{inputValue}}
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				lists: [
					{title: '제목1',editInput:false},
					{title: '제목2',editInput:false},
					{title: '제목3',editInput:false},
					{title: '제목4',editInput:false},
				],
				inputValue: "",
				searchValue: "",
				editValue: ""
			}
		},
		methods: {
			regList() {
				this.lists.push({title: this.inputValue, editInput:false});
				this.inputValue = "";
			},
			deleteList(index) {
				this.lists.splice(index,1)
			},
			editList(index) {
				console.log('editList')
				this.lists[index].editInput = true;
			},
			editReg(index) {
				this.lists[index].title = this.editValue;
				this.editValue = "";
				this.lists[index].editInput = false;
			},
			handlerSearch() {
				let searchText = this.searchValue;
				console.log(searchText);
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>