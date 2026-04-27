'use client'

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Facebook, Instagram, Mail } from "lucide-react"

// --- FILTER KEYWORDS ---
// These are the names you provided. The filter will check if the full name includes these.
const englishKeywords = [
  "Khalid", "Ohona", "Shahriar", "Sara", "Rafsan", "Daniel", "Rupkotha", "Riham", "Wafi", // Organizers
  "Jeyad", "Tashfiq", "Faiaz", "Faiyaz", "Sabik", "Mukit", "Era", "Arwa", "ragib" // Volunteers
]

// --- FULL DATA ARRAYS ---
const allOrganizers = [
  { name: "Ibn Khalid Khan", role: "Organizer & Designer", image: "/team/khalid.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/ibnkhalidkhan/", instagram: "https://instagram.com/realwithikk", mail: "mailto:khalidkhan.iscian@gmail.com" } },
  { name: "Masreka Rana Ohona", role: "Organizer", image: "/team/ohona.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/masreka.ohona.9999", instagram: "https://www.instagram.com/masudrana19712023/", mail: "#" } },
  { name: "Shahriar Hasan Sakin", role: "Organizer", image: "/team/sakin.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/shahriar.hasan.11783", instagram: "https://www.instagram.com/dewan_shahriar/", mail: "#" } },
  { name: "Ramisa Hossain Sara", role: "Organizer", image: "/team/sara.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/profile.php?id=61581685192813", instagram: "https://www.instagram.com/velvetgl0ww/", mail: "#" } },
  { name: "MD. Rafsan Jani Bhuiyan", role: "Organizer", image: "/team/rafsan.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#https://www.facebook.com/profile.php?id=61576308222927", instagram: "https://www.instagram.com/r51_rafsanjani/", mail: "#" } },
  { name: "Daniel Hasan", role: "Organizer", image: "/team/daniel.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/daniel.hasan.800648", instagram: "https://www.instagram.com/_.c4lifornia._/", mail: "#" } },
  { name: "Taheea Islam Rupkotha", role: "Organizer", image: "/team/rupkotha.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/rupkotha.islam.747932", instagram: "https://www.instagram.com/korsola_/", mail: "#" } },
  { name: "Ahnaf Habib Riham", role: "Co-organizer", image: "/team/riham.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/ahnaf.habib.riham.2025", instagram: "https://www.instagram.com/its_definitely_ahr/", mail: "#" } },
  { name: "Mahrus Habib Wafi", role: "Co-organizer", image: "/team/wafi.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "https://www.facebook.com/mahrus.wafi.2025", instagram: "https://www.instagram.com/kaka._.babu/", mail: "#" } },
  // All others below will default to Bangla Version based on your list
  { name: "MD. Sadikuzzaman Zayeen", role: "Organizer & Invitation", image: "/team/zayeen.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Fatema Nuder Binte Bulbul", role: "Organizer", image: "/team/bulbul.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Mirza Md. Saad", role: "Organizer", image: "/team/saad.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Afra Asea", role: "Organizer", image: "/team/asea.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Erfana Jarin Tasnim", role: "Organizer", image: "/team/tasnim.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Muntasir Morshed", role: "Printings & Logistics", image: "/team/muntasir.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Rezowana Karim Raisa", role: "Co-organizer", image: "/team/raisa.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Sk Rayan Bin Mizan", role: "Co-organizer", image: "/team/mizan.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Jubayer Hossain", role: "Co-organizer", image: "/team/jubayer.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Shah Redwanul Hoq Shafin", role: "Co-organizer", image: "/team/shafin.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Diptamoy Datta Arnob", role: "Idea Giver", image: "/team/arnob.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Tahlin Ahmed Tonoy", role: "Idea Giver", image: "/team/tonoy.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Mohammed Yousuf Anam", role: "Idea Giver", image: "/team/anam.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Asir Farhan Mahmood", role: "Idea Giver", image: "/team/mahmood.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Shahrian Hossain Sakin", role: "Idea Giver", image: "/team/sakin-h.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Zarif Ayman", role: "Idea Giver", image: "/team/ayman.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Nur E Jannat Mira", role: "Idea Giver", image: "/team/mira.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Sajid Samin", role: "Idea Giver", image: "/team/samin.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Fardousur Rahman (Sami)", role: "Idea Giver", image: "/team/sami-f.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Ridwanur Rahman", role: "Idea Giver", image: "/team/ridwanur.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Maaz Ahmed", role: "Idea Giver", image: "/team/maaz.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Sujal Bin Islam", role: "Idea Giver", image: "/team/sujal.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Afnan Sarker Nafi", role: "Idea Giver", image: "/team/nafi.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Muhammad Sadman Saifan", role: "Idea Giver", image: "/team/saifan.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Afraz Al Ahasan", role: "Idea Giver", image: "/team/afraz.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Fariha Tuzzaman", role: "Idea Giver", image: "/team/fariha.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Maliha Martuja", role: "Idea Giver", image: "/team/maliha.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Alia Huq Tonni", role: "Idea Giver", image: "/team/tonni.jpg", post: "Senior Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } }
];

const allVolunteers = [
  { name: "Jeyad Jasmir Chowdhury", role: "Event Crew", image: "/team/jeyad.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Tashfiq Zarif", role: "Event Crew", image: "/team/tashfiq.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Faiaz Rahman", role: "Event Crew", image: "/team/faiaz.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Abrar Faiyaz", role: "Event Crew", image: "/team/abrar-f.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Sabik Bahar", role: "Event Crew", image: "/team/sabik.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Abdullah al Mukit", role: "Event Crew", image: "/team/mukit.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Syeda Wasima Era", role: "Event Crew", image: "/team/wasima.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Hazeratul Arwa", role: "Event Crew", image: "/team/arwa.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  // Bangla Version Volunteers
  { name: "Abrar ragib anjum haq", role: "Event Crew", image: "/team/abrar-r.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Afia Ibnat Snigdha", role: "Event Crew", image: "/team/snigdha.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Mubasshira Subah", role: "Event Crew", image: "/team/subah.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Rokiya Tasnim", role: "Event Crew", image: "/team/rokiya.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Ayesha Tasfia", role: "Event Crew", image: "/team/tasfia.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } },
  { name: "Alisha Jahan Disha", role: "Event Crew", image: "/team/alisha.jpg", post: "Volunteer, ISTARC", socials: { facebook: "#", instagram: "#", mail: "#" } }
];

export default function TeamPage() {
  const [language, setLanguage] = useState<'EN' | 'BN'>('EN');

  // Helper to check if a name matches any provided keyword
  const isEnglish = (fullName: string) =>
    englishKeywords.some(keyword => fullName.toLowerCase().includes(keyword.toLowerCase()));

  const filteredOrganizers = allOrganizers.filter(m =>
    language === 'EN' ? isEnglish(m.name) : !isEnglish(m.name)
  );

  const filteredVolunteers = allVolunteers.filter(m =>
    language === 'EN' ? isEnglish(m.name) : !isEnglish(m.name)
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-32">

        {/* Version Toggles */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white'}`}
            >
              English Version
            </button>
            <button
              onClick={() => setLanguage('BN')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${language === 'BN' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white'}`}
            >
              Bangla Version
            </button>
          </div>
        </div>

        {/* Section: Organizers */}
        <div className="mb-24">
          <div className="mb-12 space-y-2 text-center md:text-left">
            <h2 className="font-mono text-3xl font-bold tracking-tighter uppercase text-primary">
              Organizing Committee
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto md:mx-0" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOrganizers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Section: Volunteers */}
        <div>
          <div className="mb-12 space-y-2 text-center md:text-left">
            <h2 className="font-mono text-3xl font-bold tracking-tighter uppercase text-muted-foreground">
              Volunteers
            </h2>
            <div className="h-1 w-20 bg-muted-foreground/30 mx-auto md:mx-0" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredVolunteers.map((member) => (
              <TeamMemberCard key={member.name} member={member} isSmall />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function TeamMemberCard({ member, isSmall = false }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10">
      <div className={`overflow-hidden rounded-xl bg-neutral-900 ${isSmall ? 'aspect-square' : 'aspect-[4/5]'}`}>
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + member.name }}
        />
      </div>

      <div className="mt-5 space-y-1">
        <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
        <p className="text-sm font-medium text-primary/90">{member.role}</p>
        <p className="text-xs text-muted-foreground">{member.post}</p>

        <div className="flex gap-4 pt-4">
          <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors">
            <Facebook size={18} />
          </a>
          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
            <Instagram size={18} />
          </a>
          <a href={member.socials.mail} className="text-muted-foreground hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}