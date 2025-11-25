"use client"

import MovieSection from "@/app/_component/MovieSection";
import { use } from "react";

const CategorySectionDetail = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);

  return (
    <div className=" gap-96 bg-red-200">
      <MovieSection
        movies={[]}
        categoryName={categoryName}
        title={categoryName}
        showButton={false}
      />
    </div>
  );
};
console.log(CategorySectionDetail);
export default CategorySectionDetail;



