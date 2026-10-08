import pcbSoldering from '../assets/gallery-pcb-soldering.jpg'
import electricalPanel from '../assets/gallery-electrical-panel.jpg'
import beforeAfter from '../assets/gallery-before-after.jpg'
import diagnosticBench from '../assets/gallery-diagnostic-bench.jpg'
import mixer from '../assets/mixer.webp'
import fan from '../assets/ceilfan.webp'
import stove from '../assets/stove.jpg'
import wall from '../assets/wll.webp'

export const GALLERY_CATEGORIES = [
  'All',
  'Repair Work',
  'Workshop',
  'Before & After',
  'Equipment',
]

export const GALLERY_ITEMS = [
  {
    id: 'pcb-micro-solder',
    title: 'SMD Component & Micro-Soldering Rework',
    category: 'Repair Work',
    tag: 'Precision Soldering',
    image: pcbSoldering,
    description:
      'High-magnification surface mount component replacement and 0.1mm jumper trace restoration on an audio control circuit board.',
  },
  {
    id: 'electrical-panel',
    title: 'Commercial Panel & Breaker Triage',
    category: 'Repair Work',
    tag: 'Electrical Safety',
    image: electricalPanel,
    description:
      'Multi-circuit breaker diagnostic testing, insulation resistance checking, and neat wire rerouting on a main distribution panel.',
  },
  {
    id: 'ceiling-fan-repair',
    title: 'Ceiling Fan Rewinding & Repair',
    category: 'Repair Work',
    tag: 'Motor Rewinding',
    image: fan,
    description:
      'Complete copper coil rewinding, bearing replacement, and capacitor upgrades for high-speed ceiling fans.',
  },
  {
    id: 'tv-wall-mount',
    title: 'LED TV Wall Mounting & Setup',
    category: 'Workshop',
    tag: 'Installation',
    image: wall,
    description:
      'Professional flat-screen TV wall mounting service with concealed wiring and secure bracket installation.',
  },
  {
    id: 'stove-servicing',
    title: 'Gas Stove & Hob Servicing',
    category: 'Repair Work',
    tag: 'Appliance Service',
    image: stove,
    description:
      'Deep cleaning, burner unblocking, and pipeline leak-check servicing for multi-burner gas stoves.',
  },
  {
    id: 'mixer-grinder',
    title: 'Mixer & Grinder Repair',
    category: 'Repair Work',
    tag: 'Small Appliances',
    image: mixer,
    description:
      'Armature turning, carbon brush replacement, and jar coupler repairs for heavy-duty mixer grinders.',
  },
  {
    id: 'before-after-cap',
    title: 'Blown Capacitor Replacement & Trace Clean',
    category: 'Before & After',
    tag: 'Component Rework',
    image: beforeAfter,
    description:
      'Before & after repair: Severely burned C402 power capacitor replaced with high-grade Japanese Nichicon 680µF capacitor and cleaned flux.',
  },
  {
    id: 'diagnostic-equipment',
    title: 'Dual-Channel Oscilloscope & Power Rig',
    category: 'Equipment',
    tag: 'Diagnostic Testing',
    image: diagnosticBench,
    description:
      'Keysight digital oscilloscope analyzing ripple waveforms and regulated DC power supply testing on an audio power amplifier.',
  },
]
