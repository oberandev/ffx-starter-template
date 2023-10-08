import "dotenv/config";
import { Client, FlatfileEvent } from "@flatfile/listener";

export default function flatfileEventListener(listener: Client) {
  listener.on("**", (event: FlatfileEvent) => {
    // Log all events
    console.log(`Received event: ${JSON.stringify(event, null, 2)}`);
  });
}
