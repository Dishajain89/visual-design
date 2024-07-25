import Banner from "@component/components/banner";
import BrandSlider from "@component/components/brandSlider";
import Footer from "@component/components/layout/footer";
import Navbar from "@component/components/layout/navbar";
import ProductCard from "@component/components/productCard";
import Testimonial from "@component/components/testimonial";
import Work from "@component/components/work";

export default function Home() {
   return (
      <main className="">
         <Navbar />
         <Banner
            subTitle="Branding | Image making"
            title="Visual Designer"
            description="This is a template Figma file, turned into code using Anima."
            learnMore="Learn more at AnimaApp.com"
            rightImage="/img/banner-img.png"
         />
         <BrandSlider />
         <ProductCard />
         <Work />
         <Testimonial />
         <Footer />
      </main>
   );
}
