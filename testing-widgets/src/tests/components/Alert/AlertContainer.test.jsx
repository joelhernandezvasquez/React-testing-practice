import {screen,render, fireEvent} from '@testing-library/react';
import AlertContainer from "../../../components/Alert/AlertContainer"


describe('Test in <AlertContainer/>', () => 
{ 
   
    test('should render the alert message when the success button gets clicked ', () => {
        render(<AlertContainer/>);
        const successButton = screen.getAllByRole("button")[0];
       fireEvent.click(successButton);
       expect(screen.getByText('Congratulations! You clicked the button successfully.')).toBeTruthy();  
     })

     test('should clear the alert message when the reset button gets clicked ', () => {
      render(<AlertContainer/>);
      const resetButton = screen.getAllByRole("button")[3];
     fireEvent.click(resetButton);
      
   })



})