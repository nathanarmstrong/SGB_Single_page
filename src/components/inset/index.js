export const Inset = ({ ySpace, children }) => {
  let styles;
  ySpace
    ? (styles = "md:max-w-content max-w-[16rem] m-auto " + ySpace)
    : (styles = "md:max-w-content max-w-[16rem]  m-auto py-8");

  return <div className={styles}>{children}</div>;
};
