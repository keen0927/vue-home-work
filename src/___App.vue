<template>
<template>
    <div>
        <appQuote>
            <h2 slot="title">The Quote</h2>
            <p slot="content">A wonderful Quote</p>
        </appQuote>

        <moduleTitle>
            <strong>{{title}}</strong>
            <b>4</b>
            <span>시간남음</span>
        </moduleTitle>

        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'Author'">Author</button>
        <button @click="selectedComponent = 'New'">New</button>
        <p>{{ selectedComponent }}</p>
        <component :is="selectedComponent">
            <p>디폴트</p>
        </component>
    </div>
</template>

<script>
    import appQuote from './components/Quote';
    import moduleTitle from './components/moduleTitle';
    import Author from './components/Author';
    import New from './components/New';

    export default {
        name: 'App',
        data() {
            return {
                title: '제목타이틀',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote,
            moduleTitle,
            Author: Author,
            New: New,
        },
    }
</script>

<style lang="scss" scoped>

</style>