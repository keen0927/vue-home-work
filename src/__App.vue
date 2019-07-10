<template>
    <div>
        {{ count }}
        <button @click="increment" >증가</button>
        <button @click="decrement" >감소</button>

        <p>모든 유저 : {{ $store.getters.allUsersLength }}</p>
    </div>
</template>

<script>
// import RegionButtons from './components/RegionButtons.vue';
// import CountryList from './components/CountryList.vue';

    export default {
        name: 'App',
        components: {
            // RegionButtons,
            // CountryList 
        },
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment');
            },
            decrement() {
                this.$store.commit('decrement');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>