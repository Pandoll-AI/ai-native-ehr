"use client";

export default function SmartOrderMockup() {
  return (
    <div className="w-[220px] h-[380px] bg-white rounded-[24px] border border-zinc-200 shadow-sm overflow-hidden flex flex-col text-[10px] text-zinc-800">
      <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[8px] text-zinc-400">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
        </div>
      </div>

      <div className="px-4 py-2 border-b border-zinc-100">
        <div className="text-[11px] font-semibold">Smart Orders</div>
        <div className="text-[8px] text-zinc-400">Patient: Lee, Soojin</div>
      </div>

      {/* Natural Language Input */}
      <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100">
        <div className="text-[8px] text-zinc-400 mb-1">Natural Language Input</div>
        <div className="bg-white border border-zinc-200 rounded-lg px-3 py-2 text-[9px]">
          <span className="text-zinc-600">&quot;Tylenol 500mg three times a day for 5 days&quot;</span>
        </div>
      </div>

      {/* Structured Order */}
      <div className="flex-1 px-4 py-3 space-y-3">
        <div className="text-[8px] text-blue-600 font-medium flex items-center gap-1">
          <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12" /></svg>
          AI Structured Order
        </div>

        <div className="bg-zinc-50 rounded-lg p-3 space-y-2 border border-zinc-100">
          <div className="flex justify-between">
            <span className="text-zinc-400">Drug</span>
            <span className="font-medium">Acetaminophen</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Dose</span>
            <span className="font-medium">500 mg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Route</span>
            <span className="font-medium">PO (Oral)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Frequency</span>
            <span className="font-medium">TID (3×/day)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Duration</span>
            <span className="font-medium">5 days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Qty</span>
            <span className="font-medium">15 tablets</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[8px] text-green-600">
          <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          No interactions detected
        </div>
      </div>

      <div className="px-4 py-2 border-t border-zinc-100 flex gap-2">
        <div className="flex-1 text-center py-1 border border-zinc-200 rounded text-[8px] text-zinc-500">Edit</div>
        <div className="flex-1 text-center py-1 bg-zinc-900 text-white rounded text-[8px]">Confirm</div>
      </div>
    </div>
  );
}
