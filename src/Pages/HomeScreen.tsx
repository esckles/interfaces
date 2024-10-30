import React from "react";
import Card from "./Card";

const HomeScreen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Text-based Card */}
        <Card
          icon={<span className="text-blue-500 text-3xl">🔄</span>}
          title="Organized around your workflows"
          description="Invite team members to join your team and assign them to specific projects."
          bgColor="bg-blue-100"
        />

        {/* Card 2: Image-based Card */}
        <Card
          imageSrc="https://source.unsplash.com/random/800x600"
          title="Design"
          description=""
          bgColor="bg-white"
        />

        {/* Card 3: Text-based Card */}
        <Card
          icon={<span className="text-green-500 text-3xl">🔗</span>}
          title="Share your work with anyone"
          description="Give and receive feedback instantly from your team or your clients."
          bgColor="bg-green-100"
        />

        {/* Card 4: Image-based Card */}
        <Card
          imageSrc="https://source.unsplash.com/random/801x601"
          title="Marketing"
          description=""
          bgColor="bg-white"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
