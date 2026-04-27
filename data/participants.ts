export interface Participant {
  id: string;
  name: string;
  class: string;
  sec: string;
  roll: string;
  whatsapp: string;
  version: "EV" | "BV";
  segments: string[];
}

export const participants: Participant[] = [
  {
    id: "BFX-101",
    name: "Ibn Khalid Khan",
    class: "10",
    sec: "A",
    roll: "01",
    whatsapp: "017XXXXXXXX",
    version: "EV",
    segments: ["Quiz", "Anime"]
  },
  {
    id: "BFX-102",
    name: "Masreka Rana Ohona",
    class: "11",
    sec: "B",
    roll: "42",
    whatsapp: "018XXXXXXXX",
    version: "BV",
    segments: ["Quiz", "Art"]
  },
  {
    id: "BFX-103",
    name: "Shahriar Hasan Sakin",
    class: "10",
    sec: "C",
    roll: "15",
    whatsapp: "019XXXXXXXX",
    version: "EV",
    segments: ["Quiz", "Science"]
  }
];