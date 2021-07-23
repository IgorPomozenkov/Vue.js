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
   