<template>
  <div class="sidebar-ads">
    <img class="ads" :src="$withBase('/image/homeIcon.jpeg')" />
  </div>
</template>

<script>
export default {
  name: 'SidebarAds',
};
</script>

<style scoped>
.sidebar-ads {
  width: 100%;
}

.ads {
  width: 100%;
}
</style>
