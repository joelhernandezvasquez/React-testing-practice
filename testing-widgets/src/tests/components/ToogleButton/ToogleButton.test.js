import ToogleButton from "../../../components/ToogleButton/ToogleButton"
import {fireEvent, render,screen} from '@testing-library/react';
import {} from '@testing-library/jest-dom';

describe('Test in <ToogleButton/>', () => 
{ 
    test('should render an array of buttons',()=>{
       render(<ToogleButton/>)
       expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
    })

    test('should show the button names when component render the first time',()=>{
        const {container} = render(<ToogleButton/>)
        expect(screen.getByText('Dog')).toBeTruthy();
        expect(screen.getByText('Cat')).toBeTruthy();
        expect(container.getElementsByClassName("active_button").length).toBeGreaterThan(0);
        
    })
     
    test('should add the class active_button and contains aria-pressed true when Cat button gets clicked',()=>{
       render(<ToogleButton/>);
       fireEvent.click(screen.getByText('Cat'));
       const catButton = screen.getAllByRole("button")[1]
       expect(catButton).toHaveAttribute("aria-pressed", "true");
       expect(catButton).toHaveClass('active_button');
    
    })

 })