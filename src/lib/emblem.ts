/* A deterministic mark per repository: same name always draws the same sigil.
   Used as the cover for projects that have no interface to screenshot — a CLI,
   a Verilog CPU, an API — instead of a stock photo or a fake mockup. */

export function emblem(seed: string): string {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const rnd = () => {
    h = (Math.imul(h, 1664525) + 1013904223) >>> 0;
    return h / 4294967296;
  };

  const n = 5;
  const c = 100 / n;
  let out = "";

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const r = rnd();
      const cx = x * c + c / 2;
      const cy = y * c + c / 2;
      if (r < 0.18) {
        out += `<circle cx="${cx}" cy="${cy}" r="${c * 0.28}"/>`;
      } else if (r < 0.36) {
        out += `<rect x="${x * c + c * 0.24}" y="${y * c + c * 0.24}" width="${c * 0.52}" height="${c * 0.52}"/>`;
      } else if (r < 0.52) {
        out += `<path d="M${x * c + c * 0.22} ${y * c + c * 0.78}L${cx} ${y * c + c * 0.22}L${x * c + c * 0.78} ${y * c + c * 0.78}Z"/>`;
      } else if (r < 0.68) {
        out += `<rect x="${x * c + c * 0.18}" y="${cy - 1.2}" width="${c * 0.64}" height="2.4"/>`;
      }
    }
  }

  return `<svg viewBox="0 0 100 100" width="100%" height="100%" fill="currentColor" aria-hidden="true">${out}</svg>`;
}
