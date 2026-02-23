import { useLanguage } from "@/components/LanguageProvider";
import { type Language, messages } from "@/lib/i18n";
import { useCallback, useState } from "react";

type IntegrationItem = { name: string; slug: string; logoUrl?: string };

const SIMPLE_ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const INTEGRATION_GROUPS: { labelKey: "cloud" | "crm" | "payments" | "erp"; items: IntegrationItem[] }[] = [
  {
    labelKey: "cloud",
    items: [
      { name: "AWS", slug: "aws", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Lambda", slug: "aws-lambda", logoUrl: `${SIMPLE_ICONS_CDN}/awslambda.svg` },
      { name: "S3", slug: "aws-s3", logoUrl: `${SIMPLE_ICONS_CDN}/amazons3.svg` },
      { name: "EC2", slug: "aws-ec2", logoUrl: `${SIMPLE_ICONS_CDN}/amazonec2.svg` },
      { name: "DynamoDB", slug: "aws-dynamodb", logoUrl: `${SIMPLE_ICONS_CDN}/amazondynamodb.svg` },
    ],
  },
  {
    labelKey: "crm",
    items: [{ name: "HubSpot", slug: "hubspot", logoUrl: `${SIMPLE_ICONS_CDN}/hubspot.svg` }],
  },
  {
    labelKey: "payments",
    items: [
      { name: "Stripe", slug: "stripe", logoUrl: `${SIMPLE_ICONS_CDN}/stripe.svg` },
      { name: "Mercado Pago", slug: "mercadopago", logoUrl: `${SIMPLE_ICONS_CDN}/mercadopago.svg` },
    ],
  },
  {
    labelKey: "erp",
    items: [{ name: "SAP Business One", slug: "sap-business-one", logoUrl: `${SIMPLE_ICONS_CDN}/sap.svg` }],
  },
];

const GROUP_LABELS: Record<Language, Record<"cloud" | "crm" | "payments" | "erp", string>> = {
  en: {
    cloud: "Cloud & infrastructure",
    crm: "CRM & marketing",
    payments: "Payments",
    erp: "ERP",
  },
  es: {
    cloud: "Cloud e infraestructura",
    crm: "CRM y marketing",
    payments: "Pagos",
    erp: "ERP",
  },
};

function IntegrationLogo({ item }: { item: IntegrationItem }) {
  const [error, setError] = useState(false);
  const src = item.logoUrl ?? `/assets/integrations/${item.slug}.svg`;
  const handleError = useCallback(() => setError(true), []);

  if (error) {
    return (
      <div
        className="flex h-14 w-full min-w-0 items-center justify-center rounded-xl bg-muted/60 px-4"
        title={item.name}
      >
        <span className="truncate text-center text-sm font-medium text-muted-foreground">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex h-14 w-full min-w-0 items-center justify-center rounded-xl bg-card px-4 py-2 shadow-sm ring-1 ring-border/50 transition-shadow hover:shadow-md"
      title={item.name}
    >
      <img
        src={src}
        alt=""
        className="h-8 w-auto max-w-full object-contain object-center"
        onError={handleError}
      />
    </div>
  );
}

export function IntegrationsSection() {
  const { language } = useLanguage();
  const { title, subtitle } = messages[language].integrations;
  const labels = GROUP_LABELS[language];

  return (
    <section
      id="integrations"
      className="flex flex-col items-center justify-start gap-12 self-stretch bg-surface py-14"
    >
      <div className="flex w-full max-w-container-narrow flex-col items-center gap-4 px-4 text-center">
        <h2 className="text-foreground text-3xl font-semibold leading-tight tracking-tight md:text-[42px] md:leading-[1.2]">
          {title}
        </h2>
        <p className="max-w-2xl text-muted-text text-lg font-normal leading-7">
          {subtitle}
        </p>
      </div>

      <div className="grid w-full max-w-container-wide grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {INTEGRATION_GROUPS.map((group) => (
          <div
            key={group.labelKey}
            className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {labels[group.labelKey]}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {group.items.map((item) => (
                <div key={item.slug} className="w-full min-w-0 sm:w-[calc(50%-0.375rem)]">
                  <IntegrationLogo item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
