import { it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calc from '../components/Calc'

describe('Calculator input tests', () => {
    
    it('Test operand1 input value', async () => {
        const wrapper = mount(Calc);
        const operand1= wrapper.find('input[name=operand1]');
        operand1.setValue('1');

        expect(wrapper.vm.operand1).toBe(1);
    })

    it('Test operand2 input value', async () => {
        const wrapper = mount(Calc);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('1');
        
        expect(wrapper.vm.operand2).toBe(1);
    })
})

describe('Calculator operations tests', () => {

    it('Test sum operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="+"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(15);
    })

    it('Test substract operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="-"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(5);
    })

    it('Test multiply operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="*"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(50);
    })

    it('Test divide operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="/"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(2);
    })

    it('Test divide operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(0);
        const btnOperation = wrapper.find('button[name="/"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.error).toBe('Делить на 0 нельзя!');
    })

    it('Test pow operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="Pow"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(100000);
    })

    it('Test C operation', async () => {
        const wrapper = mount(Calc);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(10);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(5);
        const btnOperation = wrapper.find('button[name="C"]');
        btnOperation.trigger('click');
        
        expect(wrapper.vm.result).toBe(0);
    })
})

describe('Calculator keys tests', () => {
    
    it('Test add keys', async () => {
        const wrapper = mount(Calc);
        const input1 = wrapper.find('input[id=op1]');
        input1.setChecked(true);
        const btnKey = wrapper.find('button[name="1"]');
        btnKey.trigger('click');

        expect(wrapper.vm.operand1).toBe(1);

        const input2 = wrapper.find('input[id=op2]');
        input2.setChecked(true);
        btnKey.trigger('click');

        expect(wrapper.vm.operand2).toBe(1);
    })

    it('Test del keys', async () => {
        const wrapper = mount(Calc);
        const input1 = wrapper.find('input[id=op1]');
        input1.setChecked(true);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue(123);
        const btnKey = wrapper.find('button[name="delKey"]');
        btnKey.trigger('click');

        expect(wrapper.vm.operand1).toBe(12);

        const input2 = wrapper.find('input[id=op2]');
        input2.setChecked(true);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue(123);
        btnKey.trigger('click');

        expect(wrapper.vm.operand2).toBe(12);
    })
})