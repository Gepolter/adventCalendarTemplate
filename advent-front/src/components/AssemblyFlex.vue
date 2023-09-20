<template>
    <div class="assembly-div">
        <div class="flex-container">
            <div class="flex-component1">
                <div class="borderWrapperCalendar">
                    <CalendarGrid/>
                </div>
            </div>
        </div>
        <!--GuidePanel @close="toggleGuide()" v-if="showGuide"/-->
        <LoadingScreen 
            v-if="isLoading"
            :buildsFinished="this.buildsFinished"
            :buildsTotal="this.buildsTotal"
        />
        <Transition name="fade">
            <DoorPanel v-if="getShowtime"/>
        </Transition>
    </div>
</template>


<script>
/* eslint-disable */
//https://www.codepanion.com/posts/2020-02-02-how-to-use-async-await-promises-with-fetch-in-vue-js-vuex/
//https://www.chartjs.org/docs/latest/charts/line.html

import { mapGetters, mapActions, mapMutations } from 'vuex'
import CalendarGrid from './CalendarGrid.vue'
import DoorPanel from './DoorPanel.vue'


    export default {
        components: {
            CalendarGrid,
            DoorPanel,
        },
        computed:{
            
            ...mapGetters({
                getShowtime:'getShowtime'
                //getDataEntries:'getDataEntries',
                //getFilterStructure: 'getFilterStructure'

                //testing
                //findWeapon: 'findWeapon'

            })
        },

    

        data() {
            return {
                showGuide: false,
                isLoading: false,
                //guideImg: require('../assets/unique-armor-mhw-wiki.png'),
                
                
            };
        },

        methods: {
            
            
            ...mapActions({
                //fetchDataEntries: 'fetchDataEntries',
                fetchAccount: 'fetchAccount',
                setShowtime: 'setShowtime'
            }),
            ...mapMutations([
                //add methods
            ]),    
            toggleGuide: function(){
                this.showGuide = !this.showGuide
            },
        },
        async created() {
            //await this.fetchDataEntries()
            //this.isLoading = true
            await this.fetchAccount()
        }
    }
</script>

<style>
    @media only screen and (max-width: 768px){
        .flex-container{flex-direction: column-reverse;}
    }
    .assembly-div{
        display: flex;
        flex-direction: column;
    }
    .flex-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px
    }
    .flex-component1{
        /*flex:5;*/
        /*padding: 10px;*/
        
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        
        /*
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: min-content;
        */
    }
    .flex-component1 > div{
        align-self: flex-start;
        width: 100%;
        
    }
    .flex-component2{
        flex:1;
        /*
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 2%;*/
        padding: 10px;
    }
    .flex-component3{
        flex:1;
        /*
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 2%;
        */
        padding: 10px;
    }
    .buildOptions{
        border: 3px solid black;
        background: linear-gradient(black 0%, var(--mh-gray) 25%, var(--mh-gray)85%, black);
        /*background: linear-gradient(#f24725, #fff790 ,var(--mh-white));*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0px 5px 0px;
        
    }
    .buildTable{
        height: auto;
        padding: 5px 5px 5px 5px;
    }
    .buildOptions > label{
        flex: 0.2;
    }
    .guideBtn{
        margin: 10px;
        color: black;
        background: linear-gradient(green, blue);
    }
    .borderWrapperCalendar{
        height: 90vh;
        border: 2px solid black;
        background: linear-gradient(var(--christmas-copper), var(--christmas-brown));
        border-radius: 1%;
        box-shadow: 5px 10px 5px black;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    .plotDiv{
        max-width: 100vw;
        /*max-height: 80vh;*/
        background: linear-gradient(var(--mh-dark-yellow), var(--mh-yellow));;
    }
    .wrapper{
        border: 2px solid var(--mh-gray);
        border-radius: 1%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2em;
    }
    .lineWrapper{
        border: 1px solid var(--mh-gray);
        border-radius: 2%;
        display: flex;
        flex-direction: row;
    }
    .fade-enter-active{
        animation: doorEntrance 700ms ease-out;
    }
    @keyframes doorEntrance {
        from {
            opacity: 0;
            transform: scale(0.3);
            filter: hue-rotate(180deg);
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: scale(1);
            filter: hue-rotate(0deg);
            transform: translateY(0%);
        }
    }
    .fade-leave-active {
        animation: doorEntrance reverse 700ms ease-out;
    }
    /*
    @keyframes doorExit {
        from {
            opacity: 1;
            transform: scale(1);
            filter: hue-rotate(180deg);
        }
        to {
            opacity: 0;
            transform: scale(0.3);
            filter: hue-rotate(0deg);
        }
    }*/

</style>