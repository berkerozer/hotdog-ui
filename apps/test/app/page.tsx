import { Button } from "@/components/hotdog-ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Button
        color="primary"
        variant="default"
        size="lg"
        shape="rounded"
        animation="ripple"
      >
        Primary Button
      </Button>
    </div>
  );
}
