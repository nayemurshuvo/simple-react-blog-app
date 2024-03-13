import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmark(newBookMarks);
  };

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </div>
    </>
  );
}

export default App;
