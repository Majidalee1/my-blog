import * as React from 'react';
import { useState } from 'react';
import BlogList from './components/bloglist';
import { Navbar } from './components/navbar';
import { IBlog, IBlogListProps } from './interfaces/blog';




const App = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return (
    <div className="content">
      <Navbar />
      <BlogList blogs={blogs} />

    </div>
  );
};

export default App;
