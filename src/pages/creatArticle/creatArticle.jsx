import axios from "axios";
import { useState } from "react";
import Navbar from "../../conponents/navbar/Navbar";
import Textarea from "../../conponents/textarea/Textarea";
import styled from "./creatArticle.module.css"

function CreatArticle() {
    const [article, setArticle] = useState({
        title: "",
        data: "",
        readingTime: "",
        athor: "",
        Message: "",
        imageURL: ""
    });

    const handleChangeArticle = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleChangeArticleMessage = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            Message: e.target.value,
        }));
    }

    const handleCreateNewArticle = () => {
        axios.post("http://localhost:8000/articles",
            {
                "id": 9,
                "imageUrl":article.imageURL,
                "title": article.title,
                "readingTime":article.readingTime,
                "dage":article.data,
                "athor": article.athor,
                "content": article.Message
            });
    }

    return (
        <>
            <Navbar title="میترا بلاگ" />
            <div className={styled.CreatArticlePage}>
                <div className="container">
                    <h1>ساخت مقاله</h1>

                    <div className={styled.inputWrapper}>
                        <label>عنوان</label>
                        <input name="title" onChange={handleChangeArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>تاریخ</label>
                        <input name="data" onChange={handleChangeArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>مدت زمان خواندن</label>
                        <input name="readingTime" onChange={handleChangeArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>نویسنده</label>
                        <input name="athor" onChange={handleChangeArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label>ادرس عکس</label>
                        <input name="imageurl" handleChange={handleChangeArticle} type="text" />
                    </div>

                    < Textarea label="متن" handleChange={handleChangeArticleMessage} />

                    <div className={styled.buttonWrapper}>
                        <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreatArticle;