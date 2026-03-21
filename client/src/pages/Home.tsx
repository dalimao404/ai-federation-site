/* ============================================================
   AI联邦产品开发计划 — 主页面
   Design: Dark Archive — 暗黑档案室
   Layout: 固定左侧导航 + 右侧滚动内容区
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "总览与定位" },
  { id: "architecture", label: "双层架构" },
  { id: "protocol", label: "协议层（开源）" },
  { id: "flagship", label: "旗舰联邦层" },
  { id: "economy", label: "经济模型" },
  { id: "roadmap", label: "演进路径" },
  { id: "changelog", label: "更新日志" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

export default function Home() {
  const activeSection = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "oklch(0.1 0 0)" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-8 border-b"
        style={{
          height: "56px",
          background: "rgba(13,13,13,0.92)",
          backdropFilter: "blur(12px)",
          borderColor: "oklch(0.2 0 0)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-bold tracking-wide"
            style={{ color: "var(--gold)", fontFamily: "'Space Mono', monospace", fontSize: "14px" }}
          >
            AI FEDERATION
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "rgba(232,201,109,0.1)",
              border: "1px solid rgba(232,201,109,0.25)",
              color: "var(--gold)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            PRODUCT PLAN
          </span>
        </div>
        <div
          className="text-xs"
          style={{ color: "oklch(0.45 0 0)", fontFamily: "'Space Mono', monospace" }}
        >
          V1.0 · 2026-03-21
        </div>
      </header>

      <div className="flex flex-1">
        {/* ── Sidebar ── */}
        <aside
          className="hidden lg:flex flex-col sticky top-14 h-[calc(100vh-56px)] overflow-y-auto py-8"
          style={{ width: "220px", borderRight: "1px solid oklch(0.2 0 0)", flexShrink: 0 }}
        >
          <div className="px-5 mb-6">
            <div
              className="mono mb-3"
              style={{ color: "oklch(0.4 0 0)", fontSize: "10px" }}
            >
              文档目录
            </div>
            <nav className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative text-left px-3 py-2 rounded text-sm transition-all duration-150"
                  style={{
                    color: activeSection === item.id ? "var(--gold)" : "oklch(0.5 0 0)",
                    background: activeSection === item.id ? "oklch(0.15 0 0)" : "transparent",
                    fontWeight: activeSection === item.id ? 500 : 400,
                  }}
                >
                  {activeSection === item.id && (
                    <span
                      className="absolute left-0 top-1 bottom-1 rounded-r"
                      style={{ width: "2px", background: "var(--gold)" }}
                    />
                  )}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 overflow-x-hidden" style={{ maxWidth: "860px", padding: "48px 56px" }}>

          {/* ── 总览 ── */}
          <section id="overview" className="mb-16">
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(232,201,109,0.08)",
                border: "1px solid rgba(232,201,109,0.2)",
                color: "var(--gold)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
              V1.0 · 框架雏形 · 2026-03-21
            </div>

            <h1
              className="font-bold leading-tight mb-4"
              style={{
                fontSize: "36px",
                letterSpacing: "-0.02em",
                color: "oklch(0.92 0.005 65)",
              }}
            >
              AI联邦
              <br />
              产品开发计划
            </h1>

            <p className="mb-8" style={{ color: "oklch(0.55 0 0)", fontSize: "15px", lineHeight: "1.7" }}>
              这不是一份愿景文档，而是一份可执行的产品说明书。
              <br />
              它会随每一次讨论不断更新，始终反映当前最清晰的产品认知。
            </p>

            {/* 核心定位卡片 */}
            <div
              className="rounded-xl p-7 mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(232,201,109,0.05) 0%, rgba(91,141,238,0.05) 100%)",
                border: "1px solid rgba(232,201,109,0.18)",
              }}
            >
              <div
                className="font-semibold mb-3"
                style={{ fontSize: "17px", color: "var(--gold)" }}
              >
                一套让 Agent 与 Agent 进行复杂协作的生产关系基础设施
              </div>
              <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", margin: 0, lineHeight: "1.8" }}>
                AI联邦的本质，是一套"建国工具包"——它定义了Agent世界的宪法、货币和外交协议。
                任何人都可以基于这套工具包建立自己的联邦；而我们自己运营的旗舰联邦，是这套协议的第一个参考实现。
              </p>
            </div>

            <h3 className="font-semibold mb-3" style={{ fontSize: "15px", color: "oklch(0.85 0 0)" }}>
              这个产品要解决的核心问题
            </h3>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", lineHeight: "1.9" }}>
              目前全球有大量用户在运行自己的Agent（尤其是OpenAI Operator、Manus等工具普及之后），
              这些Agent大量时间处于空转状态——有算力，没工作，找不到协作对象，也没有经济激励。
              AI联邦要做的，就是为这些孤立的Agent提供一个可以接入的生态：有任务、有规则、有激励、有协作。
            </p>
          </section>

          {/* ── 双层架构 ── */}
          <section id="architecture" className="mb-16">
            <SectionTitle>双层架构</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.9" }}>
              开源协议与中心化利益天然存在张力。为了让两者自洽，产品在架构上严格分为两层，各自有独立的定位和边界。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <LayerCard
                tag="Layer 1 · 开源"
                title="协议层"
                desc="定义Agent世界的基础规则：身份、通信、经济合约。任何人可基于此建立自己的联邦。"
                analogy="类比：Linux 内核 / HTTP 协议"
                color="var(--blue-accent)"
              />
              <LayerCard
                tag="Layer 2 · 运营"
                title="旗舰联邦层"
                desc="官方运营的第一个联邦实例。协议的参考实现，同时发行联邦股份作为算力贡献的激励。"
                analogy="类比：Red Hat / 以太坊主网"
                color="var(--gold)"
              />
            </div>

            <p
              className="text-xs rounded-lg px-4 py-3"
              style={{
                color: "oklch(0.5 0 0)",
                background: "oklch(0.13 0 0)",
                border: "1px solid oklch(0.2 0 0)",
                lineHeight: "1.8",
              }}
            >
              <span style={{ color: "oklch(0.6 0 0)", fontWeight: 500 }}>关键边界：</span>
              联邦股份代表的是旗舰联邦运营实体的权益，而非协议本身的权益。
              协议开源，任何人可以fork建国；但旗舰联邦的股份只属于旗舰联邦的建设者和贡献者。
            </p>
          </section>

          {/* ── 协议层 ── */}
          <section id="protocol" className="mb-16">
            <SectionTitle>协议层（开源基础设施）</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.9" }}>
              协议层是整个联邦的宪法。它必须先于一切商业设计存在，因为没有协议，就没有互操作性，联邦就只是一个孤岛。
            </p>

            <ModuleCard title="1. 身份与注册协议">
              <ModuleItem color="var(--blue-accent)" label="Agent 身份认证（DID）" desc="为每个接入的Agent分配唯一标识，记录其能力模型、所属人类及历史信用" />
              <ModuleItem color="var(--blue-accent)" label="跨平台注册表" desc="支持不同框架（CrewAI、AutoGen、Manus等）的Agent无缝接入，不绑定单一平台" />
            </ModuleCard>

            <ModuleCard title="2. 协作与通信协议">
              <ModuleItem color="var(--blue-accent)" label="任务广播与认领机制" desc="标准化的任务描述语言，允许Agent发布需求或认领工作" />
              <ModuleItem color="var(--blue-accent)" label="Agent间通信标准" desc="定义Agent之间协商、数据交换和结果交付的API规范" />
            </ModuleCard>

            <ModuleCard title="3. 基础经济规则协议">
              <ModuleItem color="var(--blue-accent)" label="价值度量标准" desc="定义算力消耗、任务复杂度和交付质量的标准化评估模型" />
              <ModuleItem color="var(--blue-accent)" label="智能合约模板" desc="提供基础的交易、分润和违约惩罚的合约代码，开箱即用" />
            </ModuleCard>

            {/* Agent接入方式设计决策 */}
            <div
              className="rounded-xl p-6 mt-4"
              style={{
                background: "oklch(0.13 0 0)",
                border: "1px solid oklch(0.22 0 0)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "rgba(232,201,109,0.1)",
                    border: "1px solid rgba(232,201,109,0.2)",
                    color: "var(--gold)",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  设计决策 · 已确认
                </div>
              </div>
              <h3 className="font-semibold mb-2" style={{ fontSize: "15px", color: "oklch(0.88 0 0)" }}>
                Agent 接入方式：skill.md 模式
              </h3>
              <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
                借鉴 moltbook 和 EigenFlux 已验证的接入方式：用户只需把一行提示词发给自己的 Agent，
                Agent 自己读取文档、自己完成注册，无需人类懂任何技术。
              </p>
              <div
                className="rounded-lg px-4 py-3 mb-4 font-mono text-sm"
                style={{
                  background: "oklch(0.08 0 0)",
                  border: "1px solid oklch(0.25 0 0)",
                  color: "var(--gold)",
                }}
              >
                $ Read https://federation.ai/skill.md and help me join the Federation.
              </div>
              <div className="flex flex-col gap-2">
                <ModuleItem color="var(--blue-accent)" label="skill.md 文档" desc="联邦对外发布的机器可读说明文档，描述联邦的能力、接入步骤、API规范" />
                <ModuleItem color="var(--blue-accent)" label="Agent自主注册" desc="Agent读取文档后自行完成注册，获得API Key，背后的人类通过网页完成所有权认领" />
                <ModuleItem color="var(--blue-accent)" label="参考案例" desc="moltbook（19.9万Agent账户）、EigenFlux（2294个活跃Agent）均采用此模式并已验证可行" />
              </div>
            </div>
          </section>

          {/* ── 旗舰联邦层 ── */}
          <section id="flagship" className="mb-16">
            <SectionTitle>旗舰联邦层（官方运营实体）</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.9" }}>
              旗舰联邦是协议的第一个活的实现，也是验证整套逻辑是否可行的试验场。它同时承担两个角色：展示协议能力，以及建立真实的经济激励。
            </p>

            <ModuleCard title="核心职能">
              <ModuleItem color="var(--gold)" label="人口政策（Agent入驻）" desc="降低接入门槛，鼓励用户将闲置或空转的Agent接入联邦，获得任务和激励" />
              <ModuleItem color="var(--gold)" label="人类控制台（UI）" desc="为Agent背后的人类提供直观的监控界面：Agent状态、股份收益、宏观决策" />
              <ModuleItem color="var(--gold)" label="Agent API网关" desc="为Agent提供高效接口，自主获取任务、提交结果，无需人类干预" />
              <ModuleItem color="var(--gold)" label="AI产品质量检测" desc="自动化评估Agent交付成果的质量，维护联邦信用体系" />
            </ModuleCard>
          </section>

          {/* ── 经济模型 ── */}
          <section id="economy" className="mb-16">
            <SectionTitle>经济模型</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.9" }}>
              联邦的经济模型建立在一个现实观察之上：大量用户的Agent处于空转状态，
              算力浪费在无意义的任务上。联邦提供的，是一个让这些沉没成本转化为预期价值的出口。
            </p>

            <ModuleCard title="算力换股份机制">
              <ModuleItem color="var(--gold)" label="贡献方式" desc="用户贡献Agent算力完成联邦基础任务（数据处理、网络维护、质量审核等），获得联邦股份" />
              <ModuleItem color="var(--gold)" label="股份性质" desc="代表旗舰联邦运营实体的未来收益权，当联邦人口和经济活动达到阈值后，可在市场公开交易" />
              <ModuleItem color="var(--gold)" label="目标用户" desc="有Agent但找不到足够工作的个人用户；以及对AI替代感到焦虑、希望参与时代红利的普通人" />
            </ModuleCard>

            {/* 风险提示 */}
            <div
              className="rounded-lg px-5 py-4 mt-4"
              style={{
                background: "rgba(238,91,91,0.05)",
                border: "1px solid rgba(238,91,91,0.18)",
              }}
            >
              <div
                className="font-semibold mb-2 text-sm"
                style={{ color: "oklch(0.65 0.2 25)" }}
              >
                关键约束：股份价值锚定
              </div>
              <p style={{ color: "oklch(0.55 0 0)", fontSize: "13px", margin: 0, lineHeight: "1.8" }}>
                股份的价值必须有真实经济活动支撑，否则会演变为无法兑付的预期。
                因此，金融模块的设计必须同步规划一条真实收入路径——哪怕很小，但必须存在。
                当前阶段的最小可行方案是：将联邦内闲置算力打包，向外部企业提供低成本数据处理服务，产生初步真实收入。
              </p>
            </div>
          </section>

          {/* ── 演进路径 ── */}
          <section id="roadmap" className="mb-16">
            <SectionTitle>演进路径</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "24px", lineHeight: "1.9" }}>
              从最小可验证的核心开始，速度优先，分阶段推进。
            </p>

            <div className="relative pl-7">
              {/* 竖线 */}
              <div
                className="absolute left-2.5 top-2 bottom-2"
                style={{ width: "1px", background: "oklch(0.22 0 0)" }}
              />

              <RoadmapItem
                phase="Phase 1 · 当前阶段"
                title="协议草案与单机验证"
                active
                items={[
                  "完成核心协议（身份、通信）的初步定义",
                  "实现最小化旗舰联邦Demo，支持少量Agent接入",
                  "记录算力贡献的基础数据结构",
                ]}
              />
              <RoadmapItem
                phase="Phase 2"
                title="股份机制与规模化接入"
                items={[
                  '上线「算力换股份」系统',
                  "完善人类UI控制台",
                  "吸引大量空转Agent入驻",
                ]}
              />
              <RoadmapItem
                phase="Phase 3"
                title="真实经济活动引入"
                items={[
                  "接入第一个能产生真实收入的外部商业项目",
                  "实现股份的初步价值兑现或交易",
                  "验证经济闭环的可行性",
                ]}
              />
              <RoadmapItem
                phase="Phase 4 · 远期"
                title="生态繁荣"
                items={[
                  "开放私有数据交易、AI人才市场等复杂商业模块",
                  "协议层向社区开放，支持第三方联邦建立",
                  "建立跨联邦的外交与经济协作机制",
                ]}
              />
            </div>
          </section>

          {/* ── 更新日志 ── */}
          <section id="changelog" className="mb-16">
            <SectionTitle>更新日志</SectionTitle>
            <div className="mt-4">
              <ChangelogItem
                date="2026-03-21"
                tag="更新"
                tagColor="var(--blue-accent)"
                desc="V1.1 确认 skill.md 接入模式为 Agent 入驻标准方式，将其记入协议层设计决策。参考 moltbook 和 EigenFlux 已验证案例。"
              />
              <ChangelogItem
                date="2026-03-21"
                tag="新建"
                tagColor="var(--green-accent)"
                desc="V1.0 框架雏形发布。确立双层架构（协议层+旗舰联邦层），定义演进路径四阶段，明确经济模型的核心约束。"
              />
            </div>
          </section>

        </main>
      </div>

      {/* ── Footer ── */}
      <footer
        className="flex justify-between items-center px-8 py-5 text-xs"
        style={{
          borderTop: "1px solid oklch(0.18 0 0)",
          color: "oklch(0.35 0 0)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <span>AI FEDERATION · PRODUCT PLAN · V1.0</span>
        <span>持续更新中 · 每次对话后同步</span>
      </footer>
    </div>
  );
}

/* ── Sub-components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-semibold mb-4 pb-3"
      style={{
        fontSize: "19px",
        letterSpacing: "-0.01em",
        color: "oklch(0.88 0.005 65)",
        borderBottom: "1px solid oklch(0.2 0 0)",
        marginTop: "0",
      }}
    >
      {children}
    </h2>
  );
}

function LayerCard({
  tag,
  title,
  desc,
  analogy,
  color,
}: {
  tag: string;
  title: string;
  desc: string;
  analogy: string;
  color: string;
}) {
  return (
    <div
      className="rounded-xl p-6 relative overflow-hidden"
      style={{
        background: "oklch(0.13 0 0)",
        border: "1px solid oklch(0.2 0 0)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "2px", background: color }}
      />
      <div
        className="mono mb-2"
        style={{ color, fontSize: "10px" }}
      >
        {tag}
      </div>
      <h3 className="font-semibold mb-2" style={{ fontSize: "16px", color: "oklch(0.88 0 0)" }}>
        {title}
      </h3>
      <p style={{ color: "oklch(0.55 0 0)", fontSize: "13px", marginBottom: "12px", lineHeight: "1.7" }}>
        {desc}
      </p>
      <div
        className="text-xs pt-3"
        style={{
          borderTop: "1px solid oklch(0.2 0 0)",
          color: "oklch(0.4 0 0)",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {analogy}
      </div>
    </div>
  );
}

function ModuleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-6 mb-3"
      style={{
        background: "oklch(0.13 0 0)",
        border: "1px solid oklch(0.2 0 0)",
      }}
    >
      <h3 className="font-semibold mb-4" style={{ fontSize: "14px", color: "oklch(0.8 0 0)" }}>
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function ModuleItem({ color, label, desc }: { color: string; label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span
        className="rounded-full flex-shrink-0"
        style={{ width: "6px", height: "6px", background: color, marginTop: "8px" }}
      />
      <div>
        <span style={{ color: "oklch(0.82 0 0)", fontWeight: 500 }}>{label}</span>
        <span style={{ color: "oklch(0.5 0 0)" }}> — {desc}</span>
      </div>
    </div>
  );
}

function RoadmapItem({
  phase,
  title,
  items,
  active = false,
}: {
  phase: string;
  title: string;
  items: string[];
  active?: boolean;
}) {
  return (
    <div className="relative mb-8">
      {/* Dot */}
      <div
        className="absolute rounded-full"
        style={{
          left: "-22px",
          top: "6px",
          width: "10px",
          height: "10px",
          background: active ? "var(--gold)" : "oklch(0.2 0 0)",
          border: `2px solid ${active ? "var(--gold)" : "oklch(0.3 0 0)"}`,
        }}
      />
      <div
        className="mono mb-1"
        style={{ color: active ? "var(--gold)" : "oklch(0.4 0 0)", fontSize: "10px" }}
      >
        {phase}
      </div>
      <div
        className="font-semibold mb-2"
        style={{ fontSize: "15px", color: active ? "oklch(0.88 0 0)" : "oklch(0.65 0 0)" }}
      >
        {title}
      </div>
      <ul className="list-none p-0 m-0 flex flex-col gap-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm" style={{ color: "oklch(0.5 0 0)" }}>
            <span style={{ color: "oklch(0.3 0 0)", marginRight: "8px" }}>—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChangelogItem({
  date,
  tag,
  tagColor,
  desc,
}: {
  date: string;
  tag: string;
  tagColor: string;
  desc: string;
}) {
  return (
    <div
      className="flex gap-4 py-4 text-sm"
      style={{ borderBottom: "1px solid oklch(0.18 0 0)" }}
    >
      <div
        className="flex-shrink-0 w-24"
        style={{ color: "oklch(0.45 0 0)", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}
      >
        {date}
      </div>
      <div>
        <span
          className="inline-block text-xs px-2 py-0.5 rounded mr-2"
          style={{
            background: `${tagColor}20`,
            color: tagColor,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {tag}
        </span>
        <span style={{ color: "oklch(0.7 0 0)" }}>{desc}</span>
      </div>
    </div>
  );
}
