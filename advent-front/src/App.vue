<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/customize">Customize</router-link>
    <a href='https://github.com/Gepolter/adventCalendarTemplate' target="_blank" rel="noopener noreferrer">
      <img object-fit="contain" style="width: 2em; vertical-align: middle;" :src="require('../src/assets/icons/github-mark-white.png')"/>
    </a>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif, "Festival";
  color: var(--addi-slate);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  

  body {
    background-color: var(--christmas-slate);
    cursor:none;
    //font-family: "monsterhunter", Avenir, sans-serif;
  }

  //vselect vars
  --vs-controls-color: var(--mh-yellow);
  --vs-border-color: var(--mh-dark-yellow);
  --vs-dropdown-bg: linear-gradient(var(--mh-yellow), var(--mh-dark-yellow));
  --vs-dropdown-color: black;
  --vs-dropdown-option-color: black;
  //--vs-selected-bg: green;
  --vs-selected-color: #eeeeee;
  --vs-search-input-color: #eeeeee;
  --vs-dropdown-option--active-bg: var(--mh-light-blue);
  --vs-dropdown-option--active-color: #eeeeee;
  /*
  --vs-transition-timing-function: cubic-bezier(1,-0.115,0.975,0.855);
  --vs-transition-duration: 1500ms;
  */
  .vcp__header-icon{
    height: 0%;
    width: 0%;
    overflow: hidden;
  }
  .vcp__header-title{
    flex: 4;
  }
  .vcp__header{
    display: flex;
    justify-content: space-between;
    align-items:stretch;
    padding-bottom: 5px;
  }
  .vcp__body{
    max-height: fit-content;
  }

  button.close{
    /*background: radial-gradient(var(--mh-red), var(--mh-dark-red));*/
    color: black;
    background-color: var(--christmas-cream);
    
    border: 3px solid black;
    font-family: Festival;
    font-size: 1em;
    
    animation: rotateElementBack 700ms ease-in-out;
    
  }
  button.close:hover{
    animation: rotateElement 700ms ease-in-out;
    animation-fill-mode: forwards;
    animation-direction: normal;
  }
  @keyframes rotateElement{
    from{
      transform: rotate(0deg) scale(1);
      background-color: var(--christmas-cream);
      color: black;
    }
    to{
      transform: rotate(180deg) scale(1.5);
      background-color: var(--christmas-red);
      color: white;
    }
  }
  @keyframes rotateElementBack{
    from{
      transform: rotate(180deg) scale(1.5);
      background-color: var(--christmas-red);
      color: white;
    }
    to{
      transform: rotate(0deg) scale(1);
      background-color: var(--christmas-cream);
      color: black
    }
  }
  .buttonWrapper{
    border-color: repeating-linear-gradient(
      45deg,
      var(--christmas-green) 0px,
      var(--christmas-green) 1px,
      var(--christmas-red) 1px,
      var(--christmas-red) 2px
    );
    padding: 5px;    
  }
}

nav {
  padding: 30px;
  background-color: var(--christmas-purple);
  border-radius: 4px;
  a {
    margin-left: 10px;
    font-weight: bold;
    color: var(--christmas-cream);

    &.router-link-exact-active {
      color: var(--christmas-copper);
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black; 
  background: linear-gradient(var(--addi-dark-slate), var(--addi-slate));
  border: 3px solid black;
  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--addi-pink), var(--addi-light-pink));
  border:3px solid black;
  border-radius: 70%;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(var(--addi-dark-blue), var(--addi-light-blue));
}


</style>

<script>
  export default {
  name: "App",
  components: {
  }
};
</script>