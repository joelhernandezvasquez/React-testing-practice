import { render,screen } from "@testing-library/react"
import HoverCard from "../../../src/components/EntertemainList/HoverCard"

describe('Test in <HoverCard/>', () => { 

    const height = 80;
    const id = 1;
    const media= 'movie'

    test('should first', () =>
     { 
         render(<HoverCard id={id} height={height} movie = {movie}/>)
         screen.debug();

      })
 })