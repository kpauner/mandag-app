"use client";

import React from "react";

type WelcomeMessageProps = {
  username: string;
};

export default function WelcomeMessage({ username }: WelcomeMessageProps) {
  return <div>Welcome to your dashboard, {username}</div>;
}
