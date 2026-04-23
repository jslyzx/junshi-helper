const MockData = {
    user: {
        name: "陈美琳",
        role: "项目专员",
        project: "基于抗体药物偶联物(ADC)的临床辅助研究",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi"
    },
    stats: {
        totalPatients: 84,
        monthlyEnrolled: 12,
        pendingFollowup: 5
    },
    messages: [
        { id: 101, type: "announcement", unread: true, title: "项目补丁说明 V2.4", desc: "请各位专员务必于本周五前完成 D10 随访数据的二次质控核对。", time: "10 分钟前", icon: "📢", color: "bg-blue" },
        { id: 102, type: "alert", unread: true, title: "随访即将逾期预警", desc: "患者【曹*云】的 D1 访视教育任务还有 2 小时截止，请尽快处理。", time: "1 小时前", icon: "⏰", color: "bg-rose" },
        { id: 103, type: "qc", unread: false, title: "数据质控已通过", desc: "您提交的患者【张*华】现场入组申请已通过审核，现已进入随访期。", time: "昨天 14:20", icon: "✅", color: "bg-green" },
        { id: 104, type: "system", unread: false, title: "系统停机维护公告", desc: "系统将于本周日凌晨 02:00-04:00 进行例行维护，届时将无法登录。", time: "2024-04-18", icon: "⚙️", color: "bg-purple" }
    ],
    projectFile: {
        info: {
            fullName: "基于抗体药物偶联物(ADC)在晚期实体瘤患者中的临床辅助研究",
            code: "JS-ADC-001-V2",
            sponsor: "君实生物科技责任有限公司",
            stage: "临床 III 期"
        },
        sop: [
            { category: "入组标准", items: ["年龄 18-75 周岁", "ECOG 评分 0-1 分", "经组织学或细胞学证实的晚期实体瘤", "至少有一个可测量病灶"] },
            { category: "访视周期", timeline: ["D1: 首次给药/教育", "D7: 安全性访视 (血常规/生化)", "D14: 安全性访视", "D21: 疗效评估 (CT/MRI)"] }
        ],
        contacts: [
            { name: "李老师", role: "项目经理 (PM)", phone: "138-0000-0001" },
            { name: "张经理", role: "监查员 (CRA)", phone: "139-1111-2222" }
        ]
    },
    todoList: [
        { id: 1, type: "现场入组", patient: "张*华", priority: "high", desc: "需核对知情同意书签字", time: "10:30" },
        { id: 2, type: "周期提醒", patient: "李*明", priority: "med", desc: "D21 访视提醒（短信已发）", time: "14:00" },
        { id: 3, type: "异常回流", patient: "陈*生", priority: "high", desc: "AE 回流：皮疹数据漏填", time: "15:30" },
        { id: 4, type: "失访召回", patient: "张*兰", priority: "low", desc: "失访召回：第二次电话联系", time: "明天" },
        { id: 5, type: "首周期教育", patient: "曹*云", priority: "high", desc: "ADC 药物输注后教育", time: "剩余 2小时" },
        { id: 6, type: "标准随访", patient: "刘*财", priority: "med", desc: "D14 实验室检查检查单核对", time: "已逾期 1天" }
    ],
    // 患者列表数据
    patients: [
        { id: 101, name: "沈传浩", age: 52, status: "随访中", statusTag: "success", phone: "152****4701", enrollDate: "2024-03-15", disease: "NSCLC", cycle: "C3D1" },
        { id: 102, name: "张英杰", age: 45, status: "待入组", statusTag: "warning", phone: "138****3344", enrollDate: "-", disease: "实体瘤", cycle: "-" },
        { id: 103, name: "王丽华", age: 61, status: "已结项", statusTag: "muted", phone: "135****7766", enrollDate: "2024-02-10", disease: "尿路上皮癌", cycle: "Done" },
        { id: 104, name: "曹静云", age: 48, status: "AE 回流", statusTag: "danger", phone: "173****0000", enrollDate: "2024-04-01", disease: "NSCLC", cycle: "C1D1" },
        { id: 105, name: "刘建国", age: 55, status: "标准随访", statusTag: "info", phone: "139****2233", enrollDate: "2023-11-20", disease: "晚期胃癌", cycle: "C8D14" }
    ],
    // 患者全景时间轴
    timeline: [
        { date: '2024-03-01', title: '初诊入库', content: '门诊部初步诊断并转入项目组筛选。', type: 'milestone' },
        { date: '2024-03-05', title: '签署知情同意书', content: '由专员陈美琳协助完成纸质签署并扫码入组。', type: 'check' },
        { date: '2024-03-15', title: '正式入组', content: '符合入排标准，触发首次给药教育。', type: 'success' },
        { date: '2024-04-10', title: '给药周期 1', content: '完成首轮 ADC 药物输注，进行出院前教育。', type: 'info' },
        { id: 3, date: '2024-04-18', title: '发生 AE (皮疹)', content: '患者自述局部瘙痒，专员已提交异常回流。', type: 'danger' }
    ]
};

const App = {
    init: function() {
        console.log("Helper Portal Initialized");
    },

    navigateTo: function(url) {
        window.location.href = url;
    },

    getUser: function() {
        return MockData.user;
    },

    getStats: function() {
        return MockData.stats;
    },

    getMessages: function() {
        return MockData.messages;
    },

    getUnreadCount: function() {
        return MockData.messages.filter(m => m.unread).length;
    },

    getProjectData: function() {
        return MockData.projectFile;
    },

    getTodos: function() {
        return MockData.todoList;
    },

    logout: function() {
        alert("已退出登录");
        // window.location.href = 'login.html';
    },

    // 专员端收藏
    getHelperFavorites: function() {
        const data = localStorage.getItem('helper_favorites');
        return data ? JSON.parse(data) : [];
    },

    saveHelperFavorites: function(favs) {
        localStorage.setItem('helper_favorites', JSON.stringify(favs));
    },

    toggleHelperFavorite: function(articleId) {
        let favs = this.getHelperFavorites();
        const idx = favs.indexOf(articleId);
        if (idx > -1) {
            favs.splice(idx, 1);
        } else {
            favs.push(articleId);
        }
        this.saveHelperFavorites(favs);
        return idx === -1; // 返回是否为新增收藏
    },

    isHelperFavorited: function(articleId) {
        return this.getHelperFavorites().includes(articleId);
    },

    getHelperArticle: function(id) {
        return MockData.helperEducation.find(a => a.id === id);
    },

    getPatients: function() {
        return MockData.patients;
    },

    getPatientDetail: function(id) {
        return MockData.patients.find(p => p.id == id);
    },

    getTimeline: function() {
        return MockData.timeline;
    }
};

// 专员端教育内容数据
MockData.helperEducation = [
    // 疾病基础知识
    { id: 101, category: '疾病基础', title: '非小细胞肺癌 (NSCLC) 概览与分期', summary: '了解 NSCLC 的病理分型、TNM 分期标准及治疗策略选择依据。', readCount: 2340, date: '2024-04-10' },
    { id: 102, category: '疾病基础', title: '尿路上皮癌的诊断与治疗进展', summary: '掌握尿路上皮癌的流行病学、诊断指标及一线/二线治疗方案。', readCount: 1820, date: '2024-04-05' },
    // 产品知识
    { id: 201, category: '产品知识', title: 'ADC 药物作用机制及适应症全景', summary: '靶向 ADC 如何实现"生物导弹"精准打击，覆盖已获批适应症详解。', readCount: 4100, date: '2024-04-12' },
    { id: 202, category: '产品知识', title: '给药方案与治疗节点操作手册', summary: '标准 21 天周期给药流程、剂量调整原则与关键访视时间线。', readCount: 3560, date: '2024-04-08' },
    // 合规要求
    { id: 301, category: '合规要求', title: '患者隐私保护与数据合规操作指南', summary: '《个人信息保护法》在临床场景中的实施要点与红线提示。', readCount: 1950, date: '2024-03-28' },
    { id: 302, category: '合规要求', title: '知情同意流程规范与常见违规案例', summary: 'ICF 签署的标准流程、注意事项，及历年稽查中常见的违规情形。', readCount: 2780, date: '2024-03-25' },
    // AE/PV流程
    { id: 401, category: 'AE/PV流程', title: 'AE 识别、记录与分级标准 (CTCAE)', summary: '不良事件的发现、CTCAE v5.0 分级评判、CRF 记录规范。', readCount: 3200, date: '2024-04-01' },
    { id: 402, category: 'AE/PV流程', title: 'SAE 升级上报全流程与时限要求', summary: '严重不良事件的 24 小时内报告流程、申办方与伦理委员会报告模板。', readCount: 2900, date: '2024-03-30' },
    // 沟通技巧
    { id: 501, category: '沟通技巧', title: '患者焦虑情绪的识别与安抚策略', summary: '治疗不同阶段常见的心理变化，以及非医学干预的沟通话术。', readCount: 1680, date: '2024-04-15' },
    { id: 502, category: '沟通技巧', title: '失访召回的沟通技巧与话术模板', summary: '应对拒绝、犹豫、联系不上等场景的标准话术和升级策略。', readCount: 2150, date: '2024-04-09' },
    // 系统操作
    { id: 601, category: '系统操作', title: '患者建档与任务分配操作指南', summary: '从扫码入组到建档完成的全流程系统操作演示。', readCount: 1420, date: '2024-04-18' },
    { id: 602, category: '系统操作', title: '随访记录填报与数据归档操作手册', summary: '标准随访、异常回流、失访召回等各类任务的系统操作详解。', readCount: 1350, date: '2024-04-16' }
];

window.onload = () => App.init();
