<template>
    <div class="red">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Red'
    }
</script>

<style lang="scss" scoped>
.red {
    padding: 50px;
    border: 3px solid red;
}
</style>