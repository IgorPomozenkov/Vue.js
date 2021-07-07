<template>
    <div class="calc">
        <h3>Калькулятор</h3>
        <div class="calc__top">
            <input type="number" placeholder="число 1" v-model.number="operand1"/>
            <input type="number" placeholder="число 2/степень" v-model.number="operand2"/>
            <p class="result">{{result}}</p>
            <p class="error" v-show="error">{{error}}</p>
            <!-- <div class="strange-message">
                <template v-if="result < 0">Получилось отрицательное число</template>
                <template v-else-if="result < 100">Результат в первой сотне</template>
                <template v-else>Получилось слишком большое число</template>
            </div> -->
        </div>
        <div class="calc__buttons">
            <button v-for="button in buttons"
                    v-bind:key="button"
                    v-bind:title="button"
                    v-bind:disabled="operand1 === '' || operand2 === ''"
                    @click="calculate(button)">{{ button }}
            </button>
        </div>
        <div class="calc__keypad">
            <input type="checkbox" name="checkbox" id="checkbox" v-model="showCalcKeys">
            <label for="checkbox">Отобразить экранную клавиатуру</label>
            <div class="calc__keys" v-show="showCalcKeys">
                <button v-for="key in CalcKeys"
                        v-bind:key="key"
                        @click="addKeys(key)">{{ key }}
                </button>
                <button @click="delKeys">&larr;</button>
                <div>
                    <input type="radio" name="radio" id="op1" value="operand1" v-model="picked">
                    <label for="op1">Операнд 1</label>
                    <input type="radio" name="radio" id="op2" value="operand2" v-model="picked">
                    <label for="op2">Операнд 2</label>
                </div>
            </div>
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
            result: 'ответ',
            error: '',
            buttons: ['+','-','*','/','Pow','C'],
            logs: {},
            CalcKeys: [0,1,2,3,4,5,6,7,8,9],
            picked: '',
            showCalcKeys: false,
        }
    },
    methods: {
        addKeys(key) {
            if(this.picked == 'operand1') {
                this.operand1 += key.toString();
                this.operand1 = parseInt(this.operand1);
            }
            if(this.picked == 'operand2') {
                this.operand2 += key.toString();
                this.operand2 = parseInt(this.operand2);
            }
        },
        delKeys() {
            if(this.picked == 'operand1') {
                this.operand1 = this.operand1.toString().slice(0, -1);
                this.operand1 = parseInt(this.operand1);
            }
            if(this.picked == 'operand2') {
                this.operand2 = this.operand2.toString().slice(0, -1);
                this.operand2 = parseInt(this.operand2);
            }
        },
        add() {
            this.result = this.operand1 + this.operand2
        },
        substract() {
            this.result = this.operand1 - this.operand2
        },
        multiply() {
            this.result = this.operand1 * this.operand2
        },
        divide() {
            const { operand1, operand2 } = this;
            if(operand2 === 0) {
                this.error = 'Делить на 0 нельзя!'
            }else this.result = parseInt(operand1 / operand2)
        },
        pow() {
            this.result = Math.pow(this.operand1, this.operand2)
        },
        clear() {
            this.result = 'ответ', this.operand1 = '', this.operand2 = ''
        },

        calculate(operation = '+') {
            this.result = '';
            this.error = '';
            switch(operation) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.substract()
                    break;
                case '*':
                    this.multiply()
                    break;
                case '/':
                    this.divide()
                    break;
                case 'Pow':
                    this.pow()
                    break;
                case 'C':
                    this.clear()
                    break;
            }
        }
    }
}
</script>

<style>
    .calc {
        margin: 80px 0;
    }

    .calc__top input {
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

    .error {
        color: rgb(245, 73, 73);
    }

    .calc__keypad {
        margin-top: 50px;
    }

    .calc__keys {
        margin-top: 15px;
    }

</style>