<template>
    <div>
        <button v-if="loading === true" disabled class="button-4 button button-primary mt-1 w-button">
            <span  class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button v-else  class="button-4 button button-primary mt-1 w-button">{{title}}</button>
    </div>
</template>

<script>
    export default {
        props:['loading','title'],
        name: "BaseButton"
    }
</script>

<style scoped>

</style>