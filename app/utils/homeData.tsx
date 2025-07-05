import { List } from "lucide-react";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { MdWifiTetheringError } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

export const locationData = [
  {
    id: 1,
    title: "Effortless Discovery",
    content:
      "Perfect your search with advanced filters for location, style, amenities, and budget.",
    icon: <TbMapSearch className="size-10" color="#005F73" />,
  },
  {
    id: 2,
    title: "Simplified Reservations",
    content:
      "Lock in your location with immediate quotes and safe online booking. No stress.",
    icon: <MdOutlineDateRange className="size-10" color="#005F73" />,
  },
  {
    id: 3,
    title: "Comprehensive Directory",
    content:
      "Discover clear pricing with inclusive permits and insurance options on scoutbeta.",
    icon: <List className="size-10" color="#005F73" />,
  },
];

export const showCaseData = [
  {
    id: 1,
    title: "Pre-screened Filmmakers",
    content: "Link up with certified and insured production crews.",
    icon: <LuShieldCheck className="size-10" color="#005F73" />,
  },
  {
    id: 2,
    title: "Streamlined communication",
    content: "Handle bookings and inquiries directly via our secure platform.",
    icon: <MdWifiTetheringError className="size-10" color="#005F73" />,
  },
  {
    id: 3,
    title: "List With Ease",
    content:
      "Get known. Set up a free listing in minutes, highlighting your space's top features.",
    icon: <List className="size-10" color="#005F73" />,
  },
];

export const heroImageData = [
  {
    id: 1,
    name: "Movie",
    imageUrl: "/assets/waitlist-hero-img1-large.png",
  },
  {
    id: 2,
    name: "Photoshoot",
    imageUrl: "/assets/waitlist-hero-img2-large.png",
  },
  {
    id: 3,
    name: "Apartment",
    imageUrl: "/assets/waitlist-hero-img3-large.jpeg",
  },
  {
    id: 4,
    name: "Fashion Show",
    imageUrl: "/assets/waitlist-hero-img4-large.jpeg",
  },
  {
    id: 5,
    name: "Outdoor Party",
    imageUrl: "/assets/waitlist-hero-img5-large.jpeg",
  },
  {
    id: 6,
    name: "Training Spaces",
    imageUrl: "/assets/waitlist-hero-img6-large.png",
  },
];

// Activity data
export const activityData = [
  { id: 1, label: "Host", value: "Host" },
  { id: 2, label: "Guest", value: "Guest" },
];
