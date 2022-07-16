
import {render,screen} from '@testing-library/react';
import BookmarkList from '../../../src/components/bookmarks/BookmarkList';

describe('Test in <BookmarkList/>', () => 
{ 
   const data = [{
    id:1,
    movie:'Hello Way'
   },
   {
   id:2,
    movie:'Hello Way2'
   },
]
    test('should ', () => { 
        render(<BookmarkList data={data}/>)
        screen.debug();
     })
 })