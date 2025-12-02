import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

type Pagination1Props = {
  className?: string;
};

export function Pagination1({ className }: Pagination1Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [toalPages, setTotalPages] = useState(1);
  const { categoryName } = useParams<Params>();
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVkZDM3MjkzOTUyNTQyMTY0MjVjMDhmNDE4NWUxMSIsIm5iZiI6MTc2MzUyMzY0NC41MjMsInN1YiI6IjY5MWQzYzNjNmNjNDMzNzcxZTJkNDEwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkj8IUzuYcVwEahuxYgQAmfdV46-3VWJP3Rbm6rIUJ8`,
          },
        }
      );
      const data = await res.json();

      setMovies(data.results);
    };
    fetchData();
  },

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
