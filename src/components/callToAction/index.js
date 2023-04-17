export const CallToAction = ({ img, titleList, textList, leftAmount }) => {
  let leftCss = `-left-[${leftAmount}]`;

  return (
    <div>
      <div className="relative my-20">
        {titleList.map((title) => {
          return <h2 className="z-20 relative font-bold text-4xl">{title}</h2>;
        })}
        <img
          className={`absolute z-10 -top-[1.5rem] ${leftCss}`}
          src={img}
          alt="call-to-action-image"
        />
      </div>
      {textList.map((text) => {
        return <p className="my-10 leading-loose">{text}</p>;
      })}
    </div>
  );
};
