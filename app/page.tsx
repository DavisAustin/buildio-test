import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { IconButton } from "@/components/ui/icon-button/icon-button";
import { faCheckCircle, faHouse } from "@fortawesome/pro-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlertCircle, Plus, User } from "lucide-react";

export default function Home() {
  return (
    <main className="flex basis-full flex-col items-center justify-center gap-8">
      <div>
        <h1>Click this button</h1>
        <div className="align-center flex gap-2">
          {/* disabled state isn't working when 'asChild' is added as a prop */}
          <Button asChild variant="secondary" isLoading>
            <a href="">Click Me</a>
          </Button>
          {/* disabled state isn't working and loading icon is too large when 'asChild' is added as a prop */}
          <IconButton asChild variant="tertiary" isLoading>
            <a href="#">
              <Plus />
            </a>
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-title-md">Testing Grounds</h1>
        <div className="flex flex-row gap-4">
          {/* Add components here... */}
          <Avatar size="default">
            <AvatarImage />
            <AvatarFallback className="bg-bg-muted text-fg-default">
              <User />
            </AvatarFallback>
          </Avatar>
          <Badge variant="primary" size="sm">
            Pro Plan
          </Badge>
          <Badge variant="danger" size="default">
            <AlertCircle /> Danger
          </Badge>
        </div>
        <div className="flex flex-row gap-4">
          {/* Add components here... */}
          <FontAwesomeIcon icon={faHouse} className="text-fg-default size-4 shrink-0" />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-fg-success size-4 shrink-0"
          />
          <Alert>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-fg-success size-4 shrink-0"
            />
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert description...</AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  );
}
