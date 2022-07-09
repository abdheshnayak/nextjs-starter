import classNames from 'classnames';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div
      className={classNames('max-w-[1024px] mx-auto w-full px-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
