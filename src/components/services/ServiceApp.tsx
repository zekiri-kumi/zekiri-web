import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ServicePage } from "./ServicePage";

export default function ServiceApp({ slug }: { slug: string }) {
  return (
    <ThemeProvider>
      <Analytics />
      <ConsentBanner />
      <ServicePage slug={slug} />
    </ThemeProvider>
  );
}
