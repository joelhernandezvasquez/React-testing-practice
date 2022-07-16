import {renderHook,act} from '@testing-library/react';
import useToogle from '../../src/hooks/useToogle';

describe('test in useToogle hook', () => 
{ 
   

    test('should return the values by default', () =>
     { 
        const {result} =  renderHook(()=> useToogle())
          const {toogle,handleToogle,toggling} = result.current;
          expect(toogle).toBeFalsy();
          expect(handleToogle).toEqual(expect.any(Function))
          expect(toggling).toEqual(expect.any(Function));
      })

      test('handle toogle should toogle the value from false to true', () => 
      {
        const {result} =  renderHook(()=> useToogle())
        const {handleToogle} = result.current;
       act(()=>{
         handleToogle();
        
       })
       expect(result.current.toogle).toBe(true);
       })

       test('handle toogle should toogle the value from true to false', () => 
       {
         const {result} =  renderHook(()=> useToogle(true))
         const {toogle,handleToogle} = result.current;
         console.log(result.current.toogle);
        act(()=>{
          handleToogle();
         
        })
        expect(result.current.toogle).toBe(false);
     
        })

        test('toggling should set the value from the parameter', () => 
       {
         const {result} =  renderHook(()=> useToogle())
         const {toggling} = result.current;
         const parameter = true;
        act(()=>{
          toggling(parameter)
         
        })
        expect(result.current.toogle).toBe(parameter);
     
        })
 })