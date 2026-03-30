"use client";

export default function DiagnosisCodingMockup() {
  return (
    <div aria-hidden="true" className="w-[220px] h-[380px] bg-white rounded-[24px] border border-zinc-200 shadow-sm overflow-hidden flex flex-col text-[10px] text-zinc-800">
      <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[8px] text-zinc-400">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
        </div>
      </div>

      <div className="px-4 py-2 border-b border-zinc-100">
        <div className="text-[11px] font-semibold">AI Diagnosis Coding</div>
        <div className="text-[8px] text-zinc-400">Auto-detected from notes</div>
      </div>

      <div className="flex-1 px-4 py-3 space-y-2.5 overflow-hidden">
        {/* Primary */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] text-blue-600 font-medium">PRIMARY</span>
            <span className="text-[8px] text-blue-600 font-mono">98%</span>
          </div>
          <div className="font-medium text-[10px]">G44.2</div>
          <div className="text-[8px] text-zinc-500">Tension-type headache</div>
          <div className="mt-1 h-1 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: "98%" }} />
          </div>
        </div>

        {/* Secondary suggestions */}
        <div className="text-[8px] text-zinc-400 font-medium">Suggestions</div>

        <div className="border border-zinc-100 rounded-lg p-2.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-medium text-[10px]">G43.909</span>
            <span className="text-[8px] text-zinc-400 font-mono">72%</span>
          </div>
          <div className="text-[8px] text-zinc-500">Migraine, unspecified</div>
          <div className="mt-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-400 rounded-full" style={{ width: "72%" }} />
          </div>
        </div>

        <div className="border border-zinc-100 rounded-lg p-2.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-medium text-[10px]">R51.9</span>
            <span className="text-[8px] text-zinc-400 font-mono">45%</span>
          </div>
          <div className="text-[8px] text-zinc-500">Headache, unspecified</div>
          <div className="mt-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-300 rounded-full" style={{ width: "45%" }} />
          </div>
        </div>

        <div className="border border-zinc-100 rounded-lg p-2.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="font-medium text-[10px]">R51.0</span>
            <span className="text-[8px] text-zinc-400 font-mono">30%</span>
          </div>
          <div className="text-[8px] text-zinc-500">Headache with orthostatic component</div>
          <div className="mt-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-300 rounded-full" style={{ width: "30%" }} />
          </div>
        </div>
      </div>

      <div className="px-4 py-2 border-t border-zinc-100 flex gap-2">
        <div className="flex-1 text-center py-1 border border-zinc-200 rounded text-[8px] text-zinc-500">+ Add Code</div>
        <div className="flex-1 text-center py-1 bg-zinc-900 text-white rounded text-[8px]">Apply</div>
      </div>
    </div>
  );
}
