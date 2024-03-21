import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7237/api/category')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Veri yüklenirken bir hata oluştu.');
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;

    return (
        <div>
            <section className="category-area product-category1-area" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="row category-items1">
                        {categories.map((category, index) => (
                            <Link to={`/category-detail/${category.id}`} key={category.id} className="col-sm-6 col-md-4">
                                <div className={`thumb thumb-style${index + 1}`} style={{ backgroundImage: `url(${category.image})` }}>
                                    <div className="content">
                                        <div className="contact-info">
                                            <h2 className="title">{category.name}</h2>
                                            <h4 className="price">{category.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
