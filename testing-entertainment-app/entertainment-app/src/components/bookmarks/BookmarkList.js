
import BookmarkCard from "./BookmarkCard"

const BookmarkList = ({data}) => {
  return (
    <>
     { data?.map((item)=>{
         return  <BookmarkCard key ={item.id} show = {item} />
     })}
    </>
  )
}

export default BookmarkList