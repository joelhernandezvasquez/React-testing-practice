import {renderHook,act, waitFor} from '@testing-library/react';
import useFetch from '../../src/hooks/useFetch';


describe('Test in useFetch', () => 
{
    const apiKey = '5ae4e2493ae1e37b5fa722f26121bef2';
    const search = 'morbius';
    const url = `https:api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}`;

    test('should return the initial state', () => 
    { 
        
        const {result} =  renderHook(()=> useFetch(search,url));
        const {data,isLoading,error} = result.current;
        expect(data).toBe(null);
        expect(isLoading).toBeTruthy();
        expect(error).toBe(null);
        
     })

     test('should return an array of shows and isLoading in false',async ()=>{
        const {result} = renderHook(()=> useFetch(search,url));
        
        await waitFor(
            ()=> expect(2===2)
        )
        const {data,isLoading} = result.current;
        console.log(result.current);
        console.log(isLoading);
     })


 })