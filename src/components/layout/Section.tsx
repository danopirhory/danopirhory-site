import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionTag = "section" | "div" | "article" | "aside";

export function Section({
  children,
  className,
  containerClassName,
  as: Tag = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: SectionTag;
  id?: string;
}) {
  return (
    <Tag id={id} className={cn("py-10 md:py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
