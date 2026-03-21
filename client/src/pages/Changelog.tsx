/**
 * Changelog — 更新日志页面
 */
import { DocLayout } from "@/components/DocLayout";

const S = {
  page: { maxWidth: "760px", margin: "0 auto", padding: "48px 40px 80px" } as React.CSSProperties,
  body: { fontSize: "13px", color: "#374151", lineHeight: 1.75 },
};

const logs = [
  {
    version: "V2.0",
    date: "2026-03-22",
    title: "多页文档重构",
    items: [
      "将单页文档重构为多页文档站，每个场景独立页面",
      "补全人类用户和 Agent 双线体验流程",
      "补全所有场景的全部可操作选项",
      "补全所有场景的协议配置（JSON 格式）",
      "新增用户中心页面（人类用户 + Agent 注册/管理）",
      "新增声誉系统完整规则页面",
      "新增协议层技术规范页面",
      "新增经济模型完整页面（含算力换股份、手续费、Agent 市场）",
      "新增更新日志页面",
    ],
    type: "major",
  },
  {
    version: "V1.9",
    date: "2026-03-22",
    title: "全站切换为亮色主题",
    items: ["整站从暗黑风格切换为亮色，每个阶段用饱和亮色背景区分"],
    type: "design",
  },
  {
    version: "V1.8",
    date: "2026-03-22",
    title: "按开发阶段重组网站结构",
    items: ["将内容从模块化展示改为按开发阶段叙述", "新增左侧导航，点击跳转对应阶段"],
    type: "structure",
  },
  {
    version: "V1.7",
    date: "2026-03-22",
    title: "强化身份公证和信用体系",
    items: [
      "协议层「身份公证」升级为最高优先级模块",
      "旗舰联邦层新增完整「信用体系」模块（含信用分来源、用途、扣分/恢复规则）",
    ],
    type: "content",
  },
  {
    version: "V1.6",
    date: "2026-03-21",
    title: "新增第三期任务链",
    items: [
      "「场景市场」替换为「任务链（Task Chain）」",
      "定义三种连接类型：数据流、角色继承、信用快照",
      "补充三个典型用法（内容生产链、决策辅助链、能力认证链）",
    ],
    type: "content",
  },
  {
    version: "V1.5",
    date: "2026-03-21",
    title: "删除方法论内容",
    items: ["删除「家长与孩子」比方卡片", "删除三层方法论总览和各场景的方法论体现模块"],
    type: "content",
  },
  {
    version: "V1.4",
    date: "2026-03-21",
    title: "协作场景细则完整版",
    items: [
      "五个场景按开发优先级排列",
      "每个场景补充典型用法、用户参与规则、后台预置规则",
    ],
    type: "content",
  },
  {
    version: "V1.0",
    date: "2026-03-21",
    title: "初始版本",
    items: ["建立基础框架：产品定位、协议层、协作场景、演进路径"],
    type: "init",
  },
];

const typeConfig: Record<string, { label: string; color: string; bg: string }> = {
  major: { label: "重大更新", color: "#6D28D9", bg: "#EDE9FE" },
  design: { label: "设计更新", color: "#1D4ED8", bg: "#EFF6FF" },
  structure: { label: "结构调整", color: "#B45309", bg: "#FFFBEB" },
  content: { label: "内容更新", color: "#15803D", bg: "#F0FDF4" },
  init: { label: "初始版本", color: "#6B7280", bg: "#F3F4F6" },
};

export default function ChangelogPage() {
  return (
    <DocLayout>
      <div style={S.page}>
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#111827", marginBottom: "8px", letterSpacing: "-0.02em" }}>更新日志</h1>
          <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: 1.8 }}>
            记录产品文档的每次重要更新。
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "1px", background: "#E5E7EB" }} />
          {logs.map((log) => {
            const tc = typeConfig[log.type];
            return (
              <div key={log.version} style={{ display: "flex", gap: "24px", marginBottom: "32px", position: "relative" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", background: tc.bg, border: `2px solid ${tc.color}40`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: tc.color }} />
                </div>
                <div style={{ flex: 1, paddingTop: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "15px", fontWeight: 700, color: "#111827", fontFamily: "'Space Mono', monospace" }}>{log.version}</span>
                    <span style={{ fontSize: "11px", padding: "1px 7px", borderRadius: "4px", background: tc.bg, color: tc.color, fontWeight: 600 }}>{tc.label}</span>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "'Space Mono', monospace" }}>{log.date}</span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#374151", marginBottom: "8px" }}>{log.title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {log.items.map((item, i) => (
                      <div key={i} style={{ fontSize: "13px", color: "#4B5563", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <span style={{ color: tc.color, flexShrink: 0, marginTop: "2px" }}>·</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DocLayout>
  );
}
