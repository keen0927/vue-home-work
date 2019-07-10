<template>
    <div class="green">
        <slot></slot>
        그린스
    </div>
</template>

<script>
    export default {
        name: 'Green'
    }
</script>

<style lang="scss" scoped>
.green {
    padding: 50px;
    border: 3px solid green;
}
</style>