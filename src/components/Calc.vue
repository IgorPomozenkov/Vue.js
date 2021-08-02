<template>
    <div class="calc">
        <div class="text-h5 text-sm-h4">Калькулятор</div>
        <div class="calc__top">
            <v-text-field class="mr-4" type='number' name="operand1" v-model.number="operand1" label="число 1"></v-text-field>
            <v-text-field type='number' name="operand2" v-model.number="operand2" label="число 2/степень"></v-text-field>
        </div>
        <div class="calc__info">
            <p class="result">{{result}}</p>
            <p class="error" v-show="error">{{error}}</p>
        </div>
        <div class="calc__buttons">
            <v-btn color="primary" class="mr-2" v-for="button in buttons"
                :name="button"
                :key="button"
                :disabled="operand1 === '' || operand2 === ''"
                @click="calculate(button)">{{ button }}
            </v-btn>
        </div>
        <div class="calc__keypad">
            <v-checkbox v-model="showCalcKeys" :label="`Отобразить экранную клавиатуру`"></v-checkbox>
            <div class="calc__keys" v-show="showCalcKeys">
                <v-btn color="primary" class="mr-2" v-for="key in CalcKeys"
                    :name="key"
                    :key="key"
                    @click="addKeys(key)">{{ key }}
                </v-btn>
                <v-btn color="primary"
                    :name="`delKey`"
                    @click="delKeys">&larr;
                </v-btn>
                <v-radio-group row v-model="picked">
                    <v-radio :label="`Операнд 1`" :value="`operand1`"></v-radio>
                    <v-radio :label="`Операнд 2`" :value="`operand2`"></v-radio>
                </v-radio-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calc',
    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
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
            this.result = 0, this.operand1 = '', this.operand2 = ''
        },

        calculate(operation) {
            this.result = 0;
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
        max-width: 800px;
        margin: 20px 0;
    }

    .calc__top {
        display: flex;
        margin-top: 40px;
    }

    .error {
        color: black;
    }

    .calc__keypad {
        margin-top: 50px;
    }
</style>