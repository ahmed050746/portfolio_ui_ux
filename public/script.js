/* ===================================================================
   UI/UX Portfolio — Plain JavaScript (no frameworks)
   =================================================================== */
(function () {
  'use strict';

  /* ---------- Tiny helpers ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function avatar(size) {
    var d = el('div', 'mk-avatar');
    d.style.width = size + 'px';
    d.style.height = size + 'px';
    return d;
  }
  function bar(h, w) {
    var d = el('div');
    d.style.height = h + 'px';
    d.style.width = (w || '100%');
    d.style.borderRadius = '6px';
    d.style.background = 'var(--i100)';
    return d;
  }
  function pill(html) {
    return el('span', 'mk-pill', html);
  }
  function svgIcon(paths, size) {
    size = size || 16;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }

  /* ---------- Icon paths ---------- */
  var ICONS = {
    dashboard: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    trending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    cap: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    play: '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    userCog: '<circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"/><path d="M7 15v1a7 7 0 0 0 14 0v-4"/><circle cx="20" cy="10" r="2"/>',
  };

  /* ---------- Ring SVG ---------- */
  function ringSVG(color, pct) {
    return '<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.5" fill="none" stroke="#eef0f5" stroke-width="3.5"/><circle cx="18" cy="18" r="15.5" fill="none" stroke="' + color + '" stroke-width="3.5" stroke-dasharray="' + pct + ' 100" stroke-linecap="round"/></svg>';
  }

  /* ---------- Area chart SVG ---------- */
  function areaChart(color, id) {
    return '<svg viewBox="0 0 200 80" style="width:100%;height:100%" preserveAspectRatio="none"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' + color + '" stop-opacity="0.3"/><stop offset="100%" stop-color="' + color + '" stop-opacity="0"/></linearGradient></defs><path d="M0,60 C20,40 40,50 60,30 C80,10 100,35 120,20 C140,5 160,25 180,15 L200,10 L200,80 L0,80 Z" fill="url(#' + id + ')"/><path d="M0,60 C20,40 40,50 60,30 C80,10 100,35 120,20 C140,5 160,25 180,15 L200,10" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round"/></svg>';
  }

  /* ---------- Bar chart generator ---------- */
  function barChart(heights, from, to) {
    var wrap = el('div', 'mk-chart-bars');
    heights.forEach(function (h) {
      var b = el('div', 'mk-chart-bar');
      b.style.height = h + '%';
      b.style.background = 'linear-gradient(to top,' + from + ',' + to + ')';
      wrap.appendChild(b);
    });
    return wrap;
  }

  /* ==================================================================
     MOCKUP BUILDERS — each returns a DOM element filling its container
     ================================================================== */

  function mkLmsDashboard() {
    var root = el('div', 'mk');
    var sidebar = el('div', 'mk-sidebar');
    sidebar.appendChild(el('div', 'mk-sidebar-logo', svgIcon(ICONS.cap, 16)));
    [{ i: 'dashboard', a: true }, { i: 'users' }, { i: 'book' }, { i: 'calendar' }, { i: 'file' }, { i: 'chart' }, { i: 'settings' }].forEach(function (n) {
      var d = el('div', 'mk-sidebar-icon' + (n.a ? ' active' : ''), svgIcon(ICONS[n.i], 16));
      sidebar.appendChild(d);
    });
    root.appendChild(sidebar);

    var main = el('div', 'mk-main');
    // topbar
    var topbar = el('div', 'mk-topbar');
    var tl = el('div');
    tl.appendChild(el('div', 'mk-bar-w'));
    tl.appendChild(el('div', 'mk-bar-s'));
    topbar.appendChild(tl);
    var tr = el('div', 'flex items-center gap-2');
    tr.style.display = 'flex';
    tr.style.alignItems = 'center';
    tr.style.gap = '8px';
    var search = el('div');
    search.style.display = 'flex';
    search.style.alignItems = 'center';
    search.style.gap = '4px';
    search.style.background = '#fff';
    search.style.padding = '0 8px';
    search.style.borderRadius = '6px';
    search.style.boxShadow = 'var(--shadow-soft)';
    search.style.height = '24px';
    search.innerHTML = svgIcon(ICONS.search, 12);
    search.appendChild(el('div', 'mk-bar-s'));
    tr.appendChild(search);
    tr.innerHTML += svgIcon(ICONS.bell, 16);
    tr.appendChild(avatar(24));
    topbar.appendChild(tr);
    main.appendChild(topbar);

    // stat cards
    var stats = el('div', 'mk-stat-grid');
    [['Students', '1,248', '+12%'], ['Courses', '86', '+4'], ['Completion', '92%', '+3%'], ['Revenue', '$48k', '+18%']].forEach(function (s) {
      var c = el('div', 'mk-stat');
      c.appendChild(el('div', 'mk-bar-s'));
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '48px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      var p = pill(svgIcon(ICONS.trending, 8) + ' ' + s[2]);
      p.style.marginTop = '4px';
      c.appendChild(p);
      stats.appendChild(c);
    });
    main.appendChild(stats);

    // chart + list
    var row = el('div');
    row.style.display = 'grid';
    row.style.gridTemplateColumns = '2fr 1fr';
    row.style.gap = '8px';
    row.style.marginTop = '8px';
    var chartCard = el('div', 'mk-card');
    var chartHead = el('div', 'flex justify-between');
    chartHead.style.display = 'flex';
    chartHead.style.justifyContent = 'space-between';
    chartHead.style.marginBottom = '8px';
    chartHead.appendChild(el('div', 'mk-bar-w'));
    var legend = el('div');
    legend.style.display = 'flex';
    legend.style.gap = '4px';
    legend.appendChild(el('div', null));
    legend.children[0].style.height = '16px';
    legend.children[0].style.width = '32px';
    legend.children[0].style.borderRadius = '6px';
    legend.children[0].style.background = 'var(--p100)';
    legend.appendChild(el('div', null));
    legend.children[1].style.height = '16px';
    legend.children[1].style.width = '32px';
    legend.children[1].style.borderRadius = '6px';
    legend.children[1].style.background = 'var(--i100)';
    chartHead.appendChild(legend);
    chartCard.appendChild(chartHead);
    chartCard.appendChild(barChart([40, 65, 50, 80, 55, 90, 70, 100, 60, 85, 75, 95], 'var(--p300)', 'var(--p400)'));
    row.appendChild(chartCard);

    var listCard = el('div', 'mk-card');
    listCard.appendChild(el('div', 'mk-bar-w'));
    listCard.style.position = 'relative';
    var list = el('div');
    list.style.marginTop = '8px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div', 'flex items-center');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.appendChild(avatar(20));
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(bar(6));
      var sub = bar(6, '48px');
      sub.style.marginTop = '4px';
      info.appendChild(sub);
      r.appendChild(info);
      list.appendChild(r);
    });
    listCard.appendChild(list);
    row.appendChild(listCard);
    main.appendChild(row);
    root.appendChild(main);
    return root;
  }

  function mkStudentManagement() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '128px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '8px';
    var btn1 = el('div');
    btn1.style.height = '28px';
    btn1.style.width = '80px';
    btn1.style.borderRadius = '8px';
    btn1.style.background = 'var(--p400)';
    hr.appendChild(btn1);
    var btn2 = el('div');
    btn2.style.height = '28px';
    btn2.style.width = '28px';
    btn2.style.borderRadius = '8px';
    btn2.style.background = '#fff';
    btn2.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(btn2);
    head.appendChild(hr);
    root.appendChild(head);

    var tabs = el('div');
    tabs.style.display = 'flex';
    tabs.style.gap = '8px';
    tabs.style.marginBottom = '8px';
    ['All', 'Active', 'Paused', 'Graduated'].forEach(function (t, i) {
      var d = el('div');
      d.style.borderRadius = '9999px';
      d.style.padding = '4px 12px';
      d.style.fontSize = '10px';
      d.style.fontWeight = '600';
      if (i === 0) { d.style.background = 'var(--i900)'; d.style.color = '#fff'; }
      else { d.style.background = '#fff'; d.style.color = 'var(--i500)'; }
      d.textContent = t;
      tabs.appendChild(d);
    });
    root.appendChild(tabs);

    var table = el('div', 'mk-table');
    table.appendChild(el('div', 'mk-table-head', '<div>Student</div><div>Course</div><div>Status</div><div></div>'));
    [
      { n: 'Aarav Sharma', c: 'UX Fundamentals', s: 'Active' },
      { n: 'Priya Patel', c: 'Data Science', s: 'Active' },
      { n: 'Rohan Mehta', c: 'Web Dev', s: 'Paused' },
      { n: 'Ananya Rao', c: 'Product Design', s: 'Active' },
      { n: 'Kabir Singh', c: 'Cloud Eng.', s: 'Active' },
    ].forEach(function (r) {
      var row = el('div', 'mk-table-row');
      var c1 = el('div', 'flex items-center');
      c1.style.display = 'flex';
      c1.style.alignItems = 'center';
      c1.style.gap = '8px';
      c1.appendChild(avatar(24));
      var ni = el('div');
      ni.appendChild(el('div', null));
      ni.children[0].style.height = '8px';
      ni.children[0].style.width = '96px';
      ni.children[0].style.borderRadius = '6px';
      ni.children[0].style.background = 'var(--i700)';
      ni.appendChild(el('div', 'mk-bar-s'));
      c1.appendChild(ni);
      row.appendChild(c1);
      var c2 = el('div');
      c2.appendChild(el('div', 'mk-bar-s'));
      c2.children[0].style.width = '80px';
      row.appendChild(c2);
      var c3 = el('div');
      var st = el('span', 'mk-status ' + (r.s === 'Active' ? 'active' : 'paused'));
      st.textContent = r.s;
      c3.appendChild(st);
      row.appendChild(c3);
      var c4 = el('div');
      c4.style.textAlign = 'right';
      c4.appendChild(el('div', null));
      c4.children[0].style.height = '20px';
      c4.children[0].style.width = '20px';
      c4.children[0].style.borderRadius = '6px';
      c4.children[0].style.background = 'var(--i100)';
      row.appendChild(c4);
      table.appendChild(row);
    });
    root.appendChild(table);
    return root;
  }

  function mkAttendance() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '112px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '8px';
    var b1 = el('div');
    b1.style.height = '28px';
    b1.style.width = '64px';
    b1.style.borderRadius = '8px';
    b1.style.background = '#fff';
    b1.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(b1);
    var b2 = el('div');
    b2.style.height = '28px';
    b2.style.width = '64px';
    b2.style.borderRadius = '8px';
    b2.style.background = 'var(--p400)';
    hr.appendChild(b2);
    head.appendChild(hr);
    root.appendChild(head);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '12px';

    var ringCard = el('div', 'mk-card');
    ringCard.appendChild(el('div', 'mk-bar-w'));
    var ring = el('div', 'mk-ring');
    ring.innerHTML = ringSVG('#ff5c2e', 89);
    var rc = el('div', 'mk-ring-center');
    rc.appendChild(el('div', null));
    rc.children[0].style.height = '16px';
    rc.children[0].style.width = '40px';
    rc.children[0].style.borderRadius = '6px';
    rc.children[0].style.background = 'var(--i800)';
    rc.appendChild(el('div', 'mk-bar-s'));
    ring.appendChild(rc);
    var ringWrap = el('div');
    ringWrap.style.display = 'flex';
    ringWrap.style.justifyContent = 'center';
    ringWrap.appendChild(ring);
    ringCard.appendChild(ringWrap);
    grid.appendChild(ringCard);

    var heatCard = el('div', 'mk-card');
    heatCard.appendChild(el('div', 'mk-bar-w'));
    var heat = el('div', 'mk-heatmap');
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach(function (d, i) {
      var c = el('div');
      c.style.textAlign = 'center';
      var lbl = el('div');
      lbl.style.fontSize = '8px';
      lbl.style.fontWeight = '600';
      lbl.style.color = 'var(--i400)';
      lbl.textContent = d;
      c.appendChild(lbl);
      var cell = el('div', 'mk-heat-cell');
      cell.style.background = i < 5 ? 'var(--p400)' : 'var(--i100)';
      c.appendChild(cell);
      heat.appendChild(c);
    });
    heatCard.appendChild(heat);
    var rows = el('div');
    rows.style.marginTop = '12px';
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = '6px';
    [0, 1, 2].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.appendChild(bar(8, '100%'));
      var p = bar(8, '32px');
      p.style.background = 'var(--p200)';
      r.appendChild(p);
      rows.appendChild(r);
    });
    heatCard.appendChild(rows);
    grid.appendChild(heatCard);
    root.appendChild(grid);
    return root;
  }

  function mkAssignments() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '112px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var btn = el('div');
    btn.style.height = '28px';
    btn.style.width = '96px';
    btn.style.borderRadius = '8px';
    btn.style.background = 'var(--p400)';
    head.appendChild(btn);
    root.appendChild(head);

    var stats = el('div');
    stats.style.display = 'grid';
    stats.style.gridTemplateColumns = 'repeat(3,1fr)';
    stats.style.gap = '8px';
    [['Pending', '12'], ['Submitted', '48'], ['Graded', '36']].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.appendChild(el('div', 'mk-bar-s'));
      var v = el('div');
      v.style.height = '16px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);

    var items = [
      { d: 'Due tomorrow', c: 'background:var(--rose-50);color:var(--rose-500)' },
      { d: 'Due in 3 days', c: 'background:var(--amber-50);color:var(--amber-500)' },
      { d: 'Submitted', c: 'background:var(--p50);color:var(--p600)' },
      { d: 'Due in 5 days', c: 'background:var(--i100);color:var(--i500)' },
    ];
    var list = el('div');
    list.style.marginTop = '12px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    items.forEach(function (it) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '12px';
      var ic = el('div');
      ic.style.height = '36px';
      ic.style.width = '36px';
      ic.style.borderRadius = '8px';
      ic.style.background = 'var(--i100)';
      ic.style.display = 'flex';
      ic.style.alignItems = 'center';
      ic.style.justifyContent = 'center';
      ic.innerHTML = svgIcon(ICONS.file, 16);
      ic.style.color = 'var(--i500)';
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', null));
      info.children[0].style.height = '10px';
      info.children[0].style.width = '128px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      r.appendChild(info);
      var tag = el('span');
      tag.style.borderRadius = '9999px';
      tag.style.padding = '4px 10px';
      tag.style.fontSize = '9px';
      tag.style.fontWeight = '600';
      tag.style.cssText += ';' + it.c;
      tag.textContent = it.d;
      r.appendChild(tag);
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  function mkCourses() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '96px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '8px';
    var b1 = el('div');
    b1.style.height = '28px';
    b1.style.width = '80px';
    b1.style.borderRadius = '8px';
    b1.style.background = '#fff';
    b1.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(b1);
    var b2 = el('div');
    b2.style.height = '28px';
    b2.style.width = '28px';
    b2.style.borderRadius = '8px';
    b2.style.background = 'var(--p400)';
    hr.appendChild(b2);
    head.appendChild(hr);
    root.appendChild(head);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '12px';
    [
      { l: '12 lessons', g: 'var(--p400),var(--p600)' },
      { l: '8 lessons', g: 'var(--i700),var(--i900)' },
      { l: '6 lessons', g: 'var(--p300),var(--p500)' },
      { l: '10 lessons', g: 'var(--i600),var(--i800)' },
    ].forEach(function (c) {
      var card = el('div', 'mk-card');
      card.style.overflow = 'hidden';
      card.style.padding = '0';
      var cover = el('div');
      cover.style.height = '64px';
      cover.style.background = 'linear-gradient(135deg,' + c.g + ')';
      card.appendChild(cover);
      var body = el('div');
      body.style.padding = '10px';
      body.appendChild(el('div', null));
      body.children[0].style.height = '10px';
      body.children[0].style.width = '96px';
      body.children[0].style.borderRadius = '6px';
      body.children[0].style.background = 'var(--i800)';
      var row = el('div');
      row.style.marginTop = '6px';
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.justifyContent = 'space-between';
      row.appendChild(el('div', 'mk-bar-s'));
      row.appendChild(pill(svgIcon(ICONS.book, 8) + ' ' + c.l));
      body.appendChild(row);
      card.appendChild(body);
      grid.appendChild(card);
    });
    root.appendChild(grid);
    return root;
  }

  function mkCourseDetails() {
    var root = el('div', 'mk');
    var main = el('div', 'mk-p4');
    main.style.flex = '1';
    var hero = el('div');
    hero.style.height = '112px';
    hero.style.borderRadius = '12px';
    hero.style.background = 'linear-gradient(135deg,var(--i800),var(--p500))';
    hero.style.boxShadow = 'var(--shadow-soft)';
    hero.style.marginBottom = '12px';
    main.appendChild(hero);
    main.appendChild(el('div', null));
    main.children[1].style.height = '12px';
    main.children[1].style.width = '160px';
    main.children[1].style.borderRadius = '6px';
    main.children[1].style.background = 'var(--i800)';
    main.appendChild(el('div', 'mk-bar-s'));
    main.children[2].style.width = '224px';
    main.children[2].style.marginTop = '4px';

    var list = el('div');
    list.style.marginTop = '12px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function (i) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '12px';
      var ic = el('div');
      ic.style.height = '28px';
      ic.style.width = '28px';
      ic.style.borderRadius = '8px';
      ic.style.display = 'flex';
      ic.style.alignItems = 'center';
      ic.style.justifyContent = 'center';
      if (i === 0) { ic.style.background = 'var(--p400)'; ic.innerHTML = svgIcon(ICONS.play, 14); ic.style.color = '#fff'; }
      else { ic.style.background = 'var(--i100)'; ic.innerHTML = svgIcon(ICONS.play, 14); ic.style.color = 'var(--i400)'; }
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', null));
      info.children[0].style.height = '8px';
      info.children[0].style.width = '112px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      r.appendChild(info);
      r.appendChild(el('div', 'mk-bar-s'));
      r.children[2].style.width = '32px';
      list.appendChild(r);
    });
    main.appendChild(list);
    root.appendChild(main);

    var side = el('div');
    side.style.display = 'none';
    side.style.width = '160px';
    side.style.flexDirection = 'column';
    side.style.gap = '8px';
    side.style.borderLeft = '1px solid var(--i100)';
    side.style.background = '#fff';
    side.style.padding = '12px';
    side.appendChild(el('div', 'mk-bar-w'));
    [0, 1, 2, 3, 4].forEach(function () {
      var c = el('div');
      c.style.borderRadius = '8px';
      c.style.background = 'var(--i50)';
      c.style.padding = '8px';
      c.appendChild(bar(6, '100%'));
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[1].style.width = '48px';
      c.children[1].style.marginTop = '4px';
      side.appendChild(c);
    });
    root.appendChild(side);
    return root;
  }

  function mkTeacherPortal() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '128px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    head.appendChild(avatar(32));
    root.appendChild(head);

    var stats = el('div');
    stats.style.display = 'grid';
    stats.style.gridTemplateColumns = 'repeat(3,1fr)';
    stats.style.gap = '8px';
    [['My Classes', '6'], ['Students', '184'], ['Avg Rating', '4.9']].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.appendChild(el('div', 'mk-bar-s'));
      var v = el('div');
      v.style.height = '16px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);

    var card = el('div', 'mk-card');
    card.style.marginTop = '12px';
    card.style.flex = '1';
    card.appendChild(el('div', 'mk-bar-w'));
    var list = el('div');
    list.style.marginTop = '8px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      var av = el('div');
      av.style.height = '32px';
      av.style.width = '32px';
      av.style.borderRadius = '8px';
      av.style.background = 'linear-gradient(135deg,var(--p300),var(--p500))';
      r.appendChild(av);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', null));
      info.children[0].style.height = '8px';
      info.children[0].style.width = '96px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      r.appendChild(info);
      var btns = el('div');
      btns.style.display = 'flex';
      btns.style.gap = '4px';
      var b1 = el('div');
      b1.style.height = '20px';
      b1.style.width = '20px';
      b1.style.borderRadius = '6px';
      b1.style.background = 'var(--p100)';
      btns.appendChild(b1);
      var b2 = el('div');
      b2.style.height = '20px';
      b2.style.width = '20px';
      b2.style.borderRadius = '6px';
      b2.style.background = 'var(--i100)';
      btns.appendChild(b2);
      r.appendChild(btns);
      list.appendChild(r);
    });
    card.appendChild(list);
    root.appendChild(card);
    return root;
  }

  function mkReports() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '96px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '8px';
    var b1 = el('div');
    b1.style.height = '28px';
    b1.style.width = '64px';
    b1.style.borderRadius = '8px';
    b1.style.background = '#fff';
    b1.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(b1);
    var b2 = el('div');
    b2.style.height = '28px';
    b2.style.width = '80px';
    b2.style.borderRadius = '8px';
    b2.style.background = 'var(--p400)';
    hr.appendChild(b2);
    head.appendChild(hr);
    root.appendChild(head);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '12px';
    var bc = el('div', 'mk-card');
    bc.appendChild(el('div', 'mk-bar-w'));
    bc.appendChild(barChart([50, 70, 45, 90, 60, 80, 55], 'var(--p300)', 'var(--p500)'));
    grid.appendChild(bc);
    var dc = el('div', 'mk-card');
    dc.appendChild(el('div', 'mk-bar-w'));
    var dw = el('div');
    dw.style.display = 'flex';
    dw.style.alignItems = 'center';
    dw.style.justifyContent = 'center';
    dw.style.height = '96px';
    var dr = el('div', 'mk-ring');
    dr.style.width = '80px';
    dr.style.height = '80px';
    dr.innerHTML = ringSVG('#1f1f2e', 60);
    dw.appendChild(dr);
    dc.appendChild(dw);
    grid.appendChild(dc);
    root.appendChild(grid);

    var tc = el('div', 'mk-card');
    tc.style.marginTop = '12px';
    tc.style.flex = '1';
    tc.appendChild(el('div', 'mk-bar-w'));
    var rows = el('div');
    rows.style.marginTop = '8px';
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = '6px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.appendChild(bar(8, '100%'));
      var p = bar(8, '40px');
      p.style.background = 'var(--p200)';
      r.appendChild(p);
      rows.appendChild(r);
    });
    tc.appendChild(rows);
    root.appendChild(tc);
    return root;
  }

  function mkAnalytics() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '96px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '8px';
    var b1 = el('div');
    b1.style.height = '28px';
    b1.style.width = '64px';
    b1.style.borderRadius = '8px';
    b1.style.background = '#fff';
    b1.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(b1);
    var b2 = el('div');
    b2.style.height = '28px';
    b2.style.width = '64px';
    b2.style.borderRadius = '8px';
    b2.style.background = '#fff';
    b2.style.boxShadow = 'var(--shadow-soft)';
    hr.appendChild(b2);
    head.appendChild(hr);
    root.appendChild(head);

    var stats = el('div');
    stats.style.display = 'grid';
    stats.style.gridTemplateColumns = 'repeat(4,1fr)';
    stats.style.gap = '8px';
    [['Users', '12k'], ['Sessions', '34k'], ['Bounce', '24%'], ['Avg Time', '8m']].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.style.padding = '8px';
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '32px';
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '4px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);

    var chart = el('div', 'mk-card');
    chart.style.marginTop = '12px';
    chart.style.flex = '1';
    chart.appendChild(el('div', 'mk-bar-w'));
    var area = el('div');
    area.style.height = '100%';
    area.style.marginTop = '8px';
    area.innerHTML = areaChart('#ff5c2e', 'areaGrad');
    chart.appendChild(area);
    root.appendChild(chart);
    return root;
  }

  function mkSettings() {
    var root = el('div', 'mk');
    var side = el('div');
    side.style.display = 'none';
    side.style.width = '128px';
    side.style.flexDirection = 'column';
    side.style.gap = '4px';
    side.style.borderRight = '1px solid var(--i100)';
    side.style.background = '#fff';
    side.style.padding = '12px';
    side.appendChild(el('div', 'mk-bar-w'));
    ['General', 'Profile', 'Security', 'Billing', 'Notifications'].forEach(function (s, i) {
      var d = el('div');
      d.style.borderRadius = '8px';
      d.style.padding = '6px 8px';
      d.style.fontSize = '9px';
      d.style.fontWeight = '500';
      if (i === 0) { d.style.background = 'var(--p50)'; d.style.color = 'var(--p600)'; }
      else { d.style.color = 'var(--i400)'; }
      d.textContent = s;
      side.appendChild(d);
    });
    root.appendChild(side);

    var main = el('div', 'mk-p4');
    main.style.flex = '1';
    main.appendChild(el('div', null));
    main.children[0].style.height = '12px';
    main.children[0].style.width = '80px';
    main.children[0].style.borderRadius = '6px';
    main.children[0].style.background = 'var(--i800)';
    main.children[0].style.marginBottom = '12px';
    var list = el('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '12px';
    [0, 1, 2, 3].forEach(function (i) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.justifyContent = 'space-between';
      var info = el('div');
      info.appendChild(el('div', null));
      info.children[0].style.height = '10px';
      info.children[0].style.width = '112px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '160px';
      info.children[1].style.marginTop = '6px';
      r.appendChild(info);
      var tg = el('div', 'mk-toggle ' + (i % 2 === 0 ? 'on' : 'off'));
      tg.appendChild(el('div', 'mk-toggle-knob'));
      r.appendChild(tg);
      list.appendChild(r);
    });
    main.appendChild(list);
    root.appendChild(main);
    return root;
  }

  /* ---------- Hospital mockups ---------- */
  function mkHospitalDashboard() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '12px';
    hl.children[0].style.width = '128px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.alignItems = 'center';
    hr.style.gap = '8px';
    hr.innerHTML = svgIcon(ICONS.heart, 16);
    hr.children[0].style.color = 'var(--rose-400)';
    hr.appendChild(avatar(28));
    head.appendChild(hr);
    root.appendChild(head);

    var stats = el('div', 'mk-stat-grid');
    [['Patients', '342'], ['Appointments', '28'], ['Staff', '64'], ['Beds', '120']].forEach(function (s) {
      var c = el('div', 'mk-stat');
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '40px';
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '2fr 1fr';
    grid.style.gap = '8px';
    grid.style.marginTop = '12px';
    var bc = el('div', 'mk-card');
    bc.appendChild(el('div', 'mk-bar-w'));
    bc.appendChild(barChart([60, 80, 45, 70, 90, 55, 75], 'var(--rose-300)', 'var(--p400)'));
    grid.appendChild(bc);
    var lc = el('div', 'mk-card');
    lc.appendChild(el('div', 'mk-bar-w'));
    lc.children[0].style.width = '56px';
    var rows = el('div');
    rows.style.marginTop = '8px';
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = '6px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      var ic = el('div');
      ic.style.height = '20px';
      ic.style.width = '20px';
      ic.style.borderRadius = '6px';
      ic.style.background = 'var(--rose-100)';
      r.appendChild(ic);
      r.appendChild(bar(6, '100%'));
      rows.appendChild(r);
    });
    lc.appendChild(rows);
    grid.appendChild(lc);
    root.appendChild(grid);
    return root;
  }

  function mkHospitalPatientForm() {
    var root = el('div', 'mk mk-col mk-p4');
    root.appendChild(el('div', null));
    root.children[0].style.height = '12px';
    root.children[0].style.width = '128px';
    root.children[0].style.borderRadius = '6px';
    root.children[0].style.background = 'var(--i800)';
    root.children[0].style.marginBottom = '12px';
    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '8px';
    ['Full Name', 'Age', 'Blood Group', 'Gender', 'Phone', 'Address'].forEach(function (f) {
      var c = el('div', 'mk-card');
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '48px';
      var v = el('div');
      v.style.height = '10px';
      v.style.width = '80px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i100)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      grid.appendChild(c);
    });
    root.appendChild(grid);
    var row = el('div');
    row.style.marginTop = '12px';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '8px';
    var inp = el('div');
    inp.style.height = '28px';
    inp.style.flex = '1';
    inp.style.borderRadius = '8px';
    inp.style.background = 'var(--i100)';
    row.appendChild(inp);
    var btn = el('div');
    btn.style.height = '28px';
    btn.style.width = '96px';
    btn.style.borderRadius = '8px';
    btn.style.background = 'var(--p400)';
    row.appendChild(btn);
    root.appendChild(row);
    return root;
  }

  function mkHospitalAppointments() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    head.appendChild(el('div', null));
    head.children[0].style.height = '12px';
    head.children[0].style.width = '112px';
    head.children[0].style.borderRadius = '6px';
    head.children[0].style.background = 'var(--i800)';
    var btn = el('div');
    btn.style.height = '28px';
    btn.style.width = '80px';
    btn.style.borderRadius = '8px';
    btn.style.background = 'var(--p400)';
    head.appendChild(btn);
    root.appendChild(head);

    var cal = el('div');
    cal.style.display = 'grid';
    cal.style.gridTemplateColumns = 'repeat(7,1fr)';
    cal.style.gap = '4px';
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(function (d, i) {
      var c = el('div');
      c.style.textAlign = 'center';
      var lbl = el('div');
      lbl.style.fontSize = '8px';
      lbl.style.fontWeight = '600';
      lbl.style.color = 'var(--i400)';
      lbl.textContent = d;
      c.appendChild(lbl);
      var cell = el('div');
      cell.style.height = '24px';
      cell.style.width = '24px';
      cell.style.borderRadius = '6px';
      cell.style.margin = '4px auto 0';
      cell.style.display = 'flex';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.fontSize = '9px';
      cell.style.fontWeight = '600';
      if (i === 2) { cell.style.background = 'var(--p400)'; cell.style.color = '#fff'; }
      else { cell.style.background = '#fff'; cell.style.color = 'var(--i500)'; }
      cell.textContent = i + 10;
      c.appendChild(cell);
      cal.appendChild(c);
    });
    root.appendChild(cal);

    var list = el('div');
    list.style.marginTop = '12px';
    list.style.flex = '1';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [
      { c: 'var(--rose-100)' }, { c: 'var(--p100)' }, { c: 'var(--i100)' },
    ].forEach(function (a) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.style.padding = '10px';
      var ic = el('div');
      ic.style.height = '32px';
      ic.style.width = '32px';
      ic.style.borderRadius = '8px';
      ic.style.background = a.c;
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', null));
      info.children[0].style.height = '10px';
      info.children[0].style.width = '112px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      r.appendChild(info);
      r.appendChild(el('div', 'mk-bar-s'));
      r.children[2].style.width = '40px';
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  function mkHospitalRecords() {
    var root = el('div', 'mk mk-col mk-p4');
    root.appendChild(el('div', null));
    root.children[0].style.height = '12px';
    root.children[0].style.width = '112px';
    root.children[0].style.borderRadius = '6px';
    root.children[0].style.background = 'var(--i800)';
    root.children[0].style.marginBottom = '12px';
    var table = el('div', 'mk-table');
    table.style.flex = '1';
    var th = el('div', 'mk-table-head');
    th.style.gridTemplateColumns = '5fr 4fr 3fr';
    th.innerHTML = '<div>Patient</div><div>Diagnosis</div><div>Last Visit</div>';
    table.appendChild(th);
    [0, 1, 2, 3, 4].forEach(function () {
      var row = el('div', 'mk-table-row');
      row.style.gridTemplateColumns = '5fr 4fr 3fr';
      var c1 = el('div', 'flex items-center');
      c1.style.display = 'flex';
      c1.style.alignItems = 'center';
      c1.style.gap = '8px';
      c1.appendChild(avatar(24));
      c1.appendChild(el('div', null));
      c1.children[1].style.height = '8px';
      c1.children[1].style.width = '80px';
      c1.children[1].style.borderRadius = '6px';
      c1.children[1].style.background = 'var(--i700)';
      row.appendChild(c1);
      var c2 = el('div');
      c2.appendChild(el('div', 'mk-bar-s'));
      c2.children[0].style.width = '64px';
      row.appendChild(c2);
      var c3 = el('div');
      c3.appendChild(el('div', 'mk-bar-s'));
      c3.children[0].style.width = '48px';
      row.appendChild(c3);
      table.appendChild(row);
    });
    root.appendChild(table);
    return root;
  }

  function mkHospitalBilling() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    head.appendChild(el('div', null));
    head.children[0].style.height = '12px';
    head.children[0].style.width = '96px';
    head.children[0].style.borderRadius = '6px';
    head.children[0].style.background = 'var(--i800)';
    var hr = el('div');
    hr.innerHTML = svgIcon(ICONS.dollar, 16);
    hr.children[0].style.color = 'var(--p500)';
    head.appendChild(hr);
    root.appendChild(head);

    var stats = el('div');
    stats.style.display = 'grid';
    stats.style.gridTemplateColumns = 'repeat(3,1fr)';
    stats.style.gap = '8px';
    [['Revenue', '$84k'], ['Pending', '$12k'], ['Paid', '$72k']].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.style.padding = '10px';
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '40px';
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '40px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);

    var card = el('div', 'mk-card');
    card.style.marginTop = '12px';
    card.style.flex = '1';
    card.appendChild(el('div', 'mk-bar-w'));
    var list = el('div');
    list.style.marginTop = '8px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.justifyContent = 'space-between';
      var left = el('div');
      left.style.display = 'flex';
      left.style.alignItems = 'center';
      left.style.gap = '8px';
      var ic = el('div');
      ic.style.height = '28px';
      ic.style.width = '28px';
      ic.style.borderRadius = '8px';
      ic.style.background = 'var(--p100)';
      left.appendChild(ic);
      var info = el('div');
      info.appendChild(el('div', null));
      info.children[0].style.height = '8px';
      info.children[0].style.width = '96px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '56px';
      info.children[1].style.marginTop = '4px';
      left.appendChild(info);
      r.appendChild(left);
      r.appendChild(el('div', 'mk-bar-s'));
      r.children[1].style.width = '40px';
      list.appendChild(r);
    });
    card.appendChild(list);
    root.appendChild(card);
    return root;
  }

  function mkHospitalStaff() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div', 'mk-topbar');
    head.appendChild(el('div', null));
    head.children[0].style.height = '12px';
    head.children[0].style.width = '96px';
    head.children[0].style.borderRadius = '6px';
    head.children[0].style.background = 'var(--i800)';
    var hr = el('div');
    hr.innerHTML = svgIcon(ICONS.userCog, 16);
    hr.children[0].style.color = 'var(--i500)';
    head.appendChild(hr);
    root.appendChild(head);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '8px';
    [0, 1, 2, 3].forEach(function () {
      var c = el('div', 'mk-card');
      c.style.padding = '12px';
      var top = el('div');
      top.style.display = 'flex';
      top.style.alignItems = 'center';
      top.style.gap = '8px';
      top.appendChild(avatar(32));
      var info = el('div');
      info.appendChild(el('div', null));
      info.children[0].style.height = '8px';
      info.children[0].style.width = '64px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '48px';
      info.children[1].style.marginTop = '4px';
      top.appendChild(info);
      c.appendChild(top);
      var tags = el('div');
      tags.style.marginTop = '8px';
      tags.style.display = 'flex';
      tags.style.gap = '4px';
      var t1 = el('div');
      t1.style.height = '16px';
      t1.style.width = '48px';
      t1.style.borderRadius = '6px';
      t1.style.background = 'var(--p100)';
      tags.appendChild(t1);
      var t2 = el('div');
      t2.style.height = '16px';
      t2.style.width = '40px';
      t2.style.borderRadius = '6px';
      t2.style.background = 'var(--i100)';
      tags.appendChild(t2);
      c.appendChild(tags);
      grid.appendChild(c);
    });
    root.appendChild(grid);
    return root;
  }

  /* ---------- CCTV mockups ---------- */
  function mkCctvDashboard() {
    var root = el('div', 'mk mk-col mk-dark');
    root.style.padding = '12px';
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.style.display = 'flex';
    hl.style.alignItems = 'center';
    hl.style.gap = '8px';
    hl.innerHTML = svgIcon(ICONS.camera, 16);
    hl.children[0].style.color = 'var(--p400)';
    var lbl = el('div');
    lbl.style.height = '10px';
    lbl.style.width = '96px';
    lbl.style.borderRadius = '6px';
    lbl.style.background = 'var(--i700)';
    hl.appendChild(lbl);
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.alignItems = 'center';
    hr.style.gap = '6px';
    var dot = el('div');
    dot.style.height = '8px';
    dot.style.width = '8px';
    dot.style.borderRadius = '50%';
    dot.style.background = 'var(--emerald-400)';
    dot.className = 'animate-pulse';
    hr.appendChild(dot);
    var txt = el('div');
    txt.style.height = '8px';
    txt.style.width = '48px';
    txt.style.borderRadius = '6px';
    txt.style.background = 'var(--i700)';
    hr.appendChild(txt);
    head.appendChild(hr);
    root.appendChild(head);

    var grid = el('div', 'mk-cam-grid');
    [0, 1, 2, 3].forEach(function (i) {
      var cam = el('div', 'mk-cam');
      cam.appendChild(el('div', 'mk-cam-inner'));
      var rec = el('div');
      rec.style.cssText = 'position:absolute;left:6px;top:6px;display:flex;align-items:center;gap:4px';
      var rd = el('div', 'mk-cam-rec');
      rec.appendChild(rd);
      var rt = el('div');
      rt.style.fontSize = '7px';
      rt.style.fontWeight = '600';
      rt.style.color = 'rgba(255,255,255,.7)';
      rt.textContent = 'CAM ' + (i + 1);
      rec.appendChild(rt);
      cam.appendChild(rec);
      var foot = el('div');
      foot.style.cssText = 'position:absolute;bottom:6px;right:6px;height:4px;width:32px;border-radius:6px;background:rgba(255,255,255,.2)';
      cam.appendChild(foot);
      grid.appendChild(cam);
    });
    root.appendChild(grid);
    return root;
  }

  function mkCctvAlerts() {
    var root = el('div', 'mk mk-col mk-p4');
    var head = el('div');
    head.style.display = 'flex';
    head.style.alignItems = 'center';
    head.style.gap = '8px';
    head.style.marginBottom = '12px';
    head.innerHTML = svgIcon(ICONS.alert, 16);
    head.children[0].style.color = 'var(--amber-500)';
    head.appendChild(el('div', null));
    head.children[1].style.height = '12px';
    head.children[1].style.width = '96px';
    head.children[1].style.borderRadius = '6px';
    head.children[1].style.background = 'var(--i800)';
    root.appendChild(head);

    var list = el('div');
    list.style.flex = '1';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [
      { c: 'var(--rose-100)' }, { c: 'var(--amber-100)' }, { c: 'var(--p100)' }, { c: 'var(--rose-100)' },
    ].forEach(function (a) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.style.padding = '10px';
      var ic = el('div');
      ic.style.height = '32px';
      ic.style.width = '32px';
      ic.style.borderRadius = '8px';
      ic.style.background = a.c;
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', null));
      info.children[0].style.height = '8px';
      info.children[0].style.width = '112px';
      info.children[0].style.borderRadius = '6px';
      info.children[0].style.background = 'var(--i700)';
      info.appendChild(el('div', 'mk-bar-s'));
      r.appendChild(info);
      r.appendChild(el('div', 'mk-bar-s'));
      r.children[2].style.width = '32px';
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  function mkCctvReports() {
    var root = el('div', 'mk mk-col mk-p4');
    root.appendChild(el('div', null));
    root.children[0].style.height = '12px';
    root.children[0].style.width = '96px';
    root.children[0].style.borderRadius = '6px';
    root.children[0].style.background = 'var(--i800)';
    root.children[0].style.marginBottom = '12px';
    var stats = el('div');
    stats.style.display = 'grid';
    stats.style.gridTemplateColumns = 'repeat(3,1fr)';
    stats.style.gap = '8px';
    [['Alerts', '142'], ['Resolved', '128'], ['Pending', '14']].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.style.padding = '10px';
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '32px';
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      stats.appendChild(c);
    });
    root.appendChild(stats);
    var chart = el('div', 'mk-card');
    chart.style.marginTop = '12px';
    chart.style.flex = '1';
    chart.appendChild(el('div', 'mk-bar-w'));
    chart.appendChild(barChart([40, 65, 50, 80, 55, 90, 70], 'var(--amber-300)', 'var(--rose-400)'));
    root.appendChild(chart);
    return root;
  }

  function mkCctvAnalytics() {
    var root = el('div', 'mk mk-col mk-p4');
    root.appendChild(el('div', null));
    root.children[0].style.height = '12px';
    root.children[0].style.width = '96px';
    root.children[0].style.borderRadius = '6px';
    root.children[0].style.background = 'var(--i800)';
    root.children[0].style.marginBottom = '12px';
    var chart = el('div', 'mk-card');
    chart.style.flex = '1';
    chart.appendChild(el('div', 'mk-bar-w'));
    var area = el('div');
    area.style.marginTop = '8px';
    area.style.height = '96px';
    area.innerHTML = areaChart('#1f1f2e', 'cctvGrad');
    chart.appendChild(area);
    root.appendChild(chart);
    var grid = el('div');
    grid.style.marginTop = '12px';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '8px';
    [0, 1].forEach(function () {
      var c = el('div', 'mk-card');
      c.style.padding = '10px';
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[0].style.width = '48px';
      var v = el('div');
      v.style.height = '12px';
      v.style.width = '40px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i800)';
      v.style.marginTop = '6px';
      c.appendChild(v);
      grid.appendChild(c);
    });
    root.appendChild(grid);
    return root;
  }

  function mkCctvLive() {
    var root = el('div', 'mk mk-col mk-dark');
    root.style.padding = '12px';
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.style.display = 'flex';
    hl.style.alignItems = 'center';
    hl.style.gap = '8px';
    hl.innerHTML = svgIcon(ICONS.video, 16);
    hl.children[0].style.color = 'var(--p400)';
    var lbl = el('div');
    lbl.style.height = '10px';
    lbl.style.width = '80px';
    lbl.style.borderRadius = '6px';
    lbl.style.background = 'var(--i700)';
    hl.appendChild(lbl);
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.alignItems = 'center';
    hr.style.gap = '6px';
    var dot = el('div', 'mk-live-dot');
    hr.appendChild(dot);
    var live = el('div');
    live.style.fontSize = '7px';
    live.style.fontWeight = '700';
    live.style.color = 'var(--rose-400)';
    live.textContent = 'LIVE';
    hr.appendChild(live);
    head.appendChild(hr);
    root.appendChild(head);

    var screen = el('div');
    screen.style.position = 'relative';
    screen.style.flex = '1';
    screen.style.overflow = 'hidden';
    screen.style.borderRadius = '8px';
    screen.style.background = 'linear-gradient(135deg,var(--i700),var(--i900))';
    var gridBg = el('div', 'grid-bg');
    gridBg.style.position = 'absolute';
    gridBg.style.inset = '0';
    gridBg.style.opacity = '.1';
    screen.appendChild(gridBg);
    var ring = el('div');
    ring.style.cssText = 'position:absolute;left:50%;top:50%;width:48px;height:48px;transform:translate(-50%,-50%);border:2px solid rgba(255,122,74,.4);border-radius:50%';
    screen.appendChild(ring);
    var dot2 = el('div');
    dot2.style.cssText = 'position:absolute;left:50%;top:50%;width:12px;height:12px;transform:translate(-50%,-50%);background:var(--p400);border-radius:50%';
    screen.appendChild(dot2);
    var foot = el('div');
    foot.style.cssText = 'position:absolute;bottom:8px;left:8px;display:flex;gap:4px';
    var f1 = el('div');
    f1.style.cssText = 'height:16px;width:32px;border-radius:6px;background:rgba(255,255,255,.1)';
    foot.appendChild(f1);
    var f2 = el('div');
    f2.style.cssText = 'height:16px;width:32px;border-radius:6px;background:rgba(255,255,255,.1)';
    foot.appendChild(f2);
    screen.appendChild(foot);
    root.appendChild(screen);
    return root;
  }

  /* ---------- Mobile mockups ---------- */
  function mkMobileDashboard() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.appendChild(el('div', null));
    hl.children[0].style.height = '8px';
    hl.children[0].style.width = '64px';
    hl.children[0].style.borderRadius = '6px';
    hl.children[0].style.background = 'var(--i800)';
    hl.appendChild(el('div', 'mk-bar-s'));
    hl.children[1].style.width = '40px';
    head.appendChild(hl);
    head.appendChild(avatar(24));
    root.appendChild(head);

    var hero = el('div');
    hero.style.height = '80px';
    hero.style.borderRadius = '12px';
    hero.style.background = 'linear-gradient(135deg,var(--p400),var(--i800))';
    hero.style.padding = '12px';
    hero.style.marginBottom = '12px';
    hero.appendChild(el('div', null));
    hero.children[0].style.height = '6px';
    hero.children[0].style.width = '48px';
    hero.children[0].style.borderRadius = '6px';
    hero.children[0].style.background = 'rgba(255,255,255,.4)';
    var hv = el('div');
    hv.style.height = '12px';
    hv.style.width = '64px';
    hv.style.borderRadius = '6px';
    hv.style.background = 'rgba(255,255,255,.7)';
    hv.style.marginTop = '6px';
    hero.appendChild(hv);
    root.appendChild(hero);

    var grid = el('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = '1fr 1fr';
    grid.style.gap = '8px';
    [
      { i: 'book', c: 'background:var(--p100);color:var(--p600)' },
      { i: 'calendar', c: 'background:var(--amber-100);color:var(--amber-500)' },
      { i: 'file', c: 'background:var(--rose-100);color:var(--rose-500)' },
      { i: 'chart', c: 'background:var(--i100);color:var(--i600)' },
    ].forEach(function (s) {
      var card = el('div', 'mk-card');
      card.style.padding = '10px';
      var ic = el('div');
      ic.style.cssText = 'height:28px;width:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-bottom:6px;' + s.c;
      ic.innerHTML = svgIcon(ICONS[s.i], 14);
      card.appendChild(ic);
      card.appendChild(el('div', 'mk-bar-s'));
      card.children[1].style.width = '56px';
      var v = el('div');
      v.style.height = '8px';
      v.style.width = '32px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i700)';
      v.style.marginTop = '4px';
      card.appendChild(v);
      grid.appendChild(card);
    });
    root.appendChild(grid);
    return root;
  }

  function mkMobileProfile() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    root.style.alignItems = 'center';
    var av = avatar(56);
    av.style.marginTop = '8px';
    root.appendChild(av);
    root.appendChild(el('div', null));
    root.children[1].style.height = '10px';
    root.children[1].style.width = '80px';
    root.children[1].style.borderRadius = '6px';
    root.children[1].style.background = 'var(--i800)';
    root.children[1].style.marginTop = '8px';
    root.appendChild(el('div', 'mk-bar-s'));
    root.children[2].style.width = '56px';
    root.children[2].style.marginTop = '4px';
    var btns = el('div');
    btns.style.marginTop = '12px';
    btns.style.display = 'flex';
    btns.style.gap = '8px';
    var b1 = el('div');
    b1.style.height = '24px';
    b1.style.width = '64px';
    b1.style.borderRadius = '8px';
    b1.style.background = 'var(--p400)';
    btns.appendChild(b1);
    var b2 = el('div');
    b2.style.height = '24px';
    b2.style.width = '64px';
    b2.style.borderRadius = '8px';
    b2.style.background = '#fff';
    b2.style.boxShadow = 'var(--shadow-soft)';
    btns.appendChild(b2);
    root.appendChild(btns);

    var list = el('div');
    list.style.marginTop = '12px';
    list.style.width = '100%';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function () {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.style.padding = '10px';
      var ic = el('div');
      ic.style.height = '28px';
      ic.style.width = '28px';
      ic.style.borderRadius = '8px';
      ic.style.background = 'var(--i100)';
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[0].style.width = '64px';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '40px';
      info.children[1].style.marginTop = '4px';
      r.appendChild(info);
      r.appendChild(el('div', 'mk-bar-s'));
      r.children[2].style.width = '16px';
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  function mkMobileNotifications() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    var head = el('div');
    head.style.display = 'flex';
    head.style.alignItems = 'center';
    head.style.gap = '8px';
    head.style.marginBottom = '12px';
    head.innerHTML = svgIcon(ICONS.bell, 16);
    head.children[0].style.color = 'var(--p500)';
    head.appendChild(el('div', null));
    head.children[1].style.height = '10px';
    head.children[1].style.width = '64px';
    head.children[1].style.borderRadius = '6px';
    head.children[1].style.background = 'var(--i800)';
    root.appendChild(head);

    var list = el('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [
      { c: 'var(--p100)' }, { c: 'var(--amber-100)' }, { c: 'var(--rose-100)' }, { c: 'var(--emerald-100)' },
    ].forEach(function (n) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'flex-start';
      r.style.gap = '8px';
      r.style.padding = '10px';
      var ic = el('div');
      ic.style.height = '28px';
      ic.style.width = '28px';
      ic.style.borderRadius = '8px';
      ic.style.background = n.c;
      ic.style.marginTop = '2px';
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[0].style.width = '80px';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '56px';
      info.children[1].style.marginTop = '4px';
      r.appendChild(info);
      var badge = el('div');
      badge.style.height = '6px';
      badge.style.width = '24px';
      badge.style.borderRadius = '6px';
      badge.style.background = 'var(--p200)';
      r.appendChild(badge);
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  function mkMobileCourseDetails() {
    var root = el('div', 'mk mk-col');
    var hero = el('div');
    hero.style.height = '96px';
    hero.style.background = 'linear-gradient(135deg,var(--i800),var(--p500))';
    root.appendChild(hero);
    var body = el('div');
    body.style.flex = '1';
    body.style.marginTop = '-16px';
    body.style.borderRadius = '16px 16px 0 0';
    body.style.background = 'var(--i50)';
    body.style.padding = '12px';
    body.appendChild(el('div', null));
    body.children[0].style.height = '10px';
    body.children[0].style.width = '96px';
    body.children[0].style.borderRadius = '6px';
    body.children[0].style.background = 'var(--i800)';
    body.appendChild(el('div', 'mk-bar-s'));
    body.children[1].style.width = '128px';
    body.children[1].style.marginTop = '6px';
    var tags = el('div');
    tags.style.marginTop = '12px';
    tags.style.display = 'flex';
    tags.style.gap = '6px';
    var t1 = el('div');
    t1.style.height = '20px';
    t1.style.width = '56px';
    t1.style.borderRadius = '9999px';
    t1.style.background = 'var(--p400)';
    tags.appendChild(t1);
    var t2 = el('div');
    t2.style.height = '20px';
    t2.style.width = '56px';
    t2.style.borderRadius = '9999px';
    t2.style.background = '#fff';
    t2.style.boxShadow = 'var(--shadow-soft)';
    tags.appendChild(t2);
    body.appendChild(tags);

    var list = el('div');
    list.style.marginTop = '12px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '8px';
    [0, 1, 2, 3].forEach(function (i) {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.style.padding = '8px';
      var ic = el('div');
      ic.style.height = '24px';
      ic.style.width = '24px';
      ic.style.borderRadius = '8px';
      ic.style.display = 'flex';
      ic.style.alignItems = 'center';
      ic.style.justifyContent = 'center';
      if (i === 0) { ic.style.background = 'var(--p400)'; ic.innerHTML = svgIcon(ICONS.play, 12); ic.style.color = '#fff'; }
      else { ic.style.background = 'var(--i100)'; ic.innerHTML = svgIcon(ICONS.play, 12); ic.style.color = 'var(--i400)'; }
      r.appendChild(ic);
      var info = el('div');
      info.style.flex = '1';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[0].style.width = '80px';
      info.appendChild(el('div', 'mk-bar-s'));
      info.children[1].style.width = '40px';
      info.children[1].style.marginTop = '4px';
      r.appendChild(info);
      list.appendChild(r);
    });
    body.appendChild(list);
    root.appendChild(body);
    return root;
  }

  function mkMobileAttendance() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    root.appendChild(el('div', null));
    root.children[0].style.height = '10px';
    root.children[0].style.width = '80px';
    root.children[0].style.borderRadius = '6px';
    root.children[0].style.background = 'var(--i800)';
    root.children[0].style.marginBottom = '12px';
    var ringWrap = el('div');
    ringWrap.style.display = 'flex';
    ringWrap.style.justifyContent = 'center';
    var ring = el('div', 'mk-ring');
    ring.style.width = '80px';
    ring.style.height = '80px';
    ring.innerHTML = ringSVG('#ff5c2e', 89);
    var rc = el('div', 'mk-ring-center');
    rc.appendChild(el('div', null));
    rc.children[0].style.height = '12px';
    rc.children[0].style.width = '32px';
    rc.children[0].style.borderRadius = '6px';
    rc.children[0].style.background = 'var(--i800)';
    rc.appendChild(el('div', 'mk-bar-s'));
    rc.children[1].style.width = '24px';
    rc.children[1].style.marginTop = '4px';
    ring.appendChild(rc);
    ringWrap.appendChild(ring);
    root.appendChild(ringWrap);

    var heat = el('div', 'mk-heatmap');
    heat.style.marginTop = '12px';
    ['M', 'T', 'W', 'T', 'F', 'S', 'S'].forEach(function (d, i) {
      var c = el('div');
      c.style.textAlign = 'center';
      var lbl = el('div');
      lbl.style.fontSize = '7px';
      lbl.style.fontWeight = '600';
      lbl.style.color = 'var(--i400)';
      lbl.textContent = d;
      c.appendChild(lbl);
      var cell = el('div', 'mk-heat-cell');
      cell.style.width = '20px';
      cell.style.height = '20px';
      cell.style.background = i < 5 ? 'var(--p400)' : 'var(--i100)';
      c.appendChild(cell);
      heat.appendChild(c);
    });
    root.appendChild(heat);

    var list = el('div');
    list.style.marginTop = '12px';
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '6px';
    [0, 1, 2].forEach(function () {
      var r = el('div', 'mk-card');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '8px';
      r.style.padding = '8px';
      var ic = el('div');
      ic.style.height = '20px';
      ic.style.width = '20px';
      ic.style.borderRadius = '6px';
      ic.style.background = 'var(--p100)';
      r.appendChild(ic);
      r.appendChild(bar(6, '100%'));
      list.appendChild(r);
    });
    root.appendChild(list);
    return root;
  }

  /* ---------- Before / After mockups ---------- */
  function mkBefore() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    root.style.background = '#e5e7eb';
    var dots = el('div');
    dots.style.display = 'flex';
    dots.style.gap = '4px';
    dots.style.marginBottom = '8px';
    [0, 1, 2].forEach(function () {
      var d = el('div');
      d.style.height = '12px';
      d.style.width = '12px';
      d.style.borderRadius = '6px';
      d.style.background = '#9ca3af';
      dots.appendChild(d);
    });
    root.appendChild(dots);
    root.appendChild(el('div', null));
    root.children[1].style.height = '8px';
    root.children[1].style.width = '128px';
    root.children[1].style.borderRadius = '6px';
    root.children[1].style.background = '#9ca3af';
    root.children[1].style.marginBottom = '8px';

    var g1 = el('div');
    g1.style.display = 'grid';
    g1.style.gridTemplateColumns = 'repeat(3,1fr)';
    g1.style.gap = '4px';
    [0, 1, 2].forEach(function () {
      var c = el('div');
      c.style.borderRadius = '6px';
      c.style.background = '#d1d5db';
      c.style.padding = '8px';
      c.appendChild(el('div', null));
      c.children[0].style.height = '6px';
      c.children[0].style.width = '40px';
      c.children[0].style.borderRadius = '6px';
      c.children[0].style.background = '#9ca3af';
      var v = el('div');
      v.style.height = '8px';
      v.style.width = '24px';
      v.style.borderRadius = '6px';
      v.style.background = '#6b7280';
      v.style.marginTop = '4px';
      c.appendChild(v);
      g1.appendChild(c);
    });
    root.appendChild(g1);

    var g2 = el('div');
    g2.style.display = 'grid';
    g2.style.gridTemplateColumns = '1fr 1fr';
    g2.style.gap = '4px';
    g2.style.marginTop = '8px';
    [0, 1].forEach(function () {
      var c = el('div');
      c.style.borderRadius = '6px';
      c.style.background = '#d1d5db';
      c.style.padding = '8px';
      var inner = el('div');
      inner.style.height = '48px';
      inner.style.borderRadius = '6px';
      inner.style.background = '#9ca3af';
      c.appendChild(inner);
      g2.appendChild(c);
    });
    root.appendChild(g2);

    var lines = el('div');
    lines.style.marginTop = '8px';
    lines.style.display = 'flex';
    lines.style.flexDirection = 'column';
    lines.style.gap = '4px';
    [0, 1, 2].forEach(function () {
      var l = el('div');
      l.style.height = '8px';
      l.style.borderRadius = '6px';
      l.style.background = '#d1d5db';
      lines.appendChild(l);
    });
    root.appendChild(lines);
    return root;
  }

  function mkAfter() {
    var root = el('div', 'mk mk-col');
    root.style.padding = '12px';
    var head = el('div', 'mk-topbar');
    var hl = el('div');
    hl.style.display = 'flex';
    hl.style.alignItems = 'center';
    hl.style.gap = '6px';
    var logo = el('div');
    logo.style.height = '16px';
    logo.style.width = '16px';
    logo.style.borderRadius = '6px';
    logo.style.background = 'var(--p400)';
    hl.appendChild(logo);
    hl.appendChild(el('div', null));
    hl.children[1].style.height = '8px';
    hl.children[1].style.width = '64px';
    hl.children[1].style.borderRadius = '6px';
    hl.children[1].style.background = 'var(--i800)';
    head.appendChild(hl);
    var hr = el('div');
    hr.style.display = 'flex';
    hr.style.gap = '4px';
    var h1 = el('div');
    h1.style.height = '16px';
    h1.style.width = '16px';
    h1.style.borderRadius = '6px';
    h1.style.background = 'var(--i100)';
    hr.appendChild(h1);
    hr.appendChild(avatar(16));
    head.appendChild(hr);
    root.appendChild(head);

    root.appendChild(el('div', null));
    root.children[1].style.height = '10px';
    root.children[1].style.width = '96px';
    root.children[1].style.borderRadius = '6px';
    root.children[1].style.background = 'var(--i800)';
    root.children[1].style.marginBottom = '8px';

    var g1 = el('div');
    g1.style.display = 'grid';
    g1.style.gridTemplateColumns = 'repeat(3,1fr)';
    g1.style.gap = '6px';
    [
      { g: 'var(--p400),var(--p600)' }, { g: 'var(--i700),var(--i900)' }, { g: 'var(--p300),var(--p500)' },
    ].forEach(function (s) {
      var c = el('div', 'mk-card');
      c.style.padding = '8px';
      var cover = el('div');
      cover.style.height = '32px';
      cover.style.borderRadius = '6px';
      cover.style.background = 'linear-gradient(135deg,' + s.g + ')';
      c.appendChild(cover);
      c.appendChild(el('div', 'mk-bar-s'));
      c.children[1].style.width = '40px';
      c.children[1].style.marginTop = '4px';
      var v = el('div');
      v.style.height = '8px';
      v.style.width = '24px';
      v.style.borderRadius = '6px';
      v.style.background = 'var(--i700)';
      v.style.marginTop = '4px';
      c.appendChild(v);
      g1.appendChild(c);
    });
    root.appendChild(g1);

    var g2 = el('div');
    g2.style.display = 'grid';
    g2.style.gridTemplateColumns = '1fr 1fr';
    g2.style.gap = '6px';
    g2.style.marginTop = '8px';
    var bc = el('div', 'mk-card');
    bc.style.padding = '8px';
    var bcBars = el('div');
    bcBars.style.display = 'flex';
    bcBars.style.alignItems = 'flex-end';
    bcBars.style.gap = '4px';
    bcBars.style.height = '48px';
    [40, 70, 50, 90].forEach(function (h) {
      var b = el('div');
      b.style.flex = '1';
      b.style.height = h + '%';
      b.style.borderRadius = '6px 6px 0 0';
      b.style.background = 'var(--p400)';
      bcBars.appendChild(b);
    });
    bc.appendChild(bcBars);
    g2.appendChild(bc);
    var lc = el('div', 'mk-card');
    lc.style.padding = '8px';
    var list = el('div');
    list.style.display = 'flex';
    list.style.flexDirection = 'column';
    list.style.gap = '4px';
    [0, 1, 2].forEach(function () {
      var r = el('div');
      r.style.display = 'flex';
      r.style.alignItems = 'center';
      r.style.gap = '4px';
      r.appendChild(avatar(12));
      r.appendChild(bar(6, '100%'));
      list.appendChild(r);
    });
    lc.appendChild(list);
    g2.appendChild(lc);
    root.appendChild(g2);
    return root;
  }

  /* ---------- Mockup registry ---------- */
  var MOCKUPS = {
    'lms-dashboard': mkLmsDashboard,
    'student-management': mkStudentManagement,
    'attendance': mkAttendance,
    'assignments': mkAssignments,
    'courses': mkCourses,
    'course-details': mkCourseDetails,
    'teacher-portal': mkTeacherPortal,
    'reports': mkReports,
    'analytics': mkAnalytics,
    'settings': mkSettings,
    'hospital-dashboard': mkHospitalDashboard,
    'hospital-patient-form': mkHospitalPatientForm,
    'hospital-appointments': mkHospitalAppointments,
    'hospital-records': mkHospitalRecords,
    'hospital-billing': mkHospitalBilling,
    'hospital-staff': mkHospitalStaff,
    'cctv-dashboard': mkCctvDashboard,
    'cctv-alerts': mkCctvAlerts,
    'cctv-reports': mkCctvReports,
    'cctv-analytics': mkCctvAnalytics,
    'cctv-live': mkCctvLive,
    'mobile-dashboard': mkMobileDashboard,
    'mobile-profile': mkMobileProfile,
    'mobile-notifications': mkMobileNotifications,
    'mobile-course-details': mkMobileCourseDetails,
    'mobile-attendance': mkMobileAttendance,
    'before': mkBefore,
    'after': mkAfter,
  };

  function renderMockup(container, key) {
    var fn = MOCKUPS[key];
    if (!fn) return;
    container.innerHTML = '';
    container.appendChild(fn());
  }

  /* ---------- Data ---------- */
  var LMS_SLIDES = [
    { id: 'dashboard', title: 'Dashboard', desc: 'Unified analytics overview with key metrics, charts, and recent activity at a glance.', num: '01', mk: 'lms-dashboard' },
    { id: 'students', title: 'Student Management', desc: 'Searchable, filterable directory with enrollment status and course tracking.', num: '02', mk: 'student-management' },
    { id: 'attendance', title: 'Attendance', desc: 'Visual attendance tracker with weekly heatmap and completion ring.', num: '03', mk: 'attendance' },
    { id: 'assignments', title: 'Assignments', desc: 'Submission pipeline with due dates, statuses, and quick actions.', num: '04', mk: 'assignments' },
    { id: 'courses', title: 'Courses', desc: 'Course catalog with cover art, lesson counts, and progress indicators.', num: '05', mk: 'courses' },
    { id: 'course-details', title: 'Course Details', desc: 'Structured lesson list with video player and sidebar navigation.', num: '06', mk: 'course-details' },
    { id: 'teacher', title: 'Teacher Portal', desc: 'Dedicated workspace for instructors to manage classes and students.', num: '07', mk: 'teacher-portal' },
    { id: 'reports', title: 'Reports', desc: 'Exportable reports with bar charts, donut summaries, and trend tables.', num: '08', mk: 'reports' },
    { id: 'analytics', title: 'Analytics', desc: 'Product analytics with area charts, session metrics, and funnels.', num: '09', mk: 'analytics' },
    { id: 'settings', title: 'Settings', desc: 'Organized settings panel with toggles, sections, and clear hierarchy.', num: '10', mk: 'settings' },
  ];

  var CASES = [
    {
      title: 'Dashboard Redesign',
      problem: 'Cluttered layout with no visual hierarchy, low contrast, and poor information density.',
      fixes: ['Clear visual hierarchy with spacing system', 'Improved contrast and readability', 'Data-driven chart components', 'Consistent card-based layout'],
    },
    {
      title: 'Course Catalog Redesign',
      problem: 'Generic grid with no engagement cues, inconsistent card sizing, and weak CTAs.',
      fixes: ['Gradient cover art for visual interest', 'Progress indicators and lesson counts', 'Prominent, consistent call-to-action', 'Responsive grid with proper breakpoints'],
    },
  ];

  var MOBILE_SCREENS = [
    { id: 'm-dashboard', title: 'Dashboard', mk: 'mobile-dashboard' },
    { id: 'm-profile', title: 'Profile', mk: 'mobile-profile' },
    { id: 'm-notifications', title: 'Notifications', mk: 'mobile-notifications' },
    { id: 'm-course', title: 'Course Details', mk: 'mobile-course-details' },
    { id: 'm-attendance', title: 'Attendance', mk: 'mobile-attendance' },
  ];

  var PROJECTS = [
    {
      id: 'hospital', title: 'Hospital Management System', tag: 'Healthcare SaaS',
      screens: [
        { label: 'Dashboard', icon: 'activity', mk: 'hospital-dashboard' },
        { label: 'Patient Form', icon: 'stethoscope', mk: 'hospital-patient-form' },
        { label: 'Appointments', icon: 'calendar', mk: 'hospital-appointments' },
        { label: 'Patient Records', icon: 'file', mk: 'hospital-records' },
        { label: 'Billing', icon: 'dollar', mk: 'hospital-billing' },
        { label: 'Staff Management', icon: 'userCog', mk: 'hospital-staff' },
      ],
    },
    {
      id: 'cctv', title: 'CCTV Monitoring System', tag: 'Security Platform',
      screens: [
        { label: 'Camera Dashboard', icon: 'camera', mk: 'cctv-dashboard' },
        { label: 'Alerts', icon: 'alert', mk: 'cctv-alerts' },
        { label: 'Reports', icon: 'chart', mk: 'cctv-reports' },
        { label: 'Analytics', icon: 'trending', mk: 'cctv-analytics' },
        { label: 'Live Monitoring', icon: 'video', mk: 'cctv-live' },
      ],
    },
  ];

  var SKILLS = ['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Design Systems', 'Auto Layout', 'Responsive Design', 'Prototyping', 'Dashboard Design', 'SaaS Design', 'LMS Design', 'Hospital Management', 'Mobile App Design', 'Interaction Design', 'User Flows', 'Design Thinking'];

  var STEPS = [
    { icon: 'search', label: 'Research', desc: 'User interviews, competitive analysis, problem framing.' },
    { icon: 'file', label: 'Wireframes', desc: 'Low-fidelity layouts and information architecture.' },
    { icon: 'book', label: 'UI Design', desc: 'High-fidelity screens with design system and components.' },
    { icon: 'play', label: 'Prototype', desc: 'Interactive prototypes for validation and demos.' },
    { icon: 'activity', label: 'Testing', desc: 'Usability testing, iteration, and refinement.' },
    { icon: 'settings', label: 'Dev Handoff', desc: 'Specs, tokens, and documentation for developers.' },
  ];

  var TESTIMONIALS = [
    { name: 'Sarah Mitchell', role: 'Product Manager, EdTech Startup', text: 'Exceptional eye for detail. The LMS redesign improved our user engagement significantly. Delivered on time with a complete design system.', initials: 'SM' },
    { name: 'James Carter', role: 'CTO, Healthcare Platform', text: 'Took our hospital management system from a rough concept to a polished, responsive product. The developer handoff was the cleanest we have seen.', initials: 'JC' },
    { name: 'Priya Nair', role: 'Design Lead, SaaS Company', text: 'A rare designer who balances aesthetics with real product thinking. Every screen had a clear purpose and solved a real user problem.', initials: 'PN' },
  ];

  /* ==================================================================
     BUILD SECTIONS
     ================================================================== */

  // Render all data-mockup containers
  document.querySelectorAll('[data-mockup]').forEach(function (c) {
    renderMockup(c, c.getAttribute('data-mockup'));
  });

  // Render bar charts
  document.querySelectorAll('[data-bar-chart]').forEach(function (c) {
    var heights = c.getAttribute('data-bar-chart').split(',').map(Number);
    c.innerHTML = '';
    heights.forEach(function (h) {
      var b = el('div');
      b.style.flex = '1';
      b.style.height = h + '%';
      b.style.borderRadius = '6px 6px 0 0';
      b.style.background = 'linear-gradient(to top,var(--p300),var(--p500))';
      c.appendChild(b);
    });
  });

  // Build slider
  (function buildSlider() {
    var track = document.getElementById('sliderTrack');
    var dots = document.getElementById('sliderDots');
    var indicator = document.getElementById('sliderIndicator');
    var count = LMS_SLIDES.length;
    var index = 0;
    var playing = true;
    var dragging = false;
    var startX = 0;
    var delta = 0;
    var autoplayTimer = null;

    LMS_SLIDES.forEach(function (slide) {
      var s = el('div', 'slider-slide');
      s.innerHTML =
        '<div class="slide-grid">' +
        '<div>' +
        '<div class="slide-mockup-frame">' +
        '<div class="slide-mockup-bar"><div class="dot dot-r"></div><div class="dot dot-a"></div><div class="dot dot-e"></div><span class="label">LMS — ' + slide.title + '</span></div>' +
        '<div class="slide-mockup-area" data-slide-mockup="' + slide.mk + '"></div>' +
        '</div>' +
        '</div>' +
        '<div class="slide-info">' +
        '<div class="slide-num">' + slide.num + '</div>' +
        '<h3 class="slide-title">' + slide.title + '</h3>' +
        '<p class="slide-desc">' + slide.desc + '</p>' +
        '<div class="slide-progress"><div class="slide-progress-bar"></div><span class="slide-progress-text">Screen ' + slide.num + ' of ' + String(count).padStart(2, '0') + '</span></div>' +
        '</div>' +
        '</div>';
      track.appendChild(s);
    });

    // Render slide mockups
    track.querySelectorAll('[data-slide-mockup]').forEach(function (c) {
      renderMockup(c, c.getAttribute('data-slide-mockup'));
    });

    // Build dots
    LMS_SLIDES.forEach(function (slide, i) {
      var d = el('button', 'dot-btn' + (i === 0 ? ' active' : ''));
      d.setAttribute('aria-label', 'Go to ' + slide.title);
      d.addEventListener('click', function () { goTo(i); });
      dots.appendChild(d);
    });

    function update() {
      track.style.transform = 'translateX(-' + index * 100 + '%)';
      var dotEls = dots.querySelectorAll('.dot-btn');
      dotEls.forEach(function (d, i) {
        if (i === index) d.classList.add('active');
        else d.classList.remove('active');
      });
      indicator.textContent = LMS_SLIDES[index].title + ' — drag, swipe, or use arrows to navigate';
    }

    function go(dir) { index = (index + dir + count) % count; update(); }
    function goTo(i) { index = i; update(); }

    function startAutoplay() {
      if (!playing) return;
      stopAutoplay();
      autoplayTimer = setInterval(function () { index = (index + 1) % count; update(); }, 5000);
    }
    function stopAutoplay() { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }

    document.getElementById('prevBtn').addEventListener('click', function () { go(-1); });
    document.getElementById('nextBtn').addEventListener('click', function () { go(1); });

    var playBtn = document.getElementById('playBtn');
    var playIcon = document.getElementById('playIcon');
    playBtn.addEventListener('click', function () {
      playing = !playing;
      if (playing) {
        playIcon.outerHTML = '<svg id="playIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
        startAutoplay();
      } else {
        stopAutoplay();
        playIcon.outerHTML = '<svg id="playIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
      }
    });

    // Keyboard
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    });

    // Drag / swipe
    var slider = document.getElementById('slider');
    slider.addEventListener('pointerdown', function (e) {
      dragging = true; playing = false; stopAutoplay();
      startX = e.clientX; delta = 0;
      track.style.transitionDuration = '0ms';
    });
    slider.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      delta = e.clientX - startX;
      track.style.transform = 'translateX(calc(-' + index * 100 + '% + ' + delta + 'px))';
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      track.style.transitionDuration = '';
      var threshold = 60;
      if (delta > threshold) go(-1);
      else if (delta < -threshold) go(1);
      else update();
      delta = 0;
    }
    slider.addEventListener('pointerup', endDrag);
    slider.addEventListener('pointerleave', endDrag);

    update();
    startAutoplay();
  })();

  // Build case studies
  (function buildCases() {
    var list = document.getElementById('caseList');
    CASES.forEach(function (c, idx) {
      var item = el('div', 'reveal');
      item.innerHTML =
        '<div class="case-head">' +
        '<div><h3 class="case-title">' + c.title + '</h3><p class="case-problem">' + c.problem + '</p></div>' +
        '<span class="case-badge">Case ' + String(idx + 1).padStart(2, '0') + '</span>' +
        '</div>' +
        '<div class="case-compare">' +
        '<div><div class="case-badge-before">BEFORE</div><div class="case-mockup" data-case-mockup="before"></div></div>' +
        '<div class="case-arrow"><div class="case-arrow-circle">' + svgIcon('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', 24) + '</div></div>' +
        '<div><div class="case-badge-after">AFTER</div><div class="case-mockup after" data-case-mockup="after"></div></div>' +
        '</div>';
      var fixes = el('div', 'case-fixes');
      c.fixes.forEach(function (f) {
        var fix = el('div', 'case-fix');
        fix.innerHTML = svgIcon('<polyline points="20 6 9 17 4 12"/>', 16);
        fix.firstChild.style.color = 'var(--p500)';
        fix.firstChild.style.flexShrink = '0';
        fix.firstChild.style.marginTop = '2px';
        var span = el('span');
        span.textContent = f;
        fix.appendChild(span);
        fixes.appendChild(fix);
      });
      item.appendChild(fixes);
      list.appendChild(item);
    });
    list.querySelectorAll('[data-case-mockup]').forEach(function (c) {
      renderMockup(c, c.getAttribute('data-case-mockup'));
    });
  })();

  // Build mobile mockups
  (function buildMobileMockups() {
    var wrap = document.getElementById('mobileMockups');
    MOBILE_SCREENS.forEach(function (s, i) {
      var item = el('div', 'mm-item');
      item.style.transform = 'translateY(' + (i % 2 === 0 ? '0' : '24px') + ')';
      item.innerHTML =
        '<div class="mm-label">' + s.title + '</div>' +
        '<div class="mm-phone">' +
        '<div class="mm-notch"></div>' +
        '<div class="mm-btn-r"></div>' +
        '<div class="mm-btn-l"></div>' +
        '<div class="mm-screen" data-mobile-mockup="' + s.mk + '"></div>' +
        '</div>';
      wrap.appendChild(item);
    });
    wrap.querySelectorAll('[data-mobile-mockup]').forEach(function (c) {
      renderMockup(c, c.getAttribute('data-mobile-mockup'));
    });
  })();

  // Build project cards
  (function buildProjects() {
    var grid = document.getElementById('projectsGrid');
    PROJECTS.forEach(function (p) {
      var card = el('div', 'project-card');
      card.innerHTML =
        '<div class="project-preview">' +
        '<div class="project-mockup-area" data-project-mockup="' + p.screens[0].mk + '" style="position:absolute;inset:0"></div>' +
        '<div class="project-tag">' + p.tag + '</div>' +
        '</div>' +
        '<div class="project-body">' +
        '<h3 class="project-title">' + p.title + '</h3>' +
        '<div class="project-tabs"></div>' +
        '<a href="#contact" class="project-link">View Project ' + svgIcon('<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>', 16) + '</a>' +
        '</div>';

      var preview = card.querySelector('.project-preview');
      var tabsWrap = card.querySelector('.project-tabs');
      p.screens.forEach(function (s, i) {
        var tab = el('button', 'project-tab' + (i === 0 ? ' active' : ''));
        tab.innerHTML = svgIcon(ICONS[s.icon] || '', 14) + ' ' + s.label;
        tab.addEventListener('click', function () {
          tabsWrap.querySelectorAll('.project-tab').forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          var area = card.querySelector('[data-project-mockup]');
          renderMockup(area, s.mk);
        });
        tabsWrap.appendChild(tab);
      });
      grid.appendChild(card);
    });
    grid.querySelectorAll('[data-project-mockup]').forEach(function (c) {
      renderMockup(c, c.getAttribute('data-project-mockup'));
    });
  })();

  // Build skills
  (function buildSkills() {
    var list = document.getElementById('skillsList');
    SKILLS.forEach(function (s) {
      var pill = el('span', 'skill-pill');
      pill.textContent = s;
      list.appendChild(pill);
    });
  })();

  // Build timeline
  (function buildTimeline() {
    var desktop = document.getElementById('timelineDesktop');
    var mobile = document.getElementById('timelineMobile');
    STEPS.forEach(function (s, i) {
      // desktop
      var d = el('div', 'timeline-item');
      d.innerHTML =
        '<div class="timeline-icon-wrap">' + svgIcon(ICONS[s.icon] || '', 32) + '<span class="timeline-num">' + (i + 1) + '</span></div>' +
        '<h3 class="timeline-label">' + s.label + '</h3>' +
        '<p class="timeline-desc">' + s.desc + '</p>';
      desktop.appendChild(d);
      // mobile
      var m = el('div', 'timeline-mobile-item');
      m.innerHTML =
        '<div class="timeline-icon-wrap">' + svgIcon(ICONS[s.icon] || '', 32) + '<span class="timeline-num">' + (i + 1) + '</span></div>' +
        '<div style="padding-top:8px"><h3 class="timeline-label">' + s.label + '</h3><p style="margin-top:4px;font-size:14px;line-height:1.5;color:var(--i500)">' + s.desc + '</p></div>';
      mobile.appendChild(m);
    });
  })();

  // Build testimonials
  (function buildTestimonials() {
    var grid = document.getElementById('testimonialsGrid');
    TESTIMONIALS.forEach(function (t) {
      var card = el('div', 'testimonial-card');
      var stars = '';
      for (var i = 0; i < 5; i++) stars += svgIcon('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', 16);
      card.innerHTML =
        '<div style="color:var(--p200)">' + svgIcon('<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2 6-1 1-1 .008-1 1.031V20c0 1 0 1 1 1z"/>', 32) + '</div>' +
        '<div class="testimonial-stars">' + stars + '</div>' +
        '<p class="testimonial-text">' + t.text + '</p>' +
        '<div class="testimonial-author">' +
        '<div class="testimonial-avatar">' + t.initials + '</div>' +
        '<div><div class="testimonial-name">' + t.name + '</div><div class="testimonial-role">' + t.role + '</div></div>' +
        '</div>';
      // Fix star fill color
      card.querySelectorAll('.testimonial-stars svg').forEach(function (sv) {
        sv.style.fill = 'var(--p400)';
        sv.style.color = 'var(--p400)';
      });
      grid.appendChild(card);
    });
  })();

  /* ==================================================================
     INTERACTIVITY
     ================================================================== */

  // Navbar scroll
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  // Mobile menu
  var navToggle = document.getElementById('navToggle');
  var navMobile = document.getElementById('navMobile');
  var navIcon = document.getElementById('navIcon');
  navToggle.addEventListener('click', function () {
    var open = navMobile.classList.toggle('open');
    navIcon.innerHTML = open
      ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
      : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
  });
  navMobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navMobile.classList.remove('open');
      navIcon.innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    });
  });

  // Scroll reveal
  if (typeof IntersectionObserver !== 'undefined') {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
