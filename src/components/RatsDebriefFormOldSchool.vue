<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>Ticket number + who are you? Was it a CR (Code Red is triple points)?</label>
                <input type="text" class='form-control' required v-model="one">
            </div>
            <div class="form-group">
                <label>Did you manufacture? What and how much?</label>
                <input type="text" class='form-control' required v-model="two">
            </div>
            <div class="form-group">
                <label>Did you deliver or transport something? What? How many? Truck, Train or Ship?</label>
                <input type="text" class='form-control' required v-model="three">
            </div>
            <div class="form-group">
                <label>How many hexes did you travel?</label>
                <input type="text" class='form-control' required v-model="four">
            </div>
            <div class="form-group">
                <label>Did you return your truck/ship/train to our stockpiles? Full of Raw resources?</label>
                <input type="text" class='form-control' required v-model="five">
            </div>

            <div class="form-group">
                <label>Your Debrief</label>
                <input type="text" class='form-control' v-bind:value=calculatedPoints disabled>
                <button @click="copyToClipboard">Copy to Clipboard</button>
            </div>

        </form>
    </div>

    
</template>

<script>
//import copy from "clipboard-copy";

export default {
    data() {
        return {
            one: "",
            two: "",
            three: "",
            four: "",
            five:"",
        }
    },
    computed: {
        calculatedPoints : function(){
            return `${this.one} ; ${this.two} ; ${this.three} ; ${this.four} ; ${this.five}`;
        }
    },
    methods: {
        copyToClipboard : function () {
//            copy(this.calculatedPoints);
            navigator.clipboard.writeText(this.calculatedPoints);
        }
    }
}
</script>

<style>

</style>