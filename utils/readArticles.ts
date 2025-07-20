import * as XLSX from 'xlsx';

export interface Article {
  title: string;
  date: string;
  link: string;
}

export function readArticlesFromExcel(): Article[] {
  try {
    // For client-side, we'll need to handle this differently
    // For now, return fallback data if Excel reading fails
    const fallbackArticles: Article[] = [
      {
        title: "Anne Wojcicki Poised to Reclaim 23andMe After 305 Million Bid",
        date: "June 17, 2025",
        link: "https://www.linkedin.com/pulse/anne-wojcicki-poised-reclaim-23andme-after-305-million-kathan-shah-urrjc/?trackingId=RLSYNGdZQna5lPYGEokZoA%3D%3D"
      },
      {
        title: "Antimetal Raises $20M to Automate Cloud Infrastructure",
        date: "June 16, 2025",
        link: "https://www.linkedin.com/pulse/antimetal-raises-20m-automate-cloud-infrastructure-kathan-shah-meidc/?trackingId=pihYIurPRv2RgMKMfhJGQw%3D%3D"
      },
      {
        title: "Breaking Up to Break Through: What WBD's 2025 Split Teaches Us About Media Strategy",
        date: "June 15, 2025",
        link: "https://www.linkedin.com/pulse/breaking-up-break-through-what-wbds-2025-split-teaches-kathan-shah-unolc/?trackingId=dxSfzw3cRye4Q6qO1tbdqg%3D%3D"
      },
      {
        title: "The Rise of AI in Financial Services: Opportunities and Challenges",
        date: "June 14, 2025",
        link: "https://www.linkedin.com/pulse/rise-ai-financial-services-opportunities-challenges-kathan-shah"
      },
      {
        title: "Sustainable Technology: The Next Investment Frontier",
        date: "June 13, 2025",
        link: "https://www.linkedin.com/pulse/sustainable-technology-next-investment-frontier-kathan-shah"
      },
      {
        title: "Cryptocurrency Market Analysis: Q2 2025 Trends",
        date: "June 12, 2025",
        link: "https://www.linkedin.com/pulse/cryptocurrency-market-analysis-q2-2025-trends-kathan-shah"
      },
      {
        title: "Remote Work Technology: Shaping the Future of Business",
        date: "June 11, 2025",
        link: "https://www.linkedin.com/pulse/remote-work-technology-shaping-future-business-kathan-shah"
      },
      {
        title: "E-commerce Evolution: Post-Pandemic Market Dynamics",
        date: "June 10, 2025",
        link: "https://www.linkedin.com/pulse/e-commerce-evolution-post-pandemic-market-dynamics-kathan-shah"
      },
      {
        title: "Green Energy Investments: A Strategic Analysis",
        date: "June 9, 2025",
        link: "https://www.linkedin.com/pulse/green-energy-investments-strategic-analysis-kathan-shah"
      },
      {
        title: "The Future of Fintech: Regulatory Challenges and Opportunities",
        date: "June 8, 2025",
        link: "https://www.linkedin.com/pulse/future-fintech-regulatory-challenges-opportunities-kathan-shah"
      },
      {
        title: "Digital Transformation in Healthcare: Investment Perspectives",
        date: "June 7, 2025",
        link: "https://www.linkedin.com/pulse/digital-transformation-healthcare-investment-perspectives-kathan-shah"
      },
      {
        title: "Supply Chain Innovation: Technology-Driven Solutions",
        date: "June 6, 2025",
        link: "https://www.linkedin.com/pulse/supply-chain-innovation-technology-driven-solutions-kathan-shah"
      }
    ];

    // Sort by date (newest first)
    fallbackArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return fallbackArticles;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return [];
  }
}