// components/SchemaTags.js
import Head from 'next/head';

export function CourseSchema({ title, description }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "CLATNLTI",
      "url": "https://www.clatnlti.com"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}

export function ReviewSchema({ reviews, ratingValue = "4.9", reviewCount = reviews.length }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CLAT Mentorship & Crash Course",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": String(reviewCount)
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.ratingValue
      },
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "reviewBody": r.body
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
}
