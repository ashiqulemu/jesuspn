<template>
    <div>
        <section class="site-header">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <a class="navbar-brand" href="#">logo here</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href=" " id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown Items</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Destination</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pages</a>
                            </li>
                        </ul>
                        <button class="add-listing">  + Add Listing </button>
                        <i class="far fa-user user-icon"></i>

                    </div>
                </nav>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped>

</style>