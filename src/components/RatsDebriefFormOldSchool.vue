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
//     ticket (CR), name, what , LBP
//import copy from "clipboard-copy";

export default {
    data() {
        return {
            one: "",
            two: "",
            three: "",
            four: "",
            five:"",
//            calculatedPoints: "sadasd",
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
/*
figure out how localStorage works
localStorage.getItem("one")
*/
/*
the values in supplies and vehicles always stay the same. for scrooping, I count in 5k increments, so for example, if one scroops 7.5k I round up to 10k = 2LBP /1.5k scroop is rounded up to 5 = 1LBP

5k salvage = 1 LBP = 2500Bmats
5k salvage = 1 LBP = 500 Emats
5k salvage = 1 LBP = 500 Diesel
5k coal = 1 LBP = 1000 gravel
5k sulfur = 2 LBP = 250 HEmats
5k components = 3 LBP = 250rmats
Transportation = 1 LBP / hex travelled (start hex does not count), freighters and trains are x2 LBP


The above is the basis for all calculations
[1:28 PM]
--------------------------------------------------------------------------------

Example:

#0000 Debrief; Capo; 5k salvage; 15c SS cooked; 15c SS delivered by hauler; 3 hexes; RTB 5k comps.
Capo; Salvage 5k = 1LBP; 15c SS cooked = 1LBP (supplies), 3hex driven = 3LBP (1/hex); returned with 5k comps = 3LBP  /// total = 8LBP (edited)


*/