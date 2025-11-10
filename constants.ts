import type { HandbookChapter, HandbookData, NavSection } from './types';

export interface AppendixForm {
  key: string;
  title: string;
}

export interface AppendixSection {
  title:string;
  purpose: string;
  chapterLink: string;
  forms: AppendixForm[];
}

export const APPENDIX_STRUCTURE: AppendixSection[] = [
  {
    title: "1. Screening & First Contact (Ch. 3)",
    purpose: "Capture presenting need, risk, and next step at the very first touch.",
    chapterLink: "ch3",
    forms: [
        { key: "formScreeningBrief", title: "Screening Form (Brief SUD Screen)" },
        { key: "formCssrs", title: "C-SSRS or approved suicide/risk tool" },
        { key: "formWarmHandoff", title: "Warm-Handoff Script" },
        { key: "formCrisisCard", title: "Community Crisis Numbers Card / Local Resources Card" },
        { key: "formScreeningNote", title: "Screening Note (EHR)" },
        { key: "formEligibilityCheck", title: "Referral/Intake Eligibility Precheck (if used)" },
    ],
  },
  {
    title: "2. Intake & Admission (Ch. 4)",
    purpose: "Build the legal/financial/privacy container for services.",
    chapterLink: "ch4",
    forms: [
        { key: "formIntakeChecklist", title: "Intake Checklist (Day 1)" },
        { key: "formClientRights", title: "Client Rights (plain-language)" },
        { key: "formPrivacyNotice", title: "Privacy/HIPAA + 42 CFR Part 2 Notice" },
        { key: "formRoi", title: "Release of Information (ROI)" },
        { key: "formFinancialAck", title: "Financial Responsibility / Fee / Sliding-Scale Acknowledgment" },
        { key: "formPayerVerification", title: "Payer/Medicaid Eligibility Verification Sheet" },
        { key: "formDemographics", title: "Demographic & Accessibility/Languages Form" },
        { key: "formAppointmentRecord", title: "Orientation Appointment Record / Next-Session Ticket" },
        { key: "formTelehealthConsent", title: "Telehealth Consent" },
    ],
  },
   {
    title: "3. Orientation (Ch. 5)",
    purpose: "Prove the person was welcomed, oriented, and had a voice.",
    chapterLink: "ch5",
    forms: [
        { key: "formOrientationChecklist", title: "Program Orientation Checklist" },
        { key: "formHandbookAck", title: "Client/Handbook Acknowledgment Receipt" },
        { key: "formSafetyBriefing", title: "Safety/Emergency & After-Hours Briefing Note" },
        { key: "formGrievanceAck", title: "Grievance/Complaint Process Acknowledgment" },
        { key: "formHouseRules", title: "House Rules / Attendance Policy (if residential/PHP/IOP)" },
    ],
  },
  {
    title: "4. Assessment & Diagnostics (Ch. 6)",
    purpose: "Document the story, needs, strengths, and ASAM LOC.",
    chapterLink: "ch6",
    forms: [
        { key: "formBps", title: "Biopsychosocial (BPS) Assessment Form" },
        { key: "formAsamWorksheet", title: "ASAM Worksheet w/ Prompts" },
        { key: "formCoOccurringScreen", title: "Co-Occurring/MH Screens (PHQ-9, GAD-7, etc.)" },
        { key: "formRiskAddendum", title: "Risk/Safety Addendum" },
        { key: "formAssessmentToPlan", title: "Assessment-to-Plan Appointment/Tasking Note" },
    ],
  },
  {
    title: "5. Treatment Planning & Reviews (Ch. 7)",
    purpose: "Convert needs → goals → objectives → services.",
    chapterLink: "ch7",
    forms: [
        { key: "formTxPlan", title: "Treatment/Individual Service Plan (Tx Plan)" },
        { key: "formPlanReview", title: "Plan Review / Plan Update Template" },
        { key: "formMedNecessity", title: "Medical Necessity Statement" },
        { key: "formSignaturePage", title: "Signature Page" },
    ],
  },
    {
    title: "6. Counseling / Group / Family Service Notes (Ch. 8)",
    purpose: "Daily/encounter proof that we walked the plan.",
    chapterLink: "ch8",
    forms: [
      { key: "formIndNote", title: "Individual Counseling Note (SOAP / DA(R)P)" },
      { key: "formGroupRoster", title: "Group Roster (attendance + facilitator)" },
      { key: "formGroupNote", title: "Group Note" },
      { key: "formFamilyNote", title: "Family/Collateral Session Note" },
      { key: "formGroupOutline", title: "Group/Curriculum Outline" },
    ],
  },
  {
    title: "7. Case Management & Peer Services (Ch. 9)",
    purpose: "Prove closed-loop referrals and barrier-busting.",
    chapterLink: "ch9",
    forms: [
      // FIX: Added missing form to align with ALL_FORMS_HTML and form count.
      { key: "formPeerConsent", title: "Consent for Peer Recovery Services" },
      { key: "formCmLog", title: "Case Management Contact Log" },
      { key: "formReferralTracker", title: "Referral Tracker (closed-loop)" },
      { key: "formPeerNote", title: "Peer Support Contact/Coaching Note" },
      { key: "formRoiVerification", title: "Current ROI List / ROI Verification" },
      { key: "formCaseConference", title: "Staffing/Case Conference Note" },
    ],
  },
  {
    title: "8. Crisis, Incidents, & Safety (Ch. 10)",
    purpose: "Show de-escalation, reporting, and safety updates within 24h.",
    chapterLink: "ch10",
    forms: [
      { key: "formCrisisNote", title: "Crisis Intervention Note" },
      { key: "formIncidentReport", title: "Incident Report" },
      { key: "formSafetyPlan", title: "Safety Plan / Safety Plan Revision" },
      { key: "formAfterAction", title: "After-Action / Debrief Form" },
      { key: "formNotificationLog", title: "Notification Log / Chain-of-Command" },
    ],
  },
  {
    title: "9. Client Education / Psychoeducation (Ch. 11)",
    purpose: "Document learning tied to the plan.",
    chapterLink: "ch11",
    forms: [
      { key: "formEduOutline", title: "Education / Module Session Outline" },
      { key: "formEduRoster", title: "Education Attendance Roster" },
      { key: "formKnowledgeCheck", title: "Knowledge/Skills Checks (pre/post)" },
      { key: "formPlanLinkage", title: "Plan Linkage/Objective ID Reference" },
    ],
  },
    {
    title: "10. Referral, Transfer, & Warm Handoffs (Ch. 12)",
    purpose: "Make the next step safe, confirmed, and documented.",
    chapterLink: "ch12",
    forms: [
      { key: "formReferral", title: "Referral Form (internal or external)" },
      { key: "formRoiReceiving", title: "ROI for Receiving Provider/Program" },
      { key: "formWarmHandoffLog", title: "Warm-Handoff Script / Call Log" },
      { key: "formApptConfirmation", title: "Appointment Confirmation" },
      { key: "formFollowUpNote", title: "Follow-Up / Closure Note" },
      { key: "formPlanUpdate", title: "Plan Update (if LOC changed)" },
    ],
  },
  {
    title: "11. Records, EHR Placement & Addenda (Ch. 13)",
    purpose: "Keep charts audit-ready and time-bound.",
    chapterLink: "ch13",
    forms: [
      { key: "formDocCheatSheet", title: "Documentation Cheat Sheet / EHR Location Map" },
      { key: "formLateEntry", title: "Late Entry / Addendum Form" },
      { key: "formRecordsRequestLog", title: "Records Request / Release Log" },
      { key: "formScanningChecklist", title: "Scanning & Indexing Checklist" },
    ],
  },
  {
    title: "12. Utilization Management & Billing Proof (Ch. 18–19)",
    purpose: "Protect authorizations and clean-claim submission.",
    chapterLink: "ch18",
    forms: [
      { key: "formUmRequest", title: "UM Request Cover Sheet / Initial Auth Request" },
      { key: "formConcurrentReview", title: "Concurrent/Continued Stay Review Summary" },
      { key: "formAuthTracker", title: "Authorization/Visit Limit Tracker" },
      { key: "formPreBillChecklist", title: "Pre-Bill Checklist (unit-level)" },
      { key: "formModifierGuide", title: "Quick Code/Modifier Guide (incl. telehealth)" },
      { key: "formDenialLog", title: "Rejection/Denial Log" },
      { key: "formCap", title: "Corrective Action / CAP Form" },
    ],
  },
  {
    title: "13. QA, Audit, & Performance (Ch. 20–22, 27–30)",
    purpose: "Prove we checked our own work.",
    chapterLink: "ch20",
    forms: [
      { key: "formAuditTool", title: "Audit Tool & Scorecard" },
      { key: "formEvidenceMap", title: "Evidence Index Map" },
      { key: "formChartPacketChecklist", title: "Chart Packet Checklist (A–G structure)" },
      { key: "formHuddleNotes", title: "KPI/Huddle Notes Template" },
      { key: "formPiForm", title: "PI/5-Whys/Countermeasure Form" },
      { key: "formChangeLog", title: "Change Log / Release Notes" },
    ],
  },
  {
    title: "14. Discharge, Transition, & Aftercare",
    purpose: "Close the episode cleanly, prove referrals, protect the client.",
    chapterLink: "ch13",
    forms: [
      { key: "formDischargeSummary", title: "Discharge/Transition Summary" },
      { key: "formAftercarePlan", title: "Continuing Care / Aftercare Plan" },
      { key: "formReferralConfirmation", title: "Referral/Transfer Confirmation" },
      { key: "formCompletionLetter", title: "Program Completion / Graduation Certificate" },
      { key: "formAdminDischarge", title: "Administrative/Lost-to-Contact Discharge Note" },
      { key: "formBillingClosure", title: "Final Service/Billing Closure Checklist" },
    ],
  },
];

export const HANDBOOK_DATA: HandbookData = {
    ch01: {
        title: "Chapter 0.1: Purpose, Promise, and Stance",
        sub: "Our why, our how, and our non-negotiables.",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This chapter is our "why." It is the first thing you will read, and it is the foundation for everything that follows. It sets our expectations for every person on this team—Peer, CDCA, Counselor, Case Manager, Supervisor, and Biller.</p>
            <p>It explains our core promise to the people we serve, defines the non-negotiable language we use, and introduces the <strong>Golden Thread</strong>—the single, unifying concept that connects our clinical work (12CF/TAP21) to our documentation and billing.</p>
            
            <h3 class="section-title">Our Promise: The Stance We Take</h3>
            <p>This is the code we live by. It is the <em>how</em> behind our <em>why</em>.</p>
            <ul>
                <li><strong>We are Person-Centered:</strong> We begin with what <em>matters to the person</em>, not just what's the <em>matter with them</em>. Their goals, in their language, are the starting point for all care.</li>
                <li><strong>We are Trauma-Informed:</strong> We assume everyone we serve (and everyone we work with) has a story we don't know. We build our entire system on a foundation of safety, choice, collaboration, trustworthiness, and empowerment.</li>
                <li><strong>We are Culturally Responsive:</strong> We practice cultural humility. We do not assume; we ask. We adapt our care to the person’s culture, identity, language, and context.</li>
            </ul>

            <h3 class="section-title">The Language of Our Craft: How We Write, How We Speak</h3>
            <p>Our language is our first, most consistent intervention. It must be a tool of respect, not a weapon of stigma.</p>
            <ul>
                <li><strong>People-First:</strong> We use "a person who uses substances" or "a person experiencing homelessness." We <em>never</em> use labels like "addict," "junkie," or "non-compliant." We describe people, not diagnoses.</li>
                <li><strong>Strengths-Based:</strong> We are detectives for strengths. We document a person's abilities, supports, and past wins. We don't write "resistant"; we write "ambivalent and exploring change."</li>
                <li><strong>Clear & Plain:</strong> We use everyday words. We explain clinical terms simply. We ensure our notes and plans could be understood by the person who reads them.</li>
                <li><strong>Minimum Necessary:</strong> We are guardians of the person's story. We share only the <em>minimum necessary</em> information required for a specific task (HIPAA / 42 CFR Part 2). This is a core boundary.</li>
                <li><strong>Dignity in Risk:</strong> We acknowledge a person's right to autonomy and choice, even when we disagree. Our job is not to <em>control</em> them but to <em>collaborate</em> with them on a plan for safety.</li>
            </ul>

            <h3 class="section-title">The Golden Thread: Our Unifying Discipline</h3>
            <p>This is the central discipline of our entire operation. It is the one story that every member of our team must be able to tell, from the first call to the final claim.</p>
            <p><strong>The Golden Thread is the story of how our Assessment &rarr; Plan &rarr; Note &rarr; Claim all connect.</strong></p>
            <ol>
                <li><strong>Assessment (The "Why"):</strong> The person's story creates an <em>Assessed Need</em>.</li>
                <li><strong>Plan (The "What"):</strong> We collaborate with the person to turn that <em>Need</em> into a <em>Plan Objective</em> in their words.</li>
                <li><strong>Note (The "How"):</strong> Our Progress Note documents the <em>Intervention</em> we used to address that <em>Objective</em>.</li>
                <li><strong>Claim (The "Proof"):</strong> Our <em>Claim</em> is the final, honest proof that a service was delivered that matched the Note, the Plan, and the Need.</li>
            </ol>
            <p>If any link in this chain is broken, we fail our quality standard, we risk a denial, and we lose the integrity of the person's story.</p>
            
            <h3 class="section-title">What Success Looks Like (For You)</h3>
            <ul>
                <li>You know which chapters in this handbook you "live in" for your role.</li>
                <li>You can show a supervisor or a surveyor where the "proof" of your work lives.</li>
                <li>Your documentation reads like the person's story, not just a set of checkboxes.</li>
                <li>Your work follows the Golden Thread so clearly that your claims pass the first time, every time.</li>
                <li>When you find a better, faster, or safer way, you submit an improvement (Part VIII) and help us build Version 2.0.</li>
            </ul>
            <div class="callout"><p>This is not just a handbook. It is the playbook for our craft.</p></div>
        `
    },
    ch02: {
        title: "Chapter 0.2: Your Map, Your Compass, Your Craft",
        sub: "How to use this handbook as a dynamic, interactive tool for your daily craft.",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This chapter is your <strong>navigator's guide</strong>. It teaches you how to use this handbook not as a static book, but as a dynamic, interactive tool for your daily craft.</p>
            <p>You will learn our "road signs" (the icons), where to find our tools (the templates), who to contact for help (the escalation path), and how to practice our single most important discipline: <strong>The Golden Thread</strong>.</p>
            <p><em>(12CF focus: Reports & Records; TAP21 focus: Documentation, Professional/Ethical Responsibility.)</em></p>
            
            <h3 class="section-title">The Icon Key (Our Road Signs)</h3>
            <ul>
                <li><strong>⚠ Safety:</strong> This is a hard stop. It signals an immediate risk or a critical-incident step.
                    <br/><em>Example: "If active risk is present &rarr; follow Crisis Protocol (Ch. 10) and file Incident Report within 24h."</em></li>
                <li><strong>✅ Quality Gate:</strong> This is a "must-have" for your work to count. It is a non-negotiable standard for quality and billing.
                    <br/><em>Example: "Note must be signed &le;24–48h; must link to a plan objective; must have correct code/time."</em></li>
                <li><strong>🧭 Compliance:</strong> This is a legal or accreditation rule (HIPAA, 42 CFR Part 2, Medicaid, CARF). It protects the person and our organization.
                    <br/><em>Example: "Release only the minimum necessary; ensure the ROI (Ch. 15) has all required elements."</em></li>
                <li><strong>🗂 Template:</strong> This is the official, pre-built tool for the job. Do not build your own.
                    <br/><em>Example: "Use the 🗂 Tx Plan (v1.0) or ⚠ Risk/Safety Addendum (v1.2)."</em></li>
                <li><strong>📍 Evidence Location:</strong> This is the "Surveyor's Eye." It tells you exactly where the proof lives in the EHR or file system.
                    <br/><em>Example: "EHR &rarr; Assessments &rarr; 'BPS' note date/signature proves the 7-day timeframe."</em></li>
            </ul>

            <h4 class="font-bold mt-4">How to Use the Icons (Your 90-Second Workflow):</h4>
            <p>Scan any chapter &rarr; Read its Purpose &rarr; Jump to the ✅ Quality Gates &rarr; Open the 🗂 Template &rarr; Check the 📍 Evidence Location to verify you're compliant.</p>

            <h3 class="section-title">The Golden Thread (Our Core Discipline)</h3>
            <p>This is the single most important concept in this handbook. It is the unifying discipline of our entire craft. It is the story that our <strong>Assessment &rarr; Plan &rarr; Note &rarr; Claim</strong> must tell, perfectly and without a single broken link.</p>
            <ul>
                <li>The <strong>Assessment</strong> (Ch. 6) identifies the <em>Need</em>.</li>
                <li>The <strong>Plan</strong> (Ch. 7) turns the <em>Need</em> into a <em>Plan Objective</em>.</li>
                <li>The <strong>Note</strong> (Ch. 8-13) documents the <em>Intervention</em> that addressed that <em>Objective</em>.</li>
                <li>The <strong>Claim</strong> (Ch. 19) is the <em>Proof</em> that a billable service matched the Note, the Plan, and the Need.</li>
            </ul>

            <h4 class="font-bold mt-4">Why It Is Our Core Discipline:</h4>
            <ul>
                <li><strong>For the Person:</strong> It ensures their care is <em>purposeful</em>. They are not just "coming to sessions"; they are actively working on the goals they co-created. It builds trust and <strong>Confidence</strong>.</li>
                <li><strong>For the Team:</strong> It ensures our work is <em>coordinated</em>. A Peer, a Counselor, and a Case Manager can all read the same Golden Thread and know the "why" behind the "what."</li>
                <li><strong>For the Payer:</strong> It is the <em>proof of medical necessity</em>. A clean, unbroken thread is the "why" behind our billing. It prevents denials and protects the person's access to care.</li>
            </ul>
            
            <h3 class="section-title">Your Quick Self-Check (Before You Sign Any Note):</h3>
            <ol>
                <li>Can I point to the specific Plan Objective (Ch. 7) this note advances?</li>
                <li>Did I name the Intervention (Ch. 8) I actually delivered?</li>
                <li>Did I record the person's response or progress in plain language?</li>
                <li>Does my Code/Time (Ch. 19) honestly match the service I documented?</li>
                <li>Is the 📍 Evidence Location (the note itself) filed correctly?</li>
            </ol>
            <p>If the answer to all five is "yes," you have honored the Golden Thread.</p>

            <h3 class="section-title">Where Our Tools Live (The "Single Source of Truth")</h3>
            <p>One craft, one set of tools. We do not use old versions or personal copies.</p>
            <ul>
                <li><strong>The "Current-Version" Folder:</strong> This is the <em>only</em> place to get an active template.
                    <br/><em>Path: /Handbook/Current-Version/Templates/</em></li>
                <li><strong>The "Archive" Folder:</strong> This is a read-only library of all past versions.
                    <br/><em>Path: /Handbook/Templates/Archive/ (Files are watermarked "NOT CURRENT - DO NOT USE")</em></li>
                <li><strong>File Naming (Our Standard):</strong>
                    <br/><em>DocumentName_vX.Y_YYYY-MM-DD.ext</em>
                    <br/><em>Example: TxPlan_v1.2_2025-10-31.docx</em></li>
            </ul>
            
            <h3 class="section-title">Who to Ask (Our Escalation Path)</h3>
            <p>Use the smallest, safest step first. Never wait on a ⚠ Safety risk.</p>
            <ol>
                <li><strong>Start with the Handbook:</strong> Re-read the ✅ Quality Gates and Common Pitfalls for the chapter. The answer is usually there.</li>
                <li><strong>Ask Your Supervisor:</strong> This is your primary escalation for clinical, documentation, and workflow questions. (See Ch. 24).</li>
                <li><strong>Use a Specialist (for specific triggers):</strong>
                    <ul>
                        <li>⚠ <strong>Immediate Safety/Risk:</strong> Supervisor / On-call (Ch. 10).</li>
                        <li>🧭 <strong>Privacy/ROI/Part 2:</strong> Compliance/Privacy Officer (Ch. 15).</li>
                        <li>✅ <strong>Auth/UM/Payer Issue:</strong> Utilization Management (Ch. 18).</li>
                        <li>✅ <strong>Coding/Billing/Denial:</strong> QA/Billing (Ch. 19).</li>
                        <li>🗂 <strong>EHR/Tech Issue:</strong> IT/Data.</li>
                    </ul>
                </li>
            </ol>
            <div class="callout"><strong>The Bottom Line:</strong> Use the Icons as your road signs, the Golden Thread as your compass, and your Role Dashboard (Ch. 0.4) as your map. This is how you navigate our craft.</div>
        `
    },
    ch03: {
        title: "Chapter 0.3: The Schematic — Your Maps to Mastery",
        sub: "The blueprints connecting philosophy (0.1) to daily craft (0.2).",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This chapter is the blueprint. It’s the set of schematics that connects our philosophy (Ch. 0.1) to your daily craft (Ch. 0.2).</p>
            <p>If the handbook is our playbook, this chapter holds the two most important maps for a new hire.</p>
            <ul>
                <li><strong>Map A</strong> shows you <em>what to do</em> (our 12 Core Functions).</li>
                <li><strong>Map B</strong> shows you <em>how to master it</em> (our 21 Core Competencies).</li>
            </ul>
            <p>Use these maps to find the right chapter, the right template, the Quality Gate, and the Evidence Location in seconds. If you can follow these maps, you can trace the Golden Thread every single day.</p>
            
            <h3 class="section-title">Map A — 12 Core Functions &rarr; Chapters (The "What We Do" Map)</h3>
            <p>This is your task-level guide. Read the line for the task you're performing. It gives you the "Why," the "Must-Have," the "Proof," and the "Tool."</p>
            <table>
                <thead>
                    <tr>
                        <th>12 Core Function</th>
                        <th>Primary Chapter</th>
                        <th>Why It Exists (The Mission)</th>
                        <th>✅ Quality Gates (Must Be True)</th>
                        <th>📍 Evidence Location (Where Proof Lives)</th>
                        <th>🗂 Go-to Template(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Screening</strong></td>
                        <td>Ch. 3</td>
                        <td>To be a <strong>safe harbor</strong>, not a barrier. To answer "Are we the right place, right now?" with dignity and speed.</td>
                        <td>Safety screen completed; disposition documented; warm handoff if referred.</td>
                        <td>EHR Screening note (date/time/signature); referral log/confirmation.</td>
                        <td>Screening form; Warm-handoff script; Crisis numbers.</td>
                    </tr>
                    <tr>
                        <td><strong>Intake</strong></td>
                        <td>Ch. 4</td>
                        <td>To build the <strong>'container'</strong> for the work. This is where we establish trust, secure legal/clinical boundaries, and create a clean chart for their story.</td>
                        <td>Consents/ROIs complete; eligibility verified; assessment scheduled.</td>
                        <td>Consent packet; eligibility screen; appointment record.</td>
                        <td>Intake checklist; ROI; Privacy/Part 2 notice.</td>
                    </tr>
                    <tr>
                        <td><strong>Orientation</strong></td>
                        <td>Ch. 5</td>
                        <td>To set the <strong>terms of our relationship</strong>. We promise safety and a voice (grievance); we ask for commitment (attendance).</td>
                        <td>Acknowledgment on file; handbook receipt logged.</td>
                        <td>Orientation checklist; signed receipt.</td>
                        <td>Orientation checklist; House rules/attendance sheet.</td>
                    </tr>
                    <tr>
                        <td><strong>Assessment</strong></td>
                        <td>Ch. 6</td>
                        <td>To listen for the <strong>story behind the symptoms</strong>. This is the "why" (the assessed need) that drives the entire plan.</td>
                        <td>BPS done by timeframe; ASAM/LOC stated; safety addendum if indicated.</td>
                        <td>BPS note vs. Intake date; ASAM field; Safety addendum.</td>
                        <td>BPS form; ASAM worksheet; Risk/Safety addendum.</td>
                    </tr>
                    <tr>
                        <td><strong>Treatment Planning</strong></td>
                        <td>Ch. 7</td>
                        <td>To turn the "why" into a "how." We <strong>co-create a map</strong> from their <em>need</em> (in their words) to their <em>goal</em>.</td>
                        <td>Required signatures; review date set; medical necessity statement present.</td>
                        <td>Treatment plan & review; signature fields; UM request link.</td>
                        <td>Tx Plan; Plan Review/Update.</td>
                    </tr>
                    <tr>
                        <td><strong>Counseling</strong> (Ind/Grp/Fam)</td>
                        <td>Ch. 8</td>
                        <td>To <strong>walk with the person</strong> as they do the work. This is the craft of applying our skills to their objectives.</td>
                        <td>Note &le;24–48h; correct code/time; objective progress documented.</td>
                        <td>Session note; group roster; plan objective link.</td>
                        <td>IND/Group/Family note; Group outline.</td>
                    </tr>
                    <tr>
                        <td><strong>Case Management</strong></td>
                        <td>Ch. 9</td>
                        <td>To be the <strong>advocate and barrier-buster</strong>. We clear the path of the logistical, legal, and social hurdles.</td>
                        <td>Coordination documented; ROI current; follow-up within X days.</td>
                        <td>CM log; Referral tracker; ROI list.</td>
                        <td>CM contact log; Referral tracker.</td>
                    </tr>
                    <tr>
                        <td><strong>Crisis Intervention</strong></td>
                        <td>Ch. 10</td>
                        <td>To be the <strong>anchor in the storm</strong>. We de-escalate, stabilize immediate risk, and protect the people and the space.</td>
                        <td>Crisis note &le;24h; incident filed; safety plan updated.</td>
                        <td>Crisis note; Incident report; Safety plan revision.</td>
                        <td>Crisis note; Incident report; After-action review.</td>
                    </tr>
                    <tr>
                        <td><strong>Client Education</strong></td>
                        <td>Ch. 11</td>
                        <td>To <strong>give tools</strong>, not just talk. We build health literacy and practical, real-world skills for a life in recovery.</td>
                        <td>Curriculum mapped to plan; attendance captured.</td>
                        <td>Education session outline; roster; plan link.</td>
                        <td>Handouts; Session outlines; Pre/Post checks.</td>
                    </tr>
                    <tr>
                        <td><strong>Referral</strong></td>
                        <td>Ch. 12</td>
                        <td>To execute a <strong>perfect handoff</strong>. We ensure the next step in their journey is as safe and clear as the first.</td>
                        <td>ROI on file; appointment confirmed; follow-up completed.</td>
                        <td>Referral form; Confirmation; Follow-up note.</td>
                        <td>Referral form; Warm-hand off script; Tracking log.</td>
                    </tr>
                    <tr>
                        <td><strong>Reports & Records</strong></td>
                        <td>Ch. 13</td>
                        <td>To be the <strong>faithful, honest storyteller</strong> of the person's journey. Our record is the <em>proof</em> of our integrity.</td>
                        <td>&ge;95% timeliness; correct placement/naming; no PHI leaks.</td>
                        <td>Timeliness dashboard; Audit checklist; EHR locations.</td>
                        <td>Doc cheat sheet; Audit tool; Late entry addendum.</td>
                    </tr>
                    <tr>
                        <td><strong>Consultation</strong></td>
                        <td>Ch. 14</td>
                        <td>To <strong>practice humility</strong>. We get the best answer for the person, not just <em>our</em> answer.</td>
                        <td>Consult note filed; client informed (as appropriate).</td>
                        <td>Consult note; Case staffing record.</td>
                        <td>Consult note; Staffing form.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>KPIs to Watch (See Ch. 21-22):</strong> Doc Timeliness, Clean-Claim Rate, First-Pass Yield, Denial Rate, No-Show Rate, Incident Timeliness.</p>
            
            <h3 class="section-title">Map B — 21 Onboarding Competencies &rarr; Learn / Do / Show (The "How to Master It" Map)</h3>
            <p>This is your skill-building guide. Use this map with your supervisor to track your journey from "new hire" to "master craftsperson."</p>
            <table>
                <thead>
                    <tr>
                        <th>Competency (Grounded in TAP21)</th>
                        <th>Learn (Read/Watch This)</th>
                        <th>Do (Practice This)</th>
                        <th>Show (Verify This Way)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ethical & Professional Conduct</strong></td><td>Ch. 15 (Rights/Privacy/Boundaries)</td><td>Apply minimum necessary & boundaries in a real case</td><td>Supervisor attestation + passing privacy quiz</td></tr>
                    <tr><td><strong>Confidentiality: HIPAA & 42 CFR Part 2</strong></td><td>Ch. 15</td><td>Complete an ROI correctly; redact PHI in an email scenario</td><td>ROI spot-check + mini-audit pass</td></tr>
                    <tr><td><strong>Cultural Humility & Equity</strong></td><td>0.1 Philosophy; Ch. 5 Orientation</td><td>Document person-centered language in plan/note</td><td>Chart review for strengths-based wording</td></tr>
                    <tr><td><strong>Trauma-Informed, Recovery-Oriented Care</strong></td><td>0.1 Philosophy; Ch. 10 Crisis</td><td>Draft a safety plan that preserves choice & empowerment</td><td>Observed plan + crisis debrief check</td></tr>
                    <tr><td><strong>Clinical Interviewing & Rapport</strong></td><td>Ch. 6 Assessment</td><td>Conduct a BPS segment with reflective listening</td><td>Observed interview + feedback rubric</td></tr>
                    <tr><td><strong>Screening & Risk Identification</strong></td><td>Ch. 3 Screening; Ch. 10 Crisis</td><td>Administer brief SUD + C-SSRS (or program tool)</td><td>Completed tools in chart + correct disposition</td></tr>
                    <tr><td><strong>Biopsychosocial Assessment & Formulation</strong></td><td>Ch. 6</td><td>Draft an assessment summary + ASAM rationale</td><td>Supervisor signs off; timeframe met</td></tr>
                    <tr><td><strong>Level of Care & Medical Necessity (ASAM)</strong></td><td>Ch. 6 & 18 (UM)</td><td>State LOC with supporting dimensions</td><td>LOC appears in assessment and UM request</td></tr>
                    <tr><td><strong>Treatment Planning (SMART, person-centered)</strong></td><td>Ch. 7</td><td>Write one objective & two interventions linked to need</td><td>Plan passes supervisor review + signatures</td></tr>
                    <tr><td><strong>Motivational Interviewing Fundamentals (OARS)</strong></td><td>Ch. 8</td><td>Use OARS in session; capture change talk</td><td>Observed session + note references MI</td></tr>
                    <tr><td><strong>CBT-Informed Skills & Relapse Prevention</strong></td><td>Ch. 8/11</td><td>Deliver a coping-skills exercise; assign homework</td><td>Note links skill to objective; homework reviewed</td></tr>
                    <tr><td><strong>Group Facilitation Basics</strong></td><td>Ch. 8 (Group)</td><td>Run a group using outline & manage crosstalk</td><td>Group roster + group note meet gates</td></tr>
                    <tr><td><strong>Family/Significant-Other Engagement</strong></td><td>Ch. 8 (Family), Ch. 15 (Boundaries)</td><td>Document a family session with consent/ROI checks</td><td>Family note + valid ROI attached</td></tr>
                    <tr><td><strong>Case Management & Resource Navigation</strong></td><td>Ch. 9</td><td>Make a warm referral; log follow-through</td><td>Referral tracker shows appointment & follow-up</td></tr>
                    <tr><td><strong>Crisis De-escalation & Safety Planning</strong></td><td>Ch. 10</td><td>Perform de-escalation steps; update safety plan</td><td>Crisis note &le;24h + safety plan revision filed</td></tr>
                    <tr><td><strong>Client Education & Health Literacy</strong></td><td>Ch. 11</td><td>Teach a module in plain language; capture attendance</td><td>Session outline + roster + plan linkage</td></tr>
                    <tr><td><strong>Interprofessional Collaboration & Consultation</strong></td><td>Ch. 14; Ch. 24 (Supervision)</td><td>Request a consult with a clear clinical question</td><td>Consult note documents advice & action</td></tr>
                    <tr><td><strong>Documentation Mastery (Timeliness, Accuracy)</strong></td><td>Ch. 13 & 19</td><td>Complete 5 notes on time with correct code/time</td><td>Timeliness report &ge;95% + zero coding edits</td></tr>
                    <tr><td><strong>Utilization Management & Authorizations</strong></td><td>Ch. 18</td><td>Prepare an auth/concurrent review packet from the chart</td><td>UM approval + clean cross-referencing</td></tr>
                    <tr><td><strong>Data & Quality Mindset (KPIs, PI loop)</strong></td><td>Ch. 21–22</td><td>Review your KPI with supervisor; propose one fix</td><td>PI note shows action &rarr; re-measure</td></tr>
                    <tr><td><strong>Boundaries, Wellbeing, & Use of Supervision</strong></td><td>0.1 Philosophy; Ch. 24</td><td>Bring one case & one pitfall to supervision with a plan</td><td>Supervision record shows follow-through</td></tr>
                </tbody>
            </table>

            <h3 class="section-title">The Craft in Motion: Three Common Workflows</h3>
            <p>Here is how you use the maps for a 90-second routine.</p>
            <h4>A) New Intake Today</h4>
            <ol>
                <li><strong>Map A:</strong> Find "Intake" &rarr; Open Ch. 4.</li>
                <li><strong>Tools:</strong> Grab 🗂 Intake Checklist.</li>
                <li><strong>Gates:</strong> Check ✅ (Consents complete? Appt scheduled?).</li>
                <li><strong>Evidence:</strong> 📍 File consents; log appointment.</li>
                <li><strong>Map B:</strong> Check off "Screening" and "Intake" competencies with your supervisor.</li>
            </ol>
            <h4>B) Running a Group</h4>
            <ol>
                <li><strong>Map A:</strong> Find "Counseling" &rarr; Open Ch. 8.</li>
                <li><strong>Tools:</strong> Grab 🗂 Group Roster & 🗂 Group Note.</li>
                <li><strong>Gates:</strong> ✅ Note must be &le;24-48h, link to plan objective, and match roster.</li>
                <li><strong>Evidence:</strong> 📍 Signed group note + roster.</li>
                <li><strong>Map B:</strong> Check off "Group Facilitation" and "Documentation Mastery."</li>
            </ol>
            <h4>C) Crisis Occurred</h4>
            <ol>
                <li><strong>Map A:</strong> Find "Crisis Intervention" &rarr; Open Ch. 10.</li>
                <li><strong>Action:</strong> ⚠ Follow de-escalation & incident protocol.</li>
                <li><strong>Tools:</strong> 🗂 Incident Report, 🗂 Safety Plan, 🗂 Crisis Note.</li>
                <li><strong>Gates:</strong> ✅ All forms filed &le;24h; supervisor notified.</li>
                <li><strong>Evidence:</strong> 📍 Note, report, and updated plan are all in EHR.</li>
                <li><strong>Map B:</strong> Check off "Crisis De-escalation" and "Ethical Conduct."</li>
            </ol>

            <h3 class="section-title">The Craft of Efficiency: Good Habits & Common Pitfalls</h3>
            <table>
                <thead><tr><th>Do this...</th><th>...to avoid this pitfall.</th></tr></thead>
                <tbody>
                    <tr><td>Use the 🗂 Template <em>before</em> you start.</td><td>Forgetting a required field and failing a ✅ Quality Gate.</td></tr>
                    <tr><td>Check the ✅ Quality Gates <em>before</em> you finish.</td><td>Submitting a claim that gets denied (e.g., no auth, unsigned note).</td></tr>
                    <tr><td>Think 📍 Evidence Location. Ask: "Could a surveyor find this in 30 seconds?"</td><td>Having compliant work but no "proof," forcing a scramble during an audit.</td></tr>
                    <tr><td>Use your Role Dashboard (Ch. 0.4) weekly in supervision.</td><td>Feeling overwhelmed and not knowing what to focus on first.</td></tr>
                    <tr><td>See a problem? Use the 🗂 Improvement Form (Part VIII).</td><td>Assuming "someone else" will fix a broken process.</td></tr>
                </tbody>
            </table>
            <div class="callout"><strong>The Bottom Line:</strong> This is how we practice our craft. Map A is the <em>what you do</em>. Map B is the <em>how you've mastered it</em>. Both are in service of the <strong>Golden Thread</strong> (Ch. 0.2). This isn't just "how to use a handbook." This is our operational standard. Following these maps is how we ensure every person we serve receives the highest quality of care, from the first call to the final claim. This is not just how we get accredited; this is the craft of our profession.</div>
        `
    },
    ch04: {
        title: "Chapter 0.4: Role Dashboards — Your Guide to the Craft",
        sub: "Your personal map and 60-second routine for mastering your specific position.",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This is your personal map.</p>
            <p>The full handbook is our entire playbook, but this chapter is your <em>specific position</em>. It shows you exactly where to "live" in this book from the moment you start. It is your guide to mastering your craft, built on our three philosophical targets—<strong>Confidence, Boundaries, and Emotional Intelligence (EI)</strong>—and designed to align your daily work with the 12 Core Functions and TAP21 competencies.</p>

            <h3 class="section-title">How to Use Your Dashboard (Your 60-Second Routine)</h3>
            <ol>
                <li>Read "<strong>Your 5 Core Chapters.</strong>" These are your primary tools.</li>
                <li>Follow the <strong>Daily/Weekly/Monthly</strong> rhythms. This is the cadence of your craft.</li>
                <li>Before you finish a task, check the "<strong>Quality Gates You Own.</strong>" This is your standard of proof.</li>
                <li>If a trigger occurs, use the "<strong>Escalation</strong>" path. This is your safety line.</li>
            </ol>
            <p><em>(12CF focus: Consultation & Reports/Records • TAP21 focus: Professional/Ethical Responsibility, Collaboration)</em></p>

            <h3 class="section-title">A) CDCA — Chemical Dependency Counselor Assistant</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the daily practitioner of our clinical craft. Your purpose is to deliver skilled, ethical, and supervised SUD services (Ch. 8, 11) that are driven by the person's plan (Ch. 7). Your second, equally vital, purpose is to write the story of that work—a person-centered note so clear and so tied to the Golden Thread that it passes the pre-bill scrub, every time (Ch. 13, 19).</p>
            <ul>
                <li><strong>Your 5 Core Chapters (Priority Reading):</strong>
                    <ul>
                        <li>Ch. 8 Counseling (IND/Group/Family)</li>
                        <li>Ch. 7 Treatment Planning</li>
                        <li>Ch. 6 Assessment</li>
                        <li>Ch. 13 Reports & Records</li>
                        <li>Ch. 10 Crisis Intervention (know thresholds and after-action)</li>
                    </ul>
                </li>
                <li><strong>Daily / Weekly / Monthly Rhythms:</strong>
                    <ul>
                        <li><strong>Daily:</strong> Run assigned sessions (Ch. 8); complete notes &le;24–48h (Ch. 13); link each note to a plan objective (Ch. 7); flag any safety cues (Ch. 10).</li>
                        <li><strong>Weekly:</strong> Supervision (Ch. 24): bring one note to trace the Golden Thread (Assessment&rarr;Plan&rarr;Note&rarr;Claim); review upcoming plan reviews/authorizations (Ch. 7 & 18).</li>
                        <li><strong>Monthly:</strong> Self-audit 3 charts against ✅ quality gates (Ch. 13); refresh group outlines and education content (Ch. 8 & 11).</li>
                    </ul>
                </li>
                <li><strong>✅ Quality Gates You Own:</strong> Note timeliness (≤24–48h), plan linkage, correct code/time, signature complete.</li>
                <li><strong>📊 Metrics to Watch:</strong> Documentation timeliness &ge;95%; clean-claim rate; group attendance capture.</li>
                <li><strong>⚠ Escalation Triggers (How to Get Help):</strong>
                    <ul>
                        <li><strong>Immediate Risk / Duty-to-Warn:</strong> Page Supervisor; follow Ch. 10.</li>
                        <li><strong>Authorization/LOC Uncertainty:</strong> Consult UM (Ch. 18) or Supervisor (Ch. 24).</li>
                        <li><strong>Documentation Errors You Can’t Fix:</strong> QA/Billing (Ch. 19), log issues.</li>
                    </ul>
                </li>
                <li><strong>Philosophy in Action (Your Daily Practice):</strong>
                    <ul>
                        <li><strong>Confidence:</strong> You build it by celebrating and documenting every small win in your note.</li>
                        <li><strong>Boundaries:</strong> You hold them by practicing only within your scope and using supervision (Ch. 24) as a non-negotiable tool.</li>
                        <li><strong>Emotional Intelligence:</strong> You model it by reflecting ambivalence without judgment and writing with non-shaming language.</li>
                    </ul>
                </li>
            </ul>

            <h3 class="section-title">B) Peer Support (CPRS)</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the voice of lived experience—the living proof of recovery. Your craft is connection. Your purpose is to coach, link, and inspire hope. You are our specialist in advocacy, resource navigation (Ch. 9), and non-clinical skill-building (Ch. 11), all while upholding the sacred trust of your role (Ch. 15).</p>
            <ul>
                 <li><strong>Your 5 Core Chapters:</strong>
                    <ul>
                        <li>Ch. 9 Case Management (coordination/logs)</li>
                        <li>Ch. 11 Client Education (skill building)</li>
                        <li>Ch. 15 Rights, Privacy & Boundaries</li>
                        <li>Ch. 10 Crisis Intervention</li>
                        <li>Ch. 13 Reports & Records (contact notes)</li>
                    </ul>
                </li>
                 <li><strong>Daily / Weekly / Monthly Rhythms:</strong>
                    <ul>
                        <li><strong>Daily:</strong> Outreach/contacts; document same day (Ch. 13); verify ROI before collateral contacts (Ch. 15); support warm handoffs (Ch. 12).</li>
                        <li><strong>Weekly:</strong> Peer supervision (Ch. 24); co-facilitate groups/education as assigned (Ch. 8/11).</li>
                        <li><strong>Monthly:</strong> Update resource list; review engagement KPIs with Supervisor (Ch. 21).</li>
                    </ul>
                 </li>
                 <li><strong>✅ Quality Gates You Own:</strong> Contact documented same day; current ROI; safety escalation documented.</li>
                 <li><strong>📊 Metrics to Watch:</strong> Contact frequency; follow-through rate; client-reported outcomes.</li>
                 <li><strong>⚠ Escalation Triggers:</strong>
                    <ul>
                        <li>Any Risk Indicator or Safety Concern: Supervisor now (Ch. 10).</li>
                        <li>Boundary/Part 2 Questions: Privacy Officer (Ch. 15).</li>
                        <li>Barriers You Cannot Move: Case conference request (Ch. 14).</li>
                    </ul>
                </li>
                 <li><strong>Philosophy in Action (Your Daily Practice):</strong>
                    <ul>
                        <li><strong>Confidence:</strong> You build it by co-creating achievable next steps and celebrating real-world progress.</li>
                        <li><strong>Boundaries:</strong> You hold them by protecting the person's story (Ch. 15) and clarifying your non-clinical scope.</li>
                        <li><strong>Emotional Intelligence:</strong> You model it by leading with empathy and amplifying the person's voice and choice.</li>
                    </ul>
                </li>
            </ul>
             
            <h3 class="section-title">C) Intake Worker</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the Director of First Impressions and the Guardian of our Front Door. Your craft is to turn a nervous, uncertain call into a clean, compliant, and welcoming first step. You are the first link in the Golden Thread, responsible for a perfect, error-free "container" (Ch. 4) that sets the person and the clinical team up for success.</p>
            <ul>
                 <li><strong>Your 5 Core Chapters:</strong>
                    <ul>
                        <li>Ch. 4 Intake (consents/eligibility)</li>
                        <li>Ch. 3 Screening</li>
                        <li>Ch. 5 Orientation</li>
                        <li>Ch. 13 Reports & Records (checklist, filing)</li>
                        <li>Ch. 18 UM & Medical Necessity (eligibility/auth basics)</li>
                    </ul>
                </li>
                 <li><strong>Daily / Weekly / Monthly Rhythms:</strong>
                    <ul>
                        <li><strong>Daily:</strong> Verify payer; complete consent packet; schedule Assessment (Ch. 6); log orientation acknowledgement (Ch. 5).</li>
                        <li><strong>Weekly:</strong> Pipeline review: no-shows/outreach list; report bottlenecks.</li>
                        <li><strong>Monthly:</strong> Spot-check files for ROI completeness and ID/document indexing (Ch. 13).</li>
                    </ul>
                </li>
                 <li><strong>✅ Quality Gates You Own:</strong> 100% consent packet; eligibility verified; assessment scheduled &le;7 days; chart indexed.</li>
                 <li><strong>📊 Metrics to Watch:</strong> Intake&rarr;Assessment cycle time; consent completeness; eligibility error rate.</li>
                 <li><strong>⚠ Escalation Triggers:</strong>
                    <ul>
                        <li>Eligibility/Auth Roadblocks: UM lead (Ch. 18).</li>
                        <li>Safety Observed at Intake: Supervisor + Crisis protocol (Ch. 10).</li>
                        <li>Consent/ROI Uncertainty: Compliance/Privacy (Ch. 15).</li>
                    </ul>
                </li>
                 <li><strong>Philosophy in Action (Your Daily Practice):</strong>
                    <ul>
                        <li><strong>Confidence:</strong> You build it by providing a warm, clear, and simple welcome. You give them a date and a time.</li>
                        <li><strong>Boundaries:</strong> You hold them by calmly and clearly explaining rights, limits, and consents.</li>
                        <li><strong>Emotional Intelligence:</strong> You model it by reducing fear, validating their courage, and normalizing the act of help-seeking.</li>
                    </ul>
                </li>
            </ul>

            <h3 class="section-title">D) Counselor (Licensed)</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the architect and the weaver. Your craft is to assess the need (Ch. 6), co-design the plan (Ch. 7), and deliver the intervention (Ch. 8) that honors the person's story. You are the primary weaver of the Golden Thread, ensuring every clinical action is purposeful, medically necessary, and documented with unassailable integrity (Ch. 13, 19).</p>
            <ul>
                <li><strong>Your 5 Core Chapters:</strong> Ch. 6 Assessment (ASAM, formulation), Ch. 7 Treatment Planning (medical necessity), Ch. 8 Counseling (modalities, group leadership), Ch. 13 Reports & Records (timeliness, placement), Ch. 18/19 UM & Pre-Bill/Claims (alignment with documentation).</li>
                <li><strong>Daily / Weekly / Monthly Rhythms:</strong> Daily: Deliver sessions; complete notes &le;24–48h; ensure code/time/auth alignment (Ch. 19). Weekly: Supervision/consult (Ch. 24/14); review plan updates due; close care coordination loops (Ch. 9). Monthly: Peer review 2 charts; contribute a handbook improvement if a recurring pitfall appears (Ch. 28/29).</li>
                <li><strong>✅ Quality Gates You Own:</strong> LOC/ASAM stated; plan signatures/reviews on time; note&rarr;objective linkage; safety plan updates.</li>
                <li><strong>📊 Metrics to Watch:</strong> Timeliness &ge;95%; clean-claim; denial rate; no-show mitigation actions.</li>
                <li><strong>⚠ Escalation Triggers:</strong> Diagnostic Ambiguity or Complex Risk: Clinical Supervisor (Ch. 24) and, if needed, psychiatric consult (Ch. 14). Frequent Denials Tied to Notes: QA/Billing huddle (Ch. 19) + Supervisor.</li>
                <li><strong>Philosophy in Action (Your Daily Practice):</strong> Confidence: You build it in others by making their goals visible, tangible, and attainable. Boundaries: You hold them by writing SMART objectives with realistic frequencies and enforcing program ethics. Emotional Intelligence: You model it by validating, evoking, and coaching skills, not just processing problems.</li>
            </ul>

            <h3 class="section-title">E) Case Manager</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the advocate, the ally, and the barrier-buster. Your craft is navigating the systems that frustrate the people we serve. You clear the path of logistical, financial, and social hurdles—finding housing, securing benefits, coordinating care (Ch. 9, 12)—so the person can focus on their recovery.</p>
             <ul>
                <li><strong>Your 5 Core Chapters:</strong> Ch. 9 Case Management, Ch. 12 Referral (closed-loop), Ch. 15 Rights/Privacy/Boundaries (ROI hygiene), Ch. 13 Reports & Records (logs, trackers), Ch. 10 Crisis Intervention (support role).</li>
                <li><strong>Daily / Weekly / Monthly Rhythms:</strong> Daily: Coordinate services; document contacts and outcomes; maintain active referrals with follow-up dates. Weekly: Case conference with Counselor/Peer (Ch. 14); chase outstanding confirmations; refresh barriers list. Monthly: Audit 5 referrals for closed-loop; update resource directory.</li>
                <li><strong>✅ Quality Gates You Own:</strong> Current ROI; warm handoff; follow-up within X days; closed-loop documentation.</li>
                <li><strong>📊 Metrics to Watch:</strong> Referral closure rate; time-to-service; no-show rescue actions.</li>
                <li><strong>⚠ Escalation Triggers:</strong> Stalled Referrals / Unsafe Barriers: Supervisor; consider crisis support (Ch. 10). ROI Expired/Missing for Collaterals: Compliance (Ch. 15). Housing/Employment Denial Patterns: Bring to PI huddle (Ch. 22).</li>
                <li><strong>Philosophy in Action (Your Daily Practice):</strong> Confidence: You build it by delivering early, concrete wins (e.g., getting an ID, a bus pass, or a safe meal). Boundaries: You hold them by setting realistic timelines with clients and external partners; you never promise what you can't control. Emotional Intelligence: You model it by solving the problem beneath the problem, listening for the frustration and fear.</li>
            </ul>

            <h3 class="section-title">F) Supervisor / Program Lead</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the Master Craftsperson. Your primary role is not just to manage; it is to forge new masters. You are the chief teacher, inspector, and enforcer of the Golden Thread. Your craft is to activate this handbook as a curriculum (Ch. 26), using supervision (Ch. 24) to ensure that every clinical action is compliant (Ch. 20) and every team member is growing.</p>
            <ul>
                <li><strong>Your 5 Core Chapters:</strong> Ch. 24 Supervision & Professional Development (activation guide), Ch. 6–8 Assessment / Planning / Counseling (coaching focus), Ch. 13/19 Records & Pre-Bill/Denials (quality gates), Ch. 21–22 KPIs & PI Cycle (team performance), Ch. 10/16 Crisis & Critical Incident (leadership).</li>
                <li><strong>Daily / Weekly / Monthly Rhythms:</strong> Daily: Availability for risk consults; spot-check timeliness dashboard. Weekly: Supervision sessions (Golden Thread traceback; pitfall-to-fix coaching); review denial trends with QA/Billing. Monthly: Chart audits; PI actions; training/remediation plans; submit handbook redlines (Ch. 28/29).</li>
                <li><strong>✅ Quality Gates You Own:</strong> Supervision documented; audit cycle completed; corrective actions tracked to closure.</li>
                <li><strong>📊 Metrics to Watch:</strong> Team timeliness; denial rates; incident timeliness; staff improvement submissions.</li>
                <li><strong>⚠ Escalation Triggers:</strong> Sentinel Events / Complex Risk: Follow critical incident chain (Ch. 16). Patterned Denials or Quality Drift: Convene corrective action with QA/Billing (Ch. 20/22). Workforce Concerns (Safety/Compliance): Program Director/HR.</li>
                <li><strong>Philosophy in Action (Your Daily Practice):</strong> Confidence: You build it by publicly recognizing small wins and the mastering of the craft. Boundaries: You hold them by guarding your team's scope and time and by being the final, kind, and firm "no" that enforces our standards. Emotional Intelligence: You model it by coaching with curiosity, not criticism, and de-shaming errors into teachable moments.</li>
            </ul>
            
            <h3 class="section-title">G) Biller / QA</h3>
            <p><strong>Your Purpose (Your Craft):</strong> You are the Guardian of Our Integrity and the final, critical link in the Golden Thread. Your craft is to ensure our claim (Ch. 19) is the honest, verifiable, and financially-sound conclusion to the person's story (Ch. 6-13). You are not a "note-checker"; you are the partner who prevents denials, protects our revenue, and proves our compliance.</p>
            <ul>
                <li><strong>Your 5 Core Chapters:</strong> Ch. 19 Pre-Bill Scrub, Claims & Denials, Ch. 13 Reports & Records (audit tools), Ch. 18 UM & Medical Necessity (auth alignment), Ch. 21 KPI Library (clean-claim, denial rate), Ch. 20 Audit Readiness (sampling, CAPs).</li>
                <li><strong>Daily / Weekly / Monthly Rhythms:</strong> Daily: Pre-bill checks; reject and return to origin with clear edit notes; submit clean claims; work rejections &le;2 biz days. Weekly: Denial root-cause review with Supervisors; post "Top 3 Fixes" to team. Monthly: Produce KPI reports; lead mini-trainings on top documentation errors; verify CAP closures.</li>
                <li><strong>✅ Quality Gates You Own:</strong> Auth Valid • Note Complete/Signed • Correct Code/Time • Evidence Attached • Golden Thread Verified.</li>
                <li><strong>📊 Metrics to Watch:</strong> Clean-Claim Rate • First-Pass Yield • Denial Rate / TAT.</li>
                <li><strong>⚠ Escalation Triggers:</strong> Systemic Documentation Gaps: Escalate to Supervisor/Program Lead with examples; propose template fix (Ch. 28). Auth/Coding Conflicts: Loop UM and Clinical Supervisor (Ch. 18/24). Audit Findings or Payer Alerts: Compliance + Executive per protocol (Ch. 20).</li>
                <li><strong>Philosophy in Action (Your Daily Practice):</strong> Confidence: You build it by giving clear, solution-first feedback to clinicians, not just problems. Boundaries: You hold them by making the "Golden Thread Verified" a non-negotiable Go / No-Go for claims. Emotional Intelligence: You model it by respecting the clinical intent behind the note and partnering on the fix.</li>
            </ul>
            
            <div class="callout">
                <h4>Universal Escalation Triggers (All Roles)</h4>
                <p>If you see any of these, you must act.</p>
                <ol>
                    <li><strong>⚠ Safety Risk (Harm to self/others):</strong> Immediately page Supervisor/On-call (Ch. 10).</li>
                    <li><strong>🧭 Privacy Breach (PHI/Part 2):</strong> Immediately notify Compliance (Ch. 15).</li>
                    <li><strong>✅ Missing Golden Thread (Can’t trace 6&rarr;7&rarr;Note&rarr;19):</strong> Stop. Notify Supervisor (Ch. 24).</li>
                    <li><strong>✅ Repeat Denial/Error (Same cause):</strong> Notify QA/Billing + Supervisor (Ch. 19).</li>
                    <li><strong>🗂 Handbook is Wrong (Policy/Template gap):</strong> Submit Handbook Improvement Form (Part VIII).</li>
                </ol>
            </div>
            
            <h3 class="section-title">The Day-1 Attestation (All Roles)</h3>
            <p>By the end of your first week, you should be able to say:</p>
            <ul>
                <li>[ ] I know my 5 Core Chapters and have opened their templates.</li>
                <li>[ ] I can explain the Golden Thread in one sentence.</li>
                <li>[ ] I know the Quality Gates I own and where the 📍 Evidence lives.</li>
                <li>[ ] I know who to call for a ⚠ Safety risk.</li>
                <li>[ ] I know how to submit an Improvement Form if I find a better way.</li>
            </ul>
            <p><strong>Remember:</strong> Practicing your dashboard exactly as written means you are living the 12 Core Functions and meeting TAP21—while building Confidence, Boundaries, and Emotional Intelligence in every interaction.</p>
        `
      },
    ch05: {
        title: "Chapter 0.5: The Soul of Our Craft — From Philosophy to Practice",
        sub: "Codifying our values—person-centered, trauma-informed, culturally responsive—into core behaviors.",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This chapter is our "why." It is our constitution.</p>
            <p>It defines the core beliefs that drive every assessment, every plan, every note, and every interaction. This is where we codify our values—person-centered, trauma-informed, culturally responsive—and translate them into the three core behaviors we practice and measure: <strong>Confidence, Boundaries, and Emotional Intelligence.</strong></p>
            <p>This is the code that connects our beliefs to our behaviors, our craft to our compliance (12CF/TAP21), and our mission to our medical necessity.</p>
            
            <h3 class="section-title">Our Transformation Arc: The Journey to Agency</h3>
            <p>Our mission is not merely symptom reduction. It is to walk with the people we serve on a journey toward agency, purpose, and belonging. This is our theory of change, and it guides the "why" behind our levels of care:</p>
            <ol>
                <li><strong>Stability:</strong> We first build a safe harbor. We establish safety, secure basic needs (food, housing, MOUD), and create consistent, trustworthy routines. The goal is to reduce crisis and build a foundation for the work.</li>
                <li><strong>Employment:</strong> We move from stabilization to mobilization. We build the skills, reliability, and problem-solving required for the dignity of work. We coordinate with workforce partners to create real-world opportunities.</li>
                <li><strong>Ownership:</strong> We foster true agency. The person moves from <em>participant</em> to <em>co-author</em> of their plan. This is where we build financial literacy, informed choices, and peer leadership.</li>
                <li><strong>Leadership:</strong> We complete the circle. The person, now secure in their ownership, begins to teach and guide others. This is seen in mentoring roles, alumni panels, advocacy, and co-facilitating the very curricula they once learned.</li>
            </ol>
            <p><strong>Proof in the Record:</strong></p>
            <ul>
                <li><em>"Client chose evening group to support new work schedule (Employment)."</em></li>
                <li><em>"Co-led check-in round and modeled de-escalation skill for a peer (Leadership)."</em></li>
            </ul>

            <h3 class="section-title">The Three Tenets: Our Philosophy in Action</h3>
            <p>We explicitly build three skills in the people we serve. These tenets, informed by Brené Brown’s work on belonging and integrity, are the lens for all our clinical work.</p>
            <h4>1) Self-Confidence (Courage & Mastery)</h4>
            <p>This is our "why." It is the core belief that recovery is possible. We are merchants of hope. But confidence is not a platitude; it is a <em>skill</em> built through mastery. We are practitioners of courage.</p>
            <ul>
                <li><strong>Behaviors in Session:</strong> MI evocation of past wins; "graded" tasks that guarantee a small success; "I can / I did" reflections.</li>
                <li><strong>Group Prompts:</strong> "Name one strength you used this week when the urge hit."</li>
                <li><strong>Risk Practice:</strong> Confidence is not the absence of risk; it's the belief you can handle it. We pair courage with concrete safety planning.</li>
                <li><strong>Proof in the Record:</strong> "Practiced two coping skills; client rated confidence to use them at 7/10; set micro-goal for tomorrow."</li>
                <li><strong>Links:</strong> 12CF (Counseling, Education); TAP21 (Counseling, Professional Growth).</li>
            </ul>

            <h4>2) Boundaries (Integrity & Safety)</h4>
            <p>This is our "how." It is the clinical and ethical container. Boundaries are not walls; they are the structures that make safety and trust possible. This is integrity in action—from our role scope (Ch. 0.4) to our privacy laws (Ch. 15).</p>
            <ul>
                <li><strong>Behaviors in Session:</strong> Clarifying scope; negotiating realistic SMART goals; modeling how to say "no" respectfully; protecting time.</li>
                <li><strong>Group Prompts:</strong> "Where will you place a boundary this week to protect your sleep or your sobriety?"</li>
                <li><strong>Risk Practice:</strong> Boundaries are what trigger our duty-to-protect steps. We hold the line to protect the person and the community.</li>
                <li><strong>Proof in the Record:</strong> "Reviewed ROI purpose; client set verbal boundary with family member during call; we processed the outcome."</li>
                <li><strong>Links:</strong> 12CF (Orientation, Crisis, Referral, Records); TAP21 (Ethics, Documentation).</li>
            </ul>

            <h4>3) Emotional Intelligence (Belonging & Regulation)</h4>
            <p>This is our "where." It is the regulated, non-anxious presence we bring to the work. It is our ability to stay grounded in our own values so we can sit with someone in theirs. We teach clients to recognize, name, and regulate their emotions so they can respond skillfully, not just react.</p>
            <div class="callout">This is the living embodiment of our core promise: <strong>"You are not required to be perfect to belong here. You are required to be safe."</strong></div>
            <ul>
                <li><strong>Behaviors in Session:</strong> Feeling identification ("name it to tame it"); urge surfing; perspective-taking; de-escalation.</li>
                <li><strong>Group Prompts:</strong> "What did your anger <em>need</em> from you today, other than just a reaction?"</li>
                <li><strong>Risk Practice:</strong> EI under pressure <em>is</em> de-escalation. We meet chaos with calm and disarm fear with presence.</li>
                <li><strong>Proof in the Record:</strong> "Used emotion labeling + paced breathing; client returned from 8/10 anxiety to 4/10; identified trigger + plan."</li>
                <li><strong>Links:</strong> 12CF (Crisis, Counseling); TAP21 (Counseling, Cultural Competence).</li>
            </ul>

            <h3 class="section-title">Our Modalities: How We Teach the Tenets</h3>
            <ul>
                <li><strong>Motivational Interviewing (MI):</strong> We use OARS, evocation, and change talk to build <strong>Confidence & EI</strong>.
                    <ul class="list-disc list-inside ml-4"><li><strong>Session Target:</strong> One evoked reason for change + one concrete next step.</li></ul>
                </li>
                <li><strong>CBT/DBT-Informed Skills:</strong> We use thought records, behavioral activation, and distress tolerance to build <strong>EI & Boundaries</strong>.
                    <ul class="list-disc list-inside ml-4"><li><strong>Homework Norm:</strong> One small, specific practice between sessions.</li></ul>
                </li>
                <li><strong>Relapse Prevention:</strong> We use triggers, HALT, and coping menus to build <strong>Boundaries & EI</strong>.
                    <ul class="list-disc list-inside ml-4"><li><strong>Group Norm:</strong> Identify one risky time/place + one boundary to protect it.</li></ul>
                </li>
                <li><strong>Psychoeducation:</strong> We use MOUD basics, craving science, sleep hygiene, and nutrition to build <strong>Confidence</strong> through literacy.
                    <ul class="list-disc list-inside ml-4"><li><strong>Proof:</strong> Pre/post-knowledge checks logged (Ch. 11).</li></ul>
                </li>
                <li><strong>Peer Support:</strong> We use lived-experience mentoring, hope, and linkage to build <strong>Confidence & Belonging</strong>.
                    <ul class="list-disc list-inside ml-4"><li><strong>Proof:</strong> Same-day contact logs; warm handoffs closed-loop (Ch. 9).</li></ul>
                </li>
            </ul>
             <h3 class="section-title">The Golden Thread: Our Philosophy as a Discipline</h3>
            <p>This is the daily rule that proves our philosophy is real. It ensures our <strong>Assessment &rarr; Plan &rarr; Note &rarr; Claim</strong> tells one, unbroken story of the Tenets in action.</p>
            <ol>
                <li><strong>Assessment (Ch. 6):</strong> We identify the Needs and Strengths related to Confidence, Boundaries, and EI.</li>
                <li><strong>Plan (Ch. 7):</strong> We convert the Tenets into SMART Objectives (e.g., "Increase boundary-setting skills to protect sleep hygiene 5/7 nights").</li>
                <li><strong>Note (Ch. 8–11):</strong> We document the Intervention used (MI, CBT, Peer) and the person's Response to that objective.</li>
                <li><strong>Claim (Ch. 19):</strong> Our Code/Time/Auth is the final, honest verification that we did the work we described in the note.</li>
            </ol>
            <h4>The Proof of Our Craft (What Surveyors and Payers See)</h4>
            <ul>
                <li><strong>Tenets are visible:</strong> Plans and notes explicitly reference "boundary skill," "confidence rating," or "emotion regulation step."</li>
                <li><strong>Quality Gates are met:</strong> Timeliness, signatures, correct codes, and current auths are all present.</li>
                <li><strong>Evidence is clear:</strong> 📍 Plan objective IDs are linked in notes. 📍 Rosters match group notes. 📍 Safety addendums are present when risk is indicated.</li>
            </ul>
            <h4>Quick Pocket Prompts (Use Anywhere)</h4>
            <ul>
                <li><strong>Confidence:</strong> "What’s one step you trust yourself to take today?"</li>
                <li><strong>Boundaries:</strong> "What will you protect this week—and how will you say it?"</li>
                <li><strong>Emotional Intelligence:</strong> "What is that feeling asking for? And what’s your wise response?"</li>
            </ul>
            <h4>Documentation Cheat Lines (Copy as Needed)</h4>
            <ul>
                <li><strong>Intervention:</strong> MI to strengthen confidence; client voiced two reasons to continue MOUD; commitment 7/10.</li>
                <li>Practiced boundary script with housemate; role-played assertive 'no'; scheduled follow-up.</li>
                <li>Applied emotion regulation (TIPP breathing + urge surfing); distress reduced; updated safety plan.</li>
            </ul>
            <p><strong>Alignment Call-outs:</strong> 12CF (Counseling, Education, Crisis, Records) • TAP21 (Counseling, Evaluation, Planning, Documentation, Cultural Competence, Ethics).</p>
            <div class="callout"><strong>The Bottom Line: Our philosophy is not wall art—it’s our workflow.</strong></div>
        `
    },
    ch1: {
        title: "Chapter 1.0: The Charter of Our Care — Scope, Access, & Eligibility",
        sub: "Our public promise: what we do, for whom we do it, and how to make the first connection.",
        html: `
            <h3 class="section-title">What This Chapter Does</h3>
            <p>This chapter is our public promise. It is the charter that defines <em>what</em> we do, for <em>whom</em> we do it, and <em>how</em> a person makes that first, critical connection. This is the operational DNA for each of our organizations.</p>
            <p>For a new staff member, this is your map to our "front door." It is the first link in the Golden Thread, connecting a community need to a specific, billable service. It shows you how to screen for the right person, at the right time, for the right level of care, and how to prove it from the very first contact.</p>
            <p><em>(12CF anchors: Screening, Intake • TAP21: Service Coordination, Cultural Competence, Professional Responsibility)</em></p>

            <h3 class="section-title">1.1 Our Service Charter & Codes</h3>
            <p><strong>Purpose:</strong> To create a single, non-negotiable source of truth for our services. This charter ensures every staff member—from clinician to biller—is using the same definitions, codes, and quality gates.</p>
            <p><em>(This grid must be completed for every organization in our network: RORS, Sum Point, Stairway to Hope, Miracle House, Journey to Resilience, etc.)</em></p>
            <table>
              <thead>
                <tr>
                  <th>Service Name & Code</th>
                  <th>Definition (Plain Language)</th>
                  <th>Modality / Setting / Hours</th>
                  <th>Typical Duration & Frequency</th>
                  <th>Staffing (Min. Credential)</th>
                  <th>✅ Quality Gates (Must Be True)</th>
                  <th>📍 Evidence Location (Proof)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IOP (H0015)</strong></td>
                  <td>Structured 3-hr group treatment (CBT/DBT, RP, skills).</td>
                  <td>In-person (M/W/F 9a-12p); Telehealth (Tu/Th 5:30p-8:30p).</td>
                  <td>9–12 weeks; 3x/wk; step-down plan.</td>
                  <td>Licensed Counselor or supervised CDCA.</td>
                  <td>Group note &le;24–48h; roster attached; objective progress documented; auth current.</td>
                  <td>EHR &rarr; Group Roster + Group Note; Plan Objective Link; UM Auth Tab.</td>
                </tr>
                <tr>
                  <td><strong>Group (H0005)</strong></td>
                  <td>60-90 min session on a specific plan objective (e.g., RP, Skills, MOUD).</td>
                  <td>In-person & Telehealth. See weekly schedule.</td>
                  <td>60 or 90 min; 1-3x/wk.</td>
                  <td>Peer, CDCA, or Counselor.</td>
                  <td>Group note &le;24–48h; roster attached; objective documented.</td>
                  <td>EHR &rarr; Group Roster + Group Note.</td>
                </tr>
                <tr>
                  <td><strong>Individual (H0004)</strong></td>
                  <td>30-50 min 1:1 session (counseling, assessment, or plan review).</td>
                  <td>In-person & Telehealth. By appt.</td>
                  <td>45 min; 1x/wk or bi-weekly.</td>
                  <td>CDCA or Counselor.</td>
                  <td>IND note &le;24–48h; signed; plan objective documented; time/code match.</td>
                  <td>EHR &rarr; Individual Note; Plan Link; Signature.</td>
                </tr>
                <tr>
                  <td><strong>Case Mgmt (H0006)</strong></td>
                  <td>Coordination of medical, social, or other services to remove barriers.</td>
                  <td>In-person, Tele, or Community. By appt.</td>
                  <td>15-30 min; as needed.</td>
                  <td>Case Manager or Peer.</td>
                  <td>CM log &le;24–48h; documents coordination; ROI on file for collaterals.</td>
                  <td>EHR &rarr; CM Note; ROI Tab.</td>
                </tr>
                <tr>
                  <td><strong>Peer Support (H0038)</strong></td>
                  <td>Non-clinical coaching, linkage, & lived-experience mentoring.</td>
                  <td>In-person, Tele, or Community. By appt.</td>
                  <td>30-60 min; per plan.</td>
                  <td>CPRS (Certified Peer).</td>
                  <td>Peer log &le;24h; non-clinical language; link to plan goal; ROI for collaterals.</td>
                  <td>EHR &rarr; Peer Note; ROI Tab.</td>
                </tr>
                 <tr>
                  <td><em>(add other services)</em></td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </tbody>
            </table>
             <h4 class="font-bold mt-4">Telehealth Standard (Applies to all):</h4>
            <p>Telehealth is offered where clinically appropriate and permitted. The staff member must:</p>
            <ol>
                <li>Obtain the Telehealth Consent form (Ch. 4) before the first session.</li>
                <li>Attest to the person's identity and private location (by name, in the note) at the start of every session.</li>
                <li>Use only the approved, secure platform.</li>
                <li>Adhere to all cross-state licensing limits (Ch. 15).</li>
            </ol>
             <h3 class="section-title">1.2 Eligibility & Level of Care (ASAM)</h3>
            <p><strong>Purpose:</strong> To ensure we serve the "right person, at the right time, in the right place." This is our primary act of clinical integrity. Honoring our Boundaries (exclusion criteria) and making a swift, warm referral (Ch. 12) is as clinically important as honoring our admissions.</p>
            <p><em>(Complete for each program)</em></p>
            <ul>
                <li><strong>Target Populations:</strong> Age range, key characteristics (e.g., "Adults 18+ with SUD; co-occurring symptoms permitted when stable").</li>
                <li><strong>Inclusion Criteria (ASAM-informed):</strong> "We are the right fit for people who..." (e.g., "ASAM 2.1: Need structured support 3x/wk; persistent triggers; needs skills practice beyond standard outpatient.")</li>
                <li><strong>Exclusion Criteria (Contraindications):</strong> "We are not the right fit for..." (e.g., "Acute withdrawal requiring detox (ASAM 3.7); unmanaged medical/psychiatric risk requiring 24/7 care.")</li>
                <li><strong>Priority Populations:</strong> State any required access priorities (e.g., "Pregnant people, people on MOUD, and justice-involved referrals are prioritized for screening.").</li>
                <li><strong>Screening Tools Used:</strong> Brief SUD Screen, C-SSRS (or program tool), Withdrawal Risk Screen.</li>
                <li><strong>✅ Quality Gates:</strong> Eligibility documented in screening; ASAM/LOC stated in assessment; any exclusion must trigger a warm referral.</li>
                <li><strong>📍 Evidence Location:</strong> EHR &rarr; Screening Note + BPS Assessment (ASAM section); Referral Log if excluded.</li>
            </ul>
            <h3 class="section-title">1.3 Hours & Locations</h3>
            <p><strong>Purpose:</strong> To make access predictable, visible, and respectful. Access is a form of kindness.</p>
            <p><em>(List for each site)</em></p>
            <ul>
                <li><strong>Site & Address:</strong> Full address, public transit notes, parking, accessibility features (e.g., "Ramp access, all-gender restrooms, sensory-safe waiting area").</li>
                <li><strong>Program Hours:</strong> By day of week for each service.</li>
                <li><strong>Telehealth Hours:</strong> Specific time blocks; no-show/reschedule rules.</li>
                <li><strong>Walk-in / Same-Day Options:</strong> Which hours; what to expect.</li>
                <li><strong>After-Hours & Crisis:</strong> On-call instructions; crisis line numbers (Ch. 10).</li>
                <li><strong>✅ Quality Gates:</strong> Public hours match posted hours; telehealth consent on file; accessibility accommodations documented.</li>
                <li><strong>📍 Evidence Location:</strong> Website; Orientation materials; EHR consent tab; accommodation notes.</li>
            </ul>
            <h3 class="section-title">1.4 Access Pathways & The Front Door</h3>
            <p><strong>Purpose:</strong> To demystify the first contact. A clear, warm, and simple path is a respectful path.</p>
            <ul>
                <li><strong>How to Refer:</strong> Phone, secure email/fax, e-referral portal. State what info is needed and the average response time.</li>
                <li><strong>Intake Flow (At-a-Glance):</strong> Call/Walk-in &rarr; Screening (Ch. 3) &rarr; Intake/Consents (Ch. 4) &rarr; Orientation (Ch. 5) &rarr; Assessment (Ch. 6) [≤7 days] &rarr; Plan (Ch. 7) &rarr; First Service (Ch. 8).</li>
                <li><strong>Warm Handoffs:</strong> Define the process. "We book the appointment for the person before they leave or while they are on the phone. 'Closed loop' means we log confirmation from the receiving provider." (See Ch. 12).</li>
                <li><strong>No-Show/Re-engagement Policy:</strong> Outreach expectations, timelines, and thresholds for closing a chart.</li>
                <li><strong>Language & Access:</strong> Interpreter request flow; materials in top languages; disability accommodations.</li>
                <li><strong>✅ Quality Gates:</strong> ROI complete for third parties; appointment date/time given; orientation acknowledgment filed; no-show outreach documented.</li>
                <li><strong>📍 Evidence Location:</strong> Referral Tracker; Appointment Record; Orientation Checklist; Outreach Logs.</li>
            </ul>
             <h3 class="section-title">1.5 Organization Snapshot Pages</h3>
            <p><strong>Purpose:</strong> A single, printable "cheat sheet" for each organization in our network. This is the master reference for clinical, ops, and billing staff.</p>
            <p><em>(Create one 1-page document for each organization using this layout)</em></p>
            <ul>
                <li><strong>Header:</strong> Logo, Program Name, NPI, Site(s).</li>
                <li><strong>Service Grid:</strong> (Copy from 1.1) Services, Codes, Times, Staffing, Telehealth status.</li>
                <li><strong>Who We Serve:</strong> 3 bullets for inclusion; 3 for exclusion; ASAM/LOC note.</li>
                <li><strong>Access:</strong> Referral methods; scheduling line; walk-in hours.</li>
                <li><strong>Safety:</strong> Crisis Line; On-Call Model.</li>
                <li><strong>Key Gates:</strong> Top 3-5 ✅ Quality Gates for this org.</li>
                <li><strong>Contacts:</strong> Intake, UM, Supervisor.</li>
            </ul>
            <h3 class="section-title">1.6 Our Stance at the Front Door: The Craft of Access</h3>
            <p>This is not a checklist; it is our stance. This is how we practice our Philosophy (Ch. 0.5) the moment a person makes contact.</p>
            <ul>
                <li><strong>Plain-Language Promise:</strong> We explain services, consents, and rules in everyday words, not jargon. We ask, "What questions do you have?" until the answer is "None."</li>
                <li><strong>Choice & Voice:</strong> We offer time, modality (telehealth/in-person), and staff options when possible. We document their preferences, even if we can't meet them all.</li>
                <li><strong>Belonging Cues:</strong> Our lobbies are clean, safe, and welcoming. We use preferred names and pronouns. We practice cultural humility, asking about what matters to the person, not assuming.</li>
                <li><strong>Cost Transparency:</strong> We practice cost transparency as a form of respect. We clearly explain what services cost, how Medicaid/insurance works, and what sliding-fee or assistance options (if any) are available before the service is delivered.</li>
                <li><strong>✅ Quality Gates:</strong> Preferred name/pronouns captured; interpreter offered/used; financial responsibility explained and signed.</li>
                <li><strong>📍 Evidence Location:</strong> Intake Demographics; Interpreter Log; Financial Consent Form.</li>
            </ul>
            <h3 class="section-title">1.7 Cross-References (The Schematic)</h3>
            <ul>
                <li><strong>Templates:</strong> Intake Checklist, ROI, Orientation Acknowledgment, BPS, ASAM Worksheet, Referral Form, Warm Handoff Script.</li>
                <li><strong>Chapters:</strong> Ch. 3 (Screening), Ch. 4 (Intake), Ch. 5 (Orientation), Ch. 6 (Assessment), Ch. 7 (Plan), Ch. 12 (Referral), Ch. 13 (Records), Ch. 18 (UM).</li>
                <li><strong>KPIs (Ch. 21):</strong> Intake&rarr;Assessment Time, No-Show Rate, Doc Timeliness, Clean-Claim Rate.</li>
            </ul>
            <div class="callout"><strong>The Bottom Line: The First Link.</strong> This chapter is our charter. It’s the menu of our promises, the rules of our engagement, and the map to our front door. It is the evidence that our Golden Thread begins not at the first note, but at the very first phone call.</div>
        `
    },
    ch3: {
        title: "3. Screening (12CF: Screening)",
        sub: "To be a safe harbor, not a barrier.",
        html: `
            <p><strong>Purpose:</strong> To be a safe harbor, not a barrier. To answer the first, most terrifying question—"Am I in the right place?"—with dignity, speed, and safety.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We are the first proof that help is not hostile. We lower the threat with a warm, strengths-first welcome.</li>
                <li><strong>Boundaries:</strong> We are the right place, or we know who is. We decide fit/LOC fast and never promise what we can't deliver.</li>
                <li><strong>Emotional Intelligence:</strong> We hear the fear and ambivalence beneath the story and meet it with calm, not judgment.</li>
            </ul>
            <p><strong>Who Does What:</strong> Intake/Counselor administers screen; Peer supports engagement; Supervisor is available for immediate risk consult.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Brief orientation & consent to screen.</li>
                <li>Tools: SUD screen + suicide/withdrawal (e.g., C-SSRS) + basic needs.</li>
                <li>Decision Tree: Admit | Schedule Assessment | Warm referral | Emergency transfer.</li>
                <li>Close Loop: Appointment/referral confirmed; document.</li>
            </ol>
            <p><strong>✅ Quality Gates (How We Demonstrate This Standard):</strong></p>
            <ol>
                <li>Safety screen completed same day.</li>
                <li>Disposition (admit/referral/emergency) documented.</li>
                <li>Warm handoff done and proven if referred.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> EHR Screening note (date/time/signature), referral log/confirmation, crisis numbers provided.</p>
            <p><strong>Documentation Rules:</strong> Record tool results, disposition, and next step with time/date. Person-centered wording.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch4: {
        title: "4. Intake (12CF: Intake)",
        sub: "To build the 'container' for the work.",
        html: `
            <p><strong>Purpose:</strong> To build the 'container' for the work. This is where we establish the sacred, legal, and financial boundaries of the therapeutic relationship, creating a clean, compliant chart that protects the person's story.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We build it with clarity. "Here are the forms, here is what they mean, here is your next appointment."</li>
                <li><strong>Boundaries:</strong> This is the craft of our ethics. We are guardians of 42 CFR Part 2 and HIPAA. Our explanation of rights is a non-negotiable act of respect.</li>
                <li><strong>Emotional Intelligence:</strong> We use plain language. We reduce anxiety and make the complex simple, proving we are trustworthy guides.</li>
            </ul>
            <p><strong>Who Does What:</strong> Intake Worker gathers consents/eligibility; Counselor available for questions; Compliance for Part 2 issues.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Identity verification; consents/ROIs; rights & responsibilities.</li>
                <li>Part 2/HIPAA privacy briefing; explain "minimum necessary."</li>
                <li>Payer eligibility; demographics; accessibility/language needs.</li>
                <li>Schedule Orientation & Assessment (within ✅ 7-day gate).</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>All consents/ROIs signed and dated.</li>
                <li>Eligibility verified before assessment.</li>
                <li>Assessment scheduled on the calendar.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Consent Packet; Eligibility Screen; Appointment Record; Orientation Receipt.</p>
            <p><strong>Documentation Rules:</strong> No PHI in unsecured email/text. Scan/file with correct naming conventions.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch5: {
        title: "5. Orientation (12CF: Orientation)",
        sub: "To set the terms of our relationship.",
        html: `
            <p><strong>Purpose:</strong> To set the terms of our relationship. We establish the rules of safety, the promise of a voice (grievance), and the expectation of partnership. This is how we officially say, "You belong here."</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We state our core promise: "You are not required to be perfect to belong here; you are required to be safe."</li>
                <li><strong>Boundaries:</strong> We are explicit. We review the rules, the no-show policy, and the grievance process. This is the structure that holds the work.</li>
                <li><strong>Emotional Intelligence:</strong> We normalize the anxiety of "day one" and prove that having a "voice" (a grievance) is a safe and necessary part of the process.</li>
            </ul>
            <p><strong>Who Does What:</strong> Intake/Counselor/Peer co-lead; Supervisor resolves concerns.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Review program rules, schedule, no-show policy, and grievance process.</li>
                <li>Explain emergency procedures and after-hours contacts.</li>
                <li>Provide handbook; confirm understanding; collect acknowledgment.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Orientation checklist complete.</li>
                <li>Signed acknowledgment on file.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Orientation Checklist; Signed Receipt; Safety Briefing Note.</p>
            <p><strong>Documentation Rules:</strong> Use person-centered language; document any accommodations or interpreters used.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch6: {
        title: "6. Assessment (12CF: Assessment)",
        sub: "To listen for the story behind the symptoms.",
        html: `
            <p><strong>Purpose:</strong> To listen for the story behind the symptoms. This is the "why." It is our disciplined search for the person's needs and their strengths, culminating in the ASAM/LOC rationale that will drive the entire plan.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We are detectives for strengths. We find and name prior wins as the foundation for this one.</li>
                <li><strong>Boundaries:</strong> This is the first link in the Golden Thread. Our ASAM/LOC rationale is the clinical and financial boundary for the work. We initiate the Risk/Safety Addendum here.</li>
                <li><strong>Emotional Intelligence:</strong> We validate ambivalence. We reflect their values back to them, connecting their story to their goals.</li>
            </ul>
            <p><strong>Who Does What:</strong> Counselor/CDCA completes BPS; Peer adds supports (within scope); Supervisor co-signs as required.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>BPS domains (SUD/MH/medical/family/legal/SDOH).</li>
                <li>Co-occurring screens (e.g., PHQ-9, GAD-7).</li>
                <li>ASAM dimensions &rarr; LOC & rationale.</li>
                <li>Risk/Safety addendum if indicated; capture protective factors.</li>
                <li>Summarize in the person’s words; book planning session.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Assessment completed &le;7 days from intake (policy).</li>
                <li>ASAM LOC & rationale documented.</li>
                <li>Safety plan/addendum present when risk is indicated.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> BPS note timestamp (vs. Intake date); ASAM fields; Safety Addendum; Plan Appointment.</p>
            <p><strong>Documentation Rules:</strong> Stigma-free wording; objective findings; timeframe compliance.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch7: {
        title: "7. Treatment Planning (12CF: Treatment Planning)",
        sub: "To turn the 'why' into a 'how.'",
        html: `
            <p><strong>Purpose:</strong> To turn the "why" from the Assessment into a "how." We co-create the map from their need (in their words) to their goal (in our measurable, billable framework). This is the blueprint for the Golden Thread.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We make the goal visible, tangible, and attainable.</li>
                <li><strong>Boundaries:</strong> This is where we define the work. SMART objectives, clear interventions, and non-negotiable review dates are the guardrails of our craft.</li>
                <li><strong>Emotional Intelligence:</strong> The goals must be in their language, reflecting their values, not just our clinical jargon.</li>
            </ul>
            <p><strong>Who Does What:</strong> Counselor drafts; CDCA assists; person reviews/approves; Supervisor co-signs per policy.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Write goals directly from Assessment needs/strengths.</li>
                <li>Draft SMART objectives; choose interventions (MI/CBT/Peer/Edu).</li>
                <li>Write Medical Necessity statement. Set review dates. Obtain signatures.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Client & provider signatures (and supervisor as required).</li>
                <li>Review date set.</li>
                <li>Plan is linked to LOC/auth.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Treatment Plan & Review documents; UM request.</p>
            <p><strong>Documentation Rules:</strong> Each objective must be measurable; interventions specific.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch8: {
        title: "8. Counseling — Individual, Group, Family (12CF: Counseling)",
        sub: "To walk the map.",
        html: `
            <p><strong>Purpose:</strong> To walk the map. This is the daily craft of applying our skills (MI, CBT, Peer) to the person's stated objectives. Every session is a purposeful step, not just a conversation.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We are merchants of hope. We use MI to evoke their "why" and reinforce every small win.</li>
                <li><strong>Boundaries:</strong> We hold the frame. We start on time, end on time, and keep the work focused on the plan's objectives.</li>
                <li><strong>Emotional Intelligence:</strong> We are co-regulators. We teach the skill of naming and managing emotions, not just the theory.</li>
            </ul>
            <p><strong>Who Does What:</strong> Counselor/CDCA/Family Clinician; Peer may co-facilitate education (non-clinical scope).</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Prepare session (know the objective & skill).</li>
                <li>Deliver MI/CBT/DBT/family work.</li>
                <li>Capture progress, response, homework, and next step in the note.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Note completed &le;24–48h; correct code/time.</li>
                <li>Objective progress documented.</li>
                <li>Roster for group.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Session Note; Group Roster; Objective ID link.</p>
            <p><strong>Documentation Rules:</strong> Must link intervention &rarr; objective; document objective outcomes; capture attendance.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch9: {
        title: "9. Case Management (12CF: Case Management)",
        sub: "To be the advocate and barrier-buster.",
        html: `
            <p><strong>Purpose:</strong> To be the advocate and barrier-buster. We fight with the person to clear the path of the logistical, legal, and social hurdles that stand between them and their goals. We are the connection-makers.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We build it with concrete, early wins (an ID, a bus pass, a confirmed appointment).</li>
                <li><strong>Boundaries:</strong> Our craft is "ROI hygiene." We get the consent before the call. We set realistic timelines and manage expectations.</li>
                <li><strong>Emotional Intelligence:</strong> We solve the problem beneath the problem, listening for the fear and frustration behind the "stuck" referral.</li>
            </ul>
            <p><strong>Who Does What:</strong> Case Manager leads; Peer supports; Counselor coordinates clinically; Supervisor for barriers.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Identify barriers & targets (housing/employment/legal/benefits).</li>
                <li>Make referrals; set follow-up dates.</li>
                <li>Confirm & document closure; update plan if needed.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>ROI is current for all collateral contacts.</li>
                <li>Follow-up documented within X days; "closed-loop" verified.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> CM Log; Referral Tracker; ROI List.</p>
            <p><strong>Documentation Rules:</strong> Concrete actions, dates, and outcomes; must tie to a plan objective.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch10: {
        title: "10. Crisis Intervention (12CF: Crisis Intervention)",
        sub: "To be the anchor in the storm.",
        html: `
            <p><strong>Purpose:</strong> To be the anchor in the storm. Our craft is to de-escalate, stabilize immediate risk, and protect the person, the community, and the space with the minimum force necessary.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Boundaries:</strong> We are the calm in the chaos, but we are also the wall. We are guardians of the safety thresholds and our duty to protect.</li>
                <li><strong>Emotional Intelligence:</strong> We do not react to the crisis; we respond to the person. We listen to the fear beneath the anger.</li>
                <li><strong>Confidence:</strong> We prove that crisis is a moment, not a destination. Our updated Safety Plan is our promise that we are ready for the next step, together.</li>
            </ul>
            <p><strong>Who Does What:</strong> Any staff initiates protocol; Supervisor/Lead manages; Compliance if reportable.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Immediate de-escalation; determine level (911/mobile or internal).</li>
                <li>Ensure safety; notify chain of command; document incident.</li>
                <li>Update safety plan; debrief; schedule follow-up.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Crisis note completed &le;24h; incident filed.</li>
                <li>Safety plan updated; notifications completed.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Crisis Note; Incident Report; Safety Plan Revision; Notification Log.</p>
            <p><strong>Documentation Rules:</strong> Factual, time-stamped, threshold-based; minimal PHI sharing.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch11: {
        title: "11. Client Education (12CF: Client Education)",
        sub: "To give tools, not just talk.",
        html: `
            <p><strong>Purpose:</strong> To give tools, not just talk. We build recovery capital and health literacy, turning abstract concepts (like "triggers" or "boundaries") into practical, real-world skills.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> Literacy is the foundation of self-efficacy. We teach the "why" behind the "what."</li>
                <li><strong>Boundaries:</strong> We provide clear, harm-reduction options and set realistic expectations for skill-building.</li>
                <li><strong>Emotional Intelligence:</strong> We are not just teaching; we are coaching the skill of managing urges, moods, and relationships.</li>
            </ul>
            <p><strong>Who Does What:</strong> Counselor/Peer provides education; Supervisor approves curricula.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Choose module mapped to a plan objective.</li>
                <li>Deliver content in plain language; check for understanding.</li>
                <li>Record attendance & learning outcome.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Curriculum is mapped to a plan objective.</li>
                <li>Attendance captured; outcome noted.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Education Outline; Roster; Plan Link; Pre/Post Check.</p>
            <p><strong>Documentation Rules:</strong> Plain language; objective-aligned; note skill taught & person’s response.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch12: {
        title: "12. Referral (12CF: Referral)",
        sub: "To execute a perfect, warm handoff.",
        html: `
            <p><strong>Purpose:</strong> To execute a perfect, warm handoff. We ensure the next step in their journey (up or down a level of care) is as safe and clear as the first step they took with us.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Boundaries:</strong> This is the discipline of knowing our limits. We refer when the person needs a service outside our scope or a different level of care.</li>
                <li><strong>Confidence:</strong> A "cold" referral is a broken promise. A "warm" handoff is the proof of our care.</li>
                <li><strong>Emotional Intelligence:</strong> We validate and support the emotions that come with change and transition.</li>
            </ul>
            <p><strong>Who Does What:</strong> CM/Counselor initiates; Peer supports; Supervisor for barriers.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Identify target service (up/down LOC; MAT/detox/psychiatry/PCP).</li>
                <li>Obtain ROI; make referral; schedule/confirm.</li>
                <li>Follow-up; document outcome; update plan.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>ROI valid.</li>
                <li>Appointment confirmed.</li>
                <li>Follow-up within X days; "closed-loop" documented.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Referral Form; Confirmation; Follow-up Note; Plan Update.</p>
            <p><strong>Documentation Rules:</strong> Include reason for referral, date/time, contact name, and outcome.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch13: {
        title: "13. Reports & Record Keeping (12CF: Reports & Records)",
        sub: "To be the faithful, honest storyteller.",
        html: `
            <p><strong>Purpose:</strong> To be the faithful, honest storyteller of the person's journey. Our record is the proof of our integrity. A timely, accurate, and person-centered note is the final act of clinical care.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We write notes the person could read and recognize as their story.</li>
                <li><strong>Boundaries:</strong> This is our legal and ethical container. Minimum necessary (HIPAA/Part 2) and timeliness (≤24-48h) are non-negotiable.</li>
                <li><strong>Emotional Intelligence:</strong> We write with respectful, stigma-free language. We document behaviors, not labels.</li>
            </ul>
            <p><strong>Who Does What:</strong> Everyone documents; QA audits; Compliance oversees privacy.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>File content in correct EHR locations; use naming conventions.</li>
                <li>Meet timeframes (notes, plans, discharges).</li>
                <li>Handle addenda/late entries correctly.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>&ge;95% on-time documentation.</li>
                <li>Correct placement/naming; zero PHI leaks.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Timeliness Dashboard; Audit Checklist; EHR Location Map.</p>
            <p><strong>Documentation Rules:</strong> Objective, specific, linked to plan; no unapproved channels for PHI.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch14: {
        title: "14. Consultation (12CF: Consultation)",
        sub: "To practice humility.",
        html: `
            <p><strong>Purpose:</strong> To practice humility. We get the best answer for the person, not just our answer. This is our process for seeking, documenting, and acting on expert advice.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> True mastery is knowing when to ask for help. We ask early and model a culture of learning.</li>
                <li><strong>Boundaries:</strong> We use the right channel for the right question (Clinical, UM, Privacy).</li>
                <li><strong>Emotional Intelligence:</strong> We approach with a collaborative tone and respect the expertise of others.</li>
            </ul>
            <p><strong>Who Does What:</strong> Staff initiates with clear clinical question; Supervisor/SME responds; document outcomes.</p>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Frame the question (facts, risk, options).</li>
                <li>Contact the right consultant (Clinical/UM/Privacy/Medical).</li>
                <li>Document advice & decision; inform client as appropriate.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Consult Note filed.</li>
                <li>Action items assigned/closed.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Consult Note; Staffing Record; Follow-up entry.</p>
            <p><strong>Documentation Rules:</strong> Brief, factual, includes recommendation & rationale; references related notes.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch15: {
        title: "15. Client Rights, Privacy & Professional Boundaries",
        sub: "The architecture of trust.",
        html: `
            <h3 class="section-title">Why This Chapter Matters:</h3>
            <p>This is the craft of our Boundaries tenet. Rights, privacy, and boundaries are not limits on our work; they are the very structure that makes the work safe and possible.</p>
            
            <h3 class="section-title">15.1 Rights, Grievances & Culturally Safe Care</h3>
            <p><strong>Purpose:</strong> To make agency a reality. We ensure rights are visible, understandable, and enforceable, proving that a person's "voice" (especially a grievance) is a tool for safety, not a threat.</p>
            <p><strong>What to Do:</strong></p>
            <ul>
                <li><strong>Inform & Acknowledge:</strong> Provide rights in plain language at Intake/Orientation (Ch. 4/5). Collect signed acknowledgment. Offer copies in preferred language/format.</li>
                <li><strong>Grievances:</strong> Explain the steps, timelines, and our non-retaliation promise. Provide forms, track every grievance to resolution, and close the loop with the person.</li>
                <li><strong>Cultural Safety:</strong> Ask, don’t assume. Record preferred name/pronouns, accessibility needs, and language/interpreter needs in the chart.</li>
            </ul>
            <p><strong>✅ Quality Gates:</strong> Rights given and acknowledged at start of care. Grievances tracked with due dates and documented outcomes. Interpreter offered/documented when indicated.</p>
            <p><strong>📍 Evidence Location:</strong> Orientation Packet/Acknowledgement; Grievance Log; Demographics Page; Interpreter Log.</p>
            
            <h3 class="section-title">15.2 HIPAA & 42 CFR Part 2 (The Sacred Trust)</h3>
            <p><strong>Purpose:</strong> To build a digital sanctuary for the person's story. We are guardians of their privacy. This is our most sacred, non-negotiable boundary.</p>
            <p><strong>What to Do:</strong></p>
            <ul>
                <li><strong>Minimum Necessary:</strong> This is our core discipline. Share only the specific PHI required for the purpose. Redact all else.</li>
                <li><strong>ROI Essentials:</strong> A Release of Information is a legal key. It must have: Person’s name/DOB, specific info to be released, to whom, purpose, expiration date, revocation clause, signature/date.</li>
                <li><strong>Part 2 Specifics:</strong> Substance use records (42 CFR Part 2) are hyper-protected. They require a Part 2-compliant ROI, must include a redisclosure warning, and can only be shared in an emergency per the strict exception rules.</li>
                <li><strong>Secure Channels:</strong> Use only approved EHR, secure email/fax. Never use regular text or personal email for PHI.</li>
            </ul>
            <p><strong>✅ Quality Gates:</strong> Valid, complete ROI on file before any disclosure (unless a documented emergency exception). Redisclosure warning included on all Part 2 releases.</p>
            <p><strong>📍 Evidence Location:</strong> ROI Repository; Disclosure Log; Secure Transmission Receipts.</p>
            
            <h3 class="section-title">15.3 Boundaries, Dual Relationships & Social Media</h3>
            <p><strong>Purpose:</strong> To protect the single most important tool we have: the therapeutic relationship. It is not a friendship; it is a professional, clinical alliance.</p>
            <p><strong>What to Do:</strong></p>
            <ul>
                <li><strong>Boundaries:</strong> Clarify roles, time, and place. No off-the-books services. No gifts beyond stated policy.</li>
                <li><strong>Dual Relationships:</strong> Identify and avoid conflicts (family, financial, social). If unavoidable (e.g., small communities), you must consult your supervisor and document the safeguards put in place.</li>
                <li><strong>Social Media:</strong> This is a bright, clear line. We do not friend or message clients. We do not discuss cases online (even anonymously). We do not post photos without a compliant authorization.</li>
            </ul>
            <p><strong>✅ Quality Gates:</strong> Boundary breaches are reported/escalated to supervision. Corrective action is documented.</p>
            <p><strong>📍 Evidence Location:</strong> Incident/Ethics Log; Supervision Notes (Ch. 24); Signed Media Releases (if any).</p>
            <p><strong>Common Pitfalls (Fixes):</strong></p>
            <ul>
                <li><strong>Pitfall:</strong> Using an expired ROI. &rarr; <strong>Fix:</strong> Add an EHR alert; always check the date before every collateral call.</li>
                <li><strong>Pitfall:</strong> "Helpful" oversharing with a partner agency. &rarr; <strong>Fix:</strong> Use the "Minimum Necessary" rule. Ask: "What is the one piece of info they need to do their job?"</li>
                <li><strong>Pitfall:</strong> Unclear grievance steps. &rarr; <strong>Fix:</strong> Post the flow chart in all client areas. Practice the 60-second grievance script in Orientation (Ch. 5).</li>
            </ul>
        `
    },
    ch16: {
        title: "16. Critical Incidents & Post-Incident Review",
        sub: "Transforming errors from failures into curriculum.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is how we transform errors and accidents from failures into curriculum. We manage events to ensure safety, and we analyze them to ensure they only happen once.</p>
            <h3 class="section-title">16.1 Definitions & Thresholds</h3>
            <p><strong>Purpose:</strong> To create a common language for what requires immediate action.</p>
            <p><strong>Examples:</strong> Suicide attempt/threat, overdose (fatal/non-fatal), violence, abuse allegations, serious injury, elopement, data breach, environmental hazard.</p>
            <p><strong>✅ Quality Gates:</strong> Staff can identify a threshold event and initiate the correct protocol immediately.</p>
            <p><strong>📍 Evidence Location:</strong> Policy List; Pocket Card/Posted Flowchart.</p>
            <h3 class="section-title">16.2 24-Hour Reporting Rule & Notification Chain</h3>
            <p><strong>Purpose:</strong> To ensure that in a crisis, our response is fast, right, and recorded.</p>
            <p><strong>What to Do:</strong></p>
            <ol>
                <li><strong>Stabilize:</strong> Ensure immediate safety (call 911/mobile crisis if threshold is met).</li>
                <li><strong>Notify:</strong> Alert the internal chain (Supervisor &rarr; Compliance &rarr; Executive as required).</li>
                <li><strong>Document:</strong> Complete the Incident Report within 24 hours.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong> Time-stamped incident filed &le;24h. Notifications documented with times/names.</p>
            <p><strong>📍 Evidence Location:</strong> Incident Report System; Notification Log; Email/Secure Message Confirmation.</p>
            <h3 class="section-title">16.3 After-Action Review & Corrective Action Plan (CAP)</h3>
            <p><strong>Purpose:</strong> To find the root cause, not just the symptom.</p>
            <p><strong>What to Do:</strong></p>
            <ol>
                <li>Within 72 hours (or policy): Debrief with involved staff. Identify root causes.</li>
                <li>Design a CAP: Assign an owner, a due date, and a verification method.</li>
                <li><strong>Crucial Step:</strong> Update the client's Safety Plan (Ch. 10) and communicate changes to the entire team.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong> CAP created and closed on time. Safety plan was updated.</p>
            <p><strong>📍 Evidence Location:</strong> CAP Tracker (Ch. 22); Safety Plan Addendum; Supervision/PI Minutes.</p>
            <h3 class="section-title">16.4 Trend Analysis & PI Loop</h3>
            <p><strong>Purpose:</strong> To find the pattern in the events.</p>
            <p><strong>What to Do:</strong> Quarterly, review incident categories (clinical, environmental, privacy).</p>
            <p><strong>Action:</strong> Publish lessons learned. Adjust training (Ch. 26), templates (Part VIII), or policy.</p>
            <p><strong>✅ Quality Gates:</strong> Trends presented in PI (Ch. 22); actions assigned and implemented.</p>
            <p><strong>📍 Evidence Location:</strong> PI Dashboard; Training Records; Revised Template Versions (Change Log).</p>
            <p><strong>Common Pitfalls (Fixes):</strong></p>
            <ul>
                <li><strong>Pitfall:</strong> Crisis happens, but the safety plan isn't updated. &rarr; <strong>Fix:</strong> Add "Safety Plan Update" as a mandatory ✅ gate on the incident report close-out checklist.</li>
                <li><strong>Pitfall:</strong> Late reports. &rarr; <strong>Fix:</strong> The EHR/system sends an auto-alert to the responsible staff and their supervisor at the 18-hour mark.</li>
            </ul>
        `
    },
    ch17: {
        title: "17. Safety in Practice",
        sub: "Making our physical environment an extension of our clinical stance.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> Our philosophy of safety must be made physical. This chapter ensures our environment—our facilities, our vehicles, and our community presence—is an extension of our clinical stance: safe, secure, and prepared.</p>
            <h3 class="section-title">17.1 Environment & Equipment Checks</h3>
            <p><strong>Purpose:</strong> To ensure our space is always ready, safe, and welcoming.</p>
            <p><strong>What to Do:</strong> Complete daily/weekly checklists: Exits clear, alarms functional, First-Aid/Naloxone kits stocked and not expired, lighting works, secure med storage.</p>
            <p><strong>✅ Quality Gates:</strong> Checklists completed on schedule. Deficiencies corrected within timeframe.</p>
            <p><strong>📍 Evidence Location:</strong> Safety Log; Maintenance Tickets; Naloxone Log.</p>
            <p><strong>🗂 Templates:</strong> Facility Safety Checklist, Corrective Work Order.</p>
            <h3 class="section-title">17.2 De-escalation Spaces & Procedures</h3>
            <p><strong>Purpose:</strong> To have a plan and a place for de-escalation before it's needed.</p>
            <p><strong>What to Do:</strong> Identify low-stimulus areas. Train staff to invite clients to a quieter space, never to "corner" them. Call for support early.</p>
            <p><strong>✅ Quality Gates:</strong> Staff trained annually in de-escalation (Ch. 26). Space is available and free of hazards.</p>
            <p><strong>📍 Evidence Location:</strong> Training Matrix; Floor Plan; Crisis Drill Records.</p>
            <h3 class="section-title">17.3 Transport Policy (If Used)</h3>
            <p><strong>Purpose:</strong> To manage the high-risk, high-liability act of transportation.</p>
            <p><strong>What to Do:</strong> Confirm client eligibility/consent. Use two-person rule when indicated. Perform vehicle safety checks. Never use personal cars for client transport.</p>
            <p><strong>✅ Quality Gates:</strong> Driver credentials on file. Vehicle inspection log current. Consent on file.</p>
            <p><strong>📍 Evidence Location:</strong> Transport Log; Consent Forms; Vehicle Insurance/Inspection Proof.</p>
            <h3 class="section-title">17.4 Emergency Drills & Personal Safety Protocols</h3>
            <p><strong>Purpose:</strong> To build muscle memory for emergencies.</p>
            <p><strong>What to Do:</strong> Conduct drills (fire, weather, active threat, medical) per schedule. Enforce personal safety protocols (buddy system, check-in/check-out for community visits).</p>
            <p><strong>✅ Quality Gates:</strong> Drill completion on cadence. Action items closed.</p>
            <p><strong>📍 Evidence Location:</strong> Drill Log; Post-Drill CAPs; Field Visit Check-in Records.</p>
            <p><strong>Common Pitfalls (Fixes):</strong></p>
            <ul>
                <li><strong>Pitfall:</strong> Naloxone kits are present but expired. &rarr; <strong>Fix:</strong> Add a "Monthly Expiry Sweep" to the calendar for all sites.</li>
                <li><strong>Pitfall:</strong> Solo field work without check-in. &rarr; <strong>Fix:</strong> Enforce the "buddy system" or a "checkpoint" text/call protocol via a secure channel.</li>
            </ul>
        `
    },
    ch18: {
        title: "18. Utilization Management (UM) & Medical Necessity",
        sub: "The art of translating care into the language of payers.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the art of translation. Our craft is to translate the person's story of need into the language of medical necessity (ASAM/LOC) that our payers require. A strong UM case advocates for the person's right to care.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We write to show progress the person can see and a rationale a payer can approve.</li>
                <li><strong>Boundaries:</strong> We request only the level of care that meets criteria. We renew on time, every time.</li>
                <li><strong>Emotional Intelligence:</strong> We reduce the person's anxiety about approvals by explaining the process in plain language.</li>
            </ul>
            <p><strong>Who Does What:</strong></p>
            <ul>
                <li><strong>Clinician/CDCA:</strong> Draft Assessment, ASAM rationale, and Plan (Ch. 6 & 7). Write progress notes that prove linkage.</li>
                <li><strong>UM Specialist/Supervisor:</strong> Build/submit auth packets. Track expirations. Handle payer questions.</li>
                <li><strong>Peer/CM:</strong> Provide functional impact details (barriers, housing, work) that support medical necessity.</li>
            </ul>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li><strong>Admission:</strong> Confirm ASAM LOC with clear rationale (Ch. 6). Start auth if payer requires.</li>
                <li><strong>Concurrent Review:</strong> Submit timely updates before expiry. Show progress, remaining risks, and why this LOC remains appropriate.</li>
                <li><strong>Linkage Checks:</strong> Each note must show Intervention &rarr; Objective &rarr; Need.</li>
                <li><strong>Tracking:</strong> Enter auth dates in UM tracker. Set reminders &ge;3 business days before expiry.</li>
            </ol>
            <p><strong>✅ Quality Gates (How We Demonstrate):</strong></p>
            <ol>
                <li>Admission packet includes ASAM rationale and signed Plan.</li>
                <li>Renewals submitted before expiration; no service gap.</li>
                <li>Notes in review window show measurable progress or clear rationale for continued care.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Assessment (ASAM section), Treatment Plan & Reviews, UM Tracker/Calendar, Payer Approval Letters, Progress Notes.</p>
            <p><strong>Documentation Rules:</strong> Use functional language (impact on safety, housing, work, health). Avoid copy-paste.</p>
            <p><strong>TAP21 Reinforced:</strong> Documentation; Assessment/Planning; Service Coordination; Advocacy; Professional Responsibility.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch19: {
        title: "19. Pre-Bill Scrub, Claims & Denials",
        sub: "The final inspection of the Golden Thread.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the final inspection of the Golden Thread. A "clean claim" is the sound of an unbroken thread—it's proof that our Assessment, Plan, Note, and Auth all match. This protects the person's access to care and our ability to provide it.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> Our billing is honest. It reflects real, meaningful work.</li>
                <li><strong>Boundaries:</strong> This is our financial gate. If a note fails the scrub, we fix it before we bill.</li>
                <li><strong>Emotional Intelligence:</strong> We use data to coach, not shame. Billing is a learning loop, not a blame game.</li>
            </ul>
            <p><strong>Who Does What:</strong></p>
            <ul>
                <li><strong>Clinician/Peer/CM:</strong> Complete/signed notes on time with correct code/time and plan linkage.</li>
                <li><strong>Biller/QA:</strong> Run the 🗂 Pre-Bill Checklist. Work rejections &le;2 business days. Track denials and root causes.</li>
                <li><strong>Supervisor:</strong> Address patterns; assign corrective actions; update templates/training.</li>
            </ul>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li><strong>Pre-Bill Scrub (Unit-Level):</strong> ✅ Auth valid (if required)? ✅ Note complete & signed (within timeframe)? ✅ Correct code/time & POS/modifier? ✅ Plan objective ID referenced? ✅ "Golden Thread Verified" box ticked.</li>
                <li><strong>Submission:</strong> Batch on schedule; store submission receipts.</li>
                <li><strong>Rejections:</strong> Work within &le;2 business days, document fix, resubmit.</li>
                <li><strong>Denials:</strong> Categorize (Auth, Eligibility, Coding, Doc, Timing). Assign owner. Create CAP for patterns. Feed fixes upstream (to training/templates).</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>First-Pass Yield (FPY) at/above target (e.g., &ge;95%).</li>
                <li>Rejection TAT &le;2 business days.</li>
                <li>Denial rate trending down; CAPs closed on time.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Pre-Bill Checklist Log, EHR Billing Queue, Clearinghouse Reports, Rejection/Denial Dashboards, CAP Tracker.</p>
            <p><strong>Documentation Rules:</strong> No submission with missing signature/auth or wrong code/time. Corrections must leave an audit trail.</p>
            <p><strong>Common Pitfalls (Fixes):</strong></p>
            <ul>
                <li><strong>Pitfall:</strong> Unsigned notes exported. &rarr; <strong>Fix:</strong> EHR-level lock prevents export until signature is present.</li>
                <li><strong>Pitfall:</strong> Telehealth modifier missed. &rarr; <strong>Fix:</strong> Add to 🗂 Quick Code Guide at point of charge.</li>
                <li><strong>Pitfall:</strong> Unit billed with no plan link. &rarr; <strong>Fix:</strong> Make "Objective ID" a required, hard-stop field in the note.</li>
            </ul>
            <p><strong>TAP21 Reinforced:</strong> Documentation; Professional/Ethical Responsibility; Service Coordination (with billing/UM).</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
    ch20: {
        title: "20. Audit Readiness (Internal & External)",
        sub: "Proving our philosophy is our practice, on demand.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> We do not "scramble" for audits. We welcome them. An audit is not a threat; it is a mirror. It is our opportunity to prove, on demand, that our philosophy is our practice. We are audit-ready every day.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We are transparent. We can show our work, and the Golden Thread, on any chart, any day.</li>
                <li><strong>Boundaries:</strong> We follow our own standards (Ch. 13-19) consistently, so an external audit just confirms what we already know.</li>
                <li><strong>Emotional Intelligence:</strong> We frame audits as learning, not blame. A "finding" is a gift—it's a free, high-value opportunity to improve.</li>
            </ul>
            <p><strong>Who Does What:</strong></p>
            <ul>
                <li><strong>QA/Compliance:</strong> Plan sampling; score charts; issue findings; track CAPs.</li>
                <li><strong>Supervisors:</strong> Coach staff on findings; verify corrections; re-audit.</li>
                <li><strong>All Staff:</strong> Produce requested records; apply fixes.</li>
            </ul>
            <p><strong>Procedure:</strong></p>
            <ol>
                <li><strong>Sampling & Scoring:</strong> Monthly internal audits. Random sample by role/service. Score timeliness, linkage, signatures, privacy, UM alignment.</li>
                <li><strong>Feedback:</strong> Written feedback to staff & supervisor &le;5 business days.</li>
                <li><strong>Re-audit:</strong> Verify corrections next month; escalate persistent gaps.</li>
                <li><strong>Surveyor Packets:</strong> Maintain the 🗂 Evidence Index Map (Ch. 30). Be ready to pull on-demand 🗂 Chart Packets (Assessment, Plan, Notes, UM, Incidents, ROIs).</li>
                <li><strong>CAP Management:</strong> Every "finding" becomes a 🗂 CAP (Owner, Due Date, Verification). Link to training/template changes.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong></p>
            <ol>
                <li>Sample size met monthly; feedback delivered on time.</li>
                <li>Evidence Index is current; packets can be produced &le;48 hours from request.</li>
                <li>All CAPs closed by deadline; changes reflected in Current-Version templates.</li>
            </ol>
            <p><strong>📍 Evidence Location:</strong> Audit Tool & Score Sheets, Re-audit Results, 🗂 Evidence Index Map, 🗂 Chart Packet Checklist, 🗂 CAP Tracker (Ch. 22), Training Rosters, Change Log (Ch. 29).</p>
            <p><strong>Documentation Rules:</strong> Use standard filenames. Preserve version tags. Log all external disclosures.</p>
            <p><strong>Common Pitfalls (Fixes):</strong></p>
            <ul>
                <li><strong>Pitfall:</strong> The same audit finding repeats. &rarr; <strong>Fix:</strong> A "finding" that repeats is a systems failure. The fix must be a template change or a supervision drill (Ch. 24), not just another memo.</li>
                <li><strong>Pitfall:</strong> Inconsistent packets for auditors. &rarr; <strong>Fix:</strong> Standardize the binder/zip structure and filenames today using the 🗂 Chart Packet Checklist.</li>
            </ul>
            <p><strong>TAP21 Reinforced:</strong> Documentation; Professional/Ethical Responsibility; Collaboration; Continuous Improvement Mindset.</p>
            <div class="mt-8 pt-4 border-t border-slate-200 text-sm text-slate-500 italic"><strong>Note:</strong> For a complete list of forms related to this workflow, please see <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a>.</div>
        `
    },
     ch21: {
        title: "21. KPI Library & Dashboards",
        sub: "Our scoreboard for measuring what matters.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is our scoreboard. It is the art of measuring what matters. A Key Performance Indicator (KPI) is not just a number; it is a story. It's how we hold the Golden Thread up to the light to see if it’s strong, timely, and effective for the people we serve.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> Data is the proof of our progress. We celebrate real wins, backed by real numbers.</li>
                <li><strong>Boundaries:</strong> We set our targets. We own our targets. We hold ourselves to a high, clear, and non-negotiable standard.</li>
                <li><strong>Emotional Intelligence:</strong> We see data as a mirror, not a hammer. We get curious about our "misses" and coach for improvement, not blame.</li>
            </ul>
            <p><strong>Who Does What:</strong></p>
            <ul>
                <li><strong>Data/QA:</strong> Define indicators, maintain dashboards, publish monthly reports.</li>
                <li><strong>Supervisors:</strong> Review KPIs with teams (Ch. 24); trigger PI actions (Ch. 22).</li>
                <li><strong>Staff:</strong> Own your role-level metrics; submit fixes/improvements.</li>
                <li><strong>Leadership/PI Committee:</strong> Approve targets; remove barriers; align resources.</li>
            </ul>
            <h3 class="section-title">21.1 Indicator Specs (How Each KPI is Defined)</h3>
            <p>For each KPI, we document these fields in our library: Name | Formula (numerator/denominator) | Data Source (EHR field/report) | Cadence | Target | Owner | Philosophy Link (What it means for the person)</p>
            <h3 class="section-title">21.2 Our Core KPI Set (The Minimum We Must Track)</h3>
            <table>
                <thead>
                    <tr><th>KPI</th><th>Formula (Plain Language)</th><th>Source</th><th>Cadence</th><th>Target</th><th>Owner</th><th>Philosophy Link (The "Why" Behind the "What")</th></tr>
                </thead>
                <tbody>
                    <tr><td>Doc Timeliness</td><td>% of notes signed &le;24–48h</td><td>EHR Note Timestamps</td><td>Weekly</td><td>&ge;95%</td><td>Supervisor</td><td><strong>Boundaries:</strong> We keep our promises. <strong>Confidence:</strong> The person's story is current and accurate.</td></tr>
                    <tr><td>Clean-Claim / FPY</td><td>% of claims paid on first submission</td><td>Clearinghouse</td><td>Monthly</td><td>&ge;95%</td><td>Billing/QA</td><td><strong>Boundaries:</strong> We only bill what is complete and correct. <strong>EI:</strong> We avoid rework and stress.</td></tr>
                    <tr><td>Denial Rate & TAT</td><td>% denied; avg days to fix</td><td>Clearinghouse + Denial Log</td><td>Monthly</td><td>&le;3% / &le;15d</td><td>Billing/QA + Supervisors</td><td><strong>Confidence:</strong> We secure the person's access to care. <strong>Boundaries:</strong> We find and fix the root cause.</td></tr>
                    <tr><td>No-Show Rate</td><td>Missed appts &div; scheduled</td><td>EHR Scheduling</td><td>Weekly</td><td>&le;15% (prog-set)</td><td>Supervisors/CM/Peers</td><td><strong>EI:</strong> This is an engagement metric. It triggers outreach (Ch. 9) and barrier-solving.</td></tr>
                    <tr><td>Incident Timeliness</td><td>% incidents filed &le;24h</td><td>Incident System</td><td>Monthly</td><td>100%</td><td>Supervisors/Compliance</td><td><strong>Boundaries:</strong> Safety is documented first, always. <strong>Confidence:</strong> We have a transparent, rapid response.</td></tr>
                    <tr><td>Client Experience</td><td>Avg score on 3-5 item survey</td><td>Survey Tool</td><td>Quarterly</td><td>&ge;4.5/5</td><td>Program Leads</td><td><strong>EI:</strong> Did the person feel heard, safe, and respected? This is the ultimate "why."</td></tr>
                    <tr><td>Intake &rarr; Assessment Time</td><td>Avg days from intake to BPS</td><td>EHR Timestamps</td><td>Monthly</td><td>&le;7 Days</td><td>Intake/Counselors</td><td><strong>Boundaries:</strong> We honor our 7-day promise. <strong>Confidence:</strong> We build on the person's initial momentum.</td></tr>
                    <tr><td>Plan Review On-Time</td><td>% plans reviewed by due date</td><td>EHR Plan Module</td><td>Monthly</td><td>&ge;95%</td><td>Counselors/Sup.</td><td><strong>Boundaries:</strong> Our plan is a living document. <strong>Confidence:</strong> The person's progress stays visible.</td></tr>
                </tbody>
            </table>
            <p><em>(Program-specific KPIs are added as needed, e.g., Housing Placement &le;30 Days; Employment Engagement; MAT Continuity.)</em></p>
            <h3 class="section-title">21.3 Procedure (The Monthly Rhythm)</h3>
            <ol>
                <li><strong>Define/Update:</strong> Confirm specs & targets in the KPI library.</li>
                <li><strong>Collect/Validate:</strong> Pull data; spot-check 5–10 records for accuracy.</li>
                <li><strong>Publish:</strong> Post dashboards by the 5th business day (role, program, & org views).</li>
                <li><strong>Huddle:</strong> Supervisors review results with teams (Ch. 24); identify 1–2 actions.</li>
                <li><strong>PI Feed:</strong> Log all actions and owners into the PI tracker (Ch. 22).</li>
                <li><strong>Close the Loop:</strong> Re-measure next cycle; adjust targets when sustained.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong> Library entries are complete for each KPI. Reports are published on time. Each program records at least one KPI-driven action per month.</p>
            <p><strong>📍 Evidence Location:</strong> KPI Library (Spec Sheets), Dashboard Folder, Monthly KPI Summary, Huddle Notes, PI Tracker.</p>
        `
    },
     ch22: {
        title: "22. Performance Improvement (PI) Cycle",
        sub: "The engine of our craft.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the engine of our craft. If KPIs are the scoreboard (Ch. 21), then Performance Improvement (PI) is the post-game analysis and the practice plan for next week. It's the disciplined, repeatable loop we use to turn our data into decisions, and our decisions into better care.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> We have the courage to see our gaps, knowing we have the competence to fix them.</li>
                <li><strong>Boundaries:</strong> The PI loop is a boundary. It provides a clear, safe, and structured process for managing change.</li>
                <li><strong>Emotional Intelligence:</strong> We fix the process, not the person. We replace a culture of blame with a culture of curiosity.</li>
            </ul>
             <h3 class="section-title">22.1 The PI Loop (Our "ASPIRE" in Action)</h3>
            <p>This is our simple, fast, and repeatable process for all improvements.</p>
            <ol>
                <li><strong>Data:</strong> Pick one KPI that missed its target (e.g., "No-Show Rate" hit 20%).</li>
                <li><strong>Analysis:</strong> Define the problem (who/what/where/when). Find the root cause (e.g., use 5 Whys, fishbone diagram).</li>
                <li><strong>Action:</strong> Select one countermeasure (e.g., a template tweak, a new script, a reminder call, a training drill).</li>
                <li><strong>Re-measure:</strong> Compare before/after. Run at least 2 cycles to confirm the fix.</li>
                <li><strong>Standardize/Share:</strong> If it worked, update the 🗂 Template or policy (Ch. 28), add it to the Change Log (Part IX), and share the win.</li>
            </ol>
            <p><strong>✅ Quality Gates:</strong> Each program completes &ge;1 PI action/month. All PI actions have an owner, due date, and verification. Improvements are reflected in "Current-Version" templates and training.</p>
            <p><strong>📍 Evidence Location:</strong> PI Tracker (project cards), Before/After graphs, Meeting Minutes, Updated Templates, Change Log.</p>
            <h3 class="section-title">22.2 Quarterly PI Reviews (The Standing Agenda)</h3>
            <ol>
                <li><strong>Dashboard:</strong> Top 3 Org KPIs (Wins, Misses, Equity lens by site/population).</li>
                <li><strong>Golden Thread:</strong> Denials & Incidents (Root Causes, CAP status).</li>
                <li><strong>Wins:</strong> Program PI highlights (What worked? What can we spread?).</li>
                <li><strong>Risks & Resources:</strong> Review Risk Register (22.4). What's in the way?</li>
                <li><strong>Decisions:</strong> New targets, new projects, policy changes.</li>
                <li><strong>Action:</strong> Approve handbook redlines; assign new training (Ch. 26).</li>
            </ol>
            <h3 class="section-title">22.3 Publishing Wins & Course-Correcting Misses</h3>
            <ul>
                <li><strong>Wins:</strong> Are celebrated. We create a one-pager with the change, the numbers, and the story. We give shout-outs in staff huddles.</li>
                <li><strong>Misses:</strong> Are not punished; they are coached. We convert them to a short 🗂 Remediation Plan (skill drill, template edit, supervision focus) with a 30-day check-in.</li>
            </ul>
            <h3 class="section-title">22.4 The Risk Register (Seeing the Future)</h3>
            <p><strong>Purpose:</strong> To see the future. This is our formal process for scanning the horizon for clinical, financial, and operational threats—and having a plan before the storm hits.</p>
            <ul>
                <li><strong>Clinical:</strong> Recurrent high-risk events; repeated safety-plan gaps.</li>
                <li><strong>Financial:</strong> Spike in denials; payer rule changes; cash-flow threats.</li>
                <li><strong>Operational:</strong> Staffing/ratio instability; EHR outages; supply issues.</li>
                <li><strong>Compliance/Privacy:</strong> 🧭 Part 2 breaches; late ROIs; audit findings.</li>
                <li><strong>Reputation/Community:</strong> Client complaints; partner feedback.</li>
            </ul>
        `
    },
    ch23: {
        title: "23. Role Guides (One-Pagers)",
        sub: "Your specific craft and one-page schematic for your role.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This chapter defines your specific craft. It's a one-page schematic for your role. It is not a complete job description; it is your guide to what matters most. It shows you what to do today, what "done" looks like, and how to prove your work aligns with the Golden Thread and our Three Tenets.</p>
            
            <h3 class="section-title">23A. CDCA — Chemical Dependency Counselor Assistant</h3>
            <p>Content from 0.4 moved and expanded here.</p>
            
            <h3 class="section-title">23B. Peer Support (CPRS)</h3>
            <p>Content from 0.4 moved and expanded here.</p>
            
            <h3 class="section-title">23C. Intake Worker</h3>
            <p>Content from 0.4 moved and expanded here.</p>
            
            <h3 class="section-title">23D. Counselor (Licensed / LCDC / LPC/LPCC/LICDC)</h3>
            <p>Content from 0.4 moved and expanded here.</p>
            
            <h3 class="section-title">23E. Case Manager</h3>
            <p>Content from 0.4 moved and expanded here.</p>

            <h3 class="section-title">23F. Supervisor (Clinical/Program)</h3>
            <p>Content from 0.4 moved and expanded here.</p>

            <h3 class="section-title">23G. Biller / QA</h3>
            <p>Content from 0.4 moved and expanded here.</p>
        `
    },
    ch24: {
        title: "24. Supervision & Professional Development",
        sub: "The Master's Curriculum for forging new masters of the craft.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the Master's Curriculum. It’s not just about supervision; it is the guide to activating this handbook and forging new masters of the craft. Supervision is our sacred ritual for passing on the craft, inspecting the Golden Thread, and ensuring our philosophy is a practice, not just a belief.</p>
            
            <h3 class="section-title">24.1 The Supervisor's Activation Guide</h3>
            <ul>
                <li><strong>Onboarding Scavenger Hunt (Week 1):</strong>
                    <ul>
                        <li><strong>Task:</strong> "Find your 5 Core Chapters (Ch. 0.4). For one of them, identify its 🗂 Template, ✅ Quality Gate, and 📍 Evidence Location."</li>
                        <li><strong>Teach-Back:</strong> "Explain the Golden Thread to me in your own words, using a real note as an example."</li>
                    </ul>
                </li>
                <li><strong>The Golden Thread Drill (Weekly Liturgy):</strong>
                    <ul>
                        <li>This is the core of all clinical supervision.</li>
                        <li><strong>Action:</strong> "Pick one note from this week. Now, walk me backward. Show me the Objective in the Plan (Ch. 7) this note addresses. Now show me the Need in the Assessment (Ch. 6) that created that objective. Now show me the Claim (Ch. 19) this note supports."</li>
                    </ul>
                </li>
                <li><strong>Remediation (When Standards Aren't Met):</strong>
                     <ul>
                        <li><strong>Frame:</strong> "We don't blame; we fix. It looks like we've hit the 'Missing ASAM Rationale' pitfall. Let's fix it."</li>
                        <li><strong>Action:</strong> Use the 🗂 Remediation Plan template.</li>
                        <li><strong>Plan:</strong> Gap (e.g., missing rationale) &rarr; Skill Target (e.g., write ASAM rationale in 5 min) &rarr; Action (e.g., review Ch. 6, shadow me, practice 3) &rarr; Evidence (e.g., 3 passing audits) &rarr; Deadline.</li>
                    </ul>
                </li>
                <li><strong>✅ Gates:</strong> Supervision weekly; action items closed by next session; remediation completed on time.</li>
                <li><strong>📍 Evidence:</strong> Supervision notes; competency checklists; OSCE rubrics.</li>
            </ul>
        `
    },
     ch25: {
        title: "25. The Curriculum: Our Required Training Matrix",
        sub: "The map of what you must know and prove.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> To define the non-negotiable foundation of our craft. This is our curriculum for ensuring every staff member can work safely, compliantly, and confidently from Day One.</p>
            <p><strong>Philosophy Link (The Tenets):</strong></p>
            <ul>
                <li><strong>Confidence:</strong> True confidence isn't given; it's built. It's the product of practice, verification, and knowing you are prepared.</li>
                <li><strong>Boundaries:</strong> These are our guardrails. The minimum standards and due dates are non-negotiable. They protect the people we serve from untrained staff.</li>
                <li><strong>Emotional Intelligence:</strong> We embrace a learning culture. We treat "Needs Improvement" as an opportunity for coaching, not a reason for shame.</li>
            </ul>
             <h3 class="section-title">25.1 Structure (Orientation &rarr; Core &rarr; Refreshers)</h3>
             <h4>Orientation — Week 1 (All Roles)</h4>
             <ul>
                <li>Welcome & Clinical Philosophy (0.5) — 1 hr</li>
                <li>Rights/Privacy/42 CFR Pt 2 & HIPAA (Ch. 15) — 2 hrs (Verification: Quiz)</li>
                <li>Safety & Critical Incidents (Ch. 16–17) — 2 hrs (Verification: Drill)</li>
             </ul>
        `
    },
    ch26: {
        title: "26. The Crucible: Competency Checklists (Learn • Do • Show)",
        sub: "The 'final exam' for each core skill.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the "final exam" for each core skill. It's the crucible where learning becomes doing and doing becomes provable mastery. These checklists are how we ensure our skills are not just theoretical, but real, observable, and compliant with the Golden Thread.</p>
            <h3 class="section-title">26.1 MI Micro-Skills (OARS + Change Talk)</h3>
            <p>Details on learning, doing, and showing MI skills.</p>
        `
    },
    ch27: {
        title: "27. The Toolbox: Clinical & Operational Templates",
        sub: "Our inventory of standardized, pre-calibrated instruments.",
        html: `
             <h3 class="section-title">This Chapter is now Appendix A</h3>
             <p>The comprehensive, task-based inventory of all clinical and operational templates has been centralized into a single, easy-to-use appendix.</p>
             <p>This ensures that all staff—new hires, peers, CDCAs, and supervisors—have one place to look for the exact forms needed for any workflow, keeping the Golden Thread intact.</p>
             <p><strong>Please refer to <a href="#appendixA" class="text-brand-accent hover:underline">Appendix A — Task-Based Form Index</a> for the complete and current list of all handbook forms.</strong></p>
        `
    },
    ch28: {
        title: "28. The Forge: Our Living Document & Improvement Loop",
        sub: "Our formal process for making the craft itself better.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> A handbook that is not growing is a handbook that is dying. This chapter is our forge. It is our formal, non-negotiable process for making the craft itself better. When you, the craftsperson, find friction in a workflow, a broken template, or a "pitfall" that repeats, you have a professional obligation to submit an improvement.</p>
        `
    },
    ch29: {
        title: "29. Version Control & Quarterly Redlines",
        sub: "The audit trail of our craft's evolution.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> To ensure this handbook is authoritative and alive. We must have one—and only one—source of truth. This chapter defines our disciplined process for proposing, reviewing, approving, publishing, and training on every change. This is the audit trail of our craft's evolution.</p>
        `
    },
    ch30: {
        title: "30. The Surveyor’s Evidence Index",
        sub: "The Golden Thread Unrolled.",
        html: `
            <p><strong>Why This Chapter Matters:</strong> This is the Golden Thread Unrolled. It is our master schematic. This is the map we hand to an auditor, a new hire, or a supervisor to prove, in 30 seconds, that our philosophy is our practice. It is the ultimate expression of our Confidence (we are transparent) and Boundaries (we are accountable).</p>
            <h3 class="section-title">30.1 By Standard (The Auditor's "Click Map")</h3>
            <p>This index shows exactly where the proof for a given standard lives.</p>
            <table>
                <thead><tr><th>Standard (The "What")</th><th>📍 Where to Click in EHR (The "Where")</th><th>Fields That Matter (The "Proof")</th></tr></thead>
                <tbody>
                    <tr><td>Assessment completed &le;7 days</td><td>EHR &rarr; Assessments &rarr; "BPS Assessment" Note</td><td>Created Date (of Intake) vs. Completed Date (of BPS), Clinician Signature.</td></tr>
                    <tr><td>ASAM LOC rationale present</td><td>EHR &rarr; Assessments &rarr; "ASAM Worksheet"</td><td>Dimension Rationale Fields (1-6); LOC field. Plan LOC must match.</td></tr>
                </tbody>
            </table>
        `
    },
    appendixA: {
        title: "Appendix A — Task-Based Form Index",
        sub: "A centralized index of all forms, templates, and proof-of-work documents, organized by workflow.",
        html: `
            <p>This appendix centralizes every form, template, and proof-of-work document referenced in the clinical/operations handbooks. It is organized by workflow/task so new staff, peers, CDCAs, subcontractors, and supervisors can see exactly what must be completed to keep the Golden Thread intact.</p>
            <p class="callout"><strong>Source of Truth:</strong> Always pull the current version from <code>/Handbook/Templates/Current-Version/</code>. Do not use old desktop copies.</p>
        `
    }
};

export const NAVIGATION_SECTIONS: NavSection[] = [
    { label: "0 — Orientation & Philosophy", items: [
        { key: "ch01", kick: "0.1", text: "Purpose, Promise, Stance", sub: "Our why, our how, and our language" },
        { key: "ch02", kick: "0.2", text: "Your Map, Compass, Craft", sub: "How to use this handbook" },
        { key: "ch03", kick: "0.3", text: "The Schematic", sub: "Your maps to mastery" },
        { key: "ch04", kick: "0.4", text: "Role Dashboards", sub: "Your guide to the craft" },
        { key: "ch05", kick: "0.5", text: "The Soul of Our Craft", sub: "From philosophy to practice" },
    ]},
    { label: "Part I — Our Public Promise", items: [
        { key: "ch1", kick: "1.0", text: "Charter of Our Care", sub: "Scope, access, & eligibility" },
    ]},
    { label: "Part II — The 12 Core Functions", items: [
        { key: "ch3", kick: "3", text: "Screening", sub: "To be a safe harbor, not a barrier." },
        { key: "ch4", kick: "4", text: "Intake", sub: "To build the 'container' for the work." },
        { key: "ch5", kick: "5", text: "Orientation", sub: "To set the terms of our relationship." },
        { key: "ch6", kick: "6", text: "Assessment", sub: "To listen for the story behind the symptoms." },
        { key: "ch7", kick: "7", text: "Treatment Planning", sub: "To turn the 'why' into a 'how.'" },
        { key: "ch8", kick: "8", text: "Counseling", sub: "To walk the map." },
        { key: "ch9", kick: "9", text: "Case Management", sub: "To be the advocate and barrier-buster." },
        { key: "ch10", kick: "10", text: "Crisis Intervention", sub: "To be the anchor in the storm." },
        { key: "ch11", kick: "11", text: "Client Education", sub: "To give tools, not just talk." },
        { key: "ch12", kick: "12", text: "Referral", sub: "To execute a perfect, warm handoff." },
        { key: "ch13", kick: "13", text: "Reports & Record Keeping", sub: "To be the faithful, honest storyteller." },
        { key: "ch14", kick: "14", text: "Consultation", sub: "To practice humility." },
    ]},
    { label: "Part III — Rights, Privacy & Boundaries", items: [
        { key: "ch15", kick: "15", text: "Rights, Privacy & Boundaries" },
        { key: "ch16", kick: "16", text: "Critical Incidents & Review" },
        { key: "ch17", kick: "17", text: "Safety in Practice" },
    ]},
    { label: "Part IV — Documentation & Revenue", items: [
        { key: "ch18", kick: "18", text: "UM & Medical Necessity" },
        { key: "ch19", kick: "19", text: "Pre-Bill, Claims & Denials" },
        { key: "ch20", kick: "20", text: "Audit Readiness" },
    ]},
    { label: "Part V — Quality & Improvement", items: [
        { key: "ch21", kick: "21", text: "KPI Library & Dashboards" },
        { key: "ch22", kick: "22", text: "Performance Improvement (PI) Cycle" },
    ]},
    { label: "Part VI — Roles, Supervision & Mastery", items: [
        { key: "ch23", kick: "23", text: "Role Guides (One-Pagers)" },
        { key: "ch24", kick: "24", text: "Supervision & Prof. Development" },
    ]},
    { label: "Part VII — Training & Verification", items: [
        { key: "ch25", kick: "25", text: "The Curriculum: Training Matrix" },
        { key: "ch26", kick: "26", text: "The Crucible: Competency Checklists" },
    ]},
    { label: "Part VIII — Tools & The Forge", items: [
        { key: "ch27", kick: "27", text: "The Toolbox: Templates" },
        { key: "ch28", kick: "28", text: "The Forge: Improvement Loop" },
    ]},
    { label: "Part IX — Governance & Evidence", items: [
        { key: "ch29", kick: "29", text: "Version Control & Redlines" },
        { key: "ch30", kick: "30", text: "The Surveyor’s Evidence Index" },
    ]},
    { label: "Appendices", items: [
        { key: "appendixA", kick: "A", text: "Task-Based Form Index", sub: "All forms, templates, and tools by workflow" },
    ]}
];

const ALL_FORMS_HTML = [
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Screening Form (Brief SUD/MH Screen)</h2>
    <div class="columns"><p><strong>Client Name / ID:</strong><span class="line" style="width:70%"></span></p><p><strong>Date of Birth:</strong><span class="line" style="width:55%"></span></p><p><strong>Date of Contact:</strong><span class="line" style="width:55%"></span></p><p><strong>Time of Contact:</strong><span class="line" style="width:50%"></span></p><p><strong>Contact Location (phone / walk-in / community):</strong><span class="line" style="width:75%"></span></p><p><strong>Staff Name & Credentials:</strong><span class="line" style="width:80%"></span></p></div><p><strong>Screening Tool Used (e.g., DAST, ASSIST):</strong><span class="line" style="width:75%"></span></p><div class="section"><div class="legend">Tool Items/Responses & Score</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">Disposition</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Proceed to Intake</span></label><label class="chk"><span class="cb"></span><span>Refer to [Program/Agency] __________________</span></label><label class="chk"><span class="cb"></span><span>No further service indicated</span></label></div></div><div class="section"><div class="legend">If referred out, document who/what/how provided to the individual</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 1 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Suicide Risk Screening (C-SSRS or Approved Tool)</h2>
    <div class="columns"><p><strong>Client Name / ID:</strong><span class="line" style="width:70%"></span></p><p><strong>Screen Date/Time:</strong><span class="line" style="width:60%"></span></p><p><strong>Tool Administered:</strong><span class="line" style="width:70%"></span></p><p><strong>Administered by (Name/Credentials):</strong><span class="line" style="width:80%"></span></p></div><div class="section"><div class="legend">All required items completed (summarize key responses)</div><div class="box" style="height:132px"></div></div><p><strong>Assigned Risk Level (Low / Moderate / High):</strong><span class="line" style="width:60%"></span></p><div class="section"><div class="legend">Immediate Action / Safety Step taken</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 2 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Warm‑Handoff Script / Log</h2>
    <div class="columns"><p><strong>Caller/Client Name:</strong><span class="line" style="width:70%"></span></p><p><strong>Client Contact Info:</strong><span class="line" style="width:80%"></span></p><p><strong>Date of Handoff:</strong><span class="line" style="width:60%"></span></p><p><strong>Time of Handoff:</strong><span class="line" style="width:60%"></span></p><p><strong>Staff Receiving (Name/Title):</strong><span class="line" style="width:85%"></span></p><p><strong>Staff Accepting (Name/Title):</strong><span class="line" style="width:85%"></span></p></div><div class="section"><div class="legend">Reason for Handoff</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Eligible for BPS Assessment / Intake</span></label><label class="chk"><span class="cb"></span><span>Requesting Peer Support</span></label><label class="chk"><span class="cb"></span><span>Transfer to Assigned Case Manager</span></label><label class="chk"><span class="cb"></span><span>Crisis / De‑escalation</span></label><label class="chk"><span class="cb"></span><span>Administrative / Scheduling</span></label><label class="chk"><span class="cb"></span><span>Other: __________________</span></label></div></div><div class="section"><div class="legend">Timeframe for Next Contact</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Live transfer now</span></label><label class="chk"><span class="cb"></span><span>Call back within 1 hour</span></label><label class="chk"><span class="cb"></span><span>Call back within 24 hours</span></label><label class="chk"><span class="cb"></span><span>Appointment scheduled for: __________</span></label></div></div><div class="section"><div class="legend">Notes</div><div class="box" style="height:88px"></div></div>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 3 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Community Crisis & Resource Card</h2>
    <p class="note">Provide to the individual and document provision in Screening Note/EHR.</p><div class="section"><div class="legend">Immediate Crisis Support (local 24/7, 988, Mobile Crisis, DV hotline, etc.)</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">SUD/MH Access Lines (County CAP, SAMHSA 1‑800‑662‑HELP, AA/NA)</div><div class="box" style="height:110px"></div></div><p><strong>Version / Date:</strong><span class="line" style="width:40%"></span></p>
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 4 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Screening Note (EHR)</h2>
    <div class="section"><div class="legend">Presenting Problem (client's own words)</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">Tools Used & Results (e.g., C‑SSRS, brief screen)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Immediate Risk (SI/HI) & Actions Taken</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Final Disposition & Follow‑up Plan</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 5 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 1. Screening & First Contact</div>
        <div><strong>Form Code:</strong> 1.6</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Referral / Intake Eligibility Precheck</h2>
    <div class="section"><div class="legend">Payer/Coverage Verified</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Yes</span></label><label class="chk"><span class="cb"></span><span>No – follow‑up required</span></label></div></div><div class="section"><div class="legend">Residency/Age/Program Criteria Confirmed (notes)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">Final Decision</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Eligible for BPS Assessment</span></label><label class="chk"><span class="cb"></span><span>Ineligible – referred to: __________________</span></label></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 6 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Intake Checklist (Day 1)</h2>
    <div class="columns"><p><strong>Client Name / ID:</strong><span class="line" style="width:70%"></span></p><p><strong>Intake Date:</strong><span class="line" style="width:55%"></span></p></div><table class="table"><thead><tr><th>Required Form</th><th>Date Received</th><th>Staff Initials</th></tr></thead><tbody><tr><td>Client Rights Acknowledgment</td><td></td><td></td></tr><tr><td>Notice of Privacy Practices & 42 CFR Part 2 Ack.</td><td></td><td></td></tr><tr><td>Release(s) of Information (as indicated)</td><td></td><td></td></tr><tr><td>Financial Responsibility / Sliding Scale</td><td></td><td></td></tr><tr><td>Medicaid/Payer Eligibility Verification</td><td></td><td></td></tr><tr><td>Demographic & Accessibility/Languages</td><td></td><td></td></tr><tr><td>Orientation Appointment / Next Session</td><td></td><td></td></tr><tr><td>Telehealth Consent (if applicable)</td><td></td><td></td></tr></tbody></table><p><strong>Final Attestation – Intake Packet Complete (Name/Title):</strong><span class="line" style="width:80%"></span></p>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 7 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Client Rights Acknowledgment</h2>
    <div class="section"><div class="legend">Summary of Rights (attach full policy or reference location)</div><div class="box" style="height:110px"></div></div><p><strong>Client Rights Officer (Name/Contact):</strong><span class="line" style="width:80%"></span></p><div class="section"><div class="legend">Acknowledgment</div><div class="checks one"><label class="chk"><span class="cb"></span><span>I received and understand my rights</span></label><label class="chk"><span class="cb"></span><span>I understand the complaint/grievance process</span></label><label class="chk"><span class="cb"></span><span>I was offered a copy</span></label></div></div>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 8 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Notice of Privacy Practices & 42 CFR Part 2 Acknowledgment</h2>
    <div class="section"><div class="legend">Key points reviewed (attach notice)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Interpreter/Reader used</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Yes</span></label><label class="chk"><span class="cb"></span><span>No</span></label></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 9 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Release of Information (ROI)</h2>
    <div class="columns"><p><strong>Client Name / DOB / ID:</strong><span class="line" style="width:85%"></span></p><p><strong>Disclose To / Obtain From (Specific Person/Agency):</strong><span class="line" style="width:85%"></span></p><p><strong>Purpose of Disclosure (e.g., care coordination, payment):</strong><span class="line" style="width:85%"></span></p><p><strong>Information to be Disclosed (be specific):</strong><span class="line" style="width:85%"></span></p><p><strong>Expiration (date or event):</strong><span class="line" style="width:65%"></span></p></div><p class="note">Client may revoke in writing at any time except to the extent already relied upon.</p>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 10 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Financial Responsibility / Fee / Sliding‑Scale Acknowledgment</h2>
    <div class="columns"><p><strong>Payer/MCO (or Self‑Pay):</strong><span class="line" style="width:70%"></span></p><p><strong>Member ID:</strong><span class="line" style="width:55%"></span></p><p><strong>Client Responsibility (e.g., $0 copay):</strong><span class="line" style="width:70%"></span></p><p><strong>Sliding Scale Result (attach calc if used):</strong><span class="line" style="width:75%"></span></p></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 11 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.6</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Payer / Medicaid Eligibility Verification Sheet</h2>
    <div class="columns"><p><strong>Client Name:</strong><span class="line" style="width:70%"></span></p><p><strong>Date of Birth:</strong><span class="line" style="width:60%"></span></p></div><div class="columns"><p><strong>Date of Verification:</strong><span class="line" style="width:60%"></span></p><p><strong>Time of Verification:</strong><span class="line" style="width:60%"></span></p><p><strong>System Used (e.g., MITS):</strong><span class="line" style="width:70%"></span></p><p><strong>Staff Initials:</strong><span class="line" style="width:50%"></span></p></div><p><strong>Plan Name:</strong><span class="line" style="width:70%"></span></p><p><strong>Client Member ID:</strong><span class="line" style="width:70%"></span></p><div class="section"><div class="legend">Coverage Status</div><div class="checks one"><label class="chk"><span class="cb"></span><span>Active</span></label><label class="chk"><span class="cb"></span><span>Inactive/Terminated</span></label><label class="chk"><span class="cb"></span><span>Pending</span></label></div></div><div class="section"><div class="legend">Prior Authorization Requirements / Notes</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 12 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.7</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Demographic & Accessibility / Languages Form</h2>
    <div class="columns"><p><strong>Address:</strong><span class="line" style="width:85%"></span></p><p><strong>Phone / Email:</strong><span class="line" style="width:85%"></span></p><p><strong>Emergency Contact (Name/Phone/Relation):</strong><span class="line" style="width:85%"></span></p><p><strong>Preferred Language:</strong><span class="line" style="width:60%"></span></p><p><strong>Interpreter Needed:</strong><span class="line" style="width:45%"></span></p><p><strong>Accessibility/Disability Needs:</strong><span class="line" style="width:85%"></span></p></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 13 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.8</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Orientation Appointment Record / Next‑Session Ticket</h2>
    <div class="columns"><p><strong>Service Type (BPS / IOP / Group / Orientation):</strong><span class="line" style="width:85%"></span></p><p><strong>Date & Time:</strong><span class="line" style="width:60%"></span></p><p><strong>Staff (Name/Title):</strong><span class="line" style="width:75%"></span></p></div><p class="note">Provide copy to client; retain in chart.</p>
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 14 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 2. Intake & Admission</div>
        <div><strong>Form Code:</strong> 2.9</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Telehealth Consent</h2>
    <div class="section"><div class="legend">Platforms used; risks/benefits explained; privacy limitations</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">Consent</div><div class="checks one"><label class="chk"><span class="cb"></span><span>I agree to receive services via telehealth</span></label></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 15 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 3. Orientation</div>
        <div><strong>Form Code:</strong> 3.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Program Orientation Checklist</h2>
    <div class="section"><div class="legend">Topics Reviewed</div><div class="checks one"><label class="chk"><span class="cb"></span><span>Program hours & attendance policy</span></label><label class="chk"><span class="cb"></span><span>Drug testing rules</span></label><label class="chk"><span class="cb"></span><span>Emergency/evacuation procedures</span></label><label class="chk"><span class="cb"></span><span>Client rights & grievance</span></label><label class="chk"><span class="cb"></span><span>House rules / behavioral expectations</span></label></div></div>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 16 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 3. Orientation</div>
        <div><strong>Form Code:</strong> 3.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Client Handbook Acknowledgment Receipt</h2>
    <div class="section"><div class="legend">Acknowledgment</div><div class="checks one"><label class="chk"><span class="cb"></span><span>I received the Client Handbook</span></label><label class="chk"><span class="cb"></span><span>I had the opportunity to ask questions</span></label></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 17 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 3. Orientation</div>
        <div><strong>Form Code:</strong> 3.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Safety/Emergency & After‑Hours Briefing Note</h2>
    <div class="section"><div class="legend">Emergency & evacuation procedures reviewed (summary)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">After‑hours & crisis contact numbers provided</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 18 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 3. Orientation</div>
        <div><strong>Form Code:</strong> 3.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Grievance/Complaint Process Acknowledgment</h2>
    <div class="section"><div class="legend">How to file & with whom (Client Rights Officer contact)</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 19 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 3. Orientation</div>
        <div><strong>Form Code:</strong> 3.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">House Rules / Attendance Policy (IOP/PHP/Residential)</h2>
    <div class="section"><div class="legend">Rules reviewed with client (attach versioned rules)</div><div class="box" style="height:132px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 20 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 4. Assessment & Diagnostics</div>
        <div><strong>Form Code:</strong> 4.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Biopsychosocial (BPS) Assessment Form</h2>
    <div class="section"><div class="legend">Referral Reason & Presenting Problem (client words)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">SUD History / MH History / Medications</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">Family/Social, Housing, Legal, Employment/Financial</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">Recovery Supports / Strengths</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Screens (PHQ‑9 / GAD‑7 / Trauma, etc.) & results</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">ASAM Dimensions 1–6 Summary (or see 4.2)</div><div class="box" style="height:132px"></div></div><p><strong>Diagnostic Impression (DSM‑5/ICD‑10 codes):</strong><span class="line" style="width:85%"></span></p>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 21 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 4. Assessment & Diagnostics</div>
        <div><strong>Form Code:</strong> 4.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">ASAM Worksheet w/ Prompts</h2>
    <div class="section"><div class="legend">D1. Acute Intoxication / Withdrawal Potential (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">D2. Biomedical Conditions (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">D3. Emotional/Behavioral/Cognitive (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">D4. Readiness to Change (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">D5. Relapse/Continued Use/Problem Potential (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">D6. Recovery Environment (0–4 + rationale)</div><div class="box" style="height:66px"></div></div><p><strong>Final Level of Care Recommendation:</strong><span class="line" style="width:80%"></span></p><div class="section"><div class="legend">Clear rationale linking dimensions to LOC</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 22 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 4. Assessment & Diagnostics</div>
        <div><strong>Form Code:</strong> 4.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Co‑Occurring / MH Screens (PHQ‑9, GAD‑7, etc.)</h2>
    <div class="section"><div class="legend">Tool(s) Used, Scores & Interpretation</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">Plan to address positive screens</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 23 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 4. Assessment & Diagnostics</div>
        <div><strong>Form Code:</strong> 4.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Risk / Safety Addendum</h2>
    <div class="section"><div class="legend">Risk identified (SI/HI/Overdose/DV etc.)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Action taken (safety plan, crisis referral, supervisor consult)</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 24 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 4. Assessment & Diagnostics</div>
        <div><strong>Form Code:</strong> 4.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Assessment‑to‑Plan Appointment / Tasking Note</h2>
    <p><strong>Treatment Planning Session Date/Time:</strong><span class="line" style="width:70%"></span></p><p><strong>Assigned Staff to Write/Approve Plan:</strong><span class="line" style="width:80%"></span></p><p><strong>Plan Due Date (per payer/program rules):</strong><span class="line" style="width:70%"></span></p>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 25 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 5. Treatment Planning & Reviews</div>
        <div><strong>Form Code:</strong> 5.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Treatment / Individual Service Plan (Tx Plan)</h2>
    <div class="section"><div class="legend">Problem Statements (derived from BPS; client‑centered)</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">SMART Goals & Objectives</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">Services/Interventions (freq/provider/location)</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">Client Participation & Agreement</div><div class="box" style="height:66px"></div></div><p><strong>Plan Review Date:</strong><span class="line" style="width:45%"></span></p>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 26 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 5. Treatment Planning & Reviews</div>
        <div><strong>Form Code:</strong> 5.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Plan Review / Plan Update</h2>
    <p><strong>Original Plan Date(s):</strong><span class="line" style="width:60%"></span></p><div class="section"><div class="legend">Progress by Goal/Objectives</div><div class="box" style="height:132px"></div></div><div class="section"><div class="legend">Changes to Services / LOC / Goals</div><div class="box" style="height:88px"></div></div><p><strong>New Review/Expiration Date:</strong><span class="line" style="width:60%"></span></p>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 27 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 5. Treatment Planning & Reviews</div>
        <div><strong>Form Code:</strong> 5.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Medical Necessity Statement</h2>
    <p><strong>Diagnosis (codes):</strong><span class="line" style="width:70%"></span></p><div class="section"><div class="legend">Functional/Clinical Impairments</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">How requested services will reduce symptoms & improve function</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 28 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 5. Treatment Planning & Reviews</div>
        <div><strong>Form Code:</strong> 5.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Signature Page (Consolidated)</h2>
    <div class="section"><div class="legend">Associated Plan/Document Reference</div><div class="box" style="height:44px"></div></div>
        <div class="sig-grid two">
          <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
          <div><div class="sigline"></div><div class="siglbl">Date/Time</div></div>
        </div>
        
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 29 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 6. Counseling / Group / Family Service Notes</div>
        <div><strong>Form Code:</strong> 6.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Individual Counseling Note (SOAP / DA(R)P)</h2>
    <div class="columns"><p><strong>Date of Service:</strong><span class="line" style="width:55%"></span></p><p><strong>Start / Stop Time:</strong><span class="line" style="width:55%"></span></p><p><strong>Location (in‑person/telehealth):</strong><span class="line" style="width:70%"></span></p><p><strong>Service Code:</strong><span class="line" style="width:45%"></span></p></div><p><strong>Linked Tx Plan Goal/Objective:</strong><span class="line" style="width:85%"></span></p><div class="section"><div class="legend">S: Subjective (client report)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">O: Objective (observations/ME)</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">A or R: Assessment/Response</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">P: Plan / Next Steps</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 30 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 6. Counseling / Group / Family Service Notes</div>
        <div><strong>Form Code:</strong> 6.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Group Roster (Attendance + Facilitator)</h2>
    <p><strong>Group Name / Topic:</strong><span class="line" style="width:80%"></span></p><div class="columns"><p><strong>Date:</strong><span class="line" style="width:45%"></span></p><p><strong>Start / Stop Time:</strong><span class="line" style="width:55%"></span></p></div><table class="table"><thead><tr><th>#</th><th>Participant Name</th><th>Signature / Initials</th></tr></thead><tbody><tr><td>1</td><td></td><td></td></tr><tr><td>2</td><td></td><td></td></tr><tr><td>3</td><td></td><td></td></tr><tr><td>4</td><td></td><td></td></tr><tr><td>5</td><td></td><td></td></tr><tr><td>6</td><td></td><td></td></tr><tr><td>7</td><td></td><td></td></tr><tr><td>8</td><td></td><td></td></tr><tr><td>9</td><td></td><td></td></tr><tr><td>10</td><td></td><td></td></tr><tr><td>11</td><td></td><td></td></tr><tr><td>12</td><td></td><td></td></tr><tr><td>13</td><td></td><td></td></tr><tr><td>14</td><td></td><td></td></tr><tr><td>15</td><td></td><td></td></tr></tbody></table><p><strong>Facilitator (Name/Signature):</strong><span class="line" style="width:80%"></span></p>
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 31 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 6. Counseling / Group / Family Service Notes</div>
        <div><strong>Form Code:</strong> 6.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Group Note (Facilitator)</h2>
    <p><strong>Topic / Intervention:</strong><span class="line" style="width:85%"></span></p><p><strong>Curriculum Objective (see 6.5):</strong><span class="line" style="width:85%"></span></p><div class="section"><div class="legend">Description of Process, Activities, Participation</div><div class="box" style="height:110px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 32 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 6. Counseling / Group / Family Service Notes</div>
        <div><strong>Form Code:</strong> 6.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Family / Collateral Session Note</h2>
    <div class="section"><div class="legend">ROI on file for collateral contact</div><div class="checks two"><label class="chk"><span class="cb"></span><span>Yes</span></label><label class="chk"><span class="cb"></span><span>No – obtain before disclosure</span></label></div></div><div class="section"><div class="legend">Purpose of Contact / Content / Outcome</div><div class="box" style="height:110px"></div></div><div class="section"><div class="legend">Next Steps / Follow‑up</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 33 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 6. Counseling / Group / Family Service Notes</div>
        <div><strong>Form Code:</strong> 6.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Group / Curriculum Outline</h2>
    <div class="section"><div class="legend">Program / Series Title</div><div class="box" style="height:44px"></div></div><table class="table"><thead><tr><th>Session #</th><th>Title</th><th>Objective</th><th>Materials/Handouts</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td></tr></tbody></table><p><strong>Facilitator(s):</strong><span class="line" style="width:70%"></span></p><p><strong>Version / Date:</strong><span class="line" style="width:45%"></span></p>
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 34 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.1</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Consent for Peer Recovery Services</h2>
    <div class="section"><div class="legend">Consent</div><div class="checks one"><label class="chk"><span class="cb"></span><span>Peer role explained (lived experience, advocacy, linkage)</span></label><label class="chk"><span class="cb"></span><span>Services are voluntary</span></label></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 35 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.2</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Case Management Contact Log</h2>
    <table class="table"><thead><tr><th>Date</th><th>Time</th><th>Type (phone/in‑person)</th><th>Issue</th><th>Action Taken</th><th>Outcome / Next Step</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 36 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.3</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Referral Tracker (Closed‑Loop)</h2>
    <table class="table"><thead><tr><th>Referral Target</th><th>Date Sent</th><th>Follow‑up Date</th><th>Outcome</th></tr></thead><tbody><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr><tr><td></td><td></td><td></td><td>Enrolled / Waitlisted / Declined / Appt set</td></tr></tbody></table>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 37 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.4</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Peer Support Contact / Coaching Note</h2>
    <p><strong>Recovery Goal / Topic:</strong><span class="line" style="width:80%"></span></p><div class="section"><div class="legend">Service delivered (skill‑building, linkage, advocacy)</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Client participation / response</div><div class="box" style="height:66px"></div></div><div class="section"><div class="legend">Next recovery task / step</div><div class="box" style="height:66px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 38 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.5</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Current ROI List / ROI Verification</h2>
    <table class="table"><thead><tr><th>Entity</th><th>Start Date</th><th>Expiration</th><th>Purpose</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table>
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 39 of 78</div>
    </div>
    </section>`,
`<section class="page">
    <div class="header">
      <div class="brand">
        <div class="logo">R1</div>
        <div>
          <div class="h1">Reach One Recovery Services</div>
          <div class="muted">434 Forest Ave, Cincinnati, Ohio 45229 • (513) 667-3654 • contact@reach1recovery.com</div>
        </div>
      </div>
      <div class="meta">
        <div><strong>Appendix A</strong> • 7. Case Management & Peer Services</div>
        <div><strong>Form Code:</strong> 7.6</div>
        <div><strong>Date:</strong> <span class="today">2025-11-10</span></div>
      </div>
    </div>
    <h2 class="title">Staffing / Case Conference Note</h2>
    <p><strong>Date / Time:</strong><span class="line" style="width:55%"></span></p><div class="section"><div class="legend">Attendees (names/titles)</div><div class="box" style="height:44px"></div></div><div class="section"><div class="legend">Issues discussed</div><div class="box" style="height:88px"></div></div><div class="section"><div class="legend">Decisions & tasks with owners</div><div class="box" style="height:88px"></div></div>
    <div class="sig-grid">
      <div><div class="sigline"></div><div class="siglbl">Staff Signature</div></div>
    </div>
    
    <div class="footer">
      <div>Source of Truth: /Handbook/Templates/Current-Version/ • Do not use desktop copies</div>
      <div>Form 40 of 78</div>
    </div>
    </section>`
// FIX: Corrected syntax error by closing the array and removing invalid content.
];

// FIX: Generated and exported FORMS_DATA to resolve import error in App.tsx
// This also handles cases where form HTML is not yet provided.
export const FORMS_DATA: HandbookData = {};

const allForms: {key: string, title: string, sectionTitle: string}[] = APPENDIX_STRUCTURE.flatMap(section => 
    section.forms.map(form => ({ key: form.key, title: form.title, sectionTitle: section.title }))
);

allForms.forEach((form, index) => {
    if (index < ALL_FORMS_HTML.length) {
        FORMS_DATA[form.key] = {
            title: form.title,
            sub: form.sectionTitle,
            html: ALL_FORMS_HTML[index],
        };
    } else {
        FORMS_DATA[form.key] = {
            title: form.title,
            sub: form.sectionTitle,
            html: `<div class="p-8 text-center text-slate-500"><h2>${form.title}</h2><p>Form content is not available yet.</p></div>`,
        };
    }
});
