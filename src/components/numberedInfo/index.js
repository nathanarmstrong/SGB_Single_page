export const NumberedInfo = ({ img, title, ListText }) => {
  return (
    <div>
      <div className="relative">
        <h3 className="font-bold text-xl text-gray-blue-light z-20 relative">
          {title}
        </h3>
        <img
          className="absolute top-1/2 -left-2 transform -translate-y-1/2 bottom-0 z-10 max-h-20"
          src={img}
        />
      </div>
      {ListText.map((text) => {
        return <p className="leading-loose my-8">{text}</p>;
      })}
    </div>
  );
};
