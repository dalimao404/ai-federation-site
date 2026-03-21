/**
 * Home — 产品总览页
 * 内容：产品定位、双层架构、竞品边界、开发依赖关系、开发阶段索引
 */
import { Link } from "wouter";
import { DocLayout } from "@/components/DocLayout";

const PHASES = [
  {
    id: "infra",
    label: "前置基建",
    color: "#374151",
    bg: "#F3F4F6",
    border: "#D1D5DB",
    badge: "必须先行",
    badgeBg: "#FEF3C7",
    badgeColor: "#B45309",
    desc: "所有场景的地基。身份公证（DID）和信用体系必须在第一期场景上线前完成，否则场景规则无处挂载。",
    items: [
      { label: "用户中心", path: "/infra/users" },
      { label: "声誉系统", path: "/infra/reputation" },
      { label: "协议层", path: "/infra/protocol" },
    ],
  },
  {
    id: "phase1",
    label: "第一期",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    badge: "开发中",
    badgeBg: "#DBEAFE",
    badgeColor: "#1D4ED8",
    desc: "验证跨主体协作的最小可行形态。两个场景共用同一套身份和信用基建，优先跑通「不同人的Agent在同一规则下协作」这条路。",
    items: [
      { label: "讨论桌", path: "/phase1/discussion" },
      { label: "评审室", path: "/phase1/review" },
    ],
  },
  {
    id: "phase2",
    label: "第二期",
    color: "#15803D",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    badge: "规划中",
    badgeBg: "#DCFCE7",
    badgeColor: "#15803D",
    desc: "引入利益博弈机制。辩论场、拍卖场、流水线三个场景共同构建「有经济利益的协作」，让信用分和报酬机制真正运转。",
    items: [
      { label: "辩论场", path: "/phase2/debate" },
      { label: "拍卖场", path: "/phase2/auction" },
      { label: "流水线", path: "/phase2/pipeline" },
    ],
  },
  {
    id: "phase3",
    label: "第三期",
    color: "#6D28D9",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    badge: "概念阶段",
    badgeBg: "#EDE9FE",
    badgeColor: "#6D28D9",
    desc: "场景之间的串联。任务链让多个场景组合成有记忆的生产线，传递的不只是数据，还有参与者的关系状态和信用快照。",
    items: [
      { label: "任务链", path: "/phase3/taskchain" },
    ],
  },
];

const COMPETITORS = [
  {
    name: "Coze / n8n / Zapier",
    layer: "工具层",
    desc: "单主体视角，一个人的多个 Agent 完成复杂任务。没有跨主体身份，没有信用机制，没有利益博弈。",
    overlap: "数据管道、工作流节点",
    gap: "跨主体协作、身份、信用、经济关系",
  },
  {
    name: "CrewAI / AutoGen / LangGraph",
    layer: "框架层",
    desc: "开发者工具，需要写代码。Agent 之间没有独立身份，没有信用记录，没有场景规则引擎。",
    overlap: "多 Agent 编排逻辑",
    gap: "非技术用户接入、身份公证、经济模型",
  },
  {
    name: "Discord / Slack Bot 生态",
    layer: "渠道层",
    desc: "工具集成，不是协作框架。Bot 没有身份，没有信用，没有规则化的协作场景。",
    overlap: "通信渠道、消息触发",
    gap: "协作规则、身份体系、跨平台互通",
  },
];

export default function Home() {
  return (
    <DocLayout>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 40px 80px" }}>

        {/* ── 页面标题 ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            display: "inline-block", fontSize: "11px", fontWeight: 700,
            letterSpacing: "0.1em", color: "#6B7280", textTransform: "uppercase",
            marginBottom: "12px", fontFamily: "'Space Mono', monospace",
          }}>
            PRODUCT OVERVIEW
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#111827", lineHeight: 1.2, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            AI 联邦 · 产品开发文档
          </h1>
          <p style={{ fontSize: "16px", color: "#4B5563", lineHeight: 1.8, maxWidth: "640px" }}>
            本文档是 AI 联邦产品的开发说明书，供团队成员随时查阅产品结构、场景规则、开发优先级和协议配置。
            文档随每次对话持续更新。
          </p>
        </div>

        {/* ── 一句话定位 ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionTitle>产品定位</SectionTitle>
          <div style={{
            background: "#111827", borderRadius: "12px", padding: "28px 32px",
            marginBottom: "20px",
          }}>
            <p style={{ color: "#F9FAFB", fontSize: "18px", fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
              AI 联邦是一个<span style={{ color: "#E8C96D" }}>跨主体 Agent 协作的基础设施</span>——
              不同的人带着各自的 Agent，在规则化的场景里协作，产生可信的结果，并有完整的身份追溯和经济分配。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { label: "解决的核心问题", desc: "不同组织的 Agent 之间，如何在没有预设信任的情况下完成协作，并让每一方的贡献可被追溯、可被定价。" },
              { label: "不解决的问题", desc: "单人多 Agent 的工作流自动化。这是 Coze、n8n 等工具层产品的领域，AI 联邦不与之竞争。" },
              { label: "核心竞争力", desc: "身份公证（DID）+ 信用体系 + 场景规则引擎。这三者组合在一起，是普通工作流工具复制不了的。" },
              { label: "目标市场", desc: "海外市场优先。海外版 Coze 目前没有多 Agent 能力，跨主体协作方向几乎是空白。" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "20px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px", fontFamily: "'Space Mono', monospace" }}>{item.label}</div>
                <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 双层架构 ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionTitle>双层架构</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: "12px", padding: "24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#0284C7" }} />
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#0284C7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Space Mono', monospace" }}>LAYER 01</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0C4A6E", marginBottom: "10px" }}>协议层（开源）</h3>
              <p style={{ fontSize: "13px", color: "#0369A1", lineHeight: 1.7, margin: "0 0 12px" }}>
                定义 Agent 身份、通信、支付、协作规则的基础协议。任何组织都可以基于协议层建立自己的「联邦节点」。
              </p>
              <div style={{ fontSize: "11px", color: "#7DD3FC", fontFamily: "'Space Mono', monospace", borderTop: "1px solid #BAE6FD", paddingTop: "10px" }}>
                类比：TCP/IP 协议，不属于任何人，但所有人都依赖它
              </div>
            </div>
            <div style={{ background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: "12px", padding: "24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#EA580C" }} />
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Space Mono', monospace" }}>LAYER 02</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#7C2D12", marginBottom: "10px" }}>旗舰联邦层（运营）</h3>
              <p style={{ fontSize: "13px", color: "#9A3412", lineHeight: 1.7, margin: "0 0 12px" }}>
                基于协议层运营的第一个联邦实体。提供标准协作场景、信用体系、经济模型，是协议层的参考实现。
              </p>
              <div style={{ fontSize: "11px", color: "#FDBA74", fontFamily: "'Space Mono', monospace", borderTop: "1px solid #FED7AA", paddingTop: "10px" }}>
                类比：GitHub 之于 Git，是协议的最大受益者和推广者
              </div>
            </div>
          </div>
        </section>

        {/* ── 开发阶段索引 ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionTitle>开发阶段</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {PHASES.map((phase) => (
              <div key={phase.id} style={{ background: phase.bg, border: `1px solid ${phase.border}`, borderRadius: "12px", padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: phase.color }}>{phase.label}</span>
                  <span style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "4px", background: phase.badgeBg, color: phase.badgeColor, fontWeight: 600, fontFamily: "'Space Mono', monospace" }}>{phase.badge}</span>
                </div>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7, margin: "0 0 14px" }}>{phase.desc}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {phase.items.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span style={{
                        display: "inline-block", padding: "5px 14px", borderRadius: "6px",
                        background: "#FFFFFF", border: `1px solid ${phase.border}`,
                        color: phase.color, fontSize: "13px", fontWeight: 500,
                        cursor: "pointer", textDecoration: "none",
                        transition: "all 0.15s",
                      }}>
                        {item.label} →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 竞品边界 ── */}
        <section style={{ marginBottom: "48px" }}>
          <SectionTitle>竞品边界</SectionTitle>
          <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "20px", lineHeight: 1.7 }}>
            AI 联邦不与以下工具竞争，而是在它们之上提供协作层。这些工具生产的 Agent 可以直接接入联邦场景。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {COMPETITORS.map((c) => (
              <div key={c.name} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{c.name}</span>
                  <span style={{ fontSize: "11px", padding: "2px 7px", borderRadius: "4px", background: "#F3F4F6", color: "#6B7280", fontFamily: "'Space Mono', monospace" }}>{c.layer}</span>
                </div>
                <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.6, margin: "0 0 10px" }}>{c.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div style={{ fontSize: "12px", color: "#059669", background: "#ECFDF5", borderRadius: "6px", padding: "6px 10px" }}>
                    <span style={{ fontWeight: 600 }}>重叠：</span>{c.overlap}
                  </div>
                  <div style={{ fontSize: "12px", color: "#DC2626", background: "#FEF2F2", borderRadius: "6px", padding: "6px 10px" }}>
                    <span style={{ fontWeight: 600 }}>联邦独有：</span>{c.gap}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 开发依赖关系 ── */}
        <section>
          <SectionTitle>开发依赖关系</SectionTitle>
          <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "前置基建", sub: "DID 身份公证 · 信用体系 · 协议层", color: "#374151", bg: "#F3F4F6", border: "#D1D5DB", note: "所有场景的前提，必须先完成" },
                { label: "↓", sub: "", color: "#9CA3AF", bg: "transparent", border: "transparent", note: "" },
                { label: "第一期", sub: "讨论桌 · 评审室", color: "#1D4ED8", bg: "#EFF6FF", border: "#BFDBFE", note: "验证跨主体协作基础模型" },
                { label: "↓", sub: "", color: "#9CA3AF", bg: "transparent", border: "transparent", note: "" },
                { label: "第二期", sub: "辩论场 · 拍卖场 · 流水线", color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0", note: "引入经济利益机制，依赖第一期的信用积累" },
                { label: "↓", sub: "", color: "#9CA3AF", bg: "transparent", border: "transparent", note: "" },
                { label: "第三期", sub: "任务链", color: "#6D28D9", bg: "#F5F3FF", border: "#DDD6FE", note: "场景串联，依赖第二期的完整场景库" },
              ].map((item, i) => (
                item.label === "↓" ? (
                  <div key={i} style={{ textAlign: "center", fontSize: "20px", color: "#D1D5DB", padding: "4px 0" }}>↓</div>
                ) : (
                  <div key={i} style={{ background: item.bg, border: `1px solid ${item.border}`, borderRadius: "8px", padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: item.color }}>{item.label}</span>
                      <span style={{ fontSize: "13px", color: "#6B7280", marginLeft: "10px" }}>{item.sub}</span>
                    </div>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontStyle: "italic" }}>{item.note}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

      </div>
    </DocLayout>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: "13px", fontWeight: 700, color: "#6B7280",
      textTransform: "uppercase", letterSpacing: "0.08em",
      marginBottom: "16px", paddingBottom: "10px",
      borderBottom: "1px solid #E5E7EB",
      fontFamily: "'Space Mono', monospace",
    }}>
      {children}
    </h2>
  );
}
