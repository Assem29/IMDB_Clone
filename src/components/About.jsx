import React from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="mx-4 max-w-6xl sm:mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          tincidunt dolor. Sed euismod dui quis nibh consectetur, vel interdum
          ante malesuada. Nulla facilisi. Integer efficitur ut sapien vel
          vestibulum. Nunc id lectus fermentum, consequat metus ut, tempor
          lorem.
        </p>
        <p className="mb-4">
          Fusce eget interdum lectus. Sed euismod enim in turpis malesuada, non
          elementum est lacinia. In eget lorem mauris. Morbi faucibus metus ac
          lectus lacinia, non finibus purus feugiat. Suspendisse quis ultrices
          turpis. Etiam laoreet ex at mauris vehicula lacinia.
        </p>
        <p className="mb-4">
          Vestibulum sit amet tortor sed ligula ultricies porttitor eu in
          dolor. Aenean facilisis ultrices odio, eget suscipit quam. Suspendisse
          potenti. Vestibulum gravida turpis sed mi euismod, at fermentum elit
          ullamcorper.
        </p>
      </div>
    </div>
  );
}
