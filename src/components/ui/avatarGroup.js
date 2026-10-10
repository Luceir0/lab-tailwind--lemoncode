// Grupo de avatares solapados con contador "+N" (avatar-group de daisyUI)
// people: [{ name, avatar }]
// options: extra (número del contador), size (clase w-*),
//          className (clases del grupo), avatarClass (clases de cada avatar)
export function avatarGroup(
  people,
  { extra = 0, size = "w-7", className = "", avatarClass = "" } = {},
) {
  const avatars = people
    .map(
      ({ name, avatar }) => `
        <div class="avatar ${avatarClass}">
          <div class="${size} rounded-full">
            <img src="${avatar}" alt="${name}" width="96" height="96" loading="lazy" decoding="async" />
          </div>
        </div>`,
    )
    .join("");

  const counter = extra
    ? `
        <div class="avatar avatar-placeholder ${avatarClass}">
          <div class="${size} rounded-full bg-brand-600 text-white">
            <span class="text-2xs font-semibold">+${extra}</span>
          </div>
        </div>`
    : "";

  return `<div class="avatar-group ${className}">${avatars}${counter}</div>`;
}
