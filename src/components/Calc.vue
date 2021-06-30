<template>
    <div class="calc">
        <h3>Калькулятор</h3>
        <div class="calc__top">
            <input type="number" placeholder="число 1" v-model.number="operand1"/>
            <input type="number" placeholder="число 2/степень" v-model.number="operand2"/>
            <p class="result">{{result}}</p>
        </div>
        <div>
            <button v-on:click="result = operand1 + operand2">+</button>
            <button v-on:click="result = operand1 - operand2">-</button>
            <button v-on:click="result = operand1 * operand2">*</button>
            <button v-on:click="result = parseInt(operand1 / operand2)">/</button>
            <button v-on:click="result = Math.pow(operand1, operand2)">Pow</button>
            <button v-on:click="result = 'ответ', operand1 = '', operand2 = ''">C</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calc',
    data() {
        return {
            operand1: '',
            operand2: '',
            result: 'ответ'
        }
    }
}
</script>

<style>
    .calc {
        margin: 80px 0;
    }

    .calc input {
        width: 115px;
        padding: 5px;
        margin-right: 2px;
    }

    .calc__top {
        height: 80px;
    }

    button {
        width: 45px;
        height: 40px;
        margin-right: 2px;
    }

</style>