import { Button } from "@/components/ui/button/button";
import { IconButton } from "@/components/ui/icon-button/icon-button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main>
      <h1>Click this button</h1>
      <div className="align-center flex gap-2">
        {/* disabled state isn't working when 'asChild' is added as a prop */}
        <Button asChild variant="secondary" isLoading><a href="">Click Me</a></Button>
        {/* disabled state isn't working and loading icon is too large when 'asChild' is added as a prop */}
        <IconButton asChild variant="tertiary" isLoading>
          <a href="#">
            <Plus />
          </a>
        </IconButton>
      </div>
    </main>
  );
}
