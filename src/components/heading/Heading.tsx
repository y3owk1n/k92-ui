"use client";

import * as React from "react";
import * as AriaKit from "@ariakit/react";

import { cn } from "@/lib/utils";

export interface HeadingProps
    extends React.ButtonHTMLAttributes<HTMLHeadingElement>,
        AriaKit.HeadingOptions {}

const HeadingLevel = AriaKit.HeadingLevel;

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, ...props }, ref) => {
        return (
            <AriaKit.Heading className={cn(className)} ref={ref} {...props} />
        );
    }
);
Heading.displayName = "HeadingLevel";

export { HeadingLevel, Heading };
