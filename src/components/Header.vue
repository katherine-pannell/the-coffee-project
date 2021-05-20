<template>
    <header class="container">
        <h1 class="title">{{title}}</h1>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>
