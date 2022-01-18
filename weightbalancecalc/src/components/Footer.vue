<template>
    <footer>
        <p>&copy; {{ date }}, an app by Zachary Khan. DISCLAIMER: This is an app created for convenience/demonstration purposes and all numbers should be verified through your own calculations. This is not a legal substitute for traditional weight and balance calculations.</p>
    </footer>
</template>


<script>
export default {
    name: 'Footer',
    data() {
        return {
            date: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    opacity: 0.8;
}

p {
    margin: 1em;
    text-align: center;
}

</style>