// import React, { FC } from "react";
// import data from "../Data.json";

// interface iProps {
//   content: {
//     id: number;
//     title?: string;
//     description?: string;
//     btn?: string;
//   };
// }

// const Dribble: React.FC = () => {
//   return (
//     <div className="w-full h-[calc(95vh-80px)] bg-yellow-100 flex justify-center items-center flex-col">
//       {data.map((item) => (
//         <div key={item.id} className="mb-4">
//           {item.title && <div className="text-xl font-bold">{item.title}</div>}
//           {item.description && (
//             <div className="text-base text-gray-700">{item.description}</div>
//           )}
//           {item.btn && (
//             <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//               {item.btn}
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dribble;
import React from "react";
import data from "../Data.json";

interface iProps {
  content: {
    id: number;
    title?: string;
    description?: string;
    btn?: string;
  };
}

// Example function to get a specific item by id
const getContentById = (id: number) => data.find((item) => item.id === id);

const Dribble: React.FC<iProps> = ({ content }) => {
  return (
    <div className="w-full h-[calc(95vh-80px)] bg-yellow-100 flex justify-center items-center flex-col">
      {content.title && <h2 className="text-lg font-bold">{content.title}</h2>}
      {content.description && (
        <p className="text-gray-700 my-2">{content.description}</p>
      )}
      {content.btn && (
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          {content.btn}
        </button>
      )}
    </div>
  );
};

// Use specific content with id 1 (for example) and render the Dribble component
const App: React.FC = () => {
  const content = getContentById(1); // Choose the ID you need

  if (!content) return <div>Content not found</div>;

  return <Dribble content={content} />;
};

export default App;
