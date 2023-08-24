<template>
    <div class="clickerWrapper">
        
        <div class="clickerDiv" v-for="person in getAccount._people" :key="person._id">
            <div class="sliderDiv">
                <v-slider 
                v-model="person._clicks"
                :min = 1
                :max = 50
                :height = 10
                :clickable = false      
                :dragOnClick=false    
                :useKeyboard=false
                :dotOptions={disabled:true}
                :marks="{
                    '0':'🌍',
                    '10':'✈️',
                    '25':'🛰️',
                    '38':'☄️',
                    '50':'🌕'
                }"
                :rail-style="railStyle"
                :process-style="processStyle"
                :tooltip="'always'"
                :step-style="stepStyle"
                >
                    <template v-slot:dot="{focus}">
                        <div :class="['custom-dot', {focus}]">🚀</div>
                    </template>
                </v-slider>
            </div>
            <div class="buttonsDiv">
                <button class="love" type="submit" @click="increment(person._person_id)">To the moon!</button>
            </div>
            <div class = "counterInfo">
                {{person._name}}
                {{person._clicks}}
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

    export default {
        data(){
            return {
                
            }
        },
        computed: {
            ...mapGetters({
                getAccount: 'getAccount'
            })
            //maybe v-model for slider
        },
        methods:{
            ...mapActions({
                setCounter: 'setCounter',
                fetchAccount: 'fetchAccount',
            }),
            increment: function(idPerson) {
                this.setCounter(idPerson)
                this.fetchAccount()
            }
        }

    }

</script>

<style>
    .clickerWrapper {
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        border: 2px solid black;
    }
    .clickerDiv {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .sliderDiv {
        width: 70%;
        
    }
    .custom-dot{
        transform: translate(-5px, -5px) rotate(40deg);
        justify-self: flex-start;
    }
    .sliderDiv{
        padding-bottom: 3em; 
    }
    .love{
        color: white;
        background-color: var(--christmas-red);
    }
    .love:hover{
        background-color: var(--christmas-purple);
    }
    .love:active{
        animation: buttonAnimation 100ms ease-out;
        animation-fill-mode: forwards;
    }
    @keyframes buttonAnimation {
        from {
            opacity: 100%;
            transform: scale(1);
            background-color: var(--christmas-purple);
        }   
        to {
            opacity: 0%;
            transform: scale(2);
            background-color: var(--addi-pink);
        }
    }
</style>