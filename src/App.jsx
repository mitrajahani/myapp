
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreatArticle from "./pages/creatArticle/creatArticle";
import NotFound from "./pages/notFound/notFound";



function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/creat-article" element={< CreatArticle />} />

      </Routes>
    </div>
  );
}


export default App;
