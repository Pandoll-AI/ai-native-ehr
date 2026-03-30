"use client";

export default function PatientSummaryMockup() {
  return (
    <div aria-hidden="true" className="w-[220px] h-[380px] bg-white rounded-[2px] border border-zinc-200 shadow-sm overflow-hidden flex flex-col text-[10px] text-zinc-800">
      <div className="flex items-center justify-between px-4 pt-2 pb-1 text-[8px] text-zinc-400">
        <span>9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
          <div className="w-3 h-1.5 bg-zinc-300 rounded-sm" />
        </div>
      </div>

      <div className="px-4 py-2 border-b border-zinc-100">
        <div className="text-[11px] font-semibold">Patient Summary</div>
        <div className="text-[8px] text-zinc-400">AI-Generated Overview</div>
      </div>

      {/* Patient Info */}
      <div className="px-4 py-2 bg-zinc-50 border-b border-zinc-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-semibold text-blue-600">
          KM
        </div>
        <div>
          <div className="font-medium text-[10px]">Kim, Minjun</div>
          <div className="text-[8px] text-zinc-400">M, 45y · ID: 2024-0847</div>
        </div>
      </div>

      <div className="flex-1 px-4 py-3 space-y-2.5 overflow-hidden">
        {/* Key Conditions */}
        <div>
          <div className="text-[8px] text-zinc-400 font-medium mb-1">Active Conditions</div>
          <div className="flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 bg-red-50 text-red-600 rounded text-[7px]">HTN Stage 2</span>
            <span className="px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded text-[7px]">T2DM</span>
            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[7px]">Dyslipidemia</span>
          </div>
        </div>

        {/* Current Medications */}
        <div>
          <div className="text-[8px] text-zinc-400 font-medium mb-1">Medications (4)</div>
          <div className="space-y-1 text-[8px]">
            <div className="flex justify-between"><span>Amlodipine 5mg</span><span className="text-zinc-400">QD</span></div>
            <div className="flex justify-between"><span>Metformin 500mg</span><span className="text-zinc-400">BID</span></div>
            <div className="flex justify-between"><span>Atorvastatin 20mg</span><span className="text-zinc-400">QD</span></div>
            <div className="flex justify-between"><span>Aspirin 100mg</span><span className="text-zinc-400">QD</span></div>
          </div>
        </div>

        {/* Recent Labs */}
        <div>
          <div className="text-[8px] text-zinc-400 font-medium mb-1">Recent Labs (Mar 15)</div>
          <div className="grid grid-cols-2 gap-1 text-[8px]">
            <div className="bg-zinc-50 rounded px-1.5 py-1">
              <div className="text-zinc-400">HbA1c</div>
              <div className="font-medium text-amber-600">7.2%</div>
            </div>
            <div className="bg-zinc-50 rounded px-1.5 py-1">
              <div className="text-zinc-400">LDL</div>
              <div className="font-medium text-green-600">98 mg/dL</div>
            </div>
            <div className="bg-zinc-50 rounded px-1.5 py-1">
              <div className="text-zinc-400">Cr</div>
              <div className="font-medium">0.9 mg/dL</div>
            </div>
            <div className="bg-zinc-50 rounded px-1.5 py-1">
              <div className="text-zinc-400">BP (avg)</div>
              <div className="font-medium text-red-500">142/88</div>
            </div>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-[2px] p-2">
          <div className="text-[8px] text-blue-600 font-medium mb-0.5">AI Summary</div>
          <div className="text-[7px] text-zinc-500 leading-relaxed">
            45M with poorly controlled HTN and borderline DM control. Consider uptitrating antihypertensive. HbA1c trending up from 6.8%.
          </div>
        </div>
      </div>
    </div>
  );
}
