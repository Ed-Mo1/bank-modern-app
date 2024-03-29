import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 feedback-card">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px]" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row items-center gap-4">
        <img src={img} alt="user_image" className="w-[48px] aspect-square " />
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
