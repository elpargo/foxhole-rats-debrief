<template>
  <div class="flex flex-col justify-center items-center bg-rats-ecru px-16 m-8">
    <h2>Your Debrief</h2>
    <p v-if="data.playerName">{{ data.playerName }}'s</p>
    <p v-if="data.ticketNumber">Debrief for Ticket: {{ data.ticketNumber }}</p>
    <p v-if="data.hasResourceGathered">Gathered {{ data.resourceAmount }} {{data.resourceGathered }} and earned {{ gatheringPoints }}</p>

    <p v-if="data.hasManufactured">Manufactured {{ data.manufacturedAmount }} {{ data.manufacturedGoods }} and earned {{ manufacturePoints }}</p>
    <p v-if="data.hasTransported">Transported {{ data.transportedGoods }} by {{ data.transportedMedium }} and earned {{ transportPoints }}</p>
    <p>TOTAL Points! : {{ totalPoints }}</p>
    <p v-if="data.hasCodeRed">Was it a Code RED? {{ data.hasCodeRed ? "YES" : "no" }}</p>

  </div>
<div class="$reset bg-rats-black text-rats-ecru p-8">               
  <FormKit 
    type="form" 
    v-model="data" 
    submit-label="Copy to Clipboard"
    @submit="handleSubmit">
      <FormKitSchema :schema="schema" :data="data" />
  </FormKit>

  <textarea 
    v-model="outputText"
    class="formkit-input"
    rows="8"
    disabled>
  </textarea>
</div>

<div class="flex flex-col justify-center items-center pt-16">
  <p>Coding stuff here pay no attention to this part hehe</p>

  <FormKit
  type="textarea"
  label="Your Debrief"
  rows="10"
  v:model="outputText"
  help="click the button to report!"
  disabled="true"
>
</FormKit>
  <pre>
    {{ data }}
  </pre>
  <FormKit
    type="color"
    value="#FFFFFF"
    label="Which background color will you like to use?"
    help="This color will be remembered as your background color"
    />
</div>
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
  name: "hasResourceGathered",
  label: "Did you scrooped something?",
},
{
  $formkit: "select",
  name: "resourceGathered",
  label: "Which Resource you collected?",
  help: "Salvage, Components, Coal?",
  options:['Salvage','Coal','Sulfur','Components',],
  if: "$hasResourceGathered",
},
{
  $formkit: "number",
  name: "resourceAmount",
  label: "How many?",
  if: "$hasResourceGathered",
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
  help: "Is this needed?",
},
{
  $formkit: "select",
  name: "transportedMedium",
  label: "Means of Transportation?",
  if: "$hasTransported",
  options:['Truck', 'Ship', 'Train'],
},
{
  $formkit: "number",
  name: "transportedLegs",
  label: "How many legs",
  help: "If one-way trip 1, if RTB 2, if 5 full trips then 10 and so on",
  if: "$hasTransported",
},
{
  $formkit: "number",
  name: "hexTraveledPerLeg",
  label: "How many hexes you travelled PER LEG!",
  help: "Use common sense for distance. If you traveled from the center of the hex then 2 full hexes and then to the center again. That's 3",
  if: "$hasTransported",
},
{
  $formkit: "checkbox",
  name: "hasCodeRed",
  label: "Is this a Code RED?",
},
];

const data = ref({
totalPoints:0,
resourceAmount:0
});

const transportPoints = computed(() => {
  var multiplier;
  switch(data.value.transportedMedium){
    case "Truck":
      multiplier = 1
      break;
    case "Ship":
    case "Train":
      multiplier = 2
  }
return data.value.transportedLegs * data.value.hexTraveledPerLeg * multiplier;
})

const manufacturePoints = computed(() => {
return 0;
})

const gatheringPoints = computed(() => {
  var multiplier;
  switch(data.value.resourceGathered){
    case 'Salvage':
    case 'Coal':
      multiplier = 1;
    break;
    case 'Sulfur':
      multiplier = 2;
    break;
    case 'Components':
      multiplier = 3;
    break;
  }
  return Math.ceil(data.value.resourceAmount / 5000) * multiplier;
})

const totalPoints = computed(() => {
  var multiplier = 1;
  if (data.value.hasCodeRed) {
    multiplier = 3;
  }
  return (gatheringPoints.value + manufacturePoints.value + transportPoints.value) * multiplier;
})

function outputTaggedTemplate(strings,gatheredExp,manufacturedExt,tranportedExp){
  
  return ``
}

const outputText = computed(() => {
  var text = `
Debrief for Ticket: ${data.value.ticketNumber}
by ${data.value.playerName}
Gathered ${data.value.resourceAmount} ${data.value.resourceGathered} and earned ${data.value.gatheringPoints}
Manufactured ${data.value.manufacturedGoods} ${data.value.manufacturedAmount} and earned ${data.value.manufacturePoints}
Transported ${data.value.transportedGoods} by ${data.value.transportedMedium} and earned ${data.value.transportPoints}
TOTAL Points! : ${data.value.totalPoints}
Was it a Code RED? ${data.value.hasCodeRed}
`
  return text;
})

const handleSubmit = () => {
  navigator.clipboard.writeText(outputText.value);
}
</script>

<style>
.formkit-input {
    color: #D0BE7D !important;
}
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