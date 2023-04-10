<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>Who are you?</label>
                <input type="text" class='form-control' required v-model="username">
            </div>
            <div class="form-group">
                <label>Ticket number</label>
                <input type="text" class='form-control' required v-model="ticket_number">
                <small class="form-text text-muted">Leave empty if LBP</small>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="codeRedCheckbox">
                <label class="form-check-label" for="codeRedCheckbox">Was it a code RED</label>
            </div>
            <div>Did you manufacture?</div>
            <div class="form-group">
                <label>What ?</label>
                <input type="text" class='form-control' required v-model="two">
            </div>
            <div class="form-group">
                <label>how much?</label>
                <input type="text" class='form-control' required v-model="two">
            </div>
            <div>Did you deliver or transport something? </div>
            <div class="form-group">
                <label>What?</label>
                <input type="text" class='form-control' required v-model="three">
            </div>
            <div class="form-group">
                <label>How many?</label>
                <input type="text" class='form-control' required v-model="three">
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                        Truck, Flatbed, LUV or Bike
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        Ship
                    </label>
                    </div>
                    <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                    <label class="form-check-label" for="gridRadios3">
                        Train
                    </label>
                    </div>
                </div>
            </div>
            </fieldset>
            <div class="form-group">
                <label>How long did you travel? (In Hexes)</label>
                <input type="text" class='form-control' required v-model="four">
                <small class="form-text text-muted">Do an estimates guess. If you traveled from the middle of a hex to the middle of the hex next door that's 1hex. If you went back and forth 1/4 of a hex inside the same hex that's also 1hex</small>
            </div>
            <div class="form-group">
                <label></label>
                <input type="text" class='form-control' required v-model="five">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="codeRedCheckbox">
                <label class="form-check-label" for="codeRedCheckbox">Did you return your truck/ship/train to our stockpiles?</label>
            </div>
            <div class="form-group">
                <label>Full of Raw resources?</label>
                <input type="text" class='form-control' required v-model="five">
            </div>

        </form>
    </div>

    <p>{{one}} ; {{two}} ; {{three}} ; {{ four }} ; {{ five }}</p>

    
    ticket (CR), name, what , LBP

</template>

<script>

export default {
    data() {
        return {
            one: localStorage.getItem("one"),
            two: "",
            three: "",
            four: "",
            five:""
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