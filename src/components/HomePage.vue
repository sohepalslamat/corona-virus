<template>
  <div class="container mt-3">
      <h3 class="text-center my-3"><span class="bg-danger text-light p-1"> مباشر</span> احصاءات الاصابات بفايروس كورونا حول االعالم</h3>
      <div class="container text-light text-center">
        <div class="row align-items-center justify-content-center">
          <div class="col-11 col-sm-5 bg-primary m-1 py-2 fs-3">
            عداد الاصابات الكلي
            <span class="d-block">{{data.total_cases}}</span>
          </div>
          <div class="col-11 col-sm-5 bg-danger m-1 py-2 fs-3">
            عدد الوفيات الكلي
            <span class="d-block">{{data.total_deaths}}</span>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-11 col-sm-5 bg-success bg-gradient m-1 py-2 fs-3">
            الاصابات النشطة
            <span class="d-block">{{data.active_cases}}</span>
          </div>
          <div class="col-11 col-sm-5 bg-dark bg-gradient m-1 py-2 fs-3">
            الوفيات اليوم
            <span class="d-block">{{data.new_deaths}}</span>
            </div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data : {}
    }

  },
  async created(){
    const {data} = await this.$api.get('worldstat.php')
    this.data = data
  }

}
</script>

<style>

</style>