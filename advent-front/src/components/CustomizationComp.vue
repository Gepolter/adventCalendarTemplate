<template>
    <div>
        <div class="daysContainerDiv">
            <div class="dayDiv" v-for="index in 24" :key="index">
                <p>Day {{ index }}</p>
                <div class="dayContent" v-for="content in daysContent[index]" :key="content">
                    {{ content }}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

    export default {
        data(){
            return{
                daysContent:{
                    1:[1, "hi"],
                    2:[2, "no"]
                }
            }
        },
        computed:{
            
        },
        methods:{
            ...mapActions({
                
            }),
            
        }
    }

</script>
<style>
</style>