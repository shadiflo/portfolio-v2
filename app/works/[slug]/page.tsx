import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { works } from "../data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return works.map((work) => ({
    slug: work.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const work = works.find((w) => w.id === params.slug);

  if (!work) {
    return {
      title: "Work Not Found",
    };
  }

  return {
    title: work.title,
    description: work.description,
  };
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = works.find((w) => w.id === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      {/* Back button */}
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/works">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Works
        </Link>
      </Button>

      {/* Title section */}
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight">{work.title}</h1>
          <Badge>{work.period}</Badge>
        </div>

        {/* Meta information */}
        <div className="space-y-2 text-sm">
          {work.platform && (
            <div className="flex gap-2">
              <span className="font-semibold text-foreground">Platform:</span>
              <span className="text-muted-foreground">{work.platform}</span>
            </div>
          )}
          {work.stack && work.stack.length > 0 && (
            <div className="flex gap-2">
              <span className="font-semibold text-foreground">Stack:</span>
              <div className="flex flex-wrap gap-1">
                {work.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {work.website && (
            <div className="flex gap-2">
              <span className="font-semibold text-foreground">Website:</span>
              <a
                href={work.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                {work.website.replace(/^https?:\/\/(www\.)?/, "")}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Content sections */}
      <div className="space-y-6">
        {work.content.intro.map((paragraph, index) => (
          <p key={index} className="text-justify leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}

        {work.content.note && (
          <div className="rounded-lg border border-border/50 bg-muted/50 p-4">
            <p className="text-sm italic text-muted-foreground">{work.content.note}</p>
          </div>
        )}
      </div>

      {/* Key Features / Highlights */}
      {work.content.highlights && work.content.highlights.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
          <ul className="space-y-2">
            {work.content.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Image Gallery */}
      {work.images.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {work.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border border-border/50"
              >
                <Image
                  src={image}
                  alt={`${work.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to works button at bottom */}
      <div className="mt-12 flex justify-center">
        <Button asChild>
          <Link href="/works">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Works
          </Link>
        </Button>
      </div>
    </div>
  );
}
