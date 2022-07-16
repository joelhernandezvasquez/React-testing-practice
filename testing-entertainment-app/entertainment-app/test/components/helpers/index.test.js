import { getYear,getClassifiedShow, filterByMedia, isBookmarked } from "../../../src/components/helpers"


describe('Test in helper functions',()=>{
    
    const mockDate = new Date('7/4/2022');

    test('getYear() should return a year in string', () => 
    { 
       const getYearMock = getYear(mockDate);
      expect(getYearMock).toBe(mockDate.getFullYear().toString());

     })

     test('getClassifiedShow() should return PG if media_type is movie and type of show is not provided',()=>{
        const media_type = 'movie';
        const mockGetClassifiedShow = getClassifiedShow(media_type);
        expect(mockGetClassifiedShow).toBe('PG');
     });

     test('getClassifiedShow() should return E if media_type is not movie ',()=>{
        const media_type = 'series';
        const mockGetClassifiedShow = getClassifiedShow(media_type);
        expect(mockGetClassifiedShow).toBe('E');
     });

     test('filterByMedia should return an array',()=>{
        const media = 'movie';
        const arrayTest = [{
            id:0,
            title:'morbius',
            media_type:'movie'
        },
        {
            id:1,
            title:'morbius02',
            media_type:'series'
        },
        {
            id:2,
            title:'morbius03',
            media_type:'movie'
        }
    ]

    const filterByMediaMock = filterByMedia(arrayTest,media);
    expect(filterByMediaMock.length).toBeGreaterThan(0);

     })
    
     test('isBookmarked should return true passing an array that at least match the id',()=>{
        const arrayTest = [{
            id:0,
            title:'morbius',
            media_type:'movie'
        },
        {
            id:1,
            title:'morbius02',
            media_type:'series'
        },
        {
            id:2,
            title:'morbius03',
            media_type:'movie'
        }]
        const testIsBookmarked = isBookmarked(arrayTest,1);
        expect(testIsBookmarked).toBeTruthy();

     })
})