"use client";

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
  className: string;
};

type Params = {
  categoryName: string;
};

export function Pagination1({ className }: Pagination1Props) {
  const { categoryName } = useParams<Params>();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=${currentPage}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9...`,
          },
        }
      );

      const data = await res.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchMovies();
  }, [categoryName, currentPage]);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  console.log(currentPage);
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={prevPage} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">{totalPages}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
