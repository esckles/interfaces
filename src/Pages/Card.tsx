import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  bgColor,
}) => {
  return (
    <div className={`rounded-lg shadow-md p-6 ${bgColor}`}>
      {imageSrc ? (
        <img
          className="rounded-lg w-full object-cover h-48"
          src={imageSrc}
          alt={title}
        />
      ) : (
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="ml-3 text-xl font-semibold">{title}</h3>
        </div>
      )}
      {!imageSrc && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};
export default Card;
