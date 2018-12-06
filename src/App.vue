<template>

    <div id="nav">
      <div class="container">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view/>
      </div>
    </div>

</template>

<style lang="scss">
@import "styles/app.scss";
</style>
