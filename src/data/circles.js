import { getPeople } from "./members.js";

// Álbumes de círculo (circleMainCard)
// image: foto de Unsplash · members: personas de members.js · extraMembers: contador "+N"
export const circles = [
  {
    title: "Verano en Mallorca",
    location: "Cala Deià, Mallorca",
    photos: 342,
    people: 8,
    tag: "Viajes",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&auto=format&q=80",
    members: getPeople("laura", "alex", "javier"),
    extraMembers: 5,
    lastUpload: { by: "Laura", when: "hace 2 horas" },
  },
  {
    title: "Cumpleaños de Greta",
    location: "Casa de Greta, Madrid",
    photos: 102,
    people: 12,
    tag: "Celebraciones",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop&auto=format&q=80",
    members: getPeople("greta", "pablo", "marta"),
    extraMembers: 9,
    lastUpload: { by: "Marta", when: "ayer" },
  },
];

// Álbum destacado (mosaico de Recuerdos)
export const featuredCircle = {
  title: "Lisboa 2026",
  location: "Miradouro de Santa Luzia, Lisboa",
  photos: 342,
  people: 8,
  tag: "Viajes",
  image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1280&h=720&fit=crop&auto=format&q=80",
  members: getPeople("sofia", "lucas", "marta"),
  extraMembers: 5,
  lastUpload: { by: "Lucas", when: "hace 2 horas" },
};
