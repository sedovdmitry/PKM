<template>
<div >
<ul> List {{ni + 1}}
    <!-- Поле отображения кубиков по числу введеному в item's -->
    <li v-for="i of this.allLists[ni].length" :key="i">
        <button :disabled="this.allLists[ni][i - 1] === false ? true : false " :style='{"background-color": myColor[ni][i-1]}' v-for='item of this.numberOfBoxs[ni][i - 1]' :key='item' @click='btnBoxs(i, ni)'></button>
    </li>
</ul>
</div>
</template>

<script>
export default {
props: ['allLists', 'numberOfBoxs', "ni",'item','allColorsArr'],
emits:["iter-item"],
data(){
    return {
myColor: this.allColorsArr // передача цвета кубикам
    }
},
methods:{
    // Метод для уменьшения количества кубиков по клику с возвратом в item
    btnBoxs(i, ni) {
    this.$emit("iter-item", i, ni)
    }}}
</script>
<style scoped>
ul, li {
list-style-type: none;
}
button {
    width: 15px;
    height: 15px;
} 
div {
    min-width: 300px;
    max-width: 900px;
    max-height: auto;
    background-color: cadetblue;
}
</style>