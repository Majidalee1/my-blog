import * as React from 'react';
import { IBlog } from '../interfaces/blog';



const BlogList: React.FunctionComponent<{ blogs: IBlog[] }> = ({ blogs }) => {
    console.log(blogs);

    return (

        <div className="blog-list">{blogs.map((blog: IBlog) => {
            return <div className="blog-preview" key={blog.id}>
                <p>{blog.title}</p>
                <h2>written by {blog.author}</h2>
            </div>
        })}</div>
    );
};

export default BlogList;







