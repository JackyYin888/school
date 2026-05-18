const COLORS = {
  trend: "#39e8ff",
  youtao: "#ff6d8a",
  shanghua: "#ffb84d",
  jujiang: "#8ea3ff",
  huanyu: "#8cffbf",
};

const MONTHS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const LEVEL_SCORE = { H: 3, M: 2, L: 1 };
const REPORT_SOURCE_BASE = "/Users/jacky_yin/Documents/同業資訊/競品分析_各補習班的全年廣告節奏";
const FB_SOURCE_BASE = `${REPORT_SOURCE_BASE}/FB貼文存檔`;

const baseCompetitors = [
  {
    id: "trend",
    name: "趨勢",
    shortName: "趨勢",
    color: COLORS.trend,
    positioning: "私中/延平理化國中線",
    logic: "全年心理戰與私域收割型；蓄水、轉銜、衝刺三階段循環；11月資訊壟斷私中懶人包。",
    channel: "FB 曝光信任＋LINE 私域獨家成交；3–6月25場銜接先修課承接升國一流量。",
    peak: "11月情報卡位＋12–2月寒訓收割＋7–8月暑期黃金",
    frequency: "高頻（8個高強度月）",
    emotion: "FOMO恐懼＋資訊不對稱",
    weapon: "LINE私域、私中懶人包、液態氮/冰火五重天、11場模考、25場銜接課",
    trust: "98%錄取率敘事、私中懶人包、命中題型、明星教師IP、782張截圖規律驗證",
    friction: "低",
    x: 70,
    y: 76,
    months: ["H", "H", "H", "H", "M", "M", "H", "H", "M", "M", "H", "H"],
    mix: { 招生: 40, 榜單: 25, 互動: 15, 品牌: 10, 教育: 10 },
    sourceFile: "趨勢全年廣告節奏表_最完整版.docx",
    risks: "高度依賴 LINE 收割與明星教師 IP；家長若不加 LINE 漏斗即中斷；理科極強但國文敘事薄弱；全年高曝光密度需要廣告費支撐。",
    gap: "用團隊系統化教學中性化明星 IP；以 Counter-25 全科銜接方案與10月私中懶人包，搶在趨勢11月前建立首位信任。",
  },
  {
    id: "youtao",
    name: "游濤",
    shortName: "游濤",
    color: COLORS.youtao,
    positioning: "數學專科（國中）",
    logic: "低頻成果查證型；口碑先行，粉專負責讓高意向家長確認成績與師資可信度。",
    channel: "FB 粉專作為品牌證明牆，無明顯 LINE 導流。",
    peak: "4月段考強榜＋9月台大醫牙榜",
    frequency: "低頻",
    emotion: "成果背書、查證思維",
    weapon: "FB成果牆、具名段考滿分、開課時段揭露",
    trust: "延平段考滿分案例",
    friction: "極低",
    x: 26,
    y: 44,
    months: ["H", "M", "M", "H", "M", "M", "H", "M", "H", "M", "M", "H"],
    mix: { 招生: 25, 榜單: 30, 互動: 5, 品牌: 25, 教育: 15 },
    sourceFile: "游濤數學_五年內貼文截圖 下午6.30.02.docx",
    risks: "單科限制客單價與招生規模；貼文頻率低，新訪客可看到的內容量少。",
    gap: "文城可用多科整合承接游濤未覆蓋的英文、國文與私中整體規劃需求。",
  },
  {
    id: "shanghua",
    name: "上華",
    shortName: "上華",
    color: COLORS.shanghua,
    positioning: "永平/南山在地全科",
    logic: "在地雙峰促銷型；6–8月與12–1月強力爆發，成績、焦慮、早鳥三大轉換引擎。",
    channel: "短影音＋表單；LINE 導流與 Google Forms。",
    peak: "7月暑期黃金檔＋12–1月寒假雙峰",
    frequency: "高頻",
    emotion: "焦慮驅動、痛點攔截",
    weapon: "短影音、Google表單、早鳥名額、在地口號",
    trust: "南山首選、在地口碑",
    friction: "低",
    x: 62,
    y: 60,
    months: ["H", "M", "M", "H", "H", "H", "H", "H", "M", "M", "M", "H"],
    mix: { 招生: 40, 榜單: 25, 互動: 15, 品牌: 10, 教育: 10 },
    sourceFile: "上華文理補習班_五年內貼文截圖 下午6.30.02.docx",
    risks: "地域性強；上華核心優勢在永平/南山學區，大安校戰場不易完整複製。",
    gap: "大安區可用文城50年歷史與私中備考深度，建立不同層次的信任感。",
  },
  {
    id: "jujiang",
    name: "巨江",
    shortName: "巨江",
    color: COLORS.jujiang,
    positioning: "理化王國（建北線）",
    logic: "專科權威講座型；榜單建立權威，再用講座導流，最後以校別專班成交。",
    channel: "FB 貼文＋4月實體講座；現場轉換。",
    peak: "4月雙線講座＋直升專班",
    frequency: "中頻",
    emotion: "榜單權威、需求教育",
    weapon: "實體講座、校別直升專班、理化必要性教育",
    trust: "78–114年累積3,106人建北榜",
    friction: "中",
    x: 40,
    y: 70,
    months: ["M", "M", "H", "H", "M", "M", "M", "M", "M", "M", "M", "M"],
    mix: { 招生: 40, 榜單: 25, 互動: 5, 品牌: 15, 教育: 15 },
    sourceFile: "巨江補習班_五年內貼文截圖 下午6.30.02.docx",
    risks: "年度節奏高度集中於4月；課程範圍偏理化，缺乏全科整合能力。",
    gap: "可在非4月空窗主動投放，並用全科整合與國文深度接住比較期家長。",
  },
  {
    id: "huanyu",
    name: "寰宇",
    shortName: "寰宇",
    color: COLORS.huanyu,
    positioning: "英文＋國際教育",
    logic: "高頻陪伴品牌型；以日常養魚、活動舞台與 AMC 8 高端引流收網。",
    channel: "FB 高頻＋LINE＋Typeform＋直播。",
    peak: "7月暑假旺季＋11月AMC 8＋12月寒假",
    frequency: "高頻",
    emotion: "溫暖陪伴、升學顧問",
    weapon: "AMC 8、Typeform、直播、高頻日常貼文",
    trust: "升學分析影片、國際感與學生舞台",
    friction: "低",
    x: 78,
    y: 32,
    months: ["H", "M", "M", "M", "M", "H", "H", "H", "H", "M", "H", "H"],
    mix: { 招生: 35, 榜單: 20, 互動: 25, 品牌: 10, 教育: 10 },
    sourceFile: "寰宇教育_五年內全部貼文截圖_重做版 下午6.30.02.docx",
    risks: "國際感定位偏英文；純私中備考或延平線訴求較難直接切入。",
    gap: "文城可用私中衝刺、延平線與深度國文，建立更直接的升學解題定位。",
  },
];

let competitors = structuredClone(baseCompetitors);
let selectedIds = new Set(baseCompetitors.map((item) => item.id));
const postArchive = window.POST_ARCHIVE || [];
const postArchiveSummary = window.POST_ARCHIVE_SUMMARY || [];

const toggleRoot = document.querySelector("#competitorToggles");
const heatmapRoot = document.querySelector("#heatmap");
const overviewCards = document.querySelector("#overviewCards");
const contentMix = document.querySelector("#contentMix");
const channelCards = document.querySelector("#channelCards");
const riskRows = document.querySelector("#riskRows");
const archiveSearch = document.querySelector("#archiveSearch");
const archiveSchool = document.querySelector("#archiveSchool");
const archiveTopic = document.querySelector("#archiveTopic");
const archiveResultCount = document.querySelector("#archiveResultCount");
const archiveSummary = document.querySelector("#archiveSummary");
const archiveResults = document.querySelector("#archiveResults");
const selectedCount = document.querySelector("#selectedCount");
const highMonthCount = document.querySelector("#highMonthCount");
const peakMonthLabel = document.querySelector("#peakMonthLabel");
const canvas = document.querySelector("#positionCanvas");
const ctx = canvas.getContext("2d");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function selectedCompetitors() {
  return competitors.filter((item) => selectedIds.has(item.id));
}

function renderToggles() {
  toggleRoot.innerHTML = "";
  competitors.forEach((item) => {
    const label = document.createElement("label");
    label.className = "check-row";
    label.innerHTML = `
      <input type="checkbox" ${selectedIds.has(item.id) ? "checked" : ""} data-id="${item.id}" />
      <span>${escapeHTML(item.name)}</span>
      <small>${escapeHTML(item.frequency)}</small>
    `;
    toggleRoot.append(label);
  });
}

function renderHeatmap(items) {
  const header = ["", ...MONTHS];
  const cells = header.map((name) => `<div class="heat-label">${name}</div>`);
  items.forEach((item) => {
    cells.push(`<div class="heat-label">${item.shortName}</div>`);
    item.months.forEach((level) => {
      const color = level === "H" ? "var(--danger)" : level === "M" ? "var(--accent-2)" : "#33515e";
      cells.push(`<div class="heat-cell" data-level="${level}" style="background:${color}">${level}</div>`);
    });
  });
  heatmapRoot.innerHTML = `<div class="heat-grid">${cells.join("")}</div>`;
}

function renderOverview(items) {
  overviewCards.innerHTML = items.map((item) => `
    <article class="competitor-card">
      <div class="card-top">
        <div>
          <h4>${escapeHTML(item.name)}</h4>
          <p>${escapeHTML(item.positioning)}</p>
        </div>
        <i class="brand-dot" style="background:${item.color}"></i>
      </div>
      <p><strong>節奏：</strong>${escapeHTML(item.logic)}</p>
      <p><strong>高峰：</strong>${escapeHTML(item.peak)}</p>
      <div class="tag-line">
        <span>${escapeHTML(item.frequency)}</span>
        <span>${escapeHTML(item.friction)}摩擦</span>
        <span>${escapeHTML(item.sourceFile || "無來源檔")}</span>
      </div>
    </article>
  `).join("");
}

function renderMix(items) {
  const labels = ["招生", "榜單", "互動", "品牌", "教育"];
  contentMix.innerHTML = items.map((item) => {
    const bars = labels.map((label) => `
      <div class="bar-line">
        <span>${label}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${item.mix[label]}%; background:${item.color}"></div></div>
        <strong>${item.mix[label]}%</strong>
      </div>
    `).join("");
    return `
      <article class="mix-row">
        <div class="mix-title">
          <strong>${escapeHTML(item.name)}</strong>
          <span class="friction">${escapeHTML(item.weapon)}</span>
        </div>
        <div class="mix-bars">${bars}</div>
      </article>
    `;
  }).join("");
}

function renderChannels(items) {
  channelCards.innerHTML = items.map((item) => `
    <article class="channel-row">
      <div class="channel-title">
        <strong>${escapeHTML(item.name)}</strong>
        <span class="friction">轉換摩擦：${escapeHTML(item.friction)}</span>
      </div>
      <p><strong>主要通路：</strong>${escapeHTML(item.channel)}</p>
      <p><strong>信任資產：</strong>${escapeHTML(item.trust)}</p>
      <p><strong>情緒策略：</strong>${escapeHTML(item.emotion)}</p>
    </article>
  `).join("");
}

function renderRisks(items) {
  riskRows.innerHTML = items.map((item) => `
    <article class="risk-row">
      <div class="risk-title">
        <strong>${escapeHTML(item.name)}</strong>
        <i class="brand-dot" style="background:${item.color}"></i>
      </div>
      <p><strong>主要弱點：</strong>${escapeHTML(item.risks)}</p>
      <p><strong>可攻擊缺口：</strong>${escapeHTML(item.gap)}</p>
    </article>
  `).join("");
}

function showView(viewName) {
  document.querySelectorAll(".tab-button").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((item) => {
    item.classList.toggle("active", item.dataset.viewPanel === viewName);
  });
}

function fileUrl(path) {
  return `file://${path.split("/").map((part) => encodeURIComponent(part)).join("/")}`;
}

function renderArchiveControls() {
  if (!archiveSchool || !archiveTopic) return;
  const currentSchool = archiveSchool.value || "all";
  const currentTopic = archiveTopic.value || "all";
  const schools = [...new Map(postArchive.map((item) => [item.schoolId, item.school])).entries()];
  const topics = [...new Set(postArchive.flatMap((item) => item.topics))].sort((a, b) => a.localeCompare(b, "zh-Hant"));
  archiveSchool.innerHTML = `<option value="all">全部</option>${schools.map(([id, name]) => `<option value="${escapeHTML(id)}">${escapeHTML(name)}</option>`).join("")}`;
  archiveTopic.innerHTML = `<option value="all">全部主題</option>${topics.map((topic) => `<option value="${escapeHTML(topic)}">${escapeHTML(topic)}</option>`).join("")}`;
  archiveSchool.value = schools.some(([id]) => id === currentSchool) ? currentSchool : "all";
  archiveTopic.value = topics.includes(currentTopic) ? currentTopic : "all";
}

function renderArchiveSummary() {
  if (!archiveSummary) return;
  archiveSummary.innerHTML = postArchiveSummary.map((item) => `
    <div>
      <strong>${escapeHTML(item.school)}</strong>
      <span>${item.items} 筆索引</span>
      <small>${item.media} 張截圖 / ${item.textParagraphs} 段文字</small>
    </div>
  `).join("");
}

function renderArchive() {
  if (!archiveResults) return;
  const keyword = archiveSearch.value.trim().toLowerCase();
  const school = archiveSchool.value;
  const topic = archiveTopic.value;
  const filtered = postArchive.filter((item) => {
    const haystack = `${item.school} ${item.title} ${item.snippet} ${item.topics.join(" ")} ${item.sourceFile}`.toLowerCase();
    const matchKeyword = !keyword || haystack.includes(keyword);
    const matchSchool = school === "all" || item.schoolId === school;
    const matchTopic = topic === "all" || item.topics.includes(topic);
    return matchKeyword && matchSchool && matchTopic;
  });
  archiveResultCount.textContent = `${filtered.length} 筆`;
  const visible = filtered.slice(0, 120);
  archiveResults.innerHTML = visible.length ? visible.map((item) => `
    <article class="archive-card ${item.image ? "" : "no-media"}">
      ${item.image ? `<img class="archive-thumb" src="./${escapeHTML(item.image)}" alt="${escapeHTML(item.school)} ${escapeHTML(item.title)}" loading="lazy" />` : ""}
      <div class="archive-card-body">
        <div class="archive-card-head">
          <div>
            <span>${escapeHTML(item.school)}</span>
            <strong>${escapeHTML(item.title)}</strong>
          </div>
          <small>${escapeHTML(item.dateHint)}</small>
        </div>
        <p>${escapeHTML(item.snippet)}</p>
        <div class="archive-tags">
          ${item.topics.map((tag) => `<button type="button" data-topic="${escapeHTML(tag)}">${escapeHTML(tag)}</button>`).join("")}
        </div>
        <div class="archive-source">
          <a href="${fileUrl(item.sourcePath)}">${escapeHTML(item.sourceFile)}</a>
          <code>${escapeHTML(item.sourcePath)}</code>
        </div>
      </div>
    </article>
  `).join("") : `
    <article class="archive-card no-media">
      <p>找不到符合條件的貼文索引。可以換成較短的關鍵字，例如「暑期」「榜單」「延平」「LINE」。</p>
    </article>
  `;
}

function renderPositionCanvas(items) {
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#081719");
  gradient.addColorStop(1, "#101526");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(151, 255, 232, 0.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(70, height - 70);
  ctx.lineTo(width - 50, height - 70);
  ctx.moveTo(70, height - 70);
  ctx.lineTo(70, 50);
  ctx.stroke();

  ctx.fillStyle = "#8fa6a5";
  ctx.font = "700 18px system-ui";
  ctx.fillText("招生壓力 / FOMO", width - 225, height - 28);
  ctx.save();
  ctx.translate(28, 235);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("成果權威 / 專業信任", 0, 0);
  ctx.restore();

  ctx.strokeStyle = "rgba(151, 255, 232, 0.1)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 4; i += 1) {
    const x = 70 + ((width - 120) / 5) * i;
    const y = 50 + ((height - 120) / 5) * i;
    ctx.beginPath();
    ctx.moveTo(x, 50);
    ctx.lineTo(x, height - 70);
    ctx.moveTo(70, y);
    ctx.lineTo(width - 50, y);
    ctx.stroke();
  }

  items.forEach((item) => {
    const x = 70 + (item.x / 100) * (width - 120);
    const y = height - 70 - (item.y / 100) * (height - 120);
    ctx.beginPath();
    ctx.shadowColor = item.color;
    ctx.shadowBlur = 18;
    ctx.fillStyle = item.color;
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#eefbf8";
    ctx.font = "800 22px system-ui";
    ctx.fillText(item.shortName, x + 24, y + 7);
  });
}

function renderMetrics(items) {
  selectedCount.textContent = String(items.length);
  const highCount = items.reduce((sum, item) => sum + item.months.filter((month) => month === "H").length, 0);
  highMonthCount.textContent = String(highCount);
  const monthScores = MONTHS.map((_, index) => items.reduce((sum, item) => sum + LEVEL_SCORE[item.months[index]], 0));
  const maxScore = Math.max(...monthScores, 0);
  const peakIndex = monthScores.indexOf(maxScore);
  peakMonthLabel.textContent = MONTHS[peakIndex] || "-";
}

function render() {
  const items = selectedCompetitors();
  renderToggles();
  renderMetrics(items);
  renderHeatmap(items);
  renderOverview(items);
  renderMix(items);
  renderChannels(items);
  renderRisks(items);
  renderArchiveControls();
  renderArchiveSummary();
  renderArchive();
  renderPositionCanvas(items);
}

toggleRoot.addEventListener("change", (event) => {
  const checkbox = event.target.closest("input[type='checkbox']");
  if (!checkbox) return;
  if (checkbox.checked) {
    selectedIds.add(checkbox.dataset.id);
  } else {
    selectedIds.delete(checkbox.dataset.id);
  }
  render();
});

document.querySelector("#resetSelection").addEventListener("click", () => {
  competitors = structuredClone(baseCompetitors);
  selectedIds = new Set(baseCompetitors.map((item) => item.id));
  render();
});

document.querySelector("#addCompetitorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const fields = Object.fromEntries(new FormData(form).entries());
  const name = String(fields.newName || "").trim();
  const documentFile = fields.newDocument;
  const sourceFile = documentFile && documentFile.name ? documentFile.name : "上傳文件";
  if (!name) return;
  const id = `custom-${Date.now()}`;
  const months = ["M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M"];

  competitors.push({
    id,
    name,
    shortName: name.slice(0, 2),
    color: "#39e8ff",
    positioning: "已新增文件，等待整理分析",
    logic: "已加入比較清單；需整理上傳文件後，可補入年度節奏與招生高峰。",
    channel: `來源文件：${sourceFile}`,
    peak: "待由文件整理",
    frequency: "文件新增",
    emotion: "待由文件整理",
    weapon: "待由文件整理",
    trust: "待由文件整理",
    friction: "待評估",
    x: 50,
    y: 50,
    months,
    mix: { 招生: 30, 榜單: 20, 互動: 20, 品牌: 15, 教育: 15 },
    sourceFile,
    risks: "尚未建立弱點盤點。",
    gap: "可依據實際廣告素材補充。",
  });
  selectedIds.add(id);
  form.reset();
  render();
});

[archiveSearch, archiveSchool, archiveTopic].forEach((control) => {
  control.addEventListener("input", renderArchive);
  control.addEventListener("change", renderArchive);
});

archiveResults.addEventListener("click", (event) => {
  const topicButton = event.target.closest("[data-topic]");
  if (!topicButton) return;
  archiveTopic.value = topicButton.dataset.topic;
  renderArchive();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
  });
});

render();
