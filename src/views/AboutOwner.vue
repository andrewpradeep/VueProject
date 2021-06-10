<template>
    <div class="about">
        <h1>Dynamic About page</h1>
        <h2> Owner is {{owner}}</h2>
        <h2 v-if="id">Employee id is {{id}}</h2>
    </div>
</template>
<script>
export default {
    name : "aboutowner",
    props : {
        id : {
            default : ""
        },
        owner : {
            default : ""
        }
    }
}
</script>