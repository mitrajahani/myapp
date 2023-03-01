import Navbar from "../../conponents/navbar/Navbar";
import Footer from "../../conponents/Footer/footer";
import styled from "./articlePage.module.css";
import pic from "../../assets/images/3.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../conponents/spinner/Spinner";


function ArticlePage() {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const params = useParams();

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`http://localhost:8000/articles/${params.id}`)
            .then((result) => {
                setArticle(result.data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            });
    }, []);

    return (
        <div>
            <Navbar title="میترا بلاگ" />
            <div className={styled.ArticleWrapper}>
                <div className="container">
                    {
                        isLoading ? <Spinner /> : (
                            <>
                                <h1>{article.title}</h1>
                                <div className={styled.ArticleInfo}>
                                    <span>تاریخ: {article.dage}</span>
                                    <span>نویسنده: {article.athor}</span>
                                    <span>زمان خواندن: 5 دقیقه</span>
                                </div>
                                <img src={article.imageUrl} />
                                <p> {article.content} </p>

                            </>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ArticlePage;