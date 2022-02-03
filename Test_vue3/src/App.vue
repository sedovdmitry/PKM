<template>
<div class="main">
<div class="app">
  <!-- Выделение переменной каждому приложение через ni -->
  <!-- Первое окно -->
<list  v-for='(item, ni) of secondActivList' :key="item"
@auth-boxs='myAuthBoxs' 
:numberOfBoxs='this.numberOfBoxs'
@checked-auth-box='checkedAuthBox'
@input-number-change='inputNumberChange'
:checkList='this.secondActivList[ni]'
:ni='ni'
@actual-box='actualBox'
@all-colors='alloFColors'
:allLists='this.allLists'
:myDot='myDot'
@add-dot='checkedDot'
></list>
</div>
<div class="app2">
  <!-- Второе окно -->
<lists-of-items v-for='(item, ni) of secondActivList' :key="item"
:allLists='this.allLists'
:ni='ni'
:numberOfBoxs="this.numberOfBoxs"
:allColorsArr='allColorsArr'
@iter-item="iterItem"
></lists-of-items>
</div>
</div>
</template>

<script>

import List from './components/List.vue'
import ListsOfItems from './components/ListsOfItems.vue'

export default {
data(){
return{
numberOfBoxs: [[],[],[]], // Массивы для хранения заданых в инпуте чисел
allLists: [[],[],[]], // Массивы для хранения true\false значений Lists
secondActivList: [   // Хранение true\false для чекбокса ul
false,
false,
false
],
allColorsArr: [[],[],[]], // Массив для хранения цветов
myDot: [  // Тумблер псевдоточки 
  false,
  false,
  false
]
}},
  components: {List, ListsOfItems},
methods:{
  //  Задает глобальное значение переменным при нажатии на Item + опреедяет количество item'ов
  myAuthBoxs(i, lists, ni){
    this.allLists[ni][i] = lists[i]
    this.allLists[ni].length = lists.length  
},  // Глобально задает значение item'сам при нажатии на чекбокс ul
  checkedAuthBox(key, lists, ni){
    this.allLists[ni].length = lists.length
    this.allLists[ni][key] = lists[key]
  }, // Вынесение значение инпута на глобальный уровень
  inputNumberChange(i, boxs, ni){
    this.numberOfBoxs[ni][i] = boxs[i]
}, // Тумбрет чекбокса в ul
actualBox(lists, ni){
  this.allLists[ni].length = lists.length
}, // Вынесение цветом на глобальный уровень для последующей смены
alloFColors(color, ni){
this.allColorsArr[ni] = color
  }, // Уменьшение значения инпута при нажачии на кубик
  iterItem(i, ni) {
    this.numberOfBoxs[ni][i - 1] -= 1
  }, // Тумблер псевдоточки
  checkedDot(dot, ni){
    this.myDot[ni] = dot
  }
}}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  max-width: 100%;
    display: flex;
    flex-direction: row;
}
.app {
  min-width: 50%;
}
</style>
