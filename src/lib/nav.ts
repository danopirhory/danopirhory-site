import { site } from "./site";

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Loan Programs", href: "/loan-programs" },
  { label: "For Realtors", href: "/for-realtors" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerNav: Record<string, NavItem[]> = {
  Programs: [
    { label: "First-Time Buyers", href: "/loan-programs/first-time-homebuyer" },
    { label: "VA Loans", href: "/loan-programs/va" },
    { label: "Camp Lejeune VA Guide", href: "/va-loans-jacksonville-nc" },
    { label: "FHA Loans", href: "/loan-programs/fha" },
    { label: "Conventional", href: "/loan-programs/conventional" },
    { label: "Relocation to NC", href: "/loan-programs/relocation" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "For Realtors", href: "/for-realtors" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Contact", href: "/contact" },
  ],
  "Service Areas": [
    { label: "Wilmington, NC", href: "/service-areas/wilmington-nc" },
    { label: "Wrightsville Beach, NC", href: "/service-areas/wrightsville-beach-nc" },
    { label: "Carolina Beach, NC", href: "/service-areas/carolina-beach-nc" },
    { label: "Surf City, NC", href: "/service-areas/surf-city-nc" },
    { label: "Jacksonville, NC", href: "/service-areas/jacksonville-nc" },
    { label: "Fayetteville, NC", href: "/service-areas/fayetteville-nc" },
    { label: "Raleigh, NC", href: "/service-areas/raleigh-nc" },
    { label: "Charlotte, NC", href: "/service-areas/charlotte-nc" },
    { label: "All Service Areas", href: "/service-areas" },
  ],
  Resources: [
    { label: "Articles", href: "/resources" },
    // External - points at the lender's application portal. The Footer detects http(s)
    // hrefs and renders them as new-tab links automatically.
    { label: "Apply Now", href: site.applicationUrl },
  ],
};
