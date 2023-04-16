export const Inset = ({ name, children }) => {
  return (
    <div data-name={name} className="max-w-content m-auto py-6">
      {children}
    </div>
  );
};
