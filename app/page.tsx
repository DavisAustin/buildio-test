import { Button } from "@/components/ui/button/button";
import { IconButton } from "@/components/ui/icon-button/icon-button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main>
      <h1>Click this button</h1>
      <div className="align-center flex gap-2">
        <Button variant="secondary" disabled><a href="">Click Me</a></Button>
        <IconButton asChild variant="tertiary">
          <a href="#">
            <Plus />
          </a>
        </IconButton>
      </div>
    </main>
  );
}
