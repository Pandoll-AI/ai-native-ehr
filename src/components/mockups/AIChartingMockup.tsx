"use client";

export default function AIChartingMockup() {
  const barHeights = [3, 8, 5, 12, 7, 15, 9, 6, 11, 4, 13, 8, 10, 5, 7, 14, 6, 9, 11, 3];

  return (
    <div aria-hidden="true" className="w-[220px] h-[380px] bg-white rounded-[2px] border border-zinc-200 shadow-sm overflow-hidden flex flex-col text-[10px] text-zinc-800">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[8px] text-zinc-400">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-2 border-b border-zinc-100">
        <div className="text-[11px] font-semibold">AI Charting</div>
        <div className="text-[8px] text-zinc-400">Patient: Kim, Minjun</div>
      </div>

      {/* Waveform / Recording — CSS animation only */}
      <div className="px-4 py-3 bg-blue-50/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-[8px] text-red-500 font-medium">Recording...</span>
        </div>
        <div className="flex items-end gap-[2px] h-6">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="w-[6px] bg-blue-400 rounded-sm animate-[waveform_1.2s_ease-in-out_infinite_alternate]"
              style={{
                height: h,
                animationDelay: `${i * 60}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* SOAP Note */}
      <div className="flex-1 px-4 py-3 space-y-2 overflow-hidden">
        <div>
          <div className="text-[9px] font-semibold text-blue-600 mb-0.5">S — Subjective</div>
          <div className="text-[8px] text-zinc-500 leading-relaxed">
            Pt reports persistent headache x 3 days, rated 6/10, frontal...
          </div>
        </div>
        <div>
          <div className="text-[9px] font-semibold text-blue-600 mb-0.5">O — Objective</div>
          <div className="text-[8px] text-zinc-500 leading-relaxed">
            BP 128/82, HR 76, Temp 37.1C, neurological exam normal...
          </div>
        </div>
        <div>
          <div className="text-[9px] font-semibold text-blue-600 mb-0.5">A — Assessment</div>
          <div className="text-[8px] text-zinc-500">Tension-type headache, r/o migraine</div>
        </div>
        <div>
          <div className="text-[9px] font-semibold text-blue-600 mb-0.5">P — Plan</div>
          <div className="text-[8px] text-zinc-500">Acetaminophen 500mg TID, f/u 1 wk</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 py-2 border-t border-zinc-100 flex justify-between items-center">
        <span className="text-[8px] text-blue-600 font-medium">AI Generated</span>
        <div className="px-2 py-0.5 bg-zinc-900 text-white text-[8px] rounded">Approve</div>
      </div>
    </div>
  );
}
