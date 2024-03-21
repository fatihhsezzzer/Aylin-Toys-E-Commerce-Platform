import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${blogId}`) // Blog verisinin çekileceği URL
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error("Blog yüklenirken bir hata oluştu:", error));
    }, [blogId]);

    if (!blog) {
        return <div>Yükleniyor...</div>; // Blog yüklenene kadar gösterilecek içerik
    }

    return (
        <section className="blog-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 order-0 order-lg-1">
                        <div className="post-details-content">
                            <div className="post-details-body">
                                <div className="thumb">
                                    <img className="w-100" src={blog.imageUrl} alt="Blog Resmi" />
                                </div>
                                <div className="content">
                                    <div className="meta">By, <a className="author" href="blog.html">{blog.author} </a><span className="dots" /><span className="post-date">{blog.date}</span></div>
                                    <h4 className="title">{blog.title}</h4>
                                    <p>{blog.content}</p>
                                    {/* Diğer içerikler */}
                                </div>
                            </div>
                        </div>
                        {/* Yorum alanı ve diğer bileşenler */}
                    </div>
                    <div className="col-lg-4 order-1 order-lg-0">
                        {/* Yan menü bileşenleri */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogDetail;
