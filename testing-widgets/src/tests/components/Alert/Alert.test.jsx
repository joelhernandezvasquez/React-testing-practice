
import {render,screen} from '@testing-library/react';
import Alert from '../../../components/Alert/Alert';

describe('Test in <Alert/>', () => 
{ 
    test('should contain role Alert', () =>
     {
        const message = "Error";
        render(<Alert message={message}/>);
       expect(screen.getByRole('alert')).toBeTruthy();
      })

      test('should render the message passing by props', () =>
      {
         const message = "Error";
         render(<Alert message={message}/>);
         expect(screen.getByText(message)).toBeTruthy();
         
       })
     
 })