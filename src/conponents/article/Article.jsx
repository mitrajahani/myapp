import styled from "./article.module.css"

function Article(props) {


    console.log(props);

    return (
        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl}  />
            <h3>{props.article.title}</h3>
            <p>خواندن {props.article.readingTime} دقیقه ای</p>
          
        </div>
    )
}

export default Article;