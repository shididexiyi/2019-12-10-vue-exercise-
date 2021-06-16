<template lang="pug">
    .axz_container
        .axz_body
            el-table(
                :data="array"
            )
                el-table-column(prop="vType" label="品牌")
                el-table-column(prop="make" label="m")
                el-table-column(prop="transmission" label="t")
                el-table-column(prop="capacity" label="c")
            p {{ msg1 }}
            p {{ msg2 }}
            p {{ msg3 }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'axz',
    data(): IData {
        return {
            array: null,
            msg1: '',
            msg2: '',
            msg3: ''
        }
    },
    mounted(){
            this.msg1= '111',
            this.msg2= '111',
            this.msg3= '111'
            this.tableRender()
            const myTruck: Truck = { vType: "truck", capacity: 9.5 };
            this.evaluatePrice(myTruck);
    },
    methods: {
        evaluatePrice(vehicle: Vehicle) : number{
            const EVALUATION_FACTOR = Math.PI; 
            switch(vehicle.vType) {
                case "car":
                    return vehicle.transmission * EVALUATION_FACTOR
                case "motorcycle":
                    return vehicle.make * EVALUATION_FACTOR
                case "truck":
                    return vehicle.capacity * EVALUATION_FACTOR;
            }
        },
        tableRender() : void{
            let list: TableList = [{vType:"motorcycle",make: 1},{vType: "car", transmission: CarTransmission.Automatic},{vType: "truck",capacity: 5}]
            this.array = list
            console.log(this.array);
        }
    }
})

interface IData {
    array: TableList | null,
    msg1: String,
    msg2: String,
    msg3: String
}

type Vehicle = Motorcycle | Car | Truck;
type TableList = Array<Vehicle> 
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}


</script>

