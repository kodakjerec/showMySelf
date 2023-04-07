<template>
    <input type="number" v-model="maxCount" @change="refreshData()">
    <div class="myChart">
        <Line v-if="loading" id="my-chart-id1" :options="chartOptions" :data="chartData1" />
    </div>
    <div class="myChart">
        <Line v-if="loading" id="my-chart-id2" :options="chartOptions" :data="chartData2" />
    </div>
    <div class="myChart">
        <Line v-if="loading" id="my-chart-id3" :options="chartOptions" :data="chartData3" />
    </div>
    <div class="myChart">
        <Line v-if="loading" id="my-chart-id4" :options="chartOptions" :data="chartData4" />
    </div>
</template>
<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default {
    name: "homeStatus",
    components: { Line },
    data() {
        return {
            maxCount: 200,
            loading: false,
            chartData1: {
                labels: [],
                datasets: []
            },
            chartData2: {
                labels: [],
                datasets: []
            },
            chartData3: {
                labels: [],
                datasets: []
            },
            chartData4: {
                labels: [],
                datasets: []
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.refreshData();
    },
    methods: {
        refreshData() {
            this.loading = false;
            axios.get("https://script.google.com/macros/s/AKfycbw-IoOfqN02DdTP2JYOxSTlIYH_zQ57gF17MAweOJE6vBzQteKDuML8MQZIhQhD2tQWsg/exec?maxCount=" + this.maxCount.toString())
                .then((response) => {
                    let originData = JSON.parse(response.data.data);
                    let data_TVOC = [];
                    let data_eCO2 = [];
                    let data_Temp = [];
                    let data_Humi = [];
                    let data_labels = [];

                    originData.map(row => {
                        data_TVOC.push(row.avg_TVOC);
                        data_eCO2.push(row.avg_eCO2);
                        data_Temp.push(row.avg_Temp);
                        data_Humi.push(row.avg_Humi);
                        data_labels.push(row.time);
                    })
                    this.chartData1.labels = data_labels;
                    this.chartData2.labels = data_labels;
                    this.chartData3.labels = data_labels;
                    this.chartData4.labels = data_labels;
                    this.chartData1.datasets = [
                        {
                            label: 'TVOC',
                            backgroundColor: '#FF0000',
                            data: data_TVOC
                        }]
                    this.chartData2.datasets = [
                        {
                            label: 'eCO2',
                            backgroundColor: '#00FF00',
                            data: data_eCO2
                        }]
                    this.chartData3.datasets = [
                        {
                            label: 'Temp',
                            backgroundColor: '#0000FF',
                            data: data_Temp
                        }]
                    this.chartData4.datasets = [
                        {
                            label: 'Humi',
                            backgroundColor: '#005500',
                            data: data_Humi
                        }]
                    this.loading = true;
                })
        }
    }
}
</script>
<style lang="scss">
.myChart {
    width: 90vw;
    height: 50vh;
}
</style>