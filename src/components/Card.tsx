/** @format */

interface CardProps {
  children: string | JSX.Element | JSX.Element[];
  bg?: string;
}

const Card = ({ children, bg = "bg-gray-100" }: CardProps) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
