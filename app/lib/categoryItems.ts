import bungalowImage from "@/public/bungalow.png";
interface IProps {
  name: string;
  title: string;
  image: any;
  description: string;
  id: number;
}
export const categoryItems: IProps[] = [
  {
    id: 1,
    name: "apartments",
    title: "Apartments",
    description:
      "Cozy and modern apartments located in prime areas, ideal for individuals or small families.",
    image: bungalowImage,
  },
  {
    id: 7,
    name: "pool",
    description: "This property has an amazing Pool",
    title: "Pool",
    image: bungalowImage,
  },
  {
    id: 2,
    name: "duplexes",
    title: "Duplexes",
    description:
      "Spacious multi-story duplexes perfect for larger families or groups, offering privacy and comfort.",
    image: bungalowImage,
  },
  {
    id: 3,
    name: "bungalows",
    title: "Bungalows",
    description:
      "Single-story bungalows in quiet neighborhoods, great for those seeking a peaceful retreat.",
    image: bungalowImage,
  },
  {
    id: 4,
    name: "townhouses",
    title: "Townhouses",
    description:
      "Stylish townhouses located in secure estates, offering a blend of comfort and convenience.",
    image: bungalowImage,
  },
  {
    id: 5,
    name: "detachedhomes",
    title: "Detached Homes",
    description:
      "Standalone homes with ample space, offering full privacy and room for large groups or families.",
    image: bungalowImage,
  },
  {
    id: 8,
    name: "hostels",
    title: "Hostels",
    description:
      "Budget-friendly hostels suitable for backpackers, students, or large groups seeking affordable stays.",
    image: bungalowImage,
  },
  {
    id: 11,
    name: "luxuryvillas",
    title: "Luxury Villas",
    description:
      "High-end villas with exclusive amenities, designed for those seeking a luxurious lifestyle experience.",
    image: bungalowImage,
  },
  {
    id: 12,
    name: "beachhouses",
    title: "Beach Houses",
    description:
      "Beautiful beach houses located along Nigeria's coastline, perfect for serene and picturesque stays.",
    image: bungalowImage,
  },
];
