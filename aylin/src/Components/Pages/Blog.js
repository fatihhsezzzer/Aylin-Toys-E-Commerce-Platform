import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/blogs') // Sunucunuzun URL'si
            .then(response => {
                if (!response.ok) {
                    throw new Error('Veri yüklenirken bir hata oluştu.');
                }
                return response.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <section className="blog-area blog-grid-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-content-area">
                            <div className="row">
                                {blogs.map(blog => (
                                    <div key={blog.id} className="col-sm-6 col-md-4">
                                        <Link to={`/blog-detail/${blog.id}`} className="post-item">
                                            <div className="thumb">
                                                <img src={blog.imageUrl} alt="Image" />
                                            </div>
                                            <div className="content">
                                                <div className="meta">
                                                    By, <a className="author" href="blog.html">{blog.author} </a>
                                                    <span className="dots" />
                                                    <span className="post-date">{blog.date}</span>
                                                </div>
                                                <h4 className="title">
                                                    <a href={blog.detailsUrl}>{blog.title}</a>
                                                </h4>
                                                <a className="btn-theme" href={blog.detailsUrl}>Read More</a>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
