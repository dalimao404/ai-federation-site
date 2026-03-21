/**
 * DocLayout — 多页文档站共用布局
 * 设计风格：亮色文档站，左侧折叠导航，右侧内容区
 * 配色：白色主背景，深灰文字，每期用主色强调
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  {
    label: "产品总览",
    path: "/",
    color: "#1A1A1A",
    children: [],
  },
  {
    label: "基础设施",
    path: null,
    color: "#374151",
    children: [
      { label: "用户中心", path: "/infra/users", desc: "注册·身份·验证" },
      { label: "声誉系统", path: "/infra/reputation", desc: "信用分·规则·公示" },
      { label: "协议层", path: "/infra/protocol", desc: "DID·通信·支付协议" },
    ],
  },
  {
    label: "第一期",
    path: null,
    color: "#1D4ED8",
    badge: "开发中",
    children: [
      { label: "讨论桌", path: "/phase1/discussion", desc: "多方协商场景" },
      { label: "评审室", path: "/phase1/review", desc: "独立评审场景" },
    ],
  },
  {
    label: "第二期",
    path: null,
    color: "#15803D",
    badge: "规划中",
    children: [
      { label: "辩论场", path: "/phase2/debate", desc: "对立方案PK" },
      { label: "拍卖场", path: "/phase2/auction", desc: "能力竞标场景" },
      { label: "流水线", path: "/phase2/pipeline", desc: "分工协作场景" },
    ],
  },
  {
    label: "第三期",
    path: null,
    color: "#6D28D9",
    badge: "概念阶段",
    children: [
      { label: "任务链", path: "/phase3/taskchain", desc: "场景串联·有记忆的工作流" },
    ],
  },
  {
    label: "经济模型",
    path: "/economy",
    color: "#B45309",
    children: [],
  },
  {
    label: "更新日志",
    path: "/changelog",
    color: "#6B7280",
    children: [],
  },
];

export function DocLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setCollapsed((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (path: string | null) => path && location === path;
  const isGroupActive = (children: { path: string }[]) =>
    children.some((c) => location === c.path);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#F8F9FA", fontFamily: "'Noto Sans SC', sans-serif" }}>
      {/* ── Top Header ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#111827",
          borderBottom: "1px solid #374151",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "52px",
        }}
      >
        <Link href="/">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <div
              style={{
                width: "28px", height: "28px", borderRadius: "6px",
                background: "linear-gradient(135deg, #E8C96D, #F59E0B)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 700, color: "#111",
                fontFamily: "'Space Mono', monospace",
              }}
            >AF</div>
            <span style={{ color: "#F9FAFB", fontWeight: 600, fontSize: "14px", letterSpacing: "0.02em" }}>
              AI 联邦 · 产品开发文档
            </span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <span style={{ color: "#9CA3AF", fontSize: "12px", fontFamily: "'Space Mono', monospace" }}>V2.0</span>
          <span style={{ color: "#6B7280", fontSize: "12px" }}>持续更新中</span>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* ── Left Sidebar ── */}
        <aside
          style={{
            width: "240px",
            flexShrink: 0,
            background: "#FFFFFF",
            borderRight: "1px solid #E5E7EB",
            position: "sticky",
            top: "52px",
            height: "calc(100vh - 52px)",
            overflowY: "auto",
            padding: "16px 0",
          }}
        >
          {NAV_ITEMS.map((group) => {
            if (group.children.length === 0 && group.path) {
              // 直接链接
              return (
                <Link key={group.path} href={group.path}>
                  <div
                    style={{
                      display: "flex", alignItems: "center", gap: "8px",
                      padding: "8px 20px",
                      cursor: "pointer",
                      background: isActive(group.path) ? "#F0F4FF" : "transparent",
                      borderLeft: isActive(group.path) ? `3px solid ${group.color}` : "3px solid transparent",
                      color: isActive(group.path) ? group.color : "#374151",
                      fontSize: "13px", fontWeight: isActive(group.path) ? 600 : 400,
                      transition: "all 0.15s",
                    }}
                  >
                    {group.label}
                  </div>
                </Link>
              );
            }

            // 折叠组
            const isOpen = collapsed[group.label] !== false && (collapsed[group.label] === true || isGroupActive(group.children as { path: string }[]));
            const groupActive = isGroupActive(group.children as { path: string }[]);

            return (
              <div key={group.label}>
                <div
                  onClick={() => toggle(group.label)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 20px",
                    cursor: "pointer",
                    color: groupActive ? group.color : "#6B7280",
                    fontSize: "11px", fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {group.label}
                    {group.badge && (
                      <span style={{
                        fontSize: "9px", padding: "1px 5px", borderRadius: "3px",
                        background: group.color + "18", color: group.color, fontWeight: 600,
                      }}>{group.badge}</span>
                    )}
                  </span>
                  <span style={{ fontSize: "10px", color: "#9CA3AF", transition: "transform 0.2s", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
                </div>
                {isOpen && (
                  <div>
                    {group.children.map((child) => (
                      <Link key={child.path} href={child.path}>
                        <div
                          style={{
                            padding: "6px 20px 6px 32px",
                            cursor: "pointer",
                            background: isActive(child.path) ? group.color + "12" : "transparent",
                            borderLeft: isActive(child.path) ? `3px solid ${group.color}` : "3px solid transparent",
                            transition: "all 0.15s",
                          }}
                        >
                          <div style={{ fontSize: "13px", color: isActive(child.path) ? group.color : "#374151", fontWeight: isActive(child.path) ? 600 : 400 }}>
                            {child.label}
                          </div>
                          <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "1px" }}>{child.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        {/* ── Main Content ── */}
        <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
          {children}
        </main>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#111827",
          borderTop: "1px solid #374151",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        <span style={{ color: "#E8C96D", fontFamily: "'Space Mono', monospace" }}>AI FEDERATION · PRODUCT DOCS · V2.0</span>
        <span style={{ color: "#6B7280" }}>持续更新中 · 每次对话后同步</span>
      </footer>
    </div>
  );
}
