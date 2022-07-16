import {render,screen} from '@testing-library/react';
import Recommended from '../../../src/components/Recommended/Recommended';

describe('Test in <Recommended/>', () =>
 {
    const title = "This is a title";
    const children = 'Hello this is children'
     test('should show the title and children prop', () => 
     { 
        render(<Recommended title={title}> {children} </Recommended>)
      screen.debug();
      expect(title).toBeTruthy();
     expect(children).toBeTruthy();

    })
})