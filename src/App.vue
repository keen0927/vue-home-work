<template>
    <div>dddd
        <region-buttons></region-buttons>
        <country-list></country-list>
    </div>
</template>

<script>
import RegionButtons from './components/RegionButtons.vue';
import CountryList from './components/CountryList.vue';
    export default {
        name: 'App',
        components: {
            RegionButtons,
            CountryList
        }
    }
</script>

<style lang="scss" scoped>

</style>