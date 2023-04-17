export const Highlights = ({ title, body }) => {
  return (
    <div>
      <div className="relative h-6 bg-gray-blue-light">
        <h3 className="absolute left-2 right-2 bottom-3 font-bold text-xl">
          {title}
        </h3>
      </div>
      <p className="leading-loose mt-14">{body}</p>
    </div>
  );
};
