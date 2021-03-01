<template>
  <div class="container mt-3">
      <h3>احدث احصاءات الاصابات بفايروس كورونا حول االعالم</h3>
  </div>
</template>

<script>
export default {
  async created(){
    const {data} = await this.$api.get('worldstat.php')
    console.log(data)
  }

}
</script>

<style>

</style>