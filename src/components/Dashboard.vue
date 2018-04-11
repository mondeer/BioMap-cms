<template>
  <div id="dashboard" class="container">
    <!-- <h3>Dashboard</h3> -->
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h1>Employees</h1>
        <table class="table table-striped">
        <thead>
          <tr>

            <th>PF number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Designation</th>
            <th>department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key='employee'>
            <td>{{employee.pf_no}}</td>
            <td>{{employee.first_name}}</td>
            <td>{{employee.last_name}}</td>
            <td>{{employee.designation}}</td>
            <td>{{employee.department}}</td>
            <td>{{employee.emp_nfc}}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="col-md-6">
        <h1>Clockouts</h1>
        <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clockout in clockouts" :key='clockout'>
            <td>{{clockout.clocktime}}</td>
            <td>{{clockout.userID}}</td>
            <td>{{clockout.clockinID}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h1>Clockin</h1>
        <table class="table table-striped">
        <thead>
          <tr>
            <th>Clock Time</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          <ol>
            <li v-for="clockin in clockins" :key='clockin'>
              <td>{{clockin.clocktime}}</td>
              <td>{{clockin.userID}}</td>
              <td>{{clockin.clockinID}}</td>
            </li>
          </ol>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  name: 'dashboard',

  data(){
    return {
      clockouts:[],
      clockins:[],
      employees:[]
    }
  },
  methods: {

  },
  created() {
    firebase.database().ref('RevolutionBios').on('value', (snapshot)=>{
      this.employees = snapshot.child('employees').val();
      this.clockins = snapshot.child('clockins').val();
      this.clockouts = snapshot.child('clockouts').val();
    });
  }
}
</script>
