import type { RecurringEvent } from "@/api/types"

export const eventsFixture: RecurringEvent[] = [
  {
    id: "cornhole-monday",
    day: "Monday",
    time: "7:00 PM",
    title: "Cornhole League Night",
    description:
      "Join our weekly cornhole tournament. Teams of two compete for glory, bragging rights, and a tab on the house for winners.",
    accentColor: "accent",
  },
  {
    id: "karaoke-tuesday",
    day: "Tuesday",
    time: "9:00 PM",
    title: "Karaoke Night",
    description:
      "Grab the mic and own the room. All genres welcome — from country classics to hip-hop bangers. No judgment, just vibes.",
    accentColor: "primary",
  },
  {
    id: "dj-thursday",
    day: "Thursday",
    time: "10:00 PM",
    title: "Live DJ Night",
    description:
      "The weekend starts Thursday at Wicked Wings. Our resident DJs spin the hottest mixes to keep the energy locked in all night.",
    accentColor: "destructive",
  },
  {
    id: "karaoke-friday",
    day: "Friday",
    time: "9:30 PM",
    title: "Friday Karaoke",
    description:
      "Kick off the weekend right. Friday karaoke brings the biggest crowds and the loudest performances. Reserve your set.",
    accentColor: "primary",
  },
  {
    id: "karaoke-dj-sunday",
    day: "Sunday",
    time: "8:00 PM",
    title: "Karaoke + DJ Sundown",
    description:
      "End your week with a bang. Karaoke meets DJ in our signature Sunday mashup. Easy on the drinks, heavy on the fun.",
    accentColor: "accent",
  },
]
