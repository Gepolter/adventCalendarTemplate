<template>
    <div class="doorWrapper" :class="openCloseState" id="doorWrapper">
        <div class="doorWindow">
            <div class="doorHeader">
                <div class="borderWrapperHeading">
                    <h1>{{getDay.toString()}}</h1>
                </div>
                <button class="close" type="submit" @click="fadeOut()">
                    X 
                </button>
            </div>
            <hr>
            <div class="doorPage">
                <div class="dayContent" v-if="tooEarlyCheck(presentDay)">
                    <div class="contentImg" style="width: 50%">
                        <!--img src="../assets/images/christmasSantaCropped.jpeg" alt="image"-->
                    </div>
                    <h2>No Peeking!</h2>
                </div>
                <div class="dayContent" v-if="dayCheck('12.01.2022')">
                    <div class="contentText">
                        <h2>Day 1</h2>
                        <p>
                            Text
                        </p>
                        <iframe src="https://giphy.com/embed/WrVOtWEay7fJS" width="50%" height="50%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        <p>
                            Time to get creative!
                            <br><br><br>
                        </p>
                    </div>
                </div>
                <!--control special content components like this:-->
                <!--ClickerGame v-if="dayCheck('12.01.2022')"-->
                <ClickerGame/>
                <div class="dayContent" v-if="dayCheck('12.02.2022')">
                    <div class="contentText">
                        <h2>🤖 Day 2 🤖</h2>
                    </div>
                    <div class="contentImg">
                        <!--img src="../assets/images/someImage.png" alt=""-->
                    </div>
                    <div class="contentText">
                        Text
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.03.2022')">
                    <div class="contentText">
                        <h2>Day 3</h2>
                        <p>
                           Text 
                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.04.2022')">
                    <div class="contentText">
                        <h2>Day 4</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.05.2022')">
                    <div class="contentText">
                        <h2>Day 5</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" width="80vw" height="80vh" v-if="dayCheck('12.06.2022')">
                    <div class="contentText">
                        <h2>Day 6</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.07.2022')">
                    <div class="contentText">
                        <h2>Day 7</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.08.2022')">
                    <div class="contentText">
                        <h2>Day 8</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.09.2022')">
                    <div class="contentText">
                        <h2>Day 9</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.10.2022')">
                    <div class="contentText">
                        <h2>Day 10</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.11.2022')">
                    <div class="contentText">
                        <h2>Day 11</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.12.2022')">
                    <div class="contentText">
                        <h2>Day 12</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.13.2022')">
                    <div class="contentText">
                        <h2>Day 13</h2>
                        
                        <p>
                            Text
                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.14.2022')">
                    <div class="contentText">
                        <h2>Day 14</h2>
                        <p>
                            Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.15.2022')">
                    <div class="contentText">
                        <h2>Day 15</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.16.2022')">
                    <div class="contentText">
                        <h2>Day 16</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.17.2022')">
                    <div class="contentText">
                        <h2>Day 17</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.18.2022')">
                    <div class="contentText">
                        <h2>Day 18</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.19.2022')">
                    <div class="contentText">
                        <h2>Day 19</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.20.2022')">
                    <div class="contentText">
                        <h2>Day 20</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.21.2022')">
                    <div class="contentText">
                        <h2>Day 21</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.22.2022')">
                    <div class="contentText">
                        <h2>Day 22</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.23.2022')">
                    <div class="contentText">
                        <h2>Day 23</h2>
                        <p>
                           Text 

                        </p>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="dayContent" v-if="dayCheck('12.24.2022')">
                    <div class="contentImg" style="width: 50em; height: 50em;">
                        <!--img src="../assets/images/someHeaderImage.jpeg" alt="header image" -->
                    </div>
                    <div class="contentText">
                        <h2>Day 24</h2>


                        <p>
                            This is an example for some riddle, where the user needs to figure out a password to access a hidden image.
                        </p>
                        <input type="text" v-model="secretWord1">
                        <div v-if="secretWord1 == solution1">
                            <div class="contentImg"  style="height: 20em; width: 20em">
                                <!--img src="../assets/images/berg.jpeg" alt="secret image"-->
                                Secret Image
                            </div>
                            <p>
                                Some other step of the riddle.
                            </p>
                            <input type="text" v-model="secretWord2">
                            <div class="contentImg" v-if="secretWord2 == solution2" style="height: 10em; width: 10em">
                                <!--img src="../assets/images/riverThames.jpeg" alt="secret image"-->
                                Secret Image 2
                            </div>
                        </div>
                    </div>
                    <div class="contentImg">
                        <img src="" alt="">
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    <!-- time test -->
    <!-- content passed? with prop? -->
    <!-- for now put everything here... some class is gonna be bloated anyways
        later it would be nice to load the content from the backend
    -->
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ClickerGame from './ClickerGame.vue';

    export default {
        components: {
            ClickerGame
        },

        data() {
            return {
                showDoor: true,
                isLoading: false,
                presentDay: moment(),
                solution1: "solution1",
                secretWord1: "solution1",

                solution2: "solution2",
                secretWord2: "solution2",
            }
        },
        props: {

        },
        computed: {
            ...mapGetters({
                getShowtime: 'getShowtime',
                getDay: 'getDay',
            })
        },
        methods: {
            ...mapActions({
                setShowtime: 'setShowtime'
            }),
            tooEarlyCheck: function(presentDay) {
                //console.log(presentDay)
                if(moment(this.getDay).startOf("day").isAfter(presentDay)) {
                    //reset to true
                    console.log("is too soon")
                    return true
                }
                console.log("isRightTime")
                return false
            }, 
            dayCheck(doorDate){
                //console.log(moment(doorDate).format("DD MM YYYY"))
                //console.log(this.getDay)
                if(moment(doorDate).isSame(moment(this.getDay), "day") && !this.tooEarlyCheck(this.presentDay)){
                    console.log("fine day" + doorDate)
                    return true

                }   
                console.log("wrong day" + doorDate + this.getDay)
                return false
            },
            dateClip(moment){
                moment(moment).format("DD MMMM").toString
            },
            fadeOut: function() {
                this.setShowtime(false)
            },
            gameFinished: function(word, lose) {

            }
        }
    }
</script>

<style>
    .doorWrapper{
        position: absolute;
        height: 80vh;  
        width: 60vw;
        top: 10vh;
        left: 20vw;
        border: 3px solid black;
        justify-self:center;
        text-align: center;
        margin: 10px, 10px,10px,10px;

        background: linear-gradient(black, var(--christmas-dark-green));
        color: black;        
        border-radius: 1%;
        box-shadow: 5px 10px 5px black;

        display: flex;
        justify-content: center;
        align-items: center;

    }
    /*
    .open {
        animation: doorEntrance 700ms ease-out;
        animation-fill-mode: backwards;
    }
    .close {
        animation: doorExit 700ms ease-out;
        animation-fill-mode: backwards;
    }*/
    .doorWindow{
        background: linear-gradient(var(--christmas-cream), white);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 99%;
        width: 99%;
        border-radius: 1%;       
    }
    .doorHeader{
        width: 100%;
        flex: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: radial-gradient(var(--christmas-red), var(--christmas-purple));  
        border-bottom: 3px solid black;
    }
   
    .doorPage{
        width: 100%;
        max-height: 80%;
        flex: 4;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-family: "Helvetica";
        caret-color:transparent;
    }
    .dayContent{
        width: 95%;
        text-align: start;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    .contentText{
        text-align: left;
        flex: 1;
        max-height: 100%;
        
    }.contentText > p{
        border-bottom: 2px dashed rgba(128, 128, 128, 0.245);
        width: 100%;
        margin: 0px;
        flex: 1;
    }
    .contentImg{
        flex: 1;
        background-color: black;
        border-radius: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contentImg > img{
        max-width: 95%;
        max-height: 95%;
        object-fit: cover;
        border-radius: 10%;
    }
    h1 {
        font-family: Festival;
    }
    h2 {
        text-align: center;
        font-size: 2em;
        font-family: Festival;
    }


    .borderWrapperHeading{
        color: var(--christmas-cream);
        padding: 0px 5px 0px 5px;
        position: relative;
        display: inline;
        width: 80%;
        margin: 3px;
        margin-left: 10%;
    }
    button.close{
        align-self: flex-start;
    }


</style>
