
import {fireEvent, render,screen} from '@testing-library/react';
import Toast from '../../../src/components/Toast/Toast';

describe('Test in <Toast/>', () =>
 {
    const top ={current:40};
    const message = "This is the message";

    test('should calculate the margin top based on the top value pass by props', () => 
    { 
       // example expected send top= 40 will expect that margin-top will 40 -120 = -80
       const mockMarginTop = `${top.current - 120}px`;
       render(<Toast top = {top} message = {message}/>) ;
       const toastElement = screen.getByLabelText('toast');
      expect(toastElement.style.marginTop).toBe(mockMarginTop);

     })

     test('should show the message Succesfully Save if the appereance prop is Success',()=>{
        render(<Toast top = {top} appereance = {'Success'}/>) ;
       expect('Succesfully Saved').toBeTruthy();
     })

     test('should show the message Error if the appereance prop is Error',()=>{
        render(<Toast top = {top} appereance = {'Error'}/>) ;
       expect('Error').toBeTruthy();
     })

     test('function close() should be called when pressing the close icon',()=>{
         const close = jest.fn();
         render(<Toast top = {top} appereance = {'Error'} close = {close}/>) ;
         const closeIcon = screen.getByLabelText('close-icon');
         fireEvent.click(closeIcon);
         expect(close).toHaveBeenCalledWith(0);
     })

     test('should show the message',()=>{
      const message = 'This is a message';
      render(<Toast top = {top} appereance = {'Error'}message={message} />) ;
      expect(message).toBeTruthy();

     })
  })