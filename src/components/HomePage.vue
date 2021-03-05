<template>
  <div class="container mt-3">
      <h3 class="text-center my-3"><span class="bg-danger text-light p-1"> مباشر</span> احصاءات الاصابات بفايروس كورونا حول العالم</h3>
      <div class="container text-light text-center">
        <div class="row align-items-center justify-content-center">
          <div class="col-11 col-sm-5 bg-primary m-1 py-2 fs-3">
            عدد الاصابات الكلي
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
      <div v-if="loading" class="container text-dark text-center my-4">
        جاري جلب البيانات ...
      </div>
      <div v-else class="container text-light text-center my-4 px-0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">البلد</th>
              <th scope="col">اجمالي الاصابات</th>
              <th scope="col">اجمالي الوفيات</th>
              <th scope="col">الحالات النشطة</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="country in countries" :key="country.country_name">
              <th scope="row">{{country.country_name}}</th>
              <td>{{country.cases}}</td>
              <td>{{country.deaths}}</td>
              <td>{{country.active_cases}}</td>
            </tr>
          </tbody>
          
        </table>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data : {},
      countries: [],
      loading: true
    }

  },
  async created(){
    const {data} = await this.$api.get('worldstat.php')
    this.data = data  
    await this.$api.get('cases_by_country.php').then((res)=> {
      this.countries = res.data.countries_stat
      this.loading =false
    }).catch((err) => {
      console.log(err)
    })
    
  }

}
</script>

<style>

</style>