<template>
  <div class="skeleton-wrapper">
    <div class="img-placeholder"></div>
    <h1 class="h1-placeholder"></h1>
    <p class="p-placeholder"></p>
    <h3 class="h3-placeholder"></h3>
    <ul class="ul-container">
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
    </ul>
    <h3 class="h3-placeholder"></h3>
    <ul class="ul-container">
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
    </ul>
    <h3 class="h3-placeholder"></h3>
    <ul class="ul-container">
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
      <li class="li-placeholder"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello-world-skeleton'
}
</script>

<style lang="scss" scoped>
.skeleton-wrapper{
  margin-top: 60px;
  text-align: center;
  .img-placeholder{
    display: inline-block;
    width: 200px;
    height: 200px;
    background: #e5e5e5;
  }
  .h1-placeholder, .p-placeholder{
    width: 400px;
    height: 37px;
    margin: 0 auto;
    background: #e5e5e5;
  }
  .p-placeholder{
    margin: 16px auto;
  }
  .h3-placeholder{
    width: 200px;
    height: 22px;
    margin: 0 auto;
    background: #e5e5e5;
  }
  .ul-container{
    list-style-type: none;
    padding: 0;
  }
  .li-placeholder{
    display: inline-block;
    width: 80px;
    height: 18px;
    margin: 0 10px;
    background: #e5e5e5;
  }
}
</style>