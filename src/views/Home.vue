<template>
  <div class="home">
    <h1 class="center">Dashboard</h1>

    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="center total-spent"></div>
  </div>
</template>

<script>
import {Pie} from 'vue-chartjs'

export default {
  name: "Home",
  data:() => ({
     isOpen: true,
  }),
  extends: Pie,
  async mounted() {
    let outcomes = [
      {sum: 10000, title: "Salary", id: '1'},
      {sum: 4000, title: "Accidents", id: '2'},
      {sum: 9500, title: "New vehicle", id: '3'},
      {sum: 1000, title: "New equipment", id: '4'},
      {sum: 1000, title: "Rent", id: '5'},
      {sum: 2000, title: "Other", id: '6'}
    ]
    this.setup(outcomes)

    let totalSpent = this.totalSpent(outcomes)
    document.querySelector('.total-spent').innerHTML = 'Total spent: $' + totalSpent;
  },
  methods: {
    totalSpent(arr) {
      let total = 0;
      arr.map(c => {
        total += c.sum
      })
      return total
    },
    setup(outcomes) {
      this.renderChart({
        labels: outcomes.map(c => c.title),
        datasets: [{
            label: 'Outcomes',
            data: outcomes.map(c => c.sum),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
      })
    }
  }
};
</script>

<style lang="scss">
  .home {
    min-height: 100vh;
  }
  .total-spent {
    margin-top: 30px;
  }
</style>