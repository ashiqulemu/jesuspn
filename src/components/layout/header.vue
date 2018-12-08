<template>
    <div>
        <section class="site-header">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-dark">
                    <router-link :to="{name:'home'}" class="navbar-brand" href="#">
                        <img src="../../assets/images/color_logo.png" >
                    </router-link>
                    <button class="navbar-toggler" type="button"
                            data-toggle="collapse"
                            data-target="#navbarsExample04"
                            aria-controls="navbarsExample04" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <router-link to="/" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href=" "
                                   id="dropdown04"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">Explore
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <a class="dropdown-item" href="#">Explore Item</a>
                                    <a class="dropdown-item" href="#">Explore Item</a>
                                    <a class="dropdown-item" href="#">Explore Item</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                   href=" " id="dropdown05"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">Listings
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdown05">
                                    <a class="dropdown-item" href="#">Listings Item</a>
                                    <a class="dropdown-item" href="#">Listings Item</a>
                                    <a class="dropdown-item" href="#">Listings Item</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Destinations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pages</a>
                            </li>
                        </ul>
                        <button class="add-listing">  + Add Listing </button>
                        <a href="">
                            <i class="fa fa-user text-white nav"></i>
                        </a>
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
.nav .fa-user{
    padding-left: 35px;
}
</style>