<template>
    <div>
        <sub-header :title="'Contact Us'" :sub-title="'feel free to contact us'"></sub-header>
        <contact-form></contact-form>
    </div>
</template>

<script>
    import contactForm from '../components/forms/contactForm.vue'
    export default {
        name: "contact",
        components:{contactForm}
    }
</script>

<style>

</style>