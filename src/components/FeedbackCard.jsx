import { quotes } from "../assets";

const FeedbackCard = ({ name, title, img }) => (
  <div className="flex  justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex flex-col ">
      <img src={img} alt="{name}" className="hover:object-fill " />
      <h4 className=" text-center font-poppins font-semibold text-[20px] leading-[32px] text-white mt-[10px]">
        {name}
      </h4>
      <p className=" text-center font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite ">
        {title}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
