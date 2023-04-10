<template>
    <h1>Your Debrief</h1>
    <p v-if="data.playerName">{{ data.playerName }}'s</p> 
    <p>Debrief for Ticket: {{ data.ticketNumber }}</p>
    <p>Was it a Code RED? {{ data.hasCodeRed ? "YES" : "no" }}</p>
    <p v-if="data.hasManufactured">Manufactured {{ data.manufacturedAmount }} {{ data.manufacturedGoods }} and earned {{ data.manufacturedAmount*3 }}</p>
    <p v-if="data.hasTransported">Transported {{ data.TransportedAmount }} {{ data.transportedGoods }} by {{ data.TransportedMedium }} and earned {{ data.transportPoints }}</p>
    <p v-if="data.hasRTB">Returned (RTB) with {{ data.returnedResources }} and earned {{ data.gatheringPoints }}</p>
    <p v-else>No Return to BASE (no RTB)</p>
                            
    <FormKit type="form" v-model="data" @submit="handleSubmit">
        <FormKitSchema :schema="schema" :data="data" />
    </FormKit>

<hr>
<hr>

<p>Coding stuff here pay no attention to this part hehe</p>
<input type="text" class='form-control' v-bind:value=data disabled>
<pre>
    {{ data }}
</pre>

</template>

<script setup>
//import '@formkit/themes/genesis'
import { FormKitSchema } from "@formkit/vue";
import { ref, computed, reactive } from "vue";

const schema = [
  {
    $formkit: "number",
    name: "ticketNumber",
    label: "Ticket Number",
    help: "Leave Empty if LBR"
  },
  {
    $formkit: "text",
    name: "playerName",
    label: "Who are you?",
    help: "In game-name please",
    validation:"required"
  },
  {
    $formkit: "checkbox",
    name: "hasCodeRed",
    label: "Is this a Code RED?",
  },
  {
    $formkit: "checkbox",
    name: "hasManufactured",
    label: "Did you manufactured something?",
  },
  {
    $formkit: "text",
    name: "manufacturedGoods",
    label: "What you manufactured?",
    if: "$hasManufactured",
  },
  {
    $formkit: "number",
    name: "manufacturedAmount",
    label: "How Much?",
    if: "$hasManufactured",
  },
  {
    $formkit: "checkbox",
    name: "hasTransported",
    label: "Did you Transported something?",
  },
  {
    $formkit: "text",
    name: "transportedGoods",
    label: "What you Transported?",
    if: "$hasTransported",
  },
  {
    $formkit: "number",
    name: "TransportedAmount",
    label: "How Much?",
    if: "$hasTransported",
  },
  {
    $formkit: "select",
    name: "TransportedMedium",
    label: "Means of Transportation?",
    if: "$hasTransported",
    options:['Truck', 'Ship', 'Train'],
  },
  {
    $formkit: "text",
    name: "hexTraveled",
    label: "How many hexes you travelled",
    help: "Use common sense for distance. If you traveled from the center of the hex then 2 full hexes and then to the center again. That's 3",
    if: "$hasTransported",
  },
  {
    $formkit: "checkbox",
    name: "hasRTB",
    label: "Did you Returned to Base?",
  },
  {
    $formkit: "text",
    name: "returnedResources",
    label: "Full of Raw resources?",
    if: "$hasRTB",
  },
];

const data = ref({
 // manufacturePoints: 0,
  transportPoints:0,
  gatheringPoints:0,
  totalPoints:0,
});

const manufacturePoints = computed(() => {
  return data.manufacturedAmount * 3;
})

const handleSubmit = () => alert("Valid submit!");
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