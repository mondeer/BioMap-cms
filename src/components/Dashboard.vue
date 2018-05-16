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
      <div class="col-md-10">
        <button @click="exportRecord">Download Record</button>
        <h1>Clock Records</h1>
        <table class="table table-striped">
        <thead>
          <tr>
            <th>PF No.</th>
            <th>Full Name</th>
            <th>Clockin Time</th>
            <th>Clockout Time</th>
            <th>Time In</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="record in records" :key='record'>
              <td>{{record.emppf_no}}</td>
              <td>{{record.empName}}</td>
              <td>{{record.clockin_time}}</td>
              <td>{{record.clockout_time}}</td>
              <td>{{record.time_in}}</td>
            </tr>
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
      employees:[],
      records:[]
    }
  },
  methods: {
    exportRecord(){
      var vm = this
      var columns = [
        {title: "Emppf_no", dataKey: "emppf_no"},
        {title: "Employee Name", dataKey: "name"},
        {title: "Clockin Time", dataKey: "clockin_time"},
        {title: "Clockout Time", dataKey: "clockout_time"},
        {title: "Time in", dataKey: "time_in"}
      ];
      var doc = new jsPDF('p', 'pt');
      doc.text("Employee Clock Data", 10, 12);
      doc.autoTable(columns, vm.records);
      doc.save('records.pdf');
    }
  },
  created() {
    firebase.database().ref('RevolutionBios').on('value', (snapshot)=>{
      this.employees = snapshot.child('employees').val();
      this.clockins = snapshot.child('clockins').val();
      this.clockouts = snapshot.child('clockouts').val();
      this.records = snapshot.child('records').val();
    });
  }
}
</script>
