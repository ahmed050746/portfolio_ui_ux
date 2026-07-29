import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  BookOpen,
  BarChart3,
  Settings,
  Bell,
  Search,
  TrendingUp,
  GraduationCap,
  Activity,
  Video,
  AlertTriangle,
  Heart,
  Stethoscope,
  DollarSign,
  UserCog,
  Camera,
  PlayCircle,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Shared small atoms                                                 */
/* ------------------------------------------------------------------ */

function Avatar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-gradient-to-br from-primary-400 to-ink-700 ${className}`}
    />
  );
}

function Bar({ h = 24, w = 'w-full' }: { h?: number; w?: string }) {
  return (
    <div className={`${w} rounded-md bg-ink-100`} style={{ height: h }} />
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold text-primary-600">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  LMS Dashboard mockup                                               */
/* ------------------------------------------------------------------ */

export function LmsDashboardMockup() {
  const nav = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Students' },
    { icon: BookOpen, label: 'Courses' },
    { icon: CalendarCheck, label: 'Attendance' },
    { icon: FileText, label: 'Assignments' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
  ];
  return (
    <div className="flex h-full w-full overflow-hidden bg-ink-50">
      {/* Sidebar */}
      <div className="hidden w-[58px] flex-col items-center gap-5 bg-ink-900 py-4 sm:flex">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-400">
          <GraduationCap className="h-4 w-4 text-white" />
        </div>
        {nav.map((n) => (
          <div
            key={n.label}
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              n.active ? 'bg-primary-400/20 text-primary-300' : 'text-ink-300'
            }`}
          >
            <n.icon className="h-4 w-4" />
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3">
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="h-2.5 w-24 rounded bg-ink-300" />
            <div className="mt-1 h-1.5 w-16 rounded bg-ink-200" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 items-center gap-1 rounded-md bg-white px-2 shadow-soft">
              <Search className="h-3 w-3 text-ink-400" />
              <div className="h-1.5 w-10 rounded bg-ink-100" />
            </div>
            <Bell className="h-4 w-4 text-ink-400" />
            <Avatar className="h-6 w-6" />
          </div>
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Students', value: '1,248', up: '+12%' },
            { label: 'Courses', value: '86', up: '+4' },
            { label: 'Completion', value: '92%', up: '+3%' },
            { label: 'Revenue', value: '$48k', up: '+18%' },
          ].map((s) => (
            <div key={s.label} className="rounded-lg bg-white p-2 shadow-soft">
              <div className="h-1.5 w-10 rounded bg-ink-100" />
              <div className="mt-1.5 h-3 w-12 rounded bg-ink-800" />
              <div className="mt-1">
                <Pill>
                  <TrendingUp className="h-2 w-2" /> {s.up}
                </Pill>
              </div>
            </div>
          ))}
        </div>
        {/* Chart + list */}
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded-lg bg-white p-3 shadow-soft">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-20 rounded bg-ink-300" />
              <div className="flex gap-1">
                <div className="h-4 w-8 rounded bg-primary-100" />
                <div className="h-4 w-8 rounded bg-ink-100" />
              </div>
            </div>
            <div className="flex h-20 items-end gap-1.5">
              {[40, 65, 50, 80, 55, 90, 70, 100, 60, 85, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary-300 to-primary-400"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-soft">
            <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
            <div className="space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <Avatar className="h-5 w-5" />
                  <div className="flex-1">
                    <Bar h={6} />
                    <div className="mt-1 h-1.5 w-12 rounded bg-ink-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Student Management                                                 */
/* ------------------------------------------------------------------ */

export function StudentManagementMockup() {
  const rows = [
    { name: 'Aarav Sharma', course: 'UX Fundamentals', status: 'Active' },
    { name: 'Priya Patel', course: 'Data Science', status: 'Active' },
    { name: 'Rohan Mehta', course: 'Web Dev', status: 'Paused' },
    { name: 'Ananya Rao', course: 'Product Design', status: 'Active' },
    { name: 'Kabir Singh', course: 'Cloud Eng.', status: 'Active' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-32 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-20 rounded bg-ink-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-lg bg-primary-400" />
          <div className="h-7 w-7 rounded-lg bg-white shadow-soft" />
        </div>
      </div>
      <div className="mb-2 flex gap-2">
        {['All', 'Active', 'Paused', 'Graduated'].map((t, i) => (
          <div
            key={t}
            className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
              i === 0 ? 'bg-ink-900 text-white' : 'bg-white text-ink-500'
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden rounded-xl bg-white shadow-soft">
        <div className="grid grid-cols-12 gap-2 border-b border-ink-100 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-ink-400">
          <div className="col-span-5">Student</div>
          <div className="col-span-4">Course</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1" />
        </div>
        {rows.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-12 items-center gap-2 border-b border-ink-50 px-3 py-2 last:border-0"
          >
            <div className="col-span-5 flex items-center gap-2">
              <Avatar className="h-6 w-6" />
              <div>
                <div className="h-2 w-24 rounded bg-ink-700" />
                <div className="mt-1 h-1.5 w-16 rounded bg-ink-100" />
              </div>
            </div>
            <div className="col-span-4">
              <div className="h-2 w-20 rounded bg-ink-200" />
            </div>
            <div className="col-span-2">
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  r.status === 'Active'
                    ? 'bg-primary-50 text-primary-600'
                    : 'bg-amber-50 text-amber-600'
                }`}
              >
                {r.status}
              </span>
            </div>
            <div className="col-span-1 flex justify-end">
              <div className="h-5 w-5 rounded bg-ink-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Attendance                                                         */
/* ------------------------------------------------------------------ */

export function AttendanceMockup() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-28 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-16 rounded-lg bg-white shadow-soft" />
          <div className="h-7 w-16 rounded-lg bg-primary-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
          <div className="flex items-center justify-center">
            <div className="relative h-24 w-24">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#eef0f5"
                  strokeWidth="3.5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#ff5c2e"
                  strokeWidth="3.5"
                  strokeDasharray="89 100"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-4 w-10 rounded bg-ink-800" />
                <div className="mt-1 h-1.5 w-8 rounded bg-ink-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
          <div className="grid grid-cols-7 gap-1.5">
            {days.map((d, i) => (
              <div key={i} className="text-center">
                <div className="text-[8px] font-semibold text-ink-400">{d}</div>
                <div
                  className={`mx-auto mt-1 h-6 w-6 rounded-md ${
                    i < 5
                      ? 'bg-primary-400'
                      : 'bg-ink-100'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-2 flex-1 rounded bg-ink-100" />
                <div className="h-2 w-8 rounded bg-primary-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Assignments                                                        */
/* ------------------------------------------------------------------ */

export function AssignmentsMockup() {
  const items = [
    { t: 'Wireframe Submission', d: 'Due tomorrow', c: 'bg-rose-50 text-rose-600' },
    { t: 'Usability Test Report', d: 'Due in 3 days', c: 'bg-amber-50 text-amber-600' },
    { t: 'Prototype Review', d: 'Submitted', c: 'bg-primary-50 text-primary-600' },
    { t: 'Design System Doc', d: 'Due in 5 days', c: 'bg-ink-100 text-ink-500' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-28 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink-200" />
        </div>
        <div className="h-7 w-24 rounded-lg bg-primary-400" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Pending', v: '12' },
          { l: 'Submitted', v: '48' },
          { l: 'Graded', v: '36' },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-white p-2.5 shadow-soft">
            <div className="h-2 w-12 rounded bg-ink-200" />
            <div className="mt-1.5 h-4 w-8 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 space-y-2 overflow-hidden">
        {items.map((it) => (
          <div
            key={it.t}
            className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-soft"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-100">
              <FileText className="h-4 w-4 text-ink-500" />
            </div>
            <div className="flex-1">
              <div className="h-2.5 w-32 rounded bg-ink-700" />
              <div className="mt-1 h-1.5 w-20 rounded bg-ink-100" />
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${it.c}`}
            >
              {it.d}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Courses grid                                                       */
/* ------------------------------------------------------------------ */

export function CoursesMockup() {
  const courses = [
    { t: 'UX Fundamentals', l: '12 lessons', c: 'from-primary-400 to-primary-600' },
    { t: 'Design Systems', l: '8 lessons', c: 'from-ink-700 to-ink-900' },
    { t: 'Prototyping', l: '6 lessons', c: 'from-primary-300 to-primary-500' },
    { t: 'User Research', l: '10 lessons', c: 'from-ink-600 to-ink-800' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-24 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-lg bg-white shadow-soft" />
          <div className="h-7 w-7 rounded-lg bg-primary-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {courses.map((c) => (
          <div key={c.t} className="overflow-hidden rounded-xl bg-white shadow-soft">
            <div className={`h-16 bg-gradient-to-br ${c.c}`} />
            <div className="p-2.5">
              <div className="h-2.5 w-24 rounded bg-ink-800" />
              <div className="mt-1.5 flex items-center justify-between">
                <div className="h-1.5 w-16 rounded bg-ink-100" />
                <Pill>
                  <BookOpen className="h-2 w-2" /> {c.l}
                </Pill>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Course Details                                                     */
/* ------------------------------------------------------------------ */

export function CourseDetailsMockup() {
  return (
    <div className="flex h-full w-full bg-ink-50">
      <div className="flex-1 p-4">
        <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-ink-800 to-primary-500 shadow-soft" />
        <div className="mb-2 h-3 w-40 rounded bg-ink-800" />
        <div className="mb-3 h-2 w-56 rounded bg-ink-200" />
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-soft"
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                  i === 0 ? 'bg-primary-400' : 'bg-ink-100'
                }`}
              >
                <PlayCircle className={`h-3.5 w-3.5 ${i === 0 ? 'text-white' : 'text-ink-400'}`} />
              </div>
              <div className="flex-1">
                <div className="h-2 w-28 rounded bg-ink-700" />
                <div className="mt-1 h-1.5 w-16 rounded bg-ink-100" />
              </div>
              <div className="h-2 w-8 rounded bg-ink-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-40 flex-col gap-2 border-l border-ink-100 bg-white p-3 lg:flex">
        <div className="h-2 w-20 rounded bg-ink-300" />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-lg bg-ink-50 p-2">
            <div className="h-1.5 w-full rounded bg-ink-100" />
            <div className="mt-1 h-1.5 w-12 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Teacher Portal                                                     */
/* ------------------------------------------------------------------ */

export function TeacherPortalMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-32 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-20 rounded bg-ink-200" />
        </div>
        <Avatar className="h-8 w-8" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'My Classes', v: '6' },
          { l: 'Students', v: '184' },
          { l: 'Avg Rating', v: '4.9' },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-white p-2.5 shadow-soft">
            <div className="h-2 w-12 rounded bg-ink-200" />
            <div className="mt-1.5 h-4 w-8 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-20 rounded bg-ink-300" />
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-300 to-primary-500" />
              <div className="flex-1">
                <div className="h-2 w-24 rounded bg-ink-700" />
                <div className="mt-1 h-1.5 w-16 rounded bg-ink-100" />
              </div>
              <div className="flex gap-1">
                <div className="h-5 w-5 rounded bg-primary-100" />
                <div className="h-5 w-5 rounded bg-ink-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Reports                                                            */
/* ------------------------------------------------------------------ */

export function ReportsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-24 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-16 rounded-lg bg-white shadow-soft" />
          <div className="h-7 w-20 rounded-lg bg-primary-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
          <div className="flex h-24 items-end gap-1.5">
            {[50, 70, 45, 90, 60, 80, 55].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-primary-300 to-primary-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
          <div className="flex h-24 items-center justify-center">
            <div className="relative h-20 w-20">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef0f5" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1f1f2e" strokeWidth="3.5" strokeDasharray="60 100" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-20 rounded bg-ink-300" />
        <div className="space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 flex-1 rounded bg-ink-100" />
              <div className="h-2 w-10 rounded bg-primary-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Analytics                                                          */
/* ------------------------------------------------------------------ */

export function AnalyticsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-24 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-16 rounded-lg bg-white shadow-soft" />
          <div className="h-7 w-16 rounded-lg bg-white shadow-soft" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: 'Users', v: '12k' },
          { l: 'Sessions', v: '34k' },
          { l: 'Bounce', v: '24%' },
          { l: 'Avg Time', v: '8m' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-white p-2 shadow-soft">
            <div className="h-1.5 w-8 rounded bg-ink-100" />
            <div className="mt-1 h-3 w-8 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-20 rounded bg-ink-300" />
        <div className="relative h-full">
          <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff5c2e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff5c2e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C20,40 40,50 60,30 C80,10 100,35 120,20 C140,5 160,25 180,15 L200,10 L200,80 L0,80 Z"
              fill="url(#areaGrad)"
            />
            <path
              d="M0,60 C20,40 40,50 60,30 C80,10 100,35 120,20 C140,5 160,25 180,15 L200,10"
              fill="none"
              stroke="#ff5c2e"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Settings                                                           */
/* ------------------------------------------------------------------ */

export function SettingsMockup() {
  return (
    <div className="flex h-full w-full bg-ink-50">
      <div className="hidden w-32 flex-col gap-1 border-r border-ink-100 bg-white p-3 sm:flex">
        <div className="h-2 w-16 rounded bg-ink-800" />
        {['General', 'Profile', 'Security', 'Billing', 'Notifications'].map((s, i) => (
          <div
            key={s}
            className={`rounded-lg px-2 py-1.5 text-[9px] font-medium ${
              i === 0 ? 'bg-primary-50 text-primary-600' : 'text-ink-400'
            }`}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        <div className="mb-3 h-3 w-20 rounded bg-ink-800" />
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-soft">
              <div>
                <div className="h-2.5 w-28 rounded bg-ink-700" />
                <div className="mt-1.5 h-1.5 w-40 rounded bg-ink-100" />
              </div>
              <div
                className={`flex h-5 w-9 items-center rounded-full p-0.5 ${
                  i % 2 === 0 ? 'bg-primary-400' : 'bg-ink-200'
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition ${
                    i % 2 === 0 ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hospital Management System mockups                                 */
/* ------------------------------------------------------------------ */

export function HospitalDashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-3 w-32 rounded bg-ink-800" />
          <div className="mt-1.5 h-2 w-20 rounded bg-ink-200" />
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-rose-400" />
          <Avatar className="h-7 w-7" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { l: 'Patients', v: '342' },
          { l: 'Appointments', v: '28' },
          { l: 'Staff', v: '64' },
          { l: 'Beds', v: '120' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-white p-2 shadow-soft">
            <div className="h-1.5 w-10 rounded bg-ink-100" />
            <div className="mt-1.5 h-3 w-8 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
          <div className="flex h-20 items-end gap-1.5">
            {[60, 80, 45, 70, 90, 55, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-rose-300 to-primary-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-soft">
          <div className="mb-2 h-2 w-14 rounded bg-ink-300" />
          <div className="space-y-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-rose-100" />
                <div className="h-1.5 flex-1 rounded bg-ink-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HospitalPatientFormMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 h-3 w-32 rounded bg-ink-800" />
      <div className="grid grid-cols-2 gap-2">
        {['Full Name', 'Age', 'Blood Group', 'Gender', 'Phone', 'Address'].map((f) => (
          <div key={f} className="rounded-lg bg-white p-2.5 shadow-soft">
            <div className="h-1.5 w-12 rounded bg-ink-200" />
            <div className="mt-1.5 h-2.5 w-20 rounded bg-ink-100" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-7 flex-1 rounded-lg bg-ink-100" />
        <div className="h-7 w-24 rounded-lg bg-primary-400" />
      </div>
    </div>
  );
}

export function HospitalAppointmentsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-ink-800" />
        <div className="h-7 w-20 rounded-lg bg-primary-400" />
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} className="text-center">
            <div className="text-[8px] font-semibold text-ink-400">{d}</div>
            <div
              className={`mx-auto mt-1 h-6 w-6 rounded-md ${
                i === 2 ? 'bg-primary-400 text-white' : 'bg-white text-ink-500'
              } flex items-center justify-center text-[9px] font-semibold`}
            >
              {i + 10}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 space-y-2">
        {[
          { t: 'Dr. Mehta — Cardiology', c: 'bg-rose-100' },
          { t: 'Dr. Rao — Orthopedics', c: 'bg-primary-100' },
          { t: 'Dr. Singh — General', c: 'bg-ink-100' },
        ].map((a) => (
          <div key={a.t} className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-soft">
            <div className={`h-8 w-8 rounded-lg ${a.c}`} />
            <div className="flex-1">
              <div className="h-2.5 w-28 rounded bg-ink-700" />
              <div className="mt-1 h-1.5 w-16 rounded bg-ink-100" />
            </div>
            <div className="h-2 w-10 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HospitalRecordsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 h-3 w-28 rounded bg-ink-800" />
      <div className="flex-1 overflow-hidden rounded-xl bg-white shadow-soft">
        <div className="grid grid-cols-12 gap-2 border-b border-ink-100 px-3 py-2 text-[9px] font-semibold uppercase text-ink-400">
          <div className="col-span-5">Patient</div>
          <div className="col-span-4">Diagnosis</div>
          <div className="col-span-3">Last Visit</div>
        </div>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="grid grid-cols-12 items-center gap-2 border-b border-ink-50 px-3 py-2 last:border-0">
            <div className="col-span-5 flex items-center gap-2">
              <Avatar className="h-6 w-6" />
              <div className="h-2 w-20 rounded bg-ink-700" />
            </div>
            <div className="col-span-4 h-2 w-16 rounded bg-ink-100" />
            <div className="col-span-3 h-2 w-12 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HospitalBillingMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-ink-800" />
        <div className="flex items-center gap-1 text-primary-500">
          <DollarSign className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Revenue', v: '$84k' },
          { l: 'Pending', v: '$12k' },
          { l: 'Paid', v: '$72k' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-white p-2.5 shadow-soft">
            <div className="h-1.5 w-10 rounded bg-ink-100" />
            <div className="mt-1.5 h-3 w-10 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
        <div className="space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-primary-100" />
                <div>
                  <div className="h-2 w-24 rounded bg-ink-700" />
                  <div className="mt-1 h-1.5 w-14 rounded bg-ink-100" />
                </div>
              </div>
              <div className="h-2 w-10 rounded bg-ink-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HospitalStaffMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-ink-800" />
        <div className="flex items-center gap-1 text-ink-500">
          <UserCog className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-white p-3 shadow-soft">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8" />
              <div>
                <div className="h-2 w-16 rounded bg-ink-700" />
                <div className="mt-1 h-1.5 w-12 rounded bg-ink-100" />
              </div>
            </div>
            <div className="mt-2 flex gap-1">
              <div className="h-4 w-12 rounded bg-primary-100" />
              <div className="h-4 w-10 rounded bg-ink-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CCTV Monitoring System mockups                                     */
/* ------------------------------------------------------------------ */

export function CctvDashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-950 p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="h-4 w-4 text-primary-400" />
          <div className="h-2.5 w-24 rounded bg-ink-700" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="h-2 w-12 rounded bg-ink-700" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="relative overflow-hidden rounded-lg bg-ink-800">
            <div className="absolute inset-0 bg-gradient-to-br from-ink-700 to-ink-900" />
            <div className="absolute left-1.5 top-1.5 flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
              <div className="text-[7px] font-semibold text-white/70">CAM {i + 1}</div>
            </div>
            <div className="absolute bottom-1.5 right-1.5 h-1 w-8 rounded bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CctvAlertsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-amber-500" />
        <div className="h-3 w-24 rounded bg-ink-800" />
      </div>
      <div className="flex-1 space-y-2">
        {[
          { c: 'bg-rose-100', t: 'Motion detected — CAM 3' },
          { c: 'bg-amber-100', t: 'Camera offline — CAM 7' },
          { c: 'bg-primary-100', t: 'Night mode activated' },
          { c: 'bg-rose-100', t: 'Intrusion alert — CAM 1' },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-soft">
            <div className={`h-8 w-8 rounded-lg ${a.c}`} />
            <div className="flex-1">
              <div className="h-2 w-28 rounded bg-ink-700" />
              <div className="mt-1 h-1.5 w-16 rounded bg-ink-100" />
            </div>
            <div className="h-2 w-8 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CctvReportsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 h-3 w-24 rounded bg-ink-800" />
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Alerts', v: '142' },
          { l: 'Resolved', v: '128' },
          { l: 'Pending', v: '14' },
        ].map((s) => (
          <div key={s.l} className="rounded-lg bg-white p-2.5 shadow-soft">
            <div className="h-1.5 w-8 rounded bg-ink-100" />
            <div className="mt-1.5 h-3 w-8 rounded bg-ink-800" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-16 rounded bg-ink-300" />
        <div className="flex h-20 items-end gap-1.5">
          {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-amber-300 to-rose-400" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CctvAnalyticsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-4">
      <div className="mb-3 h-3 w-24 rounded bg-ink-800" />
      <div className="flex-1 rounded-xl bg-white p-3 shadow-soft">
        <div className="mb-2 h-2 w-20 rounded bg-ink-300" />
        <svg viewBox="0 0 200 80" className="h-24 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cctvGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f1f2e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1f1f2e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,50 C30,20 50,60 80,30 C110,5 130,40 160,20 L200,15 L200,80 L0,80 Z" fill="url(#cctvGrad)" />
          <path d="M0,50 C30,20 50,60 80,30 C110,5 130,40 160,20 L200,15" fill="none" stroke="#1f1f2e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-white p-2.5 shadow-soft">
          <div className="h-2 w-12 rounded bg-ink-200" />
          <div className="mt-1.5 h-3 w-10 rounded bg-ink-800" />
        </div>
        <div className="rounded-lg bg-white p-2.5 shadow-soft">
          <div className="h-2 w-12 rounded bg-ink-200" />
          <div className="mt-1.5 h-3 w-10 rounded bg-ink-800" />
        </div>
      </div>
    </div>
  );
}

export function CctvLiveMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-950 p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Video className="h-4 w-4 text-primary-400" />
          <div className="h-2.5 w-20 rounded bg-ink-700" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
          <div className="text-[7px] font-bold text-rose-400">LIVE</div>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-lg bg-gradient-to-br from-ink-700 to-ink-900">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-400/40" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400" />
        <div className="absolute bottom-2 left-2 flex gap-1">
          <div className="h-4 w-8 rounded bg-white/10" />
          <div className="h-4 w-8 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile app screen mockups                                          */
/* ------------------------------------------------------------------ */

export function MobileDashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-3">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <div className="h-2 w-16 rounded bg-ink-800" />
          <div className="mt-1 h-1.5 w-10 rounded bg-ink-200" />
        </div>
        <Avatar className="h-6 w-6" />
      </div>
      <div className="mb-3 h-20 rounded-xl bg-gradient-to-br from-primary-400 to-ink-800 p-3">
        <div className="h-1.5 w-12 rounded bg-white/40" />
        <div className="mt-1.5 h-3 w-16 rounded bg-white/70" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { i: BookOpen, c: 'bg-primary-100 text-primary-600' },
          { i: CalendarCheck, c: 'bg-amber-100 text-amber-600' },
          { i: FileText, c: 'bg-rose-100 text-rose-600' },
          { i: BarChart3, c: 'bg-ink-100 text-ink-600' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl bg-white p-2.5 shadow-soft">
            <div className={`mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg ${s.c}`}>
              <s.i className="h-3.5 w-3.5" />
            </div>
            <div className="h-1.5 w-14 rounded bg-ink-200" />
            <div className="mt-1 h-2 w-8 rounded bg-ink-700" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileProfileMockup() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-ink-50 p-3">
      <div className="mt-2 h-14 w-14 rounded-full bg-gradient-to-br from-primary-400 to-ink-800" />
      <div className="mt-2 h-2.5 w-20 rounded bg-ink-800" />
      <div className="mt-1 h-1.5 w-14 rounded bg-ink-200" />
      <div className="mt-3 flex gap-2">
        <div className="h-6 w-16 rounded-lg bg-primary-400" />
        <div className="h-6 w-16 rounded-lg bg-white shadow-soft" />
      </div>
      <div className="mt-3 w-full space-y-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-soft">
            <div className="h-7 w-7 rounded-lg bg-ink-100" />
            <div className="flex-1">
              <div className="h-1.5 w-16 rounded bg-ink-700" />
              <div className="mt-1 h-1.5 w-10 rounded bg-ink-100" />
            </div>
            <div className="h-1 w-4 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileNotificationsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-3">
      <div className="mb-3 flex items-center gap-2">
        <Bell className="h-4 w-4 text-primary-500" />
        <div className="h-2.5 w-16 rounded bg-ink-800" />
      </div>
      <div className="space-y-2">
        {[
          { c: 'bg-primary-100', t: 'New course published' },
          { c: 'bg-amber-100', t: 'Assignment due tomorrow' },
          { c: 'bg-rose-100', t: 'New message from teacher' },
          { c: 'bg-emerald-100', t: 'Course completed' },
        ].map((n, i) => (
          <div key={i} className="flex items-start gap-2 rounded-xl bg-white p-2.5 shadow-soft">
            <div className={`mt-0.5 h-7 w-7 rounded-lg ${n.c}`} />
            <div className="flex-1">
              <div className="h-1.5 w-20 rounded bg-ink-700" />
              <div className="mt-1 h-1.5 w-14 rounded bg-ink-100" />
            </div>
            <div className="h-1.5 w-6 rounded bg-primary-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileCourseDetailsMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50">
      <div className="h-24 bg-gradient-to-br from-ink-800 to-primary-500" />
      <div className="-mt-4 flex-1 rounded-t-2xl bg-ink-50 p-3">
        <div className="h-2.5 w-24 rounded bg-ink-800" />
        <div className="mt-1.5 h-1.5 w-32 rounded bg-ink-200" />
        <div className="mt-3 flex gap-1.5">
          <div className="h-5 w-14 rounded-full bg-primary-400" />
          <div className="h-5 w-14 rounded-full bg-white shadow-soft" />
        </div>
        <div className="mt-3 space-y-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft">
              <div className={`h-6 w-6 rounded-lg ${i === 0 ? 'bg-primary-400' : 'bg-ink-100'}`}>
                <PlayCircle className={`h-3 w-3 ${i === 0 ? 'text-white' : 'text-ink-400'} mx-auto mt-1.5`} />
              </div>
              <div className="flex-1">
                <div className="h-1.5 w-20 rounded bg-ink-700" />
                <div className="mt-1 h-1.5 w-10 rounded bg-ink-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileAttendanceMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-3">
      <div className="mb-3 h-2.5 w-20 rounded bg-ink-800" />
      <div className="flex justify-center">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef0f5" strokeWidth="3.5" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#ff5c2e" strokeWidth="3.5" strokeDasharray="89 100" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="h-3 w-8 rounded bg-ink-800" />
            <div className="mt-1 h-1.5 w-6 rounded bg-ink-200" />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
          <div key={i} className="text-center">
            <div className="text-[7px] font-semibold text-ink-400">{d}</div>
            <div className={`mx-auto mt-1 h-5 w-5 rounded-md ${i < 5 ? 'bg-primary-400' : 'bg-ink-100'}`} />
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-soft">
            <div className="h-5 w-5 rounded bg-primary-100" />
            <div className="h-1.5 flex-1 rounded bg-ink-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Before / After comparison mockups                                  */
/* ------------------------------------------------------------------ */

export function BeforeMockupOld() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-200 p-3">
      <div className="mb-2 flex items-center gap-1">
        <div className="h-3 w-3 rounded bg-gray-400" />
        <div className="h-3 w-3 rounded bg-gray-400" />
        <div className="h-3 w-3 rounded bg-gray-400" />
      </div>
      <div className="mb-2 h-2 w-32 rounded bg-gray-400" />
      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded bg-gray-300 p-2">
            <div className="h-1.5 w-10 rounded bg-gray-400" />
            <div className="mt-1 h-2 w-6 rounded bg-gray-500" />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1">
        <div className="rounded bg-gray-300 p-2">
          <div className="h-12 rounded bg-gray-400" />
        </div>
        <div className="rounded bg-gray-300 p-2">
          <div className="h-12 rounded bg-gray-400" />
        </div>
      </div>
      <div className="mt-2 space-y-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-2 rounded bg-gray-300" />
        ))}
      </div>
    </div>
  );
}

export function AfterMockupNew() {
  return (
    <div className="flex h-full w-full flex-col bg-ink-50 p-3">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-lg bg-primary-400" />
          <div className="h-2 w-16 rounded bg-ink-800" />
        </div>
        <div className="flex gap-1">
          <div className="h-4 w-4 rounded bg-ink-100" />
          <Avatar className="h-4 w-4" />
        </div>
      </div>
      <div className="mb-2 h-2.5 w-24 rounded bg-ink-800" />
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { c: 'from-primary-400 to-primary-600' },
          { c: 'from-ink-700 to-ink-900' },
          { c: 'from-primary-300 to-primary-500' },
        ].map((s, i) => (
          <div key={i} className="rounded-lg bg-white p-2 shadow-soft">
            <div className={`h-8 rounded bg-gradient-to-br ${s.c}`} />
            <div className="mt-1 h-1.5 w-10 rounded bg-ink-200" />
            <div className="mt-1 h-2 w-6 rounded bg-ink-700" />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-white p-2 shadow-soft">
          <div className="flex h-12 items-end gap-1">
            {[40, 70, 50, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary-400" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-white p-2 shadow-soft">
          <div className="space-y-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1">
                <Avatar className="h-3 w-3" />
                <div className="h-1.5 flex-1 rounded bg-ink-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop → Mobile responsive mockup                                 */
/* ------------------------------------------------------------------ */

export function ResponsiveDesktopMockup() {
  return <LmsDashboardMockup />;
}

export function ResponsiveMobileMockup() {
  return <MobileDashboardMockup />;
}

/* ------------------------------------------------------------------ */
/*  Map of all LMS slides                                              */
/* ------------------------------------------------------------------ */

export type SlideData = {
  id: string;
  title: string;
  description: string;
  number: string;
  Mockup: React.ComponentType;
};

export const lmsSlides: SlideData[] = [
  { id: 'dashboard', title: 'Dashboard', description: 'Unified analytics overview with key metrics, charts, and recent activity at a glance.', number: '01', Mockup: LmsDashboardMockup },
  { id: 'students', title: 'Student Management', description: 'Searchable, filterable directory with enrollment status and course tracking.', number: '02', Mockup: StudentManagementMockup },
  { id: 'attendance', title: 'Attendance', description: 'Visual attendance tracker with weekly heatmap and completion ring.', number: '03', Mockup: AttendanceMockup },
  { id: 'assignments', title: 'Assignments', description: 'Submission pipeline with due dates, statuses, and quick actions.', number: '04', Mockup: AssignmentsMockup },
  { id: 'courses', title: 'Courses', description: 'Course catalog with cover art, lesson counts, and progress indicators.', number: '05', Mockup: CoursesMockup },
  { id: 'course-details', title: 'Course Details', description: 'Structured lesson list with video player and sidebar navigation.', number: '06', Mockup: CourseDetailsMockup },
  { id: 'teacher', title: 'Teacher Portal', description: 'Dedicated workspace for instructors to manage classes and students.', number: '07', Mockup: TeacherPortalMockup },
  { id: 'reports', title: 'Reports', description: 'Exportable reports with bar charts, donut summaries, and trend tables.', number: '08', Mockup: ReportsMockup },
  { id: 'analytics', title: 'Analytics', description: 'Product analytics with area charts, session metrics, and funnels.', number: '09', Mockup: AnalyticsMockup },
  { id: 'settings', title: 'Settings', description: 'Organized settings panel with toggles, sections, and clear hierarchy.', number: '10', Mockup: SettingsMockup },
];

export type ProjectCardData = {
  id: string;
  title: string;
  tag: string;
  screens: { label: string; icon: React.ComponentType<{ className?: string }>; Mockup: React.ComponentType }[];
};

export const hospitalScreens: ProjectCardData = {
  id: 'hospital',
  title: 'Hospital Management System',
  tag: 'Healthcare SaaS',
  screens: [
    { label: 'Dashboard', icon: Activity, Mockup: HospitalDashboardMockup },
    { label: 'Patient Form', icon: Stethoscope, Mockup: HospitalPatientFormMockup },
    { label: 'Appointments', icon: CalendarCheck, Mockup: HospitalAppointmentsMockup },
    { label: 'Patient Records', icon: FileText, Mockup: HospitalRecordsMockup },
    { label: 'Billing', icon: DollarSign, Mockup: HospitalBillingMockup },
    { label: 'Staff Management', icon: UserCog, Mockup: HospitalStaffMockup },
  ],
};

export const cctvScreens: ProjectCardData = {
  id: 'cctv',
  title: 'CCTV Monitoring System',
  tag: 'Security Platform',
  screens: [
    { label: 'Camera Dashboard', icon: Camera, Mockup: CctvDashboardMockup },
    { label: 'Alerts', icon: AlertTriangle, Mockup: CctvAlertsMockup },
    { label: 'Reports', icon: BarChart3, Mockup: CctvReportsMockup },
    { label: 'Analytics', icon: TrendingUp, Mockup: CctvAnalyticsMockup },
    { label: 'Live Monitoring', icon: Video, Mockup: CctvLiveMockup },
  ],
};

export const mobileScreens = [
  { id: 'm-dashboard', title: 'Dashboard', Mockup: MobileDashboardMockup },
  { id: 'm-profile', title: 'Profile', Mockup: MobileProfileMockup },
  { id: 'm-notifications', title: 'Notifications', Mockup: MobileNotificationsMockup },
  { id: 'm-course', title: 'Course Details', Mockup: MobileCourseDetailsMockup },
  { id: 'm-attendance', title: 'Attendance', Mockup: MobileAttendanceMockup },
];
