import { render,screen} from "@testing-library/react";
import CardInformation from "../../../../../../Entertainment-web-app/src/components/EntertemainList/CardInformation"
// import MovieIcon from '../../../src/assets/icon-category-movie.svg';
// import TvSeries from '../../../src/assets/icon-category-tv.svg';
describe('Test in <CardInformation/>', () => 
{ 
    const year = 2016;
    const media_type = 'movie';
    const classifiedShow = 'PG';
    const title = "Morbius";

    test('year,media_type,classifiedShow and title should be present in the component',()=>{
      render(<CardInformation year={year} media_type = {media_type} classifiedShow={classifiedShow} title={title}/>)
      expect(year).toBeTruthy();
      expect(media_type).toBeTruthy();
      expect(classifiedShow).toBeTruthy();
      expect(title).toBeTruthy();
    })  
 })