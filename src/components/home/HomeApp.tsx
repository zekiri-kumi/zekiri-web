import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { HomePage } from "./HomePage";

export default function HomeApp() {
  return (
    <ThemeProvider>
      <Analytics />
      <ConsentBanner />
      <HomePage />
    </ThemeProvider>
  );
}
