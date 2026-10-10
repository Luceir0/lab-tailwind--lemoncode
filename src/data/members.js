// Todas las personas, por id. Se usan con getPeople("id", …)
// avatar: retrato de Unsplash recortado a la cara

const avatar = (photoId) =>
  `https://images.unsplash.com/photo-${photoId}?w=96&h=96&fit=crop&crop=faces&auto=format&q=80`;

export const people = {
  sofia: {
    name: "Sofía M.",
    role: "Fundadora del círculo",
    photos: 84,
    avatar: avatar("1494790108377-be9c29b29330"),
  },
  lucas: {
    name: "Lucas V.",
    role: "Miembro",
    photos: 142,
    avatar: avatar("1507003211169-0a1dd7228f2d"),
  },
  marta: {
    name: "Marta G.",
    role: "Miembro",
    photos: 37,
    avatar: avatar("1438761681033-6461ffad8d80"),
  },
  laura: {
    name: "Laura M.",
    role: "Fundadora del círculo",
    photos: 96,
    avatar: avatar("1544005313-94ddf0286df2"),
  },
  alex: {
    name: "Álex R.",
    role: "Miembro",
    photos: 51,
    avatar: avatar("1500648767791-00dcc994a43e"),
  },
  javier: {
    name: "Javier G.",
    role: "Miembro",
    photos: 23,
    avatar: avatar("1506794778202-cad84cf45f1d"),
  },
  greta: {
    name: "Greta R.",
    role: "Fundadora del círculo",
    photos: 64,
    avatar: avatar("1531123897727-8f129e1688ce"),
  },
  pablo: {
    name: "Pablo S.",
    role: "Miembro",
    photos: 18,
    avatar: avatar("1472099645785-5658abf4ff4e"),
  },
  ines: {
    name: "Inés C.",
    role: "Miembro",
    photos: 45,
    avatar: avatar("1534528741775-53994a69daeb"),
  },
  carla: {
    name: "Carla P.",
    role: "Miembro",
    photos: 29,
    avatar: avatar("1517841905240-472988babdf9"),
  },
};

// Personas por id, en ese orden
export function getPeople(...ids) {
  return ids.map((id) => people[id]);
}

// Prueba social del hero
export const heroCommunity = {
  people: getPeople("ines", "carla", "alex", "pablo"),
  extra: 8,
};
