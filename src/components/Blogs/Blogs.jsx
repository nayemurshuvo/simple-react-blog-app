import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useState(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
