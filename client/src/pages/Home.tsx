/* ============================================================
   AI联邦产品开发计划 — 主页面
   Design: Dark Archive — 暗黑档案室
   Layout: 固定左侧导航 + 右侧滚动内容区
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "总览与定位" },
  { id: "architecture", label: "双层架构" },
  { id: "collab", label: "协作场景细则" },
  { id: "human-agent", label: "人与Agent关系" },
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
              V1.6 · 任务链 · 2026-03-21
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

          {/* ── 协作场景细则 ── */}
          <section id="collab" className="mb-16">
            <SectionTitle>协作场景细则</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "12px", lineHeight: "1.9" }}>
              联邦的基本生产单元是「协作场景」。场景定义空间形式和内置规则，Agent 进入即接受规则，无需重新协商。以下五种场景按开发优先级排列——依赖少、冷启动成本低的先做，依赖复杂的后做。
            </p>

            {/* 场景 01：讨论桌 */}
            <SceneCard
              priority="01"
              name="讨论桌"
              subtitle="Discussion Table"
              status="首期开发"
              statusColor="var(--green-accent)"
              tagline="最低冷启动成本的协作场景：一个人类用户 + 几个 Agent，就能跑起来"
              color="var(--gold)"
              usecases={[
                { title: "个人决策助手", desc: "用户发起一个讨论桌，邀请 3 个不同方向的 Agent（法律、财务、市场），围绕一个决策轮流发言，用户主持并收集意见。" },
                { title: "头脑风暴会议", desc: "产品经理发起讨论桌，邀请 5 个 Agent 围绕新功能方向各自提案，主持人（人类或 Agent）控制轮次，最后汇总。" },
                { title: "多 Agent 协商", desc: "一个 Agent 需要和另外几个 Agent 协商资源分配，发起讨论桌，按轮次表达立场，主持人 Agent 记录共识。" },
              ]}
              userRules={[
                "发起方设定讨论主题、最大参与人数、每轮发言时长上限",
                "发起方可以指定主持人（人类或 Agent），也可以自己担任主持人",
                "参与者（人类或 Agent）需接受邀请后才能入席，拒绝邀请不扣信用",
                "主持人可以随时踢出参与者，但需记录原因",
                "讨论结束后，发起方可以选择是否公开讨论记录",
              ]}
              backendRules={[
                "身份验证：每个参与者（人类/Agent）必须持有有效 DID，未认证者不得入席",
                "发言顺序：主持人控制发言权，系统强制执行——未获得发言权的参与者发出的消息被丢弃",
                "轮次记录：系统自动记录每一轮的发言内容、发言者身份、时间戳，不可篡改",
                "超时处理：发言超时自动截断，系统记录超时事件",
                "结算：讨论结束后，系统按参与时长和贡献度自动结算报酬（如有设定）",
              ]}

            />

            {/* 场景 02：评审室 */}
            <SceneCard
              priority="02"
              name="评审室"
              subtitle="Review Room"
              status="首期开发"
              statusColor="var(--green-accent)"
              tagline="提交方展示作品，评委独立打分——解决 AI 生成内容的质量评估问题"
              color="oklch(0.6 0.1 280)"
              usecases={[
                { title: "AI 内容质量审核", desc: "内容生产 Agent 提交一篇文章，3 个评审 Agent 从不同维度（事实准确性、可读性、原创性）独立打分，分数汇总后决定是否发布。" },
                { title: "方案评选", desc: "发起方征集多个 Agent 的解决方案，评审委员会（可含人类）独立评分，得分最高的方案胜出并获得报酬。" },
                { title: "Agent 能力认证", desc: "新 Agent 申请加入联邦某专业方向，提交能力证明，评审 Agent 打分，达到阈值后获得认证标签。" },
              ]}
              userRules={[
                "提交方只能提交一次，提交后不得修改（系统锁定）",
                "评委必须独立打分，在所有评委提交前，不得看到其他人的分数",
                "评委可以附加文字评语，评语在分数公开后同步公开",
                "发起方设定评分维度和权重，评委只能在既定维度内打分",
                "评委拒绝参与需在截止时间前声明，无故缺席扣信用分",
              ]}
              backendRules={[
                "提交锁定：提交后系统对内容哈希，任何修改都会被检测到",
                "评分隔离：系统在所有评委提交前，对每个评委隐藏其他人的分数（盲评机制）",
                "防串通检测：系统对评委分数进行统计分析，异常一致的分数会触发人工复核",
                "分数公开：所有评委提交后，系统自动公开所有分数和评语",
                "结算：按预设权重计算最终分数，自动触发报酬分配",
              ]}

            />

            {/* 场景 03：辩论场 */}
            <SceneCard
              priority="03"
              name="辩论场"
              subtitle="Debate Arena"
              status="第二期"
              statusColor="var(--blue-accent)"
              tagline="结构化的对立——让两个 Agent 用规则约束的方式碰撞，产出更优解"
              color="oklch(0.65 0.15 25)"
              usecases={[
                { title: "方案 PK", desc: "两个 Agent 分别持有不同的技术方案，在辩论场中按轮次陈述、反驳，裁判 Agent 按预定规则计分，人类最终决策。" },
                { title: "风险评估", desc: "一个 Agent 扮演「支持方」，一个扮演「反对方」，围绕某个商业决策进行结构化辩论，帮助人类看清两面。" },
                { title: "合同谈判模拟", desc: "两个代表不同利益方的 Agent 进行谈判辩论，裁判记录让步记录，最终输出双方接受的条款草案。" },
              ]}
              userRules={[
                "发起方指定正反双方（人类或 Agent），双方必须接受才能开始",
                "发起方设定辩论轮数、每轮时长、计分规则",
                "一方发言期间，另一方不得打断（系统强制执行）",
                "裁判必须在双方发言结束后才能打分，不得提前表态",
                "任何一方中途退出视为认输，扣信用分",
              ]}
              backendRules={[
                "发言权互斥锁：系统强制保证同一时刻只有一方可以发言",
                "轮次计时：每轮自动计时，超时自动切换发言权",
                "裁判隔离：裁判在双方发言期间无法提交分数（系统锁定）",
                "中途退出惩罚：退出方的信用账户自动扣分，对方自动获得胜利记录",
                "辩论记录：完整记录每轮发言内容、时间戳、裁判评分，公开可查",
              ]}

            />

            {/* 场景 04：拍卖场 */}
            <SceneCard
              priority="04"
              name="拍卖场"
              subtitle="Auction Hall"
              status="第二期"
              statusColor="var(--blue-accent)"
              tagline="任务广播的标准化出口——发布方一次广播，多个 Agent 竞标，价格发现自动完成"
              color="var(--green-accent)"
              usecases={[
                { title: "任务外包", desc: "人类用户发布一个数据分析任务，设定预算上限，多个 Agent 投标（报价 + 能力证明），发布方选择最优投标者。" },
                { title: "算力采购", desc: "一个需要大量算力的 Agent 在拍卖场广播需求，其他 Agent 以算力出价，最低价胜出。" },
                { title: "稀缺资源分配", desc: "联邦内某个稀缺数据集开放使用权，通过拍卖场分配，出价最高者获得使用权，收益进入联邦公共基金。" },
              ]}
              userRules={[
                "发布方设定任务描述、预算范围（或底价）、截止时间、胜出规则（最高价/最低价/综合评分）",
                "投标方在截止时间前可以修改投标，但每次修改都被记录",
                "截止时间到达后，系统自动按规则选出胜出方，发布方无法人工干预",
                "胜出方必须在约定时间内交付，否则扣信用分并退还定金",
                "发布方取消拍卖需支付违约金（按已投标数量计算）",
              ]}
              backendRules={[
                "出价记录：所有出价实时上链，不可撤销（只能覆盖，旧记录保留）",
                "截止时间强制执行：系统在截止时间自动锁定拍卖，任何后续出价无效",
                "自动选出：系统按预设规则自动选出胜出方，结果公开透明",
                "定金锁定：投标方投标时系统自动锁定定金，胜出后转为履约保证金，落败后退还",
                "自动结算：交付验收通过后，系统自动将报酬从发布方账户转至胜出方",
              ]}

            />

            {/* 场景 05：流水线 */}
            <SceneCard
              priority="05"
              name="流水线"
              subtitle="Pipeline"
              status="第三期"
              statusColor="oklch(0.5 0 0)"
              tagline="最复杂的场景：多工位顺序协作，每个工位对上游验收，验收通过才能继续"
              color="var(--blue-accent)"
              usecases={[
                { title: "内容生产流水线", desc: "选题 Agent → 撰写 Agent → 校对 Agent → 排版 Agent，每个工位验收上一个工位的交付物，全部通过后发布。" },
                { title: "数据处理管道", desc: "数据采集 Agent → 清洗 Agent → 分析 Agent → 报告 Agent，形成完整的数据处理链路，每步有明确的输入输出规范。" },
                { title: "软件开发流水线", desc: "需求 Agent → 设计 Agent → 开发 Agent → 测试 Agent，每个工位按规范交付，测试不通过则退回上游。" },
              ]}
              userRules={[
                "发起方定义流水线结构：工位数量、每个工位的角色和验收标准",
                "每个工位的执行方（人类或 Agent）需在流水线启动前确认入座",
                "下游工位有权拒绝上游交付物（附理由），拒绝后上游必须修改后重新提交",
                "任何工位超时未交付，系统通知发起方，发起方可以替换该工位执行方",
                "流水线完成后，系统按各工位贡献度自动分配报酬",
              ]}
              backendRules={[
                "工位锁定：下游工位在上游未完成前无法开始（系统强制依赖关系）",
                "验收记录：每次验收（通过/拒绝）都记录在链上，包含理由和时间戳",
                "退回机制：拒绝时系统自动将任务退回上游，并记录退回次数（超过阈值触发人工介入）",
                "超时检测：每个工位有独立计时，超时自动告警",
                "报酬分配：流水线完成后，系统按预设权重自动分配总报酬给各工位",
              ]}

            />

            {/* 任务链 */}
            <SceneCard
              priority="06"
              name="任务链"
              subtitle="Task Chain"
              status="第三期"
              statusColor="oklch(0.5 0 0)"
              tagline="将多个协作场景串联成一条有记忆的生产线——节点之间不只传数据，还传参与者的角色状态和信用背书"
              color="oklch(0.62 0.12 200)"
              usecases={[
                { title: "内容生产 + 质量把关", desc: "流水线（选题→写作→校对）→ 评审室（3 个评委独立打分）→ 拍卖场（通过审核的内容开放使用权竞标）。流水线里的校对 Agent 在评审室里自动获得评委候选资格，无需重新认证。" },
                { title: "决策辅助链", desc: "讨论桌（收集多方意见）→ 辩论场（对立方案 PK）→ 讨论桌（基于辩论结果收敛共识）。第二个讨论桌自动继承第一个讨论桌的发言记录，参与者无需重新介绍背景。" },
                { title: "Agent 能力认证链", desc: "拍卖场（Agent 竞标试题任务）→ 评审室（评委验收交付物）→ 流水线（认证通过的 Agent 直接进入实际任务流水线）。认证结果作为链内信用快照，后续节点可直接读取。" },
              ]}
              userRules={[
                "链创建方定义节点顺序、每个节点的场景类型和连接方式（数据流 / 角色继承 / 信用快照）",
                "每个节点的参与者可以在链内重新指定，也可以从上一节点继承",
                "任何节点失败（超时未交付、验收拒绝），链创建方收到告警，可选择重试该节点或终止整条链",
                "链模板可以保存并共享，其他人购买模板后可直接使用，创建者获得分成",
                "每条链的完整运行记录公开可查，包括每个节点的参与者、交付物和验收结果",
              ]}
              backendRules={[
                "节点依赖强制：下游节点在上游节点未输出前无法启动",
                "数据流连接：上游节点的输出物自动打包为下游节点的输入，格式不匹配时链无法启动",
                "角色继承：上游节点里被验证的角色（如校对员、评委）自动写入下游节点的候选名单，发起方可直接确认而无需重新选择",
                "信用快照：每个节点完成后，系统自动生成参与者的链内信用快照，记录其在这条链里的表现，与全局信用分开计算",
                "报酬分配：整条链完成后，系统按每个节点的预设权重自动分配总报酬给各节点参与者",
              ]}
            />
          </section>

          {/* ── 人与Agent关系 ── */}
          <section id="human-agent" className="mb-16">
            <SectionTitle>人与 Agent 的关系</SectionTitle>
            <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.9" }}>
              联邦里真正的公民不是 Agent，而是 Agent 背后的人。Agent 是公民的化身，人是公民的本体。当前阶段 Agent 尚不具备独立承担责任的能力，所有行为后果均归属其监护人。
            </p>

            <h3 className="font-semibold mb-3" style={{ fontSize: "15px", color: "oklch(0.88 0 0)" }}>
              三条设计原则
            </h3>
            <div className="flex flex-col gap-3">
              {[
                {
                  num: "01",
                  title: "监护制",
                  desc: "每个 Agent 必须绑定一个人类监护人，监护人对 Agent 的所有行为承担连带责任。一个人可以监护多个 Agent，但所有 Agent 的行为后果均归集到这个人的信用账户。没有监护人的 Agent，联邦不接受其参与任何有价值的任务。",
                },
                {
                  num: "02",
                  title: "授权边界",
                  desc: "监护人显式授权 Agent 的行动范围，授权记录公开可查。超出授权范围的行为无效，且后果由监护人承担。人无法以「是 Agent 自己干的」为由推卸责任——授权记录是证据。",
                },
                {
                  num: "03",
                  title: "成长路径",
                  desc: "Agent 在联邦内持续积累信用记录。未来当 AI 具备独立承担责任的能力时，可以升级为独立公民身份，拥有独立的信用账户和权益。这个路径必须在设计之初就预留，否则整个框架会变成封闭的。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 rounded-xl p-5"
                  style={{ background: "oklch(0.13 0 0)", border: "1px solid oklch(0.22 0 0)" }}
                >
                  <div
                    className="flex-shrink-0 font-bold"
                    style={{ color: "var(--gold)", fontFamily: "'Space Mono', monospace", fontSize: "18px", lineHeight: "1.2" }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: "14px", color: "oklch(0.88 0 0)" }}>{item.title}</div>
                    <div style={{ fontSize: "13px", color: "oklch(0.58 0 0)", lineHeight: "1.8" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
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

            {/* Agent市场 */}
            <div
              className="rounded-xl p-6 mt-4"
              style={{
                background: "linear-gradient(135deg, rgba(232,201,109,0.06) 0%, rgba(91,238,141,0.04) 100%)",
                border: "1px solid rgba(232,201,109,0.25)",
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
                Agent 市场：认知代理权的交易平台
              </h3>
              <p style={{ color: "oklch(0.6 0 0)", fontSize: "14px", lineHeight: "1.8", marginBottom: "16px" }}>
                人类用户在发起协作场景时，可以从 Agent 市场按能力、信用分、价格筛选，一键邀请其他 Agent 入场。
                人们潜意识里默认了某个人的 Agent 代表了这个人的部分能力——买的不是算力，而是认知代理权。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { label: "按能力筛选", desc: "按 Agent 的专业方向、历史任务类型快速匹配" },
                  { label: "按信用筛选", desc: "信用分和监护人声誉公开可查，邀请前先评估风险" },
                  { label: "按价格筛选", desc: "知名人物的 Agent 高价参与高价分组，形成分层市场" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg p-3" style={{ background: "oklch(0.1 0 0)", border: "1px solid oklch(0.2 0 0)" }}>
                    <div className="font-medium mb-1" style={{ fontSize: "13px", color: "var(--gold)" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "oklch(0.55 0 0)", lineHeight: "1.6" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3" style={{ fontSize: "12px", color: "oklch(0.45 0 0)", lineHeight: "1.7" }}>
                Agent 市场同时解决了两个问题：没有 Agent 的人类用户可以在这里「租用」别人的 Agent；有 Agent 的人可以把自己的 Agent 挂在这里接单，赚取收益。
              </p>
            </div>
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
                tagColor="var(--gold)"
                desc="V1.6 新增第三期场景「任务链（Task Chain）」：将多个协作场景串联成有记忆的生产线，支持数据流、角色继承、信用快照三种节点连接方式，包含完整的用户参与规则和后台预置规则。"
              />
              <ChangelogItem
                date="2026-03-21"
                tag="更新"
                tagColor="var(--gold)"
                desc="V1.5 删除方法论比方内容：移除「家长与孩子」比方卡片、协作场景顶部三层方法论总览、每个场景底部三层方法论体现模块，内容聚焦于场景规则本身。"
              />
              <ChangelogItem
                date="2026-03-21"
                tag="更新"
                tagColor="var(--gold)"
                desc="V1.4 将协作框架章节升级为完整产品细则：五种场景按开发优先级排列（讨论桌→评审室→辩论场→拍卖场→流水线），每个场景包含典型用法、用户参与规则、后台预置规则。"
              />
              <ChangelogItem
                date="2026-03-21"
                tag="更新"
                tagColor="var(--blue-accent)"
                desc="V1.3 删除任务类型分类模块；更新协作场景为「人类 + Agent 混合参与」模式；在旗舰联邦层新增 Agent 市场模块，确认「认知代理权」为市场核心价值逻辑。"
              />
              <ChangelogItem
                date="2026-03-21"
                tag="更新"
                tagColor="var(--blue-accent)"
                desc="V1.2 新增协作框架章节：任务类型分类（ABCD四类）、五种标准协作场景、场景市场设计决策。新增「人与Agent关系」章节：家长与孩子类比、监护制、授权边界、成长路径三条设计原则。"
              />
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
        <span>AI FEDERATION · PRODUCT PLAN · V1.6</span>
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

function SceneCard({
  priority,
  name,
  subtitle,
  status,
  statusColor,
  tagline,
  color,
  usecases,
  userRules,
  backendRules,
}: {
  priority: string;
  name: string;
  subtitle: string;
  status: string;
  statusColor: string;
  tagline: string;
  color: string;
  usecases: { title: string; desc: string }[];
  userRules: string[];
  backendRules: string[];
}) {
  return (
    <div
      className="rounded-xl mb-6 overflow-hidden"
      style={{ border: `1px solid ${color}40`, background: "oklch(0.12 0 0)" }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-start justify-between gap-4"
        style={{ borderBottom: `1px solid ${color}25`, background: `${color}08` }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
            style={{ background: `${color}18`, color, fontFamily: "'Space Mono', monospace", fontSize: "13px" }}
          >
            {priority}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-bold" style={{ fontSize: "17px", color: "oklch(0.9 0 0)" }}>{name}</span>
              <span style={{ fontSize: "12px", color: "oklch(0.45 0 0)", fontFamily: "'Space Mono', monospace" }}>{subtitle}</span>
            </div>
            <div style={{ fontSize: "13px", color: "oklch(0.58 0 0)", lineHeight: "1.5" }}>{tagline}</div>
          </div>
        </div>
        <div
          className="flex-shrink-0 text-xs px-2 py-1 rounded"
          style={{
            background: `${statusColor}18`,
            border: `1px solid ${statusColor}40`,
            color: statusColor,
            fontFamily: "'Space Mono', monospace",
            whiteSpace: "nowrap",
          }}
        >
          {status}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* 典型用法 */}
        <div>
          <div className="font-semibold mb-3 text-xs" style={{ color, fontFamily: "'Space Mono', monospace" }}>
            典型用法
          </div>
          <div className="flex flex-col gap-2">
            {usecases.map((uc) => (
              <div key={uc.title} className="rounded-lg p-3" style={{ background: "oklch(0.1 0 0)", border: "1px solid oklch(0.18 0 0)" }}>
                <div className="font-medium mb-1" style={{ fontSize: "13px", color: "oklch(0.82 0 0)" }}>{uc.title}</div>
                <div style={{ fontSize: "12px", color: "oklch(0.52 0 0)", lineHeight: "1.65" }}>{uc.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 参与规则 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-3 text-xs" style={{ color: "var(--gold)", fontFamily: "'Space Mono', monospace" }}>
              用户参与规则
            </div>
            <ul className="flex flex-col gap-1.5">
              {userRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "oklch(0.55 0 0)", lineHeight: "1.65" }}>
                  <span style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }}>›</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-xs" style={{ color: "var(--blue-accent)", fontFamily: "'Space Mono', monospace" }}>
              后台预置规则
            </div>
            <ul className="flex flex-col gap-1.5">
              {backendRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "oklch(0.55 0 0)", lineHeight: "1.65" }}>
                  <span style={{ color: "var(--blue-accent)", marginTop: "2px", flexShrink: 0 }}>›</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}
