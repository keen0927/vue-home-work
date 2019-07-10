<template>
    <div class="blue">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Blue'
    }
</script>

<style lang="scss" scoped>
.blue {
    padding: 50px;
    border: 3px solid blue;
}
</style>