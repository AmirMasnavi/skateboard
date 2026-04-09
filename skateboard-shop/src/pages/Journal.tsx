import { useState } from 'react';
import bg1 from '../assets/background.jpg';
import bg2 from '../assets/background2.jpg';
import bg3 from '../assets/background3.jpg';

const dispatches = [
  {
    id: '001',
    date: 'Apr 2026',
    location: 'Los Angeles, CA',
    headline: 'The last spot before they paved it.',
    body: "We found the bank behind the old factory off 6th. Three hours, one roll of film, zero traffic. It's concrete now. We were the last ones there.",
    tag: 'Field Report',
  },
  {
    id: '002',
    date: 'Mar 2026',
    location: 'Barcelona, Spain',
    headline: 'MACBA at 6am looks different.',
    body: "Before the crowds. Before the tourists. Just the slap of wheels on marble and the sound of pigeons clearing out. Some places belong to you only at certain hours.",
    tag: 'Dispatch',
  },
  {
    id: '003',
    date: 'Feb 2026',
    location: 'Tokyo, Japan',
    headline: 'The underground scene has no name.',
    body: "No Instagram. No handle. A crew in Shimokitazawa that skates gaps between vending machines at 2am. They don't want coverage. We gave them one photo.",
    tag: 'Signal',
  },
  {
    id: '004',
    date: 'Jan 2026',
    location: 'London, UK',
    headline: 'Southbank will outlast everything.',
    body: "They tried to tear it down in 2014. The community buried it in signatures and noise. Now it's a monument. Some things you can't pave over.",
    tag: 'Archive',
  },
];

const allTags = ['All', ...Array.from(new Set(dispatches.map((d) => d.tag)))];

const Journal = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? dispatches
    : dispatches.filter((d) => d.tag === activeTag);

  return (
    <div className="pt-20 bg-[#121212] min-h-screen">

      {/* Header */}
      <div className="container mx-auto px-4 pt-16 pb-4">
        <p className="text-[#999999] text-xs uppercase tracking-[0.3em] mb-6">
          Vol. 01 — Street Report
        </p>
        <div className="flex items-end justify-between border-b border-[#333333] pb-10">
          <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-bold uppercase leading-none tracking-tighter text-[#F5F5F5]">
            Journal
          </h1>
          <span className="text-[#FCEE09] text-xs uppercase tracking-[0.3em] mb-3">
            {filtered.length} dispatches
          </span>
        </div>

        {/* Tag filter row */}
        <div className="flex flex-wrap gap-6 pt-8">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs uppercase tracking-[0.3em] pb-1 border-b transition-colors duration-300 ${
                activeTag === tag
                  ? 'text-[#FCEE09] border-[#FCEE09]'
                  : 'text-[#999999] border-transparent hover:text-[#F5F5F5]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Hero image — full bleed, grainy, ken burns on wrapper */}
      <div className="film-grain w-full overflow-hidden mt-4 h-[50vh] md:h-[65vh]">
        <div className="w-full h-full scale-105 animate-ken-burns">
          <img
            src={bg1}
            alt=""
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-[0.5]"
          />
        </div>
      </div>

      {/* Dispatches list */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col">
          {filtered.map((d) => (
            <div
              key={d.id}
              className="group border-t border-[#333333] py-10 cursor-pointer hover:border-[#FCEE09] transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">

                {/* ID + tag — fixed width left col */}
                <div className="flex flex-col gap-1 md:w-24 shrink-0">
                  <span className="text-[#333333] text-xs uppercase tracking-widest group-hover:text-[#FCEE09] transition-colors duration-500">
                    #{d.id}
                  </span>
                  <span className="text-[#999999] text-[10px] uppercase tracking-widest">{d.tag}</span>
                </div>

                {/* Headline + body — grows */}
                <div className="flex flex-col gap-4 flex-1">
                  <h2 className="text-[#F5F5F5] text-lg md:text-xl font-bold uppercase tracking-wide leading-tight group-hover:text-[#FCEE09] transition-colors duration-500">
                    {d.headline}
                  </h2>
                  <p className="text-[#999999] text-sm leading-relaxed max-w-lg">
                    {d.body}
                  </p>
                </div>

                {/* Date + location — fixed width right col */}
                <div className="flex flex-col items-start md:items-end gap-1 md:w-48 shrink-0 md:pt-1">
                  <span className="text-[#999999] text-xs uppercase tracking-widest">{d.date}</span>
                  <span className="text-[#333333] text-xs uppercase tracking-widest">{d.location}</span>
                </div>

              </div>
            </div>
          ))}

          <div className="border-t border-[#333333] pt-6 flex justify-between">
            <span className="text-[#333333] text-xs uppercase tracking-widest">End of dispatch</span>
            <span className="text-[#333333] text-xs uppercase tracking-widest">Vol. 01</span>
          </div>
        </div>
      </div>

      {/* Secondary image pair */}
      <div className="film-grain w-full overflow-hidden">
        <div className="grid grid-cols-2 h-[35vh]">
          <div className="overflow-hidden">
            <img src={bg2} alt="" className="w-full h-full object-cover grayscale contrast-125 brightness-[0.45]" />
          </div>
          <div className="overflow-hidden">
            <img src={bg3} alt="" className="w-full h-full object-cover grayscale contrast-125 brightness-[0.45]" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Journal;
