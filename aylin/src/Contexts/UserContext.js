import React, { createContext, useState, useContext } from 'react';




const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    const [fav, setFav] = useState([]);
    const [Loginemail, setLoginemail] = useState('');
    const [Loginpassword, setLoginpassword] = useState('');
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');





    const handleLogin = async () => {

        const loginInfo = {
            email: Loginemail,
            password: Loginpassword
        };

        try {
            const response = await fetch('https://localhost:7237/LoginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });

            const data = await response.json();


            if (data.isSuccess || data.authenticateResult) {
                localStorage.setItem('authToken', data.authToken);
                localStorage.setItem('name', data.name);
                localStorage.setItem('surname', data.surname);
                localStorage.setItem('id', data.id);


                // UserContext'den currentUser'ı güncellemek için fonksiyonu kullan

                setCurrentUser({
                    name: data.name,
                    surname: data.surname,
                    id: data.id,
                    Token: data.authToken
                });
                console.log(currentUser)

            } else {
                setEmail('');
                setPassword('');
                alert('Giriş bilgileri hatalı. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('Giriş sırasında bir hata oluştu:', error);
        }
    };



    const handleRegister = (event) => {

        event.preventDefault();

        const newUser = {
            Name: Name,
            Surname: Surname,
            email: email,
            password: password,
        };

        fetch('https://localhost:7237/RegisterUser', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',

                // Gerekirse diğer header'lar
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (response.ok) {
                    alert("Kayıt Başarılı...");

                } else {
                    throw new Error('Kayıt işlemi başarısız.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };

    const logout = () => {
        setCurrentUser(null);
        setFav([]);
        localStorage.removeItem('authToken');
        localStorage.removeItem('name');
        localStorage.removeItem('surname');
        localStorage.removeItem('id');
        alert("Çıkış Başarılı...")


    };

    const fetchFavorites = () => {
        if (!currentUser) {
            console.error('currentUser tanımlı değil');
            return;
        }

        fetch(`https://localhost:7237/view/${currentUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Gerekirse diğer header'lar
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Yanıt başarılı değil');
                }
            })
            .then(data => {
                if (data) {
                    setFav(data); // Favori ürünleri yerel duruma ekle
                } else {
                    console.error('Veri null geldi');
                    setFav([11]); // Data null ise false değerini set et
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };



    const isFavorite = (product) => {

        // Ürünün favori olup olmadığını kontrol edin
        return fav.some(fav => fav.id === product.id);
    };


    //WishList İşlemleri

    const addToFav = (product) => {
        if (!currentUser) {
            alert('Ürünü Favoriye Eklemek İçin Lütfen Giriş Yapınız...');
            return;
        }
        // Ürün zaten favorilerde mi kontrol et
        const isFav = fav.some(item => item.id === product.id);


        const url = isFav
            ? `https://localhost:7237/remove?productId=${product.id}&userId=${currentUser.id}`
            : `https://localhost:7237/add?ProductId=${product.id}&UserId=${currentUser.id}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Gerekirse diğer header'lar
            },


            // Eğer body gerekiyorsa buraya ekleyin
        })
            .then(response => {
                if (response.ok) {
                    // Burada favoriler listesini güncelleyebilirsiniz
                    if (isFav) {
                        // Favorilerden çıkar
                        setFav(fav.filter(item => item.id !== product.id));
                        alert("Ürün favorilerden çıkarıldı.");
                    } else {
                        // Favorilere ekle
                        setFav([...fav, product]);
                        alert("Ürün favorilere eklendi.");
                    }
                } else {
                    throw new Error('İşlem başarısız.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, logout, fav, addToFav, isFavorite, fetchFavorites, handleRegister, handleLogin, Loginemail, setLoginemail, Loginpassword, setLoginpassword, Name, setName, Surname, setSurname, email, setEmail, password, setPassword }}>
            {children}
        </UserContext.Provider>
    );
};
