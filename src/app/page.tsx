import { Loader2 } from "lucide-react";

import { Button } from "@/components/button/Button";
import { Checkbox } from "@/components/checkbox/Checkbox";
import { Heading, HeadingLevel } from "@/components/heading/Heading";

export default function Home() {
    return (
        <main className="container my-4">
            <div className="flex flex-col gap-4 items-start">
                <HeadingLevel>
                    <Heading>Components</Heading>
                    <HeadingLevel>
                        <Heading>Button</Heading>
                        <div className="flex flex-wrap gap-4">
                            <Button>I am a button</Button>
                            <Button variant="secondary">I am a button</Button>
                            <Button variant="destructive">I am a button</Button>
                            <Button variant="outline">I am a button</Button>
                            <Button disabled>I am a button</Button>
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        </div>
                    </HeadingLevel>

                    <HeadingLevel>
                        <Heading>Checkbox</Heading>
                        <Checkbox>I am a checkbox</Checkbox>
                        <Checkbox defaultChecked>I am a checkbox</Checkbox>
                        <Checkbox defaultChecked disabled>
                            I am a checkbox
                        </Checkbox>
                    </HeadingLevel>
                </HeadingLevel>
            </div>
        </main>
    );
}
