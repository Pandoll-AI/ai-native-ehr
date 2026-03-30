import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const OUT_DIR = join(import.meta.dirname, '..', 'public', 'mockups');
mkdirSync(OUT_DIR, { recursive: true });

const mockups = [
  {
    name: 'ai-charting',
    html: `
      <div style="width:375px;height:812px;background:#fff;font-family:'Inter',system-ui,sans-serif;display:flex;flex-direction:column;overflow:hidden;">
        <div style="padding:12px 20px 8px;display:flex;justify-content:space-between;font-size:12px;color:#999;">
          <span>9:41</span><div style="display:flex;gap:4px;"><span>●●●</span></div>
        </div>
        <div style="padding:12px 20px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:17px;font-weight:600;color:#1c1c1c;">AI Charting</div>
          <div style="font-size:12px;color:#999;margin-top:2px;">Patient: Kim, Minjun</div>
        </div>
        <div style="padding:16px 20px;background:#f0f7f6;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
            <div style="width:8px;height:8px;border-radius:50%;background:#ef4444;"></div>
            <span style="font-size:11px;color:#ef4444;font-weight:500;">Recording...</span>
          </div>
          <div style="display:flex;align-items:end;gap:2px;height:24px;">
            ${Array.from({length:24}, (_,i) => `<div style="width:8px;background:#3d7068;border-radius:1px;height:${4+Math.sin(i*0.8)*10+Math.random()*8}px;opacity:0.7;"></div>`).join('')}
          </div>
        </div>
        <div style="flex:1;padding:20px;display:flex;flex-direction:column;gap:16px;overflow:hidden;">
          <div>
            <div style="font-size:12px;font-weight:600;color:#3d7068;margin-bottom:4px;">S — Subjective</div>
            <div style="font-size:13px;color:#666;line-height:1.5;">Patient reports persistent frontal headache × 3 days, rated 6/10. Onset gradual, worsened with stress. No visual changes, no nausea. OTC ibuprofen provides partial relief.</div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:600;color:#3d7068;margin-bottom:4px;">O — Objective</div>
            <div style="font-size:13px;color:#666;line-height:1.5;">VS: BP 128/82, HR 76, Temp 37.1°C. Alert, oriented ×3. HEENT: No papilledema. Neuro: CN II-XII intact, DTRs 2+ symmetric.</div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:600;color:#3d7068;margin-bottom:4px;">A — Assessment</div>
            <div style="font-size:13px;color:#666;line-height:1.5;">1. Tension-type headache (G44.2)<br>2. R/O migraine without aura</div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:600;color:#3d7068;margin-bottom:4px;">P — Plan</div>
            <div style="font-size:13px;color:#666;line-height:1.5;">1. Acetaminophen 500mg PO TID × 5d<br>2. Stress management counseling<br>3. F/U 1 week, sooner if worsening</div>
          </div>
        </div>
        <div style="padding:16px 20px;border-top:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:4px;">
            <span style="font-size:11px;color:#3d7068;font-weight:500;">✦ AI Generated</span>
          </div>
          <div style="padding:8px 24px;background:#1c1c1c;color:#fff;font-size:13px;font-weight:500;">Approve</div>
        </div>
      </div>`
  },
  {
    name: 'smart-orders',
    html: `
      <div style="width:375px;height:812px;background:#fff;font-family:'Inter',system-ui,sans-serif;display:flex;flex-direction:column;overflow:hidden;">
        <div style="padding:12px 20px 8px;display:flex;justify-content:space-between;font-size:12px;color:#999;"><span>9:41</span><span>●●●</span></div>
        <div style="padding:12px 20px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:17px;font-weight:600;">Smart Orders</div>
          <div style="font-size:12px;color:#999;margin-top:2px;">Patient: Lee, Soojin</div>
        </div>
        <div style="padding:16px 20px;background:#fafaf8;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:11px;color:#999;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;">Natural Language Input</div>
          <div style="background:#fff;border:1px solid #e5e4de;padding:14px;font-size:14px;color:#555;font-style:italic;">"Tylenol 500mg three times a day for 5 days"</div>
        </div>
        <div style="flex:1;padding:20px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#3d7068;font-weight:500;">
            <span>✦</span> AI Structured Order
          </div>
          <div style="background:#fafaf8;padding:20px;border:1px solid #e5e4de;display:flex;flex-direction:column;gap:14px;">
            ${[['Drug','Acetaminophen'],['Dose','500 mg'],['Route','PO (Oral)'],['Frequency','TID (3×/day)'],['Duration','5 days'],['Quantity','15 tablets']].map(([k,v])=>`<div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#999;">${k}</span><span style="font-weight:500;color:#1c1c1c;">${v}</span></div>`).join('')}
          </div>
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#22c55e;">
            <span>✓</span> No drug interactions detected
          </div>
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#22c55e;">
            <span>✓</span> Dosage within safe range
          </div>
        </div>
        <div style="padding:16px 20px;border-top:1px solid #f0f0f0;display:flex;gap:12px;">
          <div style="flex:1;text-align:center;padding:12px;border:1px solid #e5e4de;font-size:13px;color:#999;">Edit</div>
          <div style="flex:1;text-align:center;padding:12px;background:#1c1c1c;color:#fff;font-size:13px;font-weight:500;">Confirm</div>
        </div>
      </div>`
  },
  {
    name: 'diagnosis-coding',
    html: `
      <div style="width:375px;height:812px;background:#fff;font-family:'Inter',system-ui,sans-serif;display:flex;flex-direction:column;overflow:hidden;">
        <div style="padding:12px 20px 8px;display:flex;justify-content:space-between;font-size:12px;color:#999;"><span>9:41</span><span>●●●</span></div>
        <div style="padding:12px 20px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:17px;font-weight:600;">AI Diagnosis Coding</div>
          <div style="font-size:12px;color:#999;margin-top:2px;">Auto-detected from clinical notes</div>
        </div>
        <div style="flex:1;padding:20px;display:flex;flex-direction:column;gap:12px;">
          <div style="background:#f0f7f6;border:1px solid #d0e5e1;padding:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:11px;font-weight:600;color:#3d7068;text-transform:uppercase;letter-spacing:0.5px;">Primary</span>
              <span style="font-size:11px;font-weight:600;color:#3d7068;font-family:monospace;">98%</span>
            </div>
            <div style="font-size:16px;font-weight:600;color:#1c1c1c;">G44.2</div>
            <div style="font-size:13px;color:#666;margin-top:2px;">Tension-type headache</div>
            <div style="height:4px;background:#d0e5e1;margin-top:8px;"><div style="height:100%;width:98%;background:#3d7068;"></div></div>
          </div>
          <div style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.5px;margin-top:4px;">Suggestions</div>
          ${[['G43.909','Migraine, unspecified','72'],['R51.9','Headache, unspecified','45'],['R51.0','Headache with orthostatic component','30'],['G43.001','Migraine w/o aura, intractable','18']].map(([code,name,pct])=>`
          <div style="border:1px solid #e5e4de;padding:14px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
              <span style="font-size:14px;font-weight:600;color:#1c1c1c;">${code}</span>
              <span style="font-size:11px;color:#999;font-family:monospace;">${pct}%</span>
            </div>
            <div style="font-size:12px;color:#666;">${name}</div>
            <div style="height:3px;background:#f0f0f0;margin-top:6px;"><div style="height:100%;width:${pct}%;background:#ccc;"></div></div>
          </div>`).join('')}
        </div>
        <div style="padding:16px 20px;border-top:1px solid #f0f0f0;display:flex;gap:12px;">
          <div style="flex:1;text-align:center;padding:12px;border:1px solid #e5e4de;font-size:13px;color:#999;">+ Add Code</div>
          <div style="flex:1;text-align:center;padding:12px;background:#1c1c1c;color:#fff;font-size:13px;">Apply</div>
        </div>
      </div>`
  },
  {
    name: 'patient-summary',
    html: `
      <div style="width:375px;height:812px;background:#fff;font-family:'Inter',system-ui,sans-serif;display:flex;flex-direction:column;overflow:hidden;">
        <div style="padding:12px 20px 8px;display:flex;justify-content:space-between;font-size:12px;color:#999;"><span>9:41</span><span>●●●</span></div>
        <div style="padding:12px 20px;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:17px;font-weight:600;">Patient Summary</div>
          <div style="font-size:12px;color:#999;margin-top:2px;">AI-Generated Overview</div>
        </div>
        <div style="padding:14px 20px;background:#fafaf8;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;background:#f0f7f6;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#3d7068;">KM</div>
          <div><div style="font-size:14px;font-weight:600;">Kim, Minjun</div><div style="font-size:12px;color:#999;">M, 45y · ID: 2024-0847</div></div>
        </div>
        <div style="flex:1;padding:20px;display:flex;flex-direction:column;gap:16px;overflow:hidden;">
          <div>
            <div style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Active Conditions</div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;">
              <span style="padding:4px 8px;background:#fef2f2;color:#dc2626;font-size:11px;">HTN Stage 2</span>
              <span style="padding:4px 8px;background:#fffbeb;color:#d97706;font-size:11px;">T2DM</span>
              <span style="padding:4px 8px;background:#f0f7f6;color:#3d7068;font-size:11px;">Dyslipidemia</span>
            </div>
          </div>
          <div>
            <div style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Medications (4)</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${[['Amlodipine 5mg','QD'],['Metformin 500mg','BID'],['Atorvastatin 20mg','QD'],['Aspirin 100mg','QD']].map(([d,f])=>`<div style="display:flex;justify-content:space-between;font-size:13px;"><span style="color:#1c1c1c;">${d}</span><span style="color:#999;font-size:12px;">${f}</span></div>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Recent Labs (Mar 15)</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
              ${[['HbA1c','7.2%','#d97706'],['LDL','98 mg/dL','#22c55e'],['Cr','0.9 mg/dL','#1c1c1c'],['BP (avg)','142/88','#dc2626']].map(([k,v,c])=>`<div style="background:#fafaf8;padding:8px 10px;"><div style="font-size:11px;color:#999;">${k}</div><div style="font-size:14px;font-weight:500;color:${c};margin-top:2px;">${v}</div></div>`).join('')}
            </div>
          </div>
          <div style="background:#f0f7f6;border:1px solid #d0e5e1;padding:14px;">
            <div style="font-size:11px;font-weight:600;color:#3d7068;margin-bottom:4px;">✦ AI Summary</div>
            <div style="font-size:12px;color:#666;line-height:1.6;">45M with poorly controlled HTN and borderline DM control. Consider uptitrating antihypertensive. HbA1c trending up from 6.8% → 7.2%. LDL at target on statin therapy.</div>
          </div>
        </div>
      </div>`
  }
];

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  for (const mockup of mockups) {
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });

    const fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></head><body style="margin:0;padding:0;">${mockup.html}</body></html>`;

    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });

    const outPath = join(OUT_DIR, `${mockup.name}.png`);
    await page.screenshot({ path: outPath, type: 'png' });
    console.log(`OK: ${mockup.name}.png`);

    await page.close();
  }

  await browser.close();
  console.log(`\nDone! ${mockups.length} mockups saved to ${OUT_DIR}`);
}

main().catch(console.error);
