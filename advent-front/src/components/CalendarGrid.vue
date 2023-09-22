<template>
    <div class="stripedWrapper">
        <section class="animated-grid">
            <div class="card">
                User's <br> Advent
            </div>          
            <div class="card" @click="toggleDoor(day1)">
                1
            </div>
            <div class="card" @click="toggleDoor(day2)">2</div>
            <div class="card" @click="toggleDoor(day3)">3</div>
            <div class="card" @click="toggleDoor(day4)">4</div>
            <div class="card" @click="toggleDoor(day5)">5</div>
            <div class="card" @click="toggleDoor(day6)">6</div>
            <div class="card" @click="toggleDoor(day7)">7</div>
            <div class="card" @click="toggleDoor(day8)">8</div>
            <div class="card" @click="toggleDoor(day9)">9</div>
            <div class="card" @click="toggleDoor(day10)">10</div>
            <div class="card" @click="toggleDoor(day11)">11</div>
            <div class="card" @click="toggleDoor(day12)">12</div>
            <div class="card" @click="toggleDoor(day13)">13</div>
            <div class="card" @click="toggleDoor(day14)">14</div>
            <div class="card" @click="toggleDoor(day15)">15</div>
            <div class="card" @click="toggleDoor(day16)">16</div>
            <div class="card" @click="toggleDoor(day17)">17</div>
            <div class="card" @click="toggleDoor(day18)">18</div>
            <div class="card" @click="toggleDoor(day19)">19</div>
            <div class="card" @click="toggleDoor(day20)">20</div>
            <div class="card" @click="toggleDoor(day21)">21</div>
            <div class="card" @click="toggleDoor(day22)">22</div>
            <div class="card" @click="toggleDoor(day23)">23</div>
            <div class="card" @click="toggleDoor(day24)">24</div>
        </section>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    import moment from 'moment'

    export default {
        components:  {

        },
        computed:{
            ...mapGetters({
                getShowtime:'getShowtime'
            })
        },

        data() {
            return {
                testB: moment(Date(2022, 11, 14)),
                day1: moment("12.01.2022").format("DD MMMM YYYY"),
                day2: moment("12.02.2022").format("DD MMMM YYYY"),
                day3: moment("12.03.2022").format("DD MMMM YYYY"),
                day4: moment("12.04.2022").format("DD MMMM YYYY"),
                day5: moment("12.05.2022").format("DD MMMM YYYY"),
                day6: moment("12.06.2022").format("DD MMMM YYYY"),
                day7: moment("12.07.2022").format("DD MMMM YYYY"),
                day8: moment("12.08.2022").format("DD MMMM YYYY"),
                day9: moment("12.09.2022").format("DD MMMM YYYY"),
                day10: moment("12.10.2022").format("DD MMMM YYYY"),
                day11: moment("12.11.2022").format("DD MMMM YYYY"),
                day12: moment("12.12.2022").format("DD MMMM YYYY"),
                day13: moment("12.13.2022").format("DD MMMM YYYY"),
                day14: moment("12.14.2022").format("DD MMMM YYYY"),
                day15: moment("12.15.2022").format("DD MMMM YYYY"),
                day16: moment("12.16.2022").format("DD MMMM YYYY"),
                day17: moment("12.17.2022").format("DD MMMM YYYY"),
                day18: moment("12.18.2022").format("DD MMMM YYYY"),
                day19: moment("12.19.2022").format("DD MMMM YYYY"),
                day20: moment("12.20.2022").format("DD MMMM YYYY"),
                day21: moment("12.21.2022").format("DD MMMM YYYY"),
                day22: moment("12.22.2022").format("DD MMMM YYYY"),
                day23: moment("12.23.2022").format("DD MMMM YYYY"),
                day24: moment("12.24.2022").format("DD MMMM YYYY"),
                
            }
        },
        methods: {
            ...mapActions({
                //fetchDataEntries: 'fetchDataEntries',
                setShowtime: 'setShowtime',
                setDay:'setDay'
            }),
            toggleDoor: function(day){
                if(!this.getShowtime) {
                    this.setDay(day)
                    this.setShowtime(true)
                }else{
                    this.setShowtime(false)
                }
            },
        }
        
    }
</script>

<style>
    .animated-grid {
        height: 72vh;
        width: 75vw;
        margin-bottom: 200px;

        display: grid;
        gap: 1rem;

        /* Explicit grid */
        grid-template-areas:
            'a  a  a  q  q  g  g  i  i  p  p  p  n  n'
            'a  a  a  q  q  x  x  x  x  p  p  p  l  l'
            'a  a  a  q  q  x  x  x  x  b  b  b  l  l'
            'v  v  v  v  w  w  w  s  s  b  b  b  l  l'
            'd  d  k  k  w  w  w  s  s  t  t  e  e  e'
            'd  d  k  k  m  m  c  s  s  t  t  e  e  e'
            'd  d  k  k  m  m  c  o  o  o  u  u  u  u'
            'd  d  h  h  h  j  c  o  o  o  y  y  y  y'
            'f  f  h  h  h  j  r  r  r  r  y  y  y  y'
            'f  f  h  h  h  j  r  r  r  r  y  y  y  y';
            
            
        grid-template-rows: repeat(10, 10%);
        grid-template-columns: auto auto auto auto;

        --stagger-delay: 100ms;
    }

    @keyframes cardEntrance {
        from {
            opacity: 0;
            transform: scale(0.3);
            filter: hue-rotate(180deg);
        }
        to {
            opacity: 1;
            transform: scale(1);
            filter: hue-rotate(0deg);
        }
    }

    .card {
        background-color: rgb(3w, 243, 147);
        animation: cardEntrance 700ms ease-out;
        animation-fill-mode: backwards;
        caret-color:transparent;
        cursor: default;
    }

    .card:nth-child(1) {
        grid-area: a;
        animation-delay: calc(1 * var(--stagger-delay));
        background: var(--christmas-green);
    }
    .card:nth-child(2) {
        grid-area: b;
        animation-delay: calc(2 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(3) {
        grid-area: c;
        animation-delay: calc(3 * var(--stagger-delay));
        background: var(--christmas-orange);

    }
    .card:nth-child(4) {
        grid-area: d;
        animation-delay: calc(4 * var(--stagger-delay));
        background: var(--christmas-brown);
    }
    .card:nth-child(5) {
        grid-area: e;
        animation-delay: calc(5 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(6) {
        grid-area: f;
        animation-delay: calc(6 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(7) {
        grid-area: g;
        animation-delay: calc(7 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(8) {
        grid-area: h;
        animation-delay: calc(8 * var(--stagger-delay));
        background: var(--christmas-yellow);
    }
    .card:nth-child(9) {
        grid-area: i;
        animation-delay: calc(9 * var(--stagger-delay));
        background: var(--christmas-red);
    }
    .card:nth-child(10) {
        grid-area: j;
        animation-delay: calc(10 * var(--stagger-delay));
        background: var(--christmas-purple);
    }
    .card:nth-child(11) {
        grid-area: k;
        animation-delay: calc(11 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(12) {
        grid-area: l;
        animation-delay: calc(12 * var(--stagger-delay));
        background: var(--christmas-yellow);
    }
    .card:nth-child(13) {
        grid-area: m;
        animation-delay: calc(13 * var(--stagger-delay));
        background: var(--christmas-copper);
    }
    .card:nth-child(14) {
        grid-area: n;
        animation-delay: calc(14 * var(--stagger-delay));
        background: var(--christmas-orange);
    }
    .card:nth-child(15) {
        grid-area: o;
        animation-delay: calc(15 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(16) {
        grid-area: p;
        animation-delay: calc(16 * var(--stagger-delay));
        background: var(--christmas-light-green);
    }
    .card:nth-child(17) {
        grid-area: q;
        animation-delay: calc(17 * var(--stagger-delay));
        background: var(--christmas-beige);
    }
    .card:nth-child(18) {
        grid-area: r;
        animation-delay: calc(18 * var(--stagger-delay));
        background: var(--christmas-dark-green);
    }
    .card:nth-child(19) {
        grid-area: s;
        animation-delay: calc(19 * var(--stagger-delay));
        background: var(--christmas-light-green);
    }
    .card:nth-child(20) {
        grid-area: t;
        animation-delay: calc(20 * var(--stagger-delay));
        background: var(--christmas-purple);
    }
    .card:nth-child(21) {
        grid-area: u;
        animation-delay: calc(21 * var(--stagger-delay));
        background: var(--christmas-yellow);
    }
    .card:nth-child(22) {
        grid-area: v;
        animation-delay: calc(22 * var(--stagger-delay));
        background: var(--christmas-purple);
    }
    .card:nth-child(23) {
        grid-area: w;
        animation-delay: calc(23 * var(--stagger-delay));
        background: var(--christmas-copper);
    }
    .card:nth-child(24) {
        grid-area: x;
        animation-delay: calc(24 * var(--stagger-delay));
        background: var(--christmas-green);
    }
    .card:last-child {
        grid-area: y;
        animation-delay: calc(24 * var(--stagger-delay));
        background: var(--christmas-red);
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Festival";
        font-size: 3rem;
        color: #fff;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border: 2px solid var(--christmas-cream);
        border-radius: 10px;
        transition: all 500ms;
        overflow: hidden;
        
        /*repeating-linear-gradient(
            45deg,
            var(--christmas-green) 0px,
            var(--christmas-green) 10px,
            var(--christmas-orange) 10px
            var(--christmas-orange) 20px
        );*/

        background-size: cover;
        background-position: center;

    }
    
    .card:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
    }
    
    .stripedWrapper {
        background: repeating-linear-gradient(
            45deg,
            var(--christmas-green) 0px,
            var(--christmas-green) 20px,
            var(--christmas-red) 20px,
            var(--christmas-red) 40px
        );
        padding: 1em;
        max-height: 90vh;
        box-sizing: border-box;
    }
</style>