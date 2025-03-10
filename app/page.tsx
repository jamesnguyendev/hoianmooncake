import ButtonContact from "../components/ButtonContact";
import HeroGallery from "./components/HeroGallery";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import CardBanner from "../components/CardBanner";
import ProductCombo from "../components/ProductCombo";
import GiftService from "./components/GiftService";
import CustomerPartner from "../components/CustomerPartner";
import ShareInfo from "./components/ShareInfo";
import Programs from "./components/Programs";
import COFounderFeedback from "./components/COFounderFeedback";
import VideoIntro from "./components/VideoIntro";

export default function Home() {
  return (
    <div className="">
      <Banner
        mobile="/images/banner-mobile-ha-t7-768x1154.jpg"
        desktop="/images/banner-Hoi-An-desktop-1536x800.jpg"
      />
      <Collections />
      <div className="uppercase flex justify-center flex-col items-center font-semibold pt-5 my-9 text-2xl text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          border
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>
      <ButtonContact />
      <ProductCombo />
      <Programs />
      <HeroGallery />
      <ButtonContact />
      <COFounderFeedback />
      <GiftService />
      <ButtonContact />
      <VideoIntro />
      <CustomerPartner />
      <ShareInfo />
    </div>
  );
}
