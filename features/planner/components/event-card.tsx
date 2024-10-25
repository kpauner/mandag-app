import { Card } from "@/components/ui/card";
import React from "react";

type EventCardProps = {
  name: string;
  description: string;
  due: string;
};

export default function EventCard({ name, description, due }: EventCardProps) {
  return (
    <Card>
      {name}
      {description}
      {due}
    </Card>
  );
}
