<script>
  export let vh = false
</script>
<div class="fondo" class:vh>
</div>

<style>
  .fondo{
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    background-image:url("/tejido.png");
    z-index: -5;
  }
  .vh{
      height: 100vh;
  }
</style>
