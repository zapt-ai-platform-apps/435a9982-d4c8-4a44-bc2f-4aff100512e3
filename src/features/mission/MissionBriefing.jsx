import React from 'react';

export default function MissionBriefing() {
  console.log("MissionBriefing component loaded");
  return (
    <section className="mb-8 p-4 border border-light rounded">
      <h2 className="text-2xl font-bold font-tactical mb-2">Mission Briefing</h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Report to the safehouse and gather intel.</li>
        <li>Review the latest satellite imagery and surveillance data.</li>
        <li>Identify the target and assess environmental conditions.</li>
        <li>Prepare your gear and confirm extraction routes.</li>
      </ol>
      <p className="mt-4">
        Your objective is critical. Every decision counts. Stay undetected and trust your instincts.
      </p>
    </section>
  );
}