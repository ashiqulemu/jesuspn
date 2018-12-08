<template>
    <div class="contact">
        <div class="container">
            <form class="form-horizontal" @submit.prevent="post()">
                <div class="row">
                    <div class="col-md-12">
                        <h5>Contact Us</h5>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input v-model="contact.name" name="name" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" v-model="contact.email" name="email" class="form-control">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="phone_number">Phone Number</label>
                            <input type="number" v-model="contact.phone_number" name="phone_number" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="7" v-model="contact.message" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <button class="btn btn btn-primary" type="submit">SEND MESSAGE NOW</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact-form",
        data(){
            return {
                contact:{}
            }
        },
        methods:{
            post(){
                alert('I am form')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contact {
        padding: 51px 0;
        .form-horizontal {
            border: 1px solid lightgrey;
            padding: 20px;
        }
    }
</style>