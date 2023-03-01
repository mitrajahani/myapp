import Navbar from "../../conponents/navbar/Navbar";
import styled from "./about.module.css";
import iran from "../../assets/images/carbon.jpg";
import Footer from "../../conponents/Footer/footer"

function AboutUs() {
    return (
        <div className={styled.aboutPage}>
            <Navbar title="میترا بلاگ" />
            <div className="container">
                <h2>درباره ما</h2>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها
                </p>
                <h3>ما در کجا فعالیت داریم؟</h3>
                <img src={iran} />
            </div>
            <Footer />
        </div>

    );
}
export default AboutUs;