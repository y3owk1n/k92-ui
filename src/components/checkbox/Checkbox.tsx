"use client";

import * as React from "react";
import { useState } from "react";
import * as AriaKit from "@ariakit/react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof AriaKit.Checkbox>,
    React.ComponentPropsWithoutRef<typeof AriaKit.Checkbox> & {
        children: React.ReactNode;
    }
>(({ className, children, ...props }, ref) => {
    const [checked, setChecked] = useState(props.defaultChecked ?? false);
    const [focusVisible, setFocusVisible] = useState(false);


    return (
        <label
            className="flex gap-2 rounded-sm items-center data-[focus-visible]:outline-none ring-offset-background data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2"
            data-checked={checked}
            data-focus-visible={focusVisible || undefined}>
            <AriaKit.VisuallyHidden>
                <AriaKit.Checkbox
                    {...props}
                    ref={ref}
                    clickOnEnter
                    onFocusVisible={() => setFocusVisible(true)}
                    onBlur={() => setFocusVisible(false)}
                    onChange={(event) => {
                        setChecked(event.target.checked);
                        props.onChange?.(event);
                    }}
                />
            </AriaKit.VisuallyHidden>
            <div
            className={cn(
                "peer h-4 w-4 shrink-0 cursor-pointer rounded-sm border border-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[checked=true]:bg-primary data-[checked=true]:text-primary-foreground",
                className
            )}
                aria-disabled={props.disabled}
                data-checked={checked}>
                <Check data-checked={checked} className="h-4 w-4 data-[checked=false]:hidden" />
            </div>
            {children}
        </label>
    );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
