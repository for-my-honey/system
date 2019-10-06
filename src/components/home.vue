<template>
  <div>
      <homeHeader class="head"></homeHeader>
      <homeAside class="nav"></homeAside>

  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader'
import homeAside from '@/components/homeAside'

export default {
    name:'home',
    components:{
        homeHeader,
        homeAside
    }
}
</script>

<style>
    body,html{
        height: 100%;
        width: 100%;
        overflow: hidden;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 15px;
        color: #676a6d;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .head{
        position: fixed;
        z-index: 3;
        height: 82px;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
    }
</style>