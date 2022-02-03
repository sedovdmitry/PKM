<template>
<div class="left_block">
    <!-- Кнопка свернуть\развернуть -->
    <button @click="visiblity" > {{visible ? "&#9660;" : "&#9650;"}}</button> 
    <!-- Общий чекбокс соединен с лейбом через переменную ni -->
    <input :id="this.ni" name="happy" :class='{mark: dot}'  type="checkbox" :checked='checkedList'  @click='checkedBox' > 
<label :for="this.ni" ></label>list {{ni +1}}
<!-- + и - item. -->
    <div :hidden="visible">
            <button @click='plus' :disabled='this.lists.length === 10'>+</button>
            <button @click='minus' :disabled='this.lists.length === 4'>-</button>
    <ul>    
        <!-- Список с item's -->
        <li v-for="(item, i) in lists" :key="i">
            <input type="checkbox" id="checkbox" :checked='this.allLists[ni][i]' @click="checkedItem(i, $event)"/>
            <!-- Останавливает нажатие на текст в лейбеле -->
            <label for="checkbox"  @click.prevent.stop>Item {{i + 1}} </label> 
            <div class="inBlk">
                <!-- Инпут для будущих квадратиков -->
            <input id='numbers' class="inBlk" :disabled='!this.allLists[ni][i]' type="text" :value="this.allLists[ni][i] ? this.numberOfBoxs[ni][i] : '' " :placeholder="0" @input="inputChange(i, $event)">
            <button class="inBlk" :style="{'background-color': this.color[i]}" @click='changeColor'></button>
            </div>
        </li>
    </ul>
</div>
</div>
</template>
<script>
export default {
    props:['numberOfBoxs', 'secondActivList', 'checkList', "ni",'allLists','myDot'],
    emits:['auth-boxs','checked-auth-box','input-number-change','actual-box','all-colors','ni','add-dot'],
data(){
        return{
            lists: [ // Локальные переменные включения\выключения item's
false,
false,
false,
false,
false
],
visible: false, // Сокрытие по кнопке
boxs: this.numberOfBoxs[this.ni], // Возвращает массив со значениями инпута
inputDisable: true, // Тумблер блокировки инпута
color: ['red', 'blue', 'grey', 'yellow', 'orange', 'blueviolet', 'brown','chocolate', 'crimson', 'cyan', 'black', 'white'],
checkedList: this.checkList, // Возврат значение головного чекбокса
dot: this.myDot[this.ni] // Возврат глобального состояния точки
}},
        methods: {
            // Метод для глобального чекбокса
        checkedBox(event){
if (event.target.checked === true) {
    this.checkedList = true
    for ( let key in this.lists) {
        this.lists[key] = true
this.$emit('checked-auth-box', key, this.lists, this.ni)
    }
} else if (event.target.checked === false) {
    this.checkedList = false
        for ( let key in this.lists) {
        this.lists[key] = false
        this.$emit('checked-auth-box', key, this.lists, this.ni)
}} if (this.checkedList === true && !this.lists.includes(false)){
    this.dot = false 
    this.$emit('add-dot', this.dot, this.ni)
} else if (this.checkedList === false && this.lists.includes(true)) {
this.dot = true
this.$emit('add-dot', this.dot, this.ni)
}
},
// Метод для item's при клике
checkedItem(i, event){
    this.lists[i] = event.target.checked
    if(this.lists[i]){
        this.inputDisable = true
        this.$emit('auth-boxs', i, this.lists, this.ni) 
    } else {
        this.inputDisable = !this.lists[i]
        this.$emit('auth-boxs', i, this.lists, this.ni)
        
    } if (!this.lists.includes(false)){
this.checkedList = true
this.$emit('actual-box', this.lists, this.ni)
} else if(this.lists.includes(false)) {
    this.checkedList = false
    this.$emit('actual-box', this.lists, this.ni)
} if (this.lists.includes(false) && this.lists.includes(true)) {
    this.dot = true 
    this.$emit('add-dot', this.dot, this.ni)
} else {
    this.dot = false
    this.$emit('add-dot', this.dot, this.ni)
}
},
// Метод + item
plus(){
    this.lists.push(false)
    if(!this.lists.includes(false) && this.checkedList === false ) {
        this.checkedList = true
    } else if (this.lists.includes(false) && this.checkedList === true) {
        this.checkedList = false
    }
    this.$emit('actual-box', this.lists, this.ni)
    if (this.lists.includes(false) && this.lists.includes(true)) {
    this.dot = true 
    this.$emit('add-dot', this.dot, this.ni)
} else {
    this.dot = false
    this.$emit('add-dot', this.dot, this.ni)

}
},
// Метод - item's
minus(){
    this.lists.pop()
        if(!this.lists.includes(false) && this.checkedList === false ) {
        this.checkedList = true
    } else if (this.lists.includes(false) && this.checkedList === true) {
        this.checkedList = false
    }
    this.$emit('actual-box', this.lists, this.ni)
        if (this.lists.includes(false) && this.lists.includes(true)) {
    this.dot = true 
    this.$emit('add-dot', this.dot, this.ni)
} else {
    this.dot = false
    this.$emit('add-dot', this.dot, this.ni)
}
    },
    // Метод кнопки свернуть\развернуть
    visiblity() {
    this.visible = !this.visible
    },
    // Реактивная смена значения инпута item's 
    inputChange(i, event){
    if (event.target.value <= 99 && event.target.value >= 0){
            this.boxs[i] = Number(event.target.value)
            this.$emit('input-number-change', i, this.boxs, this.ni)
            this.$emit('all-colors', this.color, this.ni)
            } else {event.target.value = ''}
}, 
// Смена цвета при клике на квадрат
changeColor(){
    this.color.unshift(this.color.pop())
    this.$emit('all-colors', this.color, this.ni)
}
}}
</script>

<style scoped>
ul, li {
list-style-type: none
}
#numbers {
    width: 14px;
    border: hidden;
    margin-right: 1%;
}
label {
    max-width: 65px;
    height: 20px;
}
li > label {
    margin-right: 10%;
}

div.inBlk{
width: 50px;
display: inline-block;
}
button.inBlk {
    width: 15px;
    height: 15px;
    border: none;
}
.left_block {
    max-width: 50%;
    background-color: rgba(255, 218, 191, 0.178);
    margin: 0;
    
}
.mark {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.mark+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.mark+label::before {
  content: '';
  display: inline-block;
  min-width: 11px;
  max-width: 13px;
  min-height: 11px;
  max-height: 13px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid rgb(133, 133, 133);
  border-radius: 2.6px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
text-rendering: auto;
    background-color: white;
    border-style: groove;
    margin: 3px 7px 3px 4px;
    background-image: url('../assets/dot.png');
}
</style>
