"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/components/ui/pagination";

type Pagination1Props = {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export function Pagination1({
  className,
  currentPage,
  totalPages,
  onPageChange,
}: Pagination1Props) {
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        <PaginationLink>
          {" "}
          {currentPage === 1 ? 1 : currentPage - 1}{" "}
        </PaginationLink>

        <PaginationLink isActive>{currentPage}</PaginationLink>

        <PaginationLink>...</PaginationLink>

        <PaginationLink>{currentPage + 1}</PaginationLink>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
